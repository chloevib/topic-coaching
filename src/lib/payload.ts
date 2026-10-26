import 'server-only'

import { unstable_cache } from 'next/cache'

import { env } from './env'

/**
 * Payload 公开表单接口 `GET /api/app/public/forms/:publicToken` 的返回里本站用到的字段。
 * 契约真相源在 rooquiz-payload 的 src/contracts/publicForms.ts（getPublicForm），
 * 返回 `{ form }`；测评不存在 / 已下架（isActive=false 或 isBanned）时 form 为 null。
 */
export interface PayloadFormMeta {
  id: string
  title: string | null
  description: string | null
  language: string | null
  openGraph: Record<string, unknown> | null
  flagImg: { url: string | null } | null
  tenant: {
    id: string
    name: string | null
    plan: string | null
    link: string | null
    logo: { url: string | null } | null
  } | null
  personalized: { theme: unknown } | null
}

interface GetPublicFormResponse {
  form: PayloadFormMeta | null
}

async function requestFormMeta(publicToken: string, language?: string): Promise<PayloadFormMeta | null> {
  const url = new URL(`/api/app/public/forms/${encodeURIComponent(publicToken)}`, env.payloadServerDomain)
  if (language) {
    url.searchParams.set('language', language)
  }
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json', 'X-REQUEST-FROM': 'topic-coaching' },
    })
    if (!res.ok) {
      return null
    }
    const data = (await res.json()) as GetPublicFormResponse
    return data.form ?? null
  } catch {
    // 网络失败 / 测评已下架 → 返回 null，落地页回退到本地清单的 seo 文案，构建不会因此中断。
    return null
  }
}

/**
 * 取测评元数据。
 * 用 unstable_cache 包一层做 ISR 式缓存（revalidate 1 小时），入参会自动并入缓存键。
 */
export const fetchFormMeta = unstable_cache(requestFormMeta, ['payload-form-meta'], {
  revalidate: 3600,
  tags: ['payload-form-meta'],
})
