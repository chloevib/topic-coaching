import type { CategoryFile } from '../schema'

/** Hub · 表演与创造力（顶层支柱页，已转正：旗下 content-creator / creativity 两个 niche 已 live） */
export const performanceCreativity: CategoryFile = {
  category: {
    slug: 'performance-creativity',
    name: 'Performance & Creativity',
    title: 'Performance & Creativity Coaching Quizzes',
    description:
      'Creative craft and content creation. Free coaching quizzes to find your creative style, your creator archetype, and where to grow next.',
    emoji: '🎭',
    heroCopy: 'Ideas, craft, and audience. Short assessments to find your creative style and where to grow.',
    order: 6,
    intro: [
      'Performance and creativity coaching spans everything you make and share — how you generate ideas, how you shape a craft, and how you turn it into work that connects with an audience. The common thread is turning raw instinct into a repeatable, confident style you can rely on when the blank page or the camera is waiting.',
      'These free quizzes are a fast way to see your creative strengths clearly. Each is a short self-assessment that names your natural style, surfaces the blind spot holding you back, and points to the next skill worth building — whether you make content for an audience or want to understand how your creativity actually works.',
      'Start with the creativity style quiz to find your creative archetype and the conditions in which your best ideas arrive, or the content creator style quiz if you publish for an audience and want to know which creator archetype you are playing to. Each takes just a couple of minutes, is free, and ends with a personalized result and a concrete next step.',
    ],
    faq: [
      {
        q: 'What does performance and creativity coaching cover?',
        a: 'It covers the skills behind creating and performing: how you generate and develop ideas, the creative habits and conditions that make your best work possible, and how you build an audience as a content creator. The focus is on developing a distinctive style and the confidence to share it.',
      },
      {
        q: 'What can these quizzes tell me?',
        a: 'Each quiz names your natural creative style, highlights the strengths it gives you and the blind spot to watch, and suggests the next skill to build — a fast starting point for growing as a creator or performer.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'If you want to understand how your own creativity works, start with the creativity style quiz. If you already publish videos, writing or posts and want to sharpen how you show up, start with the content creator style quiz. Both take about two minutes.',
      },
      {
        q: 'Are these quizzes free?',
        a: 'Yes. Every quiz in this section is free and takes about two minutes, with a personalized result and no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
