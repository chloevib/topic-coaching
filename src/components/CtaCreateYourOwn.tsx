import { site } from '@config'

import { signupUrl } from '@/lib/cairo'

/**
 * B 端转化 CTA：引导访客注册 RooQuiz 做自己的测评。
 * 文案取自 site.config.ts；placement 用于 UTM 归因，区分不同位置的转化效果。
 */
export function CtaCreateYourOwn({ placement, variant = 'band' }: { placement: string; variant?: 'band' | 'inline' }) {
  const href = signupUrl(placement)

  if (variant === 'inline') {
    /*
     * 暗色打磨：primary/5 这类极淡底色在 emerald（亮）下正好，但在 dim（暗）主题里
     * 几乎与 base-100 融为一体，整块 CTA 看着像没有背景的裸文字。
     * dim 由 prefers-color-scheme: dark 触发，与 Tailwind 的 dark: 变体同源，
     * 所以直接用 dark: 把底色和描边各提一档。
     */
    return (
      <div className="border-primary/30 bg-primary/5 dark:border-primary/40 dark:bg-primary/10 rounded-2xl border p-6 text-center">
        <p className="mb-3 text-base font-medium">{site.cta.inline.text}</p>
        <a href={href} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          {site.cta.inline.button}
        </a>
      </div>
    )
  }

  /*
   * 色带打磨：原先是一整块平涂 primary，落在页面末尾显得「扁」，和上方有层次的
   * 卡片区断档。叠两团 primary-content 的柔光（左上 / 右下，纯装饰、aria-hidden、
   * pointer-events-none）给色带一点景深；标题补 tracking-tight 与站内其他区块标题
   * 统一；按钮加投影 + hover 轻抬，让它成为色带里唯一的视觉焦点。
   * 颜色全部走语义色，emerald / dim 两套主题自动适配。
   */
  return (
    <section className="bg-primary text-primary-content relative isolate overflow-hidden">
      <div
        aria-hidden
        className="bg-primary-content/10 pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-primary-content/10 pointer-events-none absolute -right-20 -bottom-28 -z-10 h-80 w-80 rounded-full blur-3xl"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{site.cta.band.heading}</h2>
        <p className="text-primary-content/85 max-w-2xl text-lg">{site.cta.band.body}</p>
        <a
          href={href}
          className="btn btn-lg bg-base-100 text-primary hover:bg-base-200 mt-2 border-0 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          target="_blank"
          rel="noopener"
        >
          {site.cta.band.button}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  )
}
