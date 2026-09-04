import type { CategoryFile } from '../schema'

/** Hub · 职业 · 商业 · 领导力（顶层支柱页；测评来自旗下 niche） */
export const careerBusinessLeadership: CategoryFile = {
  category: {
    slug: 'career-business-leadership',
    name: 'Career, Business & Leadership',
    title: 'Career, Business & Leadership Coaching Quizzes',
    description:
      'Free assessments for your career path, interview readiness, leadership style, and business growth — built around real coaching frameworks.',
    emoji: '🚀',
    heroCopy: 'Figure out your next move at work — from career direction to leading a team to scaling a business.',
    order: 2,
    intro: [
      'Work is where many of the biggest decisions of adult life get made — what to do, who to become, and how to lead. This hub brings together more than forty free coaching assessments across twelve focus areas: career direction and career change, job search and interview readiness, leadership and executive presence, team health and organizational change, communication, public speaking, negotiation, sales, entrepreneurship, and business growth.',
      'Each quiz is a short, focused diagnostic built around real coaching frameworks rather than a personality parlour game. You get a score or an archetype, a breakdown of the dimensions behind it, and a concrete next move — whether you are choosing a direction, preparing for an interview, sharpening how you lead, or deciding if your business is ready to scale. Executive coaching is now one of the fastest-growing segments of a coaching profession that counts roughly 123,000 practitioners worldwide, and these assessments cover the same ground a first session would.',
      'Not sure where to start? Weighing your own path — try the career archetype or career-change readiness quiz. Job hunting — start with the interview readiness scorecard, or the senior interview scorecard if you keep reaching final rounds without an offer. Leading people — take your leadership style, the leadership scorecard, or the team health scorecard. Speaking, negotiating or selling — try the public speaking style, negotiation IQ, or selling style quiz. Running a company — the founder archetype and growth-readiness scorecard are the place to begin. Every quiz is free and takes just a few minutes.',
    ],
    faq: [
      {
        q: 'What kinds of career and business quizzes are here?',
        a: 'Twelve focus areas grouped into four themes: career (your archetype, career-change readiness, productivity style), job search (interview readiness and senior interview scorecards), leadership and organization (leadership style and scorecard, executive coach readiness, team health, change readiness), and business skills (communication, public speaking, negotiation IQ, selling style, founder archetype, growth readiness). Each gives a personalized result with a suggested next step.',
      },
      {
        q: 'Which quiz should I take first?',
        a: 'Start with the decision in front of you. Weighing your own path — take the career quizzes. Interviewing soon — take the interview readiness scorecard. Leading a team — start with leadership or team health. Presenting, negotiating or selling — pick the matching skills quiz. Growing a company — try the business quizzes. Each takes only a few minutes, so you can take several.',
      },
      {
        q: 'What is the difference between career coaching and job search coaching?',
        a: 'Career coaching works on direction — what to do next and why. Job search coaching is narrower and more tactical: targeting the right roles, framing your experience, interviewing well, and following up. If you already know the role you want, start with the job search and interview quizzes; if you do not, start with the career ones.',
      },
      {
        q: 'Are these career and business quizzes free?',
        a: 'Yes. Every quiz in this section is free and requires no signup to start, and each gives you a personalized result you can act on.',
      },
    ],
  },
  quizzes: [],
}
