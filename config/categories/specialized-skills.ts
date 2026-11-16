import type { CategoryFile } from '../schema'

/**
 * Hub · 特殊领域（顶层支柱页；2026-11-17 随 safety-coaching 首个 niche 上线而去 draft）
 * 其余 niche（driving / flight / military / fire-training …）仍为 draft，测评照常汇总到本 Hub。
 */
export const specializedSkills: CategoryFile = {
  category: {
    slug: 'specialized-skills',
    name: 'Specialized Skills',
    title: 'Specialized Skills Quizzes: Safety, Driving & More',
    description:
      'Free practice tests and quizzes for hands-on skills — DMV permit practice, food handler certification prep, and scam and fraud awareness — with instant explanations.',
    emoji: '🎖️',
    heroCopy: 'Certified, hands-on skills start with knowing the rules cold.',
    order: 8,
    intro: [
      'Some skills come with a test you have to pass and real consequences if you get them wrong: the knowledge test for a driver’s permit, the food handler card for a job in food service, or the everyday judgment that keeps your money safe from fraud. This hub gathers free practice tests for exactly those hands-on, rule-based skills.',
      'Each quiz is short, scenario-based and explains the right answer after every question, so you learn the rule and the reason behind it. Today you can take a DMV practice test built on road rules shared by most US states, a food handler practice test based on the FDA Food Code, and a scam-spotting quiz covering the frauds consumers report most often. More specialized areas — from driving and flight to outdoor and survival skills — will be added as new assessments go live.',
      'Use these quizzes as a fast readiness check before the real exam or situation. If you score lower than you expected, review the explanations, study the matching section of your official handbook or course, and retake the quiz in a few days to confirm the gaps are closed.',
    ],
    faq: [
      {
        q: 'What kind of quizzes are in the Specialized Skills hub?',
        a: 'Practice tests and awareness quizzes for practical, rule-based skills — currently driving permit knowledge, food handler food safety, and scam and fraud awareness. Each one gives an instant score with an explanation for every question.',
      },
      {
        q: 'Can these practice tests replace the official exam or course?',
        a: 'No. They are free readiness checks, not certifications. Official driver knowledge tests are run by state DMVs and food handler cards are issued by accredited providers or local health departments. Use these quizzes to find and fix gaps before you sit the real thing.',
      },
      {
        q: 'How long does each quiz take?',
        a: 'Most take two or three minutes. They are designed to be quick enough to retake several times while you study.',
      },
      {
        q: 'Are the specialized skills quizzes free?',
        a: 'Yes. Every quiz in this hub is free, with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
