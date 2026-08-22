import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@config'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizGrid } from '@/components/QuizCard'
import { getFeaturedQuizzes, getHubs, hydrateQuizzes } from '@/lib/content'
import { absoluteUrl, buildMetadata, itemListJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: site.tagline,
  description: site.description,
  path: '/',
})

export default async function HomePage() {
  const hubs = getHubs()
  const featured = await hydrateQuizzes(getFeaturedQuizzes())

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
            <Link href="#categories" className="btn btn-ghost">
              Explore by topic
            </Link>
          </div>
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

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { n: '1', t: 'Pick a quiz', d: 'Choose from coaching assessments grouped by topic.' },
            { n: '2', t: 'Answer honestly', d: 'Takes just a few minutes — no signup required to start.' },
            { n: '3', t: 'Get your result', d: 'See a personalized breakdown and what to do next.' },
          ].map((step) => (
            <div key={step.n} className="text-center">
              <div className="bg-primary text-primary-content mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                {step.n}
              </div>
              <h3 className="mb-1 font-semibold">{step.t}</h3>
              <p className="text-base-content/70 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaCreateYourOwn placement="home" />
    </>
  )
}
