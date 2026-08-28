import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@config'

import { JsonLd } from '@/components/JsonLd'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { env } from '@/lib/env'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  /*
   * 全站抓取指令。默认就是 index/follow，显式写出来是为了带上后面三条：
   *  - max-image-preview:large —— Google 图片/Discover/SERP 允许用大图缩略图，
   *    本站每页都有专属 opengraph-image，不开这条等于白生成；
   *  - max-snippet:-1 / max-video-preview:-1 —— 不限制摘要长度，
   *    GEO 场景下答案引擎能摘录更完整的段落。
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content flex min-h-screen flex-col antialiased">
        {/*
         * LCP 提速：所有测评封面都托管在 R2（第三方 origin），浏览器要先做完
         * DNS → TCP → TLS 三次协商才能开始下载首屏那几张 eager 图。提前 preconnect
         * 把这段协商挪到 HTML 解析初期并行进行。封面是普通 <img>（非 CORS 请求），
         * 所以 preconnect 不能带 crossOrigin —— 带了会开一条 CORS 连接，图片请求
         * 复用不到，反而白建一条。dns-prefetch 作为不支持 preconnect 时的兜底。
         * React 19 会把这两个 link 提升到 <head>。
         */}
        <link rel="preconnect" href={env.mediaOrigin} />
        <link rel="dns-prefetch" href={env.mediaOrigin} />
        {/* 站点级实体图谱：全站注入一次,供 AI 引擎建立品牌/站点实体认知 */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {/*
         * 跳至正文：键盘/读屏用户不必每页 Tab 穿过整个页头导航。
         * 平时用 sr-only 收起，获得焦点时才浮出成一颗按钮。
         */}
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-content sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        {/* tabIndex=-1：部分浏览器点完 skip link 后不会把焦点真正移进非交互元素，加上才稳 */}
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
