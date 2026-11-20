import { site } from '@config'

import { env } from '@/lib/env'
import { getCategories, getChildCategories, getHubs, getQuizzes, hydrateQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

// 静态导出：build 期固化成 /llms.txt 静态文件。
export const dynamic = 'force-static'

/**
 * 面向 LLM / AI 搜索的站点摘要（英文）。
 * 每个链接附一句描述,便于答案引擎快速判断相关性;完整语料见 /llms-full.txt。
 */
export async function GET() {
  const hubs = getHubs()
  const liveCategories = getCategories().filter((category) => !category.draft)
  const quizzes = await hydrateQuizzes(getQuizzes())

  /*
   * 分类清单原先是一张拍平的表：8 个 Hub 与 58 个 niche 按 order 混在一起，
   * 答案引擎读不出「Career Coaching 属于 Career, Business & Leadership」这层
   * 父子关系,只能当成 66 个并列主题。改成 Hub 标题 + 缩进 niche 的两层结构,
   * 站点的信息架构第一次在 llms.txt 里是显式的——这正是 GEO 场景下引擎用来
   * 判断「该引用支柱页还是具体 niche 页」的依据。
   * 没有归到任何 Hub 的上线分类（理论上不该有）兜底收在末尾,不会被丢掉。
   */
  const listed = new Set<string>()
  const categoryLines: string[] = []
  for (const hub of hubs) {
    listed.add(hub.slug)
    categoryLines.push('', `### ${hub.name} — ${absoluteUrl(`/c/${hub.slug}`)}`, `${hub.description}`)
    const children = getChildCategories(hub.slug)
    for (const child of children) {
      listed.add(child.slug)
      categoryLines.push(`- [${child.name}](${absoluteUrl(`/c/${child.slug}`)}): ${child.description}`)
    }
  }
  const orphans = liveCategories.filter((category) => !listed.has(category.slug))
  if (orphans.length) {
    categoryLines.push('', '### Other')
    for (const category of orphans) {
      categoryLines.push(`- [${category.name}](${absoluteUrl(`/c/${category.slug}`)}): ${category.description}`)
    }
  }

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Full content for AI ingestion: ${absoluteUrl('/llms-full.txt')}`,
    '',
    // 规模概览：引擎一眼看出这站有多大、覆盖多少主题,不必数完整份清单
    `${quizzes.length} free quizzes across ${liveCategories.length} coaching topics, grouped under ${hubs.length} areas. All free, no signup required to start.`,
    '',
    '## Categories',
    ...categoryLines,
    '',
    '## Quizzes',
    ...quizzes.map((quiz) => {
      const desc = quiz.description ? ` — ${quiz.description}` : ''
      return `- [${quiz.title}](${absoluteUrl(quiz.href)})${desc}`
    }),
    '',
    '## For coaches',
    `- [${site.cta.footerLink}](${env.signupUrl})`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
