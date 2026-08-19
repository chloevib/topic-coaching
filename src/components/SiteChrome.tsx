import Link from 'next/link'

import { site } from '@config'

import { MobileNav } from '@/components/MobileNav'
import { signupUrl } from '@/lib/cairo'
import { getChildCategories, getHubs } from '@/lib/content'

/** 顶层 Hub + 其已上线的子分类（niche），供页头下拉菜单与移动端手风琴共用 */
function getNavTree() {
  return getHubs().map((hub) => ({
    slug: hub.slug,
    name: hub.name,
    emoji: hub.emoji ?? null,
    children: getChildCategories(hub.slug).map((child) => ({
      slug: child.slug,
      name: child.name,
      emoji: child.emoji ?? null,
    })),
  }))
}

/** 大面板里每个 Hub 最多直出几个 niche，多出来的收进「+N more」，避免面板过高 */
const MEGA_MENU_CHILDREN = 5

export function SiteHeader() {
  const hubs = getNavTree()
  return (
    <header className="border-base-300 bg-base-100/90 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <Link href="/" className="hover:text-primary flex items-center gap-2 font-bold">
          <span aria-hidden className="text-xl">
            {site.brandEmoji}
          </span>
          <span>{site.name}</span>
        </Link>
        {/*
         * 页头只放两个导航项：7 个 Hub 名字太长（最长 "Life, Mindset & Relationships"
         * 29 字符），平铺出来即便到 xl 也把这一行挤满。改成单个「Categories」入口 +
         * 一张全宽大面板，整条页头回到「品牌 · 导航 · CTA」三段式，md 起就能显示，
         * 不必等到 xl 才从汉堡菜单里放出来。
         */}
        <nav aria-label="Main" className="ml-4 hidden items-center gap-1 text-sm md:flex">
          {/*
           * CSS-only 大面板：上下 -my-3/py-3 把 group 的悬停区撑满页头高度，
           * 鼠标从触发器往下滑经页头留白时不会掉出 group、面板不闪断。
           * 面板本身相对 header（sticky 即定位元素）铺满整行，故 group 不要 relative。
           */}
          <div className="group -my-3 py-3">
            <Link
              href="/#categories"
              className="hover:bg-base-200 hover:text-primary flex items-center gap-1 rounded-lg px-3 py-2 font-medium transition-colors"
            >
              Categories
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="invisible absolute inset-x-0 top-full z-50 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {/* 3 列起步（面板本身 md 才出现）：2 列会把 7 个 Hub 摞成 4 行、面板高过 700px */}
              <div className="border-base-300 bg-base-100 max-h-[75vh] overflow-y-auto border-b shadow-lg">
                <div className="mx-auto grid max-w-6xl grid-cols-3 gap-x-6 gap-y-5 px-4 py-6 xl:grid-cols-4">
                  {hubs.map((hub) => {
                    const shown = hub.children.slice(0, MEGA_MENU_CHILDREN)
                    const rest = hub.children.length - shown.length
                    return (
                      <div key={hub.slug}>
                        <Link
                          href={`/c/${hub.slug}`}
                          className="hover:bg-base-200 hover:text-primary flex items-center gap-2 rounded-lg px-2 py-1.5 font-semibold transition-colors"
                        >
                          {hub.emoji ? (
                            <span aria-hidden className="text-base">
                              {hub.emoji}
                            </span>
                          ) : null}
                          <span>{hub.name}</span>
                        </Link>
                        {shown.length ? (
                          <ul className="mt-0.5">
                            {shown.map((child) => (
                              <li key={child.slug}>
                                <Link
                                  href={`/c/${child.slug}`}
                                  className="text-base-content/70 hover:bg-base-200 hover:text-primary block rounded-lg px-2 py-1 text-[13px] transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                            {rest > 0 ? (
                              <li>
                                <Link
                                  href={`/c/${hub.slug}`}
                                  className="text-primary/80 hover:bg-base-200 hover:text-primary block rounded-lg px-2 py-1 text-[13px] font-medium transition-colors"
                                >
                                  +{rest} more
                                </Link>
                              </li>
                            ) : null}
                          </ul>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="hover:bg-base-200 hover:text-primary rounded-lg px-3 py-2 font-medium transition-colors"
          >
            All quizzes
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href={signupUrl('header')} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            {site.cta.navButton}
          </a>
          <MobileNav items={hubs} />
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const categories = getHubs()
  return (
    <footer className="border-base-300 bg-base-200 border-t">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 flex items-center gap-2 font-bold">
            <span aria-hidden className="text-xl">
              {site.brandEmoji}
            </span>
            <span>{site.name}</span>
          </div>
          <p className="text-base-content/70 text-sm">{site.footerBlurb}</p>
        </div>
        {/*
         * 页脚三栏用 <nav aria-labelledby> 而不是 <h4>：页面正文已有 h1/h2，
         * 直接跳到 h4 会造成标题层级断层；换成带无障碍标签的导航地标后，
         * 标题大纲干净，内链区块对爬虫/读屏器的语义反而更明确。
         */}
        <nav aria-labelledby="footer-categories">
          <p id="footer-categories" className="mb-3 text-sm font-semibold">
            Categories
          </p>
          <ul className="text-base-content/70 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/c/${category.slug}`} className="hover:text-primary">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-coaches">
          <p id="footer-coaches" className="mb-3 text-sm font-semibold">
            For coaches
          </p>
          <ul className="text-base-content/70 space-y-2 text-sm">
            <li>
              <a href={signupUrl('footer')} className="hover:text-primary" target="_blank" rel="noopener">
                {site.cta.footerLink}
              </a>
            </li>
            <li>
              <a href="https://rooquiz.com" className="hover:text-primary" target="_blank" rel="noopener">
                About RooQuiz
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-resources">
          <p id="footer-resources" className="mb-3 text-sm font-semibold">
            Resources
          </p>
          <ul className="text-base-content/70 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                All quizzes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-base-300 text-base-content/70 border-t py-4 text-center text-xs">
        © {site.name} — Coaching quizzes
      </div>
    </footer>
  )
}
