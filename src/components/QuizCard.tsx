import Link from 'next/link'

import type { HydratedQuiz } from '@/lib/content'

/**
 * 测评卡片（首页 / 分类页 / 相关推荐通用）。
 *
 * 卡片视觉规范（与 CategoryGrid 保持一致，全站只有这一套）：
 *   圆角 rounded-2xl ／ 静息 shadow-sm ／ hover shadow-lg + 上抬 0.5 + 主色描边。
 *
 * priority=true 用于首屏卡片：封面改 eager + fetchPriority=high，
 * 让 LCP 图片不被浏览器排到懒加载队列后面。
 */
export function QuizCard({ item, priority = false }: { item: HydratedQuiz; priority?: boolean }) {
  return (
    <Link
      href={item.href}
      className="group card border-base-300 bg-base-100 hover:border-primary overflow-hidden rounded-2xl border shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <figure className="bg-base-200 aspect-[16/9] overflow-hidden">
        {item.coverUrl ? (
          // 封面来自任意主机，用原生 <img> 规避 next/image 白名单
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.coverUrl}
            /*
             * 封面不是装饰图，是每份测评专属的内容图：站点已开 max-image-preview:large，
             * 这些图本可以进 Google 图片 / Discover，而 alt="" + aria-hidden 等于主动
             * 把它们从图片索引里摘出去。改成描述性 alt（就用测评标题，天然带目标关键词）。
             * 代价是读屏器会把标题念两遍——这是「链接内图片 + 同名标题」的常见取舍，
             * 换来的是 70+ 张封面重新变成可索引资产。
             */
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
          />
        ) : (
          <div aria-hidden className="flex h-full w-full items-center justify-center text-4xl opacity-60">
            🧭
          </div>
        )}
      </figure>
      <div className="card-body gap-2 p-5">
        <h3 className="card-title group-hover:text-primary text-base leading-snug transition-colors">{item.title}</h3>
        {item.description ? <p className="text-base-content/70 line-clamp-2 text-sm">{item.description}</p> : null}
        <span className="text-primary mt-1 text-sm font-medium">
          Take the quiz{' '}
          <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}

/**
 * priorityCount：前 N 张卡片按首屏处理（封面 eager）。
 * 只有确实出现在首屏的网格才传（首页 Popular quizzes 传 3），
 * 页面下方的相关推荐保持默认 0，避免抢占首屏带宽。
 */
export function QuizGrid({ items, priorityCount = 0 }: { items: HydratedQuiz[]; priorityCount?: number }) {
  if (!items.length) return null
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <QuizCard key={item.quiz.slug} item={item} priority={index < priorityCount} />
      ))}
    </div>
  )
}
