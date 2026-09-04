import type { CategoryFile } from '../schema'

/** Hub · 生活方式与兴趣（顶层支柱页；测评来自旗下 niche） */
export const lifestyleInterests: CategoryFile = {
  category: {
    slug: 'lifestyle-interests',
    name: 'Lifestyle & Interests',
    title: 'Lifestyle & Interests Coaching Quizzes',
    description:
      'Free coaching quizzes for money, home, and everyday interests — money personality, investing IQ, productivity, travel, cooking, etiquette, and dog training.',
    emoji: '✨',
    heroCopy: 'Money, habits, and the things you do for fun — start by understanding how you are wired.',
    order: 7,
    intro: [
      'The way you handle money, time, and daily choices is shaped less by willpower than by patterns you rarely stop to notice. This hub gathers free coaching assessments across everyday life and personal interests: money and financial wellbeing, investing knowledge, productivity and organization, travel, cooking, professional etiquette, and dog training.',
      'Each quiz gives you an honest baseline and a realistic starting point rather than another rigid plan. You can uncover your money personality, gauge how financially healthy your habits are, test your investing and personal-finance knowledge, find the productivity system that fits how your brain works, and see where a small change would pay off most.',
      'A good place to start is the money personality quiz for a quick read on how you relate to money, then the financial wellness scorecard for a fuller picture of your habits, or the debt payoff readiness scorecard if you are working your way out of debt. Prefer something lighter? Test your investing IQ or money IQ, score your travel experience, check your kitchen smarts with the cooking IQ quiz, rate your team on business etiquette, or find your dog-parent archetype. Every quiz is free and takes just a few minutes, with a personalized result and a clear next step.',
    ],
    faq: [
      {
        q: 'What does lifestyle and interests coaching cover?',
        a: 'It covers the everyday areas of life where small habit changes compound over time — money and financial wellbeing first and foremost, plus investing knowledge, productivity and organization, and the interests people actually spend their weekends on: travel, cooking, etiquette, and pet training. The quizzes here help you understand your current patterns before you try to change them.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'If money is the reason you are here, start with the money personality quiz, then the financial wellness scorecard for a fuller picture of your habits and where to focus first. If you came for something lighter, the investing IQ, travel experience, and cooking IQ quizzes are the most popular starting points. Each takes only a few minutes.',
      },
      {
        q: 'What is the difference between the money personality quiz and the financial wellness scorecard?',
        a: 'The money personality quiz is about how you are wired — the instincts and emotions behind your spending and saving. The financial wellness scorecard measures what you are actually doing: savings buffer, debt, planning, and financial confidence. Taking the personality quiz first tends to make the scorecard result easier to act on.',
      },
      {
        q: 'Are these lifestyle quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
