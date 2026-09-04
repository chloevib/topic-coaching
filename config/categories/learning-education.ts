import type { CategoryFile } from '../schema'

/** Hub · 学习与教育（顶层支柱页；测评来自旗下 niche） */
export const learningEducation: CategoryFile = {
  category: {
    slug: 'learning-education',
    name: 'Learning & Education',
    title: 'Learning & Education Coaching Quizzes',
    description:
      'Study smarter and communicate better. Free coaching quizzes across learning styles, memory and recall, writing skills, and language learning.',
    emoji: '📚',
    heroCopy: 'Study smarter and write better — start by understanding how you learn and where your skills stand.',
    order: 5,
    intro: [
      'Learning and education coaching helps you build the skills that make everything else easier to learn — how you take in information, how well you remember it, how clearly you write, and how you study under real deadlines. This hub gathers free assessments across five focus areas: academic and study skills, learning styles, memory and recall, language learning, and writing.',
      'The theme running through every quiz here is self-awareness before effort. Knowing whether you learn best by seeing, hearing, reading or doing — or which writing skill is quietly costing you marks — lets you focus practice where it actually pays off rather than spreading yourself thin. The same logic applies to memory: recall is a trainable skill, and most people lose more to poor review timing than to a bad memory.',
      'A good place to start is the VARK learning style quiz for a read on how you take in information, then the memory IQ quiz to test recall and retention. If you write for school or work, the writing skills scorecard rates your clarity, mechanics, voice and editing; if you are learning a language, the language-learning style quiz points you at the path to fluency that fits you. Every quiz is free, takes only a few minutes, and gives you a personalized result with a concrete next step.',
    ],
    faq: [
      {
        q: 'What does learning and education coaching cover?',
        a: 'It covers the transferable skills behind studying and communicating well — academic and study habits, learning styles, memory and recall, language learning, and writing — helping you understand your current strengths before you try to improve them.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the learning style quiz to understand how you absorb information, then pick the skill you need most: memory IQ for recall, the writing skills scorecard if you write for school or work, or the language-learning style quiz if you are studying a language. Each takes just a few minutes.',
      },
      {
        q: 'Do learning styles really determine how well I learn?',
        a: 'Not on their own. Research is clear that matching teaching to a preferred style does not reliably improve results, so treat your learning style as useful self-knowledge rather than a rule. What does move the needle is retrieval practice and spaced review — which is why the memory quiz on this hub is a good companion to the learning style one.',
      },
      {
        q: 'Are these learning quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
