'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface NavChild {
  slug: string
  name: string
  emoji: string | null
}

interface NavItem {
  slug: string
  name: string
  children: NavChild[]
}

/**
 * 窄屏（xl 以下）导航菜单：页头的横向 Hub 链接在 xl 以下隐藏，这里补一个汉堡菜单入口。
 * 分类树由服务端 SiteHeader 以 props 传入（lib/content 为 server-only，不能在客户端直接取）。
 * 有子分类的 Hub 渲染成可展开的手风琴，点开后下钻到 niche；点击链接或再次点按钮即收起。
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    setOpen(false)
    setExpanded(null)
  }

  /*
   * 展开时挂两个全局监听（关闭时不挂，避免常驻开销）：
   *  - Esc 关闭并把焦点送回汉堡按钮，键盘用户不会掉进「菜单关了但焦点没了」的空档；
   *  - 点击面板与触发按钮之外的区域关闭，符合浮层菜单的通用预期。
   * 面板本身用 ref 判断，不用 e.target.closest 猜类名，改样式不会失灵。
   */
  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      setExpanded(null)
      triggerRef.current?.focus()
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node | null
      if (!target) return
      if (panelRef.current?.contains(target)) return
      if (rootRef.current?.contains(target)) return
      setOpen(false)
      setExpanded(null)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="btn btn-ghost btn-sm btn-square"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          ref={panelRef}
          className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-base-300 bg-base-100 shadow-lg"
        >
          <nav aria-label="Main" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {items.map((item) => {
              const hasChildren = item.children.length > 0
              const isExpanded = expanded === item.slug
              return (
                <div key={item.slug}>
                  <div className="flex items-center">
                    <Link
                      href={`/c/${item.slug}`}
                      className="flex-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-base-200"
                      onClick={close}
                    >
                      {item.name}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-label={isExpanded ? `Collapse ${item.name}` : `Expand ${item.name}`}
                        aria-expanded={isExpanded}
                        className="btn btn-ghost btn-sm btn-square"
                        onClick={() => setExpanded((value) => (value === item.slug ? null : item.slug))}
                      >
                        <svg
                          aria-hidden
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    ) : null}
                  </div>
                  {hasChildren && isExpanded ? (
                    <ul className="mb-1 ml-3 border-l border-base-300 pl-2">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={`/c/${child.slug}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-base-content/80 hover:bg-base-200 hover:text-base-content"
                            onClick={close}
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
                  ) : null}
                </div>
              )
            })}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
