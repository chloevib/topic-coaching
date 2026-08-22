import { site } from '@config'

import { getCategories, getCategory } from '@/lib/content'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType
/*
 * OG 图的替代文本。文件约定的 alt 必须是静态导出（不能按 params 变化），
 * 所以写成分类页通用的一句；缺了它 Next 就不会输出 og:image:alt，
 * 分享卡片与读屏器都会得到一张没有说明的图。
 */
export const alt = `${site.name} — coaching quizzes and assessments for this topic`

/** 每个分类一张静态 OG 图 */
export function generateStaticParams() {
  return getCategories()
    .filter((category) => !category.draft)
    .map((category) => ({ category: category.slug }))
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = getCategory(slug)
  return renderOgImage({ title: category?.name ?? site.name, subtitle: 'Coaching quizzes' })
}
