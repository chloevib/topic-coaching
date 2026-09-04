import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizEmbed } from '@/components/QuizEmbed'
import { QuizGrid } from '@/components/QuizCard'
import { cairoOrigin, quizEmbedUrl, quizTakeUrl } from '@/lib/cairo'
import {
  getDisplayCategory,
  getQuiz,
  getQuizzes,
  getQuizzesUnderCategory,
  hydrateQuiz,
  hydrateQuizzes,
} from '@/lib/content'
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, itemListJsonLd, quizJsonLd } from '@/lib/seo'

interface QuizPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getQuizzes().map((quiz) => ({ slug: quiz.slug }))
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params
  const quiz = getQuiz(slug)
  if (!quiz) return {}
  const hydrated = await hydrateQuiz(quiz)
  return buildMetadata({
    title: hydrated.title,
    description: hydrated.description || `Take the ${hydrated.title} coaching quiz — free and in minutes.`,
    path: `/q/${quiz.slug}`,
  })
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params
  const quiz = getQuiz(slug)
  if (!quiz) notFound()

  const hydrated = await hydrateQuiz(quiz)
  // 展示归属：草稿分类回退到其所属 Hub，避免面包屑/相关推荐指向没有页面的草稿分类
  const primaryCategory = getDisplayCategory(quiz)
  const related = (await hydrateQuizzes(primaryCategory ? getQuizzesUnderCategory(primaryCategory) : []))
    .filter((item) => item.quiz.slug !== quiz.slug)
    .slice(0, 3)

  const embedSrc = quizEmbedUrl(quiz.publicToken, quiz.language)
  const takeHref = quizTakeUrl(quiz.publicToken, quiz.language)

  // GEO 正文字段：把测评的实质内容以可抓取、可摘录的文本呈现在页面上
  const { overview, whoFor, whatYouLearn, sampleQuestions, howItWorks, faq } = {
    overview: quiz.seo?.overview,
    whoFor: quiz.seo?.whoFor,
    whatYouLearn: quiz.seo?.whatYouLearn ?? [],
    sampleQuestions: quiz.seo?.sampleQuestions ?? [],
    howItWorks: quiz.seo?.howItWorks,
    faq: quiz.seo?.faq ?? [],
  }
  // 纯静态导出：以 build 时间作为「最近更新」新鲜度信号
  const lastModified = new Date().toISOString()
  /*
   * Quiz 节点的 description 原先直接吃 hydrated.description——清单没写 seo.description
   * 且 Payload 描述为空时会输出 description:""，等于给结构化数据留了个空字段。
   * 回退顺序与 generateMetadata 保持一致：清单 → Payload → overview → 兜底句。
   */
  const schemaDescription =
    hydrated.description || overview || `Take the ${hydrated.title} coaching quiz — free and in minutes.`

  return (
    <>
      {/*
       * 答题器 iframe 是本页的主内容且首屏 eager 加载，但它指向 cairo 这个
       * 第三方 origin——浏览器要等 HTML 解析到 <iframe> 才开始 DNS/TLS 协商。
       * 提前 preconnect，把这段协商与页面自身资源并行掉，减少首屏空占位的时间。
       */}
      <link rel="preconnect" href={cairoOrigin} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          ...(primaryCategory ? [{ name: primaryCategory.name, path: `/c/${primaryCategory.slug}` }] : []),
          { name: hydrated.title, path: `/q/${quiz.slug}` },
        ])}
      />
      <JsonLd
        data={quizJsonLd({
          title: hydrated.title,
          description: schemaDescription,
          path: `/q/${quiz.slug}`,
          image: hydrated.coverUrl,
          about: primaryCategory?.name,
          dateModified: lastModified,
        })}
      />
      {sampleQuestions.length ? (
        <JsonLd
          data={itemListJsonLd(`Sample questions from ${hydrated.title}`, sampleQuestions, {
            path: `/q/${quiz.slug}`,
          })}
        />
      ) : null}
      {faq.length ? <JsonLd data={faqJsonLd(faq, { path: `/q/${quiz.slug}` })} /> : null}

      {/*
       * 测评页主体本是一篇独立、可自成一体的内容（标题 + 答题器 + 说明 + FAQ），
       * 原先只是个裸 <div>；换成 <article> 让爬虫与读屏器都能识别这块的边界。
       * 页面底部的「相关测评」不属于这篇文章，故留在 article 之外。
       */}
      <article>
        {/*
         * 测评页页头band：首页与分类页都有一条 primary/10 → base-100 的渐变 hero，
         * 唯独 79 张测评页（站点的主力落地页）是从纯白直接开始，三类页面看着像
         * 出自两个站。这里把同一档渐变搬过来包住「面包屑 + 标题 + 摘要 + 元信息行」，
         * 渐变收在 base-100 上，所以与下方答题器天然无缝、也不产生任何布局位移。
         */}
        <div className="from-primary/10 to-base-100 dark:from-primary/20 bg-gradient-to-b">
          <div className="mx-auto max-w-3xl px-4 pt-8 pb-10">
            {/* 面包屑：ol 有序列表 + aria-label，与顶部注入的 BreadcrumbList 结构化数据对齐 */}
            <nav aria-label="Breadcrumb" className="text-base-content/70 mb-4 text-sm">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                {primaryCategory ? (
                  <li className="flex items-center gap-x-2">
                    <span aria-hidden>/</span>
                    <Link href={`/c/${primaryCategory.slug}`} className="hover:text-primary">
                      {primaryCategory.name}
                    </Link>
                  </li>
                ) : null}
                {/* 末项补上测评自身：原先可见面包屑只有 2 级，而注入的 BreadcrumbList 是 3 级，两者对不上 */}
                <li className="flex items-center gap-x-2">
                  <span aria-hidden>/</span>
                  <span aria-current="page" className="line-clamp-1">
                    {hydrated.title}
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{hydrated.title}</h1>
            {hydrated.description ? <p className="text-base-content/70 mt-4 text-lg">{hydrated.description}</p> : null}
            {overview ? <p className="text-base-content/80 mt-4">{overview}</p> : null}

            {/*
             * 元信息行：原先这里只有一条孤零零的「Open in full screen ↗」小链接，
             * 松垮地挂在标题与答题器之间。改成一行胶囊：所属分类（首屏就多一条
             * 指向 Hub/niche 的站内链接——面包屑之外的第二条，内链权重与可点性都更好）、
             * 「Free · no signup」这条最有说服力的卖点，再把全屏链接收在同一行右侧。
             */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              {primaryCategory ? (
                <Link
                  href={`/c/${primaryCategory.slug}`}
                  className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                >
                  {primaryCategory.emoji ? <span aria-hidden>{primaryCategory.emoji}</span> : null}
                  <span>{primaryCategory.name}</span>
                </Link>
              ) : null}
              <span className="border-base-300 bg-base-100 text-base-content/70 rounded-full border px-3 py-1 text-xs font-medium">
                Free · no signup
              </span>
              <a
                href={takeHref}
                target="_blank"
                rel="noopener"
                /* ml-auto 只在 sm 起生效：窄屏胶囊会换行，右推会让这条链接孤零零占一整行 */
                className="text-primary text-sm font-medium hover:underline sm:ml-auto"
              >
                Open in full screen ↗
              </a>
            </div>
          </div>
        </div>

        {/* 内联嵌入 cairo 答题器 */}
        <div className="mx-auto max-w-3xl px-4">
          <QuizEmbed src={embedSrc} token={quiz.publicToken} allowedOrigin={cairoOrigin} title={hydrated.title} />
        </div>

        {/* 页头 band 之下的正文列：与 band 内层同宽同边距，视觉上是同一列 */}
        <div className="mx-auto max-w-3xl px-4 pb-10">
          {/*
           * 文内小节标题降一档：原先是 text-2xl/3xl，与本页 h1（text-3xl/4xl）
           * 几乎同重，长页面滚下来分不清哪个是页面标题、哪个是小节。
           * 收到 text-xl/2xl 后 h1 → h2 的落差才成立；
           * 页面级区块标题（底部「More … quizzes」）保持大号不变。
           */}

          {/* GEO 正文：把测评实质内容以可抓取文本呈现,供答案引擎摘录 */}
          {whatYouLearn.length ? (
            <section className="mt-14">
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">What you&rsquo;ll learn</h2>
              <ul className="space-y-3">
                {whatYouLearn.map((point, index) => (
                  <li key={index} className="text-base-content/80 flex gap-3">
                    <span aria-hidden className="text-primary mt-1">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {sampleQuestions.length ? (
            <section className="mt-14">
              <h2 className="mb-2 text-xl font-bold tracking-tight sm:text-2xl">Sample questions</h2>
              <p className="text-base-content/70 mb-5">
                A few of the questions you&rsquo;ll answer in the {hydrated.title}:
              </p>
              <ol className="text-base-content/80 marker:text-base-content/40 list-decimal space-y-3 pl-6">
                {sampleQuestions.map((question, index) => (
                  <li key={index} className="pl-1">
                    {question}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {whoFor ? (
            <section className="mt-14">
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">Who this quiz is for</h2>
              <p className="text-base-content/80">{whoFor}</p>
            </section>
          ) : null}

          {howItWorks ? (
            <section className="mt-14">
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">How it works</h2>
              <p className="text-base-content/80">{howItWorks}</p>
            </section>
          ) : null}

          {/* FAQ */}
          {faq.length ? (
            <section className="mt-14">
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">Frequently asked questions</h2>
              <div className="join join-vertical w-full">
                {faq.map((entry, index) => (
                  <div key={index} className="join-item collapse-arrow border-base-300 bg-base-100 collapse border">
                    <input type="checkbox" defaultChecked={index === 0} />
                    <div className="collapse-title font-medium">{entry.q}</div>
                    <div className="collapse-content text-base-content/70">
                      <p>{entry.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-14">
            <CtaCreateYourOwn placement={`quiz-${quiz.slug}`} variant="inline" />
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length ? (
        <section className="bg-base-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              More {primaryCategory?.name ?? 'coaching'} quizzes
            </h2>
            <QuizGrid items={related} />
          </div>
        </section>
      ) : null}
    </>
  )
}
