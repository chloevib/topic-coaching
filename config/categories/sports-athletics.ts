import type { CategoryFile } from '../schema'

/** Hub · 体育竞技（顶层支柱页；测评来自旗下 niche） */
export const sportsAthletics: CategoryFile = {
  category: {
    slug: 'sports-athletics',
    name: 'Sports & Athletics',
    title: 'Sports & Athletics Coaching Quizzes',
    description:
      'Free sports quizzes and knowledge tests for golf, tennis, badminton, basketball, boxing, soccer, running, and swimming — rules, tactics, and readiness.',
    emoji: '🏅',
    heroCopy: 'Know your sport inside out — start by testing your grasp of its rules, scoring, and strategy.',
    order: 4,
    intro: [
      'Sports and athletics coaching is sport-specific by nature: technique, tactics, and competition look different on a golf course than in a boxing ring. This hub gathers free knowledge tests and readiness assessments across eight sports — golf, tennis, badminton, basketball, boxing, soccer, running, and swimming — so you can sharpen the understanding that on-field skill is built on.',
      'The common thread is that knowing the game — its scoring, rules, and strategy — makes practice more productive and competition less confusing. The IQ quizzes test what you know about a sport and explain every answer as you go; the readiness assessments look at you instead, rating whether you are prepared for what you are about to take on.',
      'Start with the sport you play or follow: the Golf IQ, Tennis IQ, Badminton IQ, Basketball IQ, or Boxing IQ quiz to test scoring, rules and strategy, the World Cup quiz if you follow soccer, the runner type quiz to find your running personality, or the open-water readiness scorecard before your first non-pool swim. Each is free, includes an explanation for every answer, and takes just a few minutes.',
    ],
    faq: [
      {
        q: 'What does sports and athletics coaching cover?',
        a: 'It covers sport-specific technique, tactics, rules, and competition readiness across golf, tennis, badminton, basketball, boxing, soccer, running, and swimming — helping you understand the game more deeply so your practice and play improve together.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the sport you play or follow most — for example the Golf IQ, Tennis IQ, Basketball IQ or Boxing IQ quiz — to test your knowledge of scoring, rules, and strategy. If you are preparing for something rather than testing knowledge, try the runner type quiz or the open-water swim readiness scorecard. Each takes only a few minutes.',
      },
      {
        q: 'What is the difference between an IQ quiz and a readiness scorecard?',
        a: 'An IQ quiz tests knowledge of the sport — its rules, technique and history — and marks each answer right or wrong with an explanation. A readiness scorecard is a self-assessment about you: it rates your preparation across several dimensions and gives you a score plus the area to work on first.',
      },
      {
        q: 'Are these sports quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, includes an explanation for each answer, and needs no signup to start.',
      },
    ],
  },
  quizzes: [],
}
