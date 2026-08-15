import Link from 'next/link'

import type { CoachingCategory } from '@config'

/**
 * 分类网格（首页 + 分类页底部内链）。
 * 卡片视觉与 QuizCard 共用一套规范：rounded-2xl / shadow-sm → hover:shadow-lg / 上抬 0.5 / 主色描边。
 */
export function CategoryGrid({ categories }: { categories: CoachingCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/c/${category.slug}`}
          className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
        >
          <div
            aria-hidden
            className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-2xl transition-colors duration-200 group-hover:bg-primary/15"
          >
            {category.emoji ?? '🧭'}
          </div>
          <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">{category.name}</h3>
          <p className="text-sm text-base-content/70">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
