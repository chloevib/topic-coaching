import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@config'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizGrid } from '@/components/QuizCard'
import { getFeaturedQuizzes, getHubs, getQuizzes, hydrateQuizzes } from '@/lib/content'
import { absoluteUrl, buildMetadata, itemListJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: site.tagline,
  description: site.description,
  path: '/',
})

export default async function HomePage() {
  const hubs = getHubs()
  const featured = await hydrateQuizzes(getFeaturedQuizzes())

  /*
   * Hero 数据条：数字全部由清单实时算出（不是写死的文案），随内容增长自动更新。
   * 原先 hero 只有「标题 + 副标题 + 两颗按钮」，下面一大片留白直接接到卡片网格，
   * 首屏既空又不给任何「这站有多少东西」的信号；补一条数据条把留白填成信息。
   */
  const heroStats = [
    { value: String(getQuizzes().length), label: 'Quizzes' },
    { value: String(hubs.length), label: 'Coaching topics' },
    { value: '100%', label: 'Free, no signup' },
  ]

  return (
    <>
      {/*
       * 首页原先只有 Organization + WebSite 两个节点，页面主体那一整屏精选测评
       * 对结构化数据是不可见的。补一个 ItemList，把首页说清楚是「精选测评清单页」，
       * 每条带标题 + 绝对 URL，同时给爬虫多一条通往测评页的显式发现路径。
       */}
      <JsonLd
        data={itemListJsonLd(
          `Popular coaching quizzes on ${site.name}`,
          featured.map((item) => ({ name: item.title, url: absoluteUrl(item.href) })),
          { path: '/' },
        )}
      />

      {/* Hero */}
      {/* 暗色打磨：primary/10 的 hero 渐变在 dim 主题下几乎看不见，dark: 提一档 */}
      <section className="from-primary/10 to-base-100 dark:from-primary/20 bg-gradient-to-b">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {site.hero.titleLead} <span className="text-primary">{site.hero.titleHighlight}</span>
          </h1>
          <p className="text-base-content/70 mx-auto mt-5 max-w-2xl text-lg">{site.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#featured" className="btn btn-primary">
              Browse quizzes
            </Link>
            {/*
             * 次级按钮原先是 btn-ghost：无边框、无底色，落在 hero 的浅色渐变上
             * 几乎读不出「这是一颗按钮」，与主按钮的权重差拉得过大。
             * 换成 btn-outline btn-primary —— 依然明显次于实心主按钮，
             * 但轮廓把它固定成一个可点对象，两颗按钮成为清晰的主/次一对。
             */}
            <Link href="#categories" className="btn btn-outline btn-primary">
              Explore by topic
            </Link>
          </div>

          {/*
           * 数据条：dl 语义（每项 dt 标签 + dd 数值），用 flex-col-reverse 让数值显示在上、
           * 标签在下，DOM 里仍保持 dt → dd 的合法顺序。竖线分隔按 index 判断而不是
           * first: 变体——`sm:border-l` 与 `first:border-none` 在 Tailwind 产物里
           * 媒体查询排在伪类之后，会把「首项不画线」覆盖掉，用 index 最稳。
           */}
          <dl className="mt-10 flex flex-wrap items-center justify-center gap-y-6">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse items-center px-6 ${
                  index > 0 ? 'border-base-content/15 sm:border-l' : ''
                }`}
              >
                {/* 对比度：12px 大写小字压到 /60 在 dim 暗色主题下已经贴着 AA 线，提到 /70 */}
                <dt className="text-base-content/70 mt-1 text-xs font-medium tracking-wide uppercase">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured quizzes —— 首屏下方第一屏，前 3 张封面按 LCP 候选走 eager */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Popular quizzes</h2>
        <p className="text-base-content/70 mb-8">Start here — our most-taken coaching assessments.</p>
        <QuizGrid items={featured} priorityCount={3} />
      </section>

      {/* Categories */}
      <section id="categories" className="bg-base-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Explore by topic</h2>
          <p className="text-base-content/70 mb-8">Find the coaching area that fits where you are right now.</p>
          <CategoryGrid categories={hubs} />
        </div>
      </section>

      {/*
       * How it works —— 原先是三段裸文字浮在空白底上，是首页视觉上最松散的一块：
       * 上面是卡片网格、下面是实心 CTA 色带，中间这层没有任何容器，读起来像掉了样式。
       * 改成与 QuizCard / CategoryGrid 同一套卡片规范（rounded-2xl + border-base-300 +
       * shadow-sm），全站三种网格终于是同一种语言；序号从纯色圆点换成「圆角方块 +
       * 淡色底 + 主色数字」，弱化后不再和主 CTA 抢注意力，dark: 提一档保证暗色可见。
       * 文案同时从居中改为左对齐——三张卡片的正文左对齐后基线整齐，比居中耐读。
       */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
        <p className="text-base-content/70 mb-8 text-center">Three steps, a few minutes, no account needed.</p>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { n: '1', t: 'Pick a quiz', d: 'Choose from coaching assessments grouped by topic.' },
            { n: '2', t: 'Answer honestly', d: 'Takes just a few minutes — no signup required to start.' },
            { n: '3', t: 'Get your result', d: 'See a personalized breakdown and what to do next.' },
          ].map((step) => (
            <li
              key={step.n}
              /*
               * 这三张卡不是链接，却带着 hover:shadow-md —— 鼠标掠过时抬一下影子，
               * 等于向用户承诺「可以点」，点下去却没反应，是纯粹的误导性反馈。
               * 全站真正可点的卡（QuizCard / CategoryGrid）才保留 hover 抬升；
               * 这里去掉 hover 态，静态卡就老老实实是静态的。
               */
              className="border-base-300 bg-base-100 rounded-2xl border p-6 shadow-sm"
            >
              <div
                aria-hidden
                className="bg-primary/10 text-primary dark:bg-primary/20 mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold"
              >
                {step.n}
              </div>
              <h3 className="mb-1 font-semibold">{step.t}</h3>
              <p className="text-base-content/70 text-sm">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaCreateYourOwn placement="home" />
    </>
  )
}
