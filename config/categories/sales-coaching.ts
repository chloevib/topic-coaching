import type { CategoryFile } from '../schema'

/**
 * niche · 销售教练
 * 已补 intro + faq 并促级上线（去 draft）。
 * 本身不挂题：selling-style（x594wcnf，business-coaching）与 negotiation-iq
 * （mwghydsj，negotiation-coaching）通过 alsoIn 交叉归属到本分类。
 */
export const salesCoaching: CategoryFile = {
  category: {
    slug: 'sales-coaching',
    name: 'Sales Coach',
    title: 'Sales Coaching Quizzes & Assessments',
    description:
      'Free sales coaching quizzes — find your natural selling style, test your negotiation and deal-making skills, and see which habit is costing you deals.',
    emoji: '💼',
    heroCopy: 'Sell more like yourself. Short assessments that show you which selling habit to work on next.',
    order: 15,
    parent: 'career-business-leadership',
    intro: [
      'Sales coaching is the ongoing, one-to-one work of improving how someone actually sells — reviewing real deals, naming the habit that keeps costing them, and practising a different move before the next call. It is deliberately different from sales training, which delivers content once and hopes it sticks.',
      'The business case is unusually well documented. Research by CSO Insights (now part of Korn Ferry) found that teams moving from an informal to a formal, consistently applied coaching approach saw quota attainment rise from roughly 50% to 62%, and that dynamic coaching improved win rates by around 30% compared with an ad-hoc approach (source: CSO Insights Sales Enablement research, https://www.highspot.com/blog/cso-insights-finds-mature-sales-enablement-delivers-increasing-business-impact/). Put simply, coaching moves the middle of a team far more than hiring does.',
      'Most of that improvement comes from two things: knowing which selling style you naturally default to under pressure, and understanding the handful of negotiation concepts that decide how a deal closes — your BATNA, anchoring, and the difference between a stated position and the underlying interest.',
      'Start with the Selling Style quiz if you want to know your natural approach and where it stops working. Take the Negotiation IQ quiz if the money conversation is where deals slip. Both are free, take a few minutes, and end with something specific to change.',
    ],
    faq: [
      {
        q: 'What is sales coaching?',
        a: 'Sales coaching is the continuous process of a manager or coach working with a salesperson on their real pipeline — observing calls, reviewing deals, giving specific feedback, and agreeing one behaviour to change. Unlike training, it is individual, repeated, and tied to live opportunities.',
      },
      {
        q: 'How is sales coaching different from sales training?',
        a: 'Training transfers knowledge to a group; coaching changes behaviour in an individual. Research consistently shows training alone fades quickly without follow-up coaching, which is why the two work best together.',
      },
      {
        q: 'Does sales coaching actually improve results?',
        a: 'The published research points the same way: CSO Insights found formal, consistently applied coaching programmes lifted team quota attainment by roughly 12 percentage points over informal coaching, with comparable gains in win rates. The effect is largest on average performers rather than top sellers.',
      },
      {
        q: 'Is there one right selling style?',
        a: 'No. Consultative, relationship-led, challenger and closer styles all win deals — they just win different deals. What costs you is using your default style in a situation that calls for another, which is exactly what the Selling Style quiz is designed to surface.',
      },
      {
        q: 'Are these sales quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
