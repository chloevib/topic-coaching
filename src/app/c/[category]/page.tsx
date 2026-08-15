import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizGrid } from '@/components/QuizCard'
import {
  getCategories,
  getCategory,
  getChildCategories,
  getHubs,
  getParentCategory,
  getQuizzesUnderCategory,
  hydrateQuizzes,
  isHub,
} from '@/lib/content'
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, faqJsonLd, itemListJsonLd } from '@/lib/seo'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return getCategories()
    .filter((category) => !category.draft)
    .map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return buildMetadata({
    title: category.title,
    description: category.description,
    path: `/c/${category.slug}`,
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category || category.draft) notFound()

  const hub = isHub(category)
  const parent = getParentCategory(category)
  const children = hub ? getChildCategories(category.slug) : []
  const quizzes = await hydrateQuizzes(getQuizzesUnderCategory(category))

  // 面包屑：Home / [Hub] / 当前分类
  const crumbs = [{ name: 'Home', path: '/' }]
  if (parent) crumbs.push({ name: parent.name, path: `/c/${parent.slug}` })
  crumbs.push({ name: category.name, path: `/c/${category.slug}` })

  // 底部内链：Hub → 其他 Hub；niche → 同 Hub 的兄弟分类（无则回退到其他 Hub）
  const siblings = parent ? getChildCategories(parent.slug).filter((item) => item.slug !== category.slug) : []
  const relatedCategories = hub
    ? getHubs().filter((item) => item.slug !== category.slug)
    : siblings.length
      ? siblings
      : getHubs()
  const relatedHeading = !hub && siblings.length ? `More in ${parent?.name}` : 'Other coaching topics'

  // GEO 正文：分类介绍长文 + 分类级 FAQ
  const intro = category.intro ?? []
  const catFaq = category.faq ?? []

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {quizzes.length ? (
        <JsonLd
          data={itemListJsonLd(
            `${category.name} quizzes`,
            quizzes.map((item) => ({ name: item.title, url: absoluteUrl(item.href) })),
          )}
        />
      ) : null}
      {catFaq.length ? <JsonLd data={faqJsonLd(catFaq)} /> : null}

      <section className="bg-gradient-to-b from-primary/10 to-base-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* 面包屑：ol 有序列表 + aria-label，与顶部注入的 BreadcrumbList 结构化数据对齐 */}
          <nav aria-label="Breadcrumb" className="mb-3 text-sm text-base-content/70">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              {parent ? (
                <li className="flex items-center gap-x-2">
                  <span aria-hidden>/</span>
                  <Link href={`/c/${parent.slug}`} className="hover:text-primary">
                    {parent.name}
                  </Link>
                </li>
              ) : null}
              <li className="flex items-center gap-x-2">
                <span aria-hidden>/</span>
                <span aria-current="page">{category.name}</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{category.title}</h1>
          <p className="mt-4 text-lg text-base-content/70">{category.heroCopy ?? category.description}</p>
        </div>
      </section>

      {/* GEO 正文：分类介绍长文（信息型内容，供答案引擎摘录） */}
      {intro.length ? (
        <section className="mx-auto max-w-6xl px-4 pt-16">
          <div className="space-y-4 text-base-content/80">
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Hub 页：先展示旗下分类，供用户下钻 */}
      {hub && children.length ? (
        <section className="mx-auto max-w-6xl px-4 pt-16">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Coaching areas</h2>
          <p className="mb-8 text-base-content/70">Explore a focus within {category.name}.</p>
          <CategoryGrid categories={children} />
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-16">
        {/*
         * 测评列表一律带 h2：原先只有「Hub 且有子分类」时才给标题，
         * niche 页的测评网格是一段没有标题的裸内容，标题大纲缺一层，
         * 爬虫/答案引擎也读不出这块在讲什么。
         */}
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          {hub && children.length ? 'Popular quizzes' : `${category.name} quizzes`}
        </h2>
        {/* 网格不传 priorityCount：它在 hero + intro 长文之下，基本不在首屏，不抢 eager 带宽 */}
        {quizzes.length ? (
          <QuizGrid items={quizzes} />
        ) : (
          <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center shadow-sm">
            <div
              aria-hidden
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl"
            >
              🧭
            </div>
            <p className="mb-1 font-medium">No quizzes here yet</p>
            <p className="mx-auto max-w-md text-sm text-base-content/70">
              We&rsquo;re still building out this area. In the meantime, browse{' '}
              <Link href={parent ? `/c/${parent.slug}` : '/'} className="link link-primary">
                {parent ? parent.name : 'all coaching topics'}
              </Link>{' '}
              for something close.
            </p>
          </div>
        )}
      </section>

      {/* GEO：分类级 FAQ（FAQPage 结构化数据已在顶部注入） */}
      {catFaq.length ? (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">Frequently asked questions</h2>
          <div className="join join-vertical w-full">
            {catFaq.map((entry, index) => (
              <div key={index} className="collapse join-item collapse-arrow border border-base-300 bg-base-100">
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

      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{relatedHeading}</h2>
          <CategoryGrid categories={relatedCategories} />
        </div>
      </section>

      <CtaCreateYourOwn placement={`category-${category.slug}`} />
    </>
  )
}
