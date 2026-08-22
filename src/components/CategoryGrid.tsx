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
          className="group border-base-300 bg-base-100 hover:border-primary rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          {/* 暗色打磨：primary/10 的图标底片在 dim 主题下几乎看不出来，dark: 各提一档 */}
          <div
            aria-hidden
            className="bg-primary/10 group-hover:bg-primary/15 dark:bg-primary/20 dark:group-hover:bg-primary/30 mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-2xl transition-colors duration-200"
          >
            {category.emoji ?? '🧭'}
          </div>
          <h3 className="group-hover:text-primary mb-1 text-lg font-semibold transition-colors">{category.name}</h3>
          <p className="text-base-content/70 text-sm">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
