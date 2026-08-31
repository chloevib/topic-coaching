import type { CategoryFile } from '../schema'

/**
 * niche · 创业教练
 * 本身不挂题：两个测评由 business-coaching 通过 alsoIn 交叉归属
 * （founder-archetype au8agrwa、business-scale-readiness 6asmj28d）。
 * 2026-09-01 补 intro + faq 并促级上线（去 draft）。
 * 文案已对齐两份卷子在 business-coaching.ts 里核对过的真实题目与结果类型：
 *  - au8agrwa 10 题 outcome_quiz，4 型：Visionary / Builder / Connector / Strategist。
 *  - 6asmj28d 12 题 scored_quiz，4 支柱：Offer & Market Fit / Marketing &
 *    Lead Generation / Systems & Operations / Finance & Metrics。
 * intro/faq 引用的外部资料（定性表述，不虚构具体年份数字）：
 *  - U.S. Bureau of Labor Statistics, Business Employment Dynamics —— 新建立机构
 *    存活率（约五分之一活不过第一年、约半数撑不到第五年）
 *    https://www.bls.gov/bdm/us_age_naics_00_table7.txt
 *    https://www.bls.gov/bdm/entrepreneurship/entrepreneurship.htm
 */
export const entrepreneurCoaching: CategoryFile = {
  category: {
    slug: 'entrepreneur-coaching',
    name: 'Entrepreneur Coach',
    title: 'Entrepreneur Coaching Quizzes & Founder Assessments',
    description:
      'Free entrepreneur coaching quizzes for founders — find your founder archetype and score whether your business is actually ready to scale.',
    emoji: '🚀',
    heroCopy:
      'Know how you build, and know what your business can take. Start with the two questions every founder gets wrong.',
    intro: [
      'Entrepreneur coaching works on two things at once: the founder and the business. On the founder side it is about how you build — what energizes you, what you avoid, and which parts of the job you should stop doing yourself. On the business side it is about whether the machine underneath you can survive more volume: a proven offer, a repeatable way to get customers, operations that do not run through your inbox, and numbers you actually use to decide. Most founders overinvest in one half and wonder why growth feels heavy.',
      'The odds explain the urgency. U.S. Bureau of Labor Statistics Business Employment Dynamics data on establishment survival shows a consistent pattern across birth cohorts: roughly one in five new business establishments does not make it past its first year, and about half are gone by year five (source: https://www.bls.gov/bdm/us_age_naics_00_table7.txt). What separates the survivors is rarely a better idea. It is usually the unglamorous stuff — knowing which pillar is weakest and fixing it before pouring fuel on it.',
      'The two free quizzes on this page split the problem cleanly. The Founder Archetype quiz reveals whether you build as a Visionary, Builder, Connector, or Strategist, along with the blind spot to cover or hire around. The Business Scale Readiness scorecard grades your business across Offer & Market Fit, Marketing & Lead Generation, Systems & Operations, and Finance & Metrics, and names the pillar that would crack first under growth. Each takes a few minutes, is free, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does an entrepreneur coach do?',
        a: 'An entrepreneur coach works with founders on the decisions that shape a business: what to build, who to sell to, what to delegate, and when to scale. Sessions typically mix founder-level work — focus, decision-making, delegating, and handling the pressure of being the bottleneck — with business-level work on offers, pricing, lead generation, systems, and metrics.',
      },
      {
        q: 'How is entrepreneur coaching different from business coaching?',
        a: 'The overlap is large, but the emphasis differs. Business coaching tends to start with the company — its offer, funnel, and operations. Entrepreneur coaching starts with the founder, because in an early-stage business the founder is the constraint: their strengths shape the company and their blind spots become its bottlenecks. Most founders benefit from both, which is why the two quizzes here pair well.',
      },
      {
        q: 'What is a founder archetype, and does it limit what I can build?',
        a: 'A founder archetype describes your default way of building — where your instincts and energy naturally pull you. The quiz sorts you into Visionary, Builder, Connector, or Strategist. It describes strengths, not a ceiling: the point is to lean into what you do best and deliberately hire or delegate around the rest.',
      },
      {
        q: 'How do I know if my business is ready to scale?',
        a: 'Readiness means your fundamentals can absorb more volume without breaking — a validated offer, a repeatable acquisition channel, operations that do not depend entirely on you, and finances you can steer by. Scaling before that amplifies problems rather than profit. The Business Scale Readiness scorecard grades all four pillars and identifies the weakest one so you fix it first.',
      },
      {
        q: 'What share of new businesses actually survive?',
        a: 'BLS Business Employment Dynamics tracks new business establishments year by year, and the shape of the curve is remarkably stable across cohorts: around 20% close within the first year and roughly half are gone by year five, with survival varying by industry — health care and social assistance consistently rank among the highest, construction among the lowest.',
      },
      {
        q: 'Are these entrepreneur quizzes free?',
        a: 'Yes. Both quizzes on this page are free, take a few minutes each, and give you a personalized result with a breakdown — no signup required to start.',
      },
    ],
    order: 13,
    parent: 'career-business-leadership',
  },
  quizzes: [],
}
