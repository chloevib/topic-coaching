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
    children: getChildCategories(hub.slug).map((child) => ({
      slug: child.slug,
      name: child.name,
      emoji: child.emoji ?? null,
    })),
  }))
}

export function SiteHeader() {
  const hubs = getNavTree()
  // 最右侧「带下拉面板」的 Hub 下标——不是简单的 hubs.length-1：
  // 末位 Hub 可能没有已上线的子分类（渲染成纯链接、没有面板），
  // 那样右对齐会落空，真正会溢出视口右缘的是它前面那个有面板的 Hub。
  const lastDropdownIndex = hubs.reduce((acc, hub, index) => (hub.children.length ? index : acc), -1)
  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold hover:text-primary">
          <span aria-hidden className="text-xl">
            {site.brandEmoji}
          </span>
          <span>{site.name}</span>
        </Link>
        <div className="flex items-center gap-3">
          {/*
           * 横向 Hub 导航只在 xl(≥1280px) 以上出现：7 个 Hub 名字很长
           * （最长 "Life, Mindset & Relationships" 29 字符），在 md–lg 的容器宽度里
           * 会被 flex 压到每项折行 2–3 行、页头高度翻倍。窄于 xl 一律交给下方的
           * 汉堡面板菜单，那里是纵向手风琴，长名字天然不挤。
           */}
          <nav aria-label="Main" className="hidden items-center gap-0.5 text-[13px] xl:flex">
            {hubs.map((hub, index) =>
              hub.children.length ? (
                <div key={hub.slug} className="group relative">
                  <Link
                    href={`/c/${hub.slug}`}
                    className="flex items-center gap-1 rounded-lg px-2.5 py-2 transition-colors hover:bg-base-200 hover:text-primary"
                  >
                    {hub.name}
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
                  {/*
                   * CSS-only 下拉：pt-2 让触发器与面板之间无缝，鼠标滑入不闪断。
                   * 最后一个 Hub 的面板改为右对齐（right-0），否则 224px 宽的面板
                   * 会从触发器左边缘往右伸出视口右侧被裁掉。
                   */}
                  <div
                    className={`invisible absolute top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                      index === lastDropdownIndex ? 'right-0' : 'left-0'
                    }`}
                  >
                    <ul className="min-w-56 rounded-xl border border-base-300 bg-base-100 p-2 text-sm shadow-lg">
                      {hub.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={`/c/${child.slug}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-base-200 hover:text-primary"
                          >
                            {child.emoji ? (
                              <span aria-hidden className="text-base">
                                {child.emoji}
                              </span>
                            ) : null}
                            <span>{child.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={hub.slug}
                  href={`/c/${hub.slug}`}
                  className="rounded-lg px-2.5 py-2 transition-colors hover:bg-base-200 hover:text-primary"
                >
                  {hub.name}
                </Link>
              ),
            )}
          </nav>
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
    <footer className="border-t border-base-300 bg-base-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 flex items-center gap-2 font-bold">
            <span aria-hidden className="text-xl">
              {site.brandEmoji}
            </span>
            <span>{site.name}</span>
          </div>
          <p className="text-sm text-base-content/70">{site.footerBlurb}</p>
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
          <ul className="space-y-2 text-sm text-base-content/70">
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
          <ul className="space-y-2 text-sm text-base-content/70">
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
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <Link href="/" className="hover:text-primary">
                All quizzes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/70">
        © {site.name} — Coaching quizzes
      </div>
    </footer>
  )
}
