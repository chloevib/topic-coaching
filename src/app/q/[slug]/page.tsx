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
      <article className="mx-auto max-w-3xl px-4 py-10">
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

        <div className="mt-4">
          <a href={takeHref} target="_blank" rel="noopener" className="link text-primary text-sm">
            Open in full screen ↗
          </a>
        </div>

        {/* 内联嵌入 cairo 答题器 */}
        <div className="mt-6">
          <QuizEmbed src={embedSrc} token={quiz.publicToken} allowedOrigin={cairoOrigin} title={hydrated.title} />
        </div>

        {/* GEO 正文：把测评实质内容以可抓取文本呈现,供答案引擎摘录 */}
        {whatYouLearn.length ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">What you&rsquo;ll learn</h2>
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
            <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Sample questions</h2>
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
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">Who this quiz is for</h2>
            <p className="text-base-content/80">{whoFor}</p>
          </section>
        ) : null}

        {howItWorks ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
            <p className="text-base-content/80">{howItWorks}</p>
          </section>
        ) : null}

        {/* FAQ */}
        {faq.length ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">Frequently asked questions</h2>
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
