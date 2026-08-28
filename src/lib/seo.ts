import type { Metadata } from 'next'
import { site } from '@config'

import { env } from './env'

/** 相对路径 → 站点绝对 URL */
export function absoluteUrl(path: string): string {
  return new URL(path, env.siteUrl).toString()
}

/** 品牌母公司 RooQuiz 的稳定实体标识（供 JSON-LD 之间 @id 互相引用） */
const ORG_URL = 'https://rooquiz.com'
const ORG_ID = `${ORG_URL}/#organization`

/**
 * 站点级实体：Organization。
 * 让答案引擎建立「RooQuiz 是谁」的实体认知——Quiz/WebSite 节点都通过 @id 指向它。
 * 有社媒/第三方权威主页后追加进 sameAs,实体图谱会更强。
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'RooQuiz',
    url: ORG_URL,
    logo: absoluteUrl('/opengraph-image'),
    description:
      'RooQuiz is a no-code, AI-assisted quiz and assessment builder. Coaches use it to create quizzes, capture leads, and understand their clients.',
    // sameAs 只放「同一实体在别处的权威主页」——原先填的是自己的 url，
    // 与 url 字段重复且不构成任何实体消歧信号，属于噪声，先留空。
    // 有 LinkedIn / Crunchbase / X 等第三方主页后再补进来，实体图谱才会真正变强。
  }
}

/** WebSite 节点的稳定 @id：各页面的 ItemList / FAQPage / Quiz 都 isPartOf 到它 */
const WEBSITE_ID = absoluteUrl('/#website')

/** 站点级实体：WebSite。声明本站是 RooQuiz 旗下的 coaching 专题站,归属到 Organization。 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: site.name,
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  }
}

/**
 * 通用有序清单结构化数据（样题、分类下测评列表等复用）。
 * item 传字符串即纯文本条目；传 {name,url} 则附带链接（如分类下的测评列表）。
 * 传 path（清单所在页面的站内路径）会给节点带上稳定 @id 与 isPartOf → WebSite，
 * 让清单挂进站点实体图谱，而不是散落的匿名节点。
 *
 * anchor：同一页面出现多份清单时（如 Hub 页既列子分类又列测评）用来区分 @id，
 * 否则两个节点会共用 `#itemlist`，@id 冲突会让爬虫只认其中一个。
 */
export function itemListJsonLd(
  name: string,
  items: Array<string | { name: string; url?: string }>,
  opts?: { path?: string; anchor?: string },
) {
  const pageUrl = opts?.path ? absoluteUrl(opts.path) : null
  const anchor = opts?.anchor ?? 'itemlist'
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(pageUrl ? { '@id': `${pageUrl}#${anchor}`, url: pageUrl, isPartOf: { '@id': WEBSITE_ID } } : {}),
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => {
      const entry = typeof item === 'string' ? { name: item, url: undefined } : item
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: entry.name,
        ...(entry.url ? { url: entry.url } : {}),
      }
    }),
  }
}

interface PageMetaInput {
  title: string
  description: string
  /** 站内相对路径，用于 canonical */
  path: string
}

/**
 * 统一构造页面 Metadata（title/description/canonical/OG/Twitter）。
 * OG/Twitter 图不在此设置 —— 由各路由的 opengraph-image.tsx 文件约定在 build 期
 * 生成静态 PNG 并自动注入 openGraph.images / twitter.images。
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const canonical = absoluteUrl(input.path)
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: 'RooQuiz Coaching',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
    },
  }
}

/**
 * 面包屑结构化数据。@id 取「末级页面 URL + #breadcrumb」——全站每页一条面包屑，
 * 匿名节点在跨页合并实体图时无法区分归属，给它一个稳定标识。
 */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const last = items[items.length - 1]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(last ? { '@id': `${absoluteUrl(last.path)}#breadcrumb` } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/**
 * FAQPage 结构化数据。传 path 则带上 @id / url / isPartOf，
 * 把问答块明确绑定到具体页面（同一站点多页都有 FAQ，匿名节点容易混淆归属）。
 */
export function faqJsonLd(faq: { q: string; a: string }[], opts?: { path?: string }) {
  const pageUrl = opts?.path ? absoluteUrl(opts.path) : null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq`, url: pageUrl, isPartOf: { '@id': WEBSITE_ID } } : {}),
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: entry.a },
    })),
  }
}

export function quizJsonLd(input: {
  title: string
  description: string
  path: string
  image?: string | null
  /** 测评主题（如「Self-sabotage patterns」）——帮助引擎归类 */
  about?: string
  /** 最近更新时间(ISO),提供新鲜度信号 */
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.image ? { image: input.image } : {}),
    ...(input.about ? { about: input.about } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    educationalUse: 'assessment',
    isAccessibleForFree: true,
    inLanguage: 'en',
    // 把测评挂回 WebSite 节点，答案引擎能顺着 isPartOf → WebSite → publisher
    // 走完整条实体链，而不是把每份测评当孤立对象。
    isPartOf: { '@id': WEBSITE_ID },
    provider: { '@type': 'Organization', '@id': ORG_ID, name: 'RooQuiz', url: ORG_URL },
  }
}
