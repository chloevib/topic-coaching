import type { CategoryFile } from '../schema'

/** niche · 高管教练 */
export const executiveCoaching: CategoryFile = {
  category: {
    slug: 'executive-coaching',
    name: 'Executive Coach',
    title: 'Executive Coaching Quizzes & Assessments',
    description:
      'Free executive coaching assessments — score your readiness to coach senior leaders across credibility, craft, commercial fluency, and pipeline.',
    emoji: '👔',
    heroCopy:
      'Coach at the top of the org chart. Short assessments that show whether you are ready for executive clients — and what to fix first.',
    order: 12,
    parent: 'career-business-leadership',
    intro: [
      'Executive coaching is coaching aimed at senior leaders — directors, C-suite executives, founders, and the teams around them. It differs from general life or career coaching in three practical ways: the buyer is usually an organisation rather than an individual, the engagement is normally contracted three ways between coach, coachee, and sponsor, and credibility has to be established before the first session rather than earned during it.',
      'That makes readiness a real question rather than a mindset one. Most coaches moving into executive work are not held back by coaching skill; they are held back by commercial fluency — how organisations actually buy coaching, how to price at executive-market rates, and how to hold confidentiality cleanly in a three-way contract.',
      'The demand is there. The 2025 ICF Global Coaching Study, conducted with PwC across 127 countries, counted a record 122,974 coach practitioners worldwide — up 15% since 2023 — and put annual industry revenue at an estimated USD 5.34 billion (source: International Coaching Federation, https://coachingfederation.org/blog/coaching-industry-continues-global-growth-with-5-34-billion-usd-revenue-new-research-reveals/). With that many practitioners in the market, specific positioning at senior level is what separates a full practice from an underbooked one.',
      'The assessments on this page are free self-assessments. They take a few minutes, return a dimension-by-dimension picture rather than a single verdict, and end with a concrete next step.',
    ],
    faq: [
      {
        q: 'What is executive coaching?',
        a: 'Executive coaching is a structured, confidential partnership that helps senior leaders think more clearly, lead more effectively, and navigate decisions with higher stakes. Engagements are usually sponsored by the organisation and contracted between coach, coachee, and sponsor, with explicit confidentiality terms.',
      },
      {
        q: 'How is executive coaching different from life or career coaching?',
        a: 'The coaching craft overlaps, but the context does not. Executive coaching involves an organisational buyer, procurement and budget cycles, three-way contracting, and a coach who can speak credibly about strategy, P&L, and org dynamics. Life and career coaching are typically bought and paid for by the individual.',
      },
      {
        q: 'Do I need a credential to coach executives?',
        a: 'No jurisdiction requires one, but organisational buyers frequently ask. A recognised credential from a body such as ICF, EMCC, or the Association for Coaching signals trained hours, supervision, and an ethics framework, and it removes an easy reason for a procurement team to screen you out.',
      },
      {
        q: 'Are these executive coaching assessments free?',
        a: 'Yes. Each assessment on this page is free, takes about four minutes, and returns a personalized breakdown with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'qpuzcjsm',
      slug: 'executive-coach-readiness',
      order: 1,
      seo: {
        title: 'Executive Coach Readiness Scorecard — Are You Ready to Coach Senior Leaders?',
        description:
          'A free 14-question executive coaching readiness assessment. Score your credibility, coaching craft, commercial fluency, and pipeline, and see which dimension is holding you back.',
        overview:
          'Coaching senior leaders is a different game from coaching individuals: the stakes are higher, the buyer is usually an organisation, and credibility is won before the first session starts. This free 14-question scorecard rates you across four dimensions — Credibility & Experience, Coaching Craft, Business & Commercial, and Positioning & Pipeline — and returns a radar chart plus a concrete next step for whichever dimension is weakest.',
        whoFor:
          'Coaches moving into executive or leadership work, internal HR and L&D professionals building a coaching practice, and experienced coaches who suspect their pipeline or pricing — not their craft — is the real constraint.',
        whatYouLearn: [
          'Your readiness stage: Foundation, Building, Ready to Compete, or Established Practitioner',
          'Which of the four dimensions is currently capping your readiness',
          'Where credibility actually comes from at senior level — leadership exposure, credentials, and logged coaching hours',
          'The commercial gaps that stall skilled coaches: organisational buying, executive-market pricing, and three-way contracting',
          'One specific action to take next for your lowest-scoring dimension',
        ],
        sampleQuestions: [
          'How much experience do you have working at or with senior leadership level?',
          'Do you hold a recognised coaching credential (ICF, EMCC, AC or equivalent)?',
          'How comfortable are you challenging a senior leader who is wrong?',
          'How well do you understand how large organisations buy coaching?',
          'How do you handle three-way contracting between coach, coachee and sponsor?',
        ],
        howItWorks:
          'You answer 14 multiple-choice questions, each scored 1 to 4, grouped into four dimensions: Credibility & Experience, Coaching Craft, Business & Commercial, and Positioning & Pipeline. Your total maps to one of four readiness stages, and a radar chart shows the shape of your profile so you can work on the weakest dimension first — readiness is limited by the weakest of the four, not the average. It takes about four minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What does the executive coaching readiness scorecard measure?',
            a: 'Four dimensions: Credibility & Experience (whether senior leaders will take you seriously), Coaching Craft (challenging powerful people, hearing the issue beneath the stated goal, knowing where coaching ends and therapy begins), Business & Commercial (organisational buying, pricing, contracting), and Positioning & Pipeline (niche, referral sources, senior-level social proof).',
          },
          {
            q: 'What is a good score?',
            a: 'Scores map to four stages out of a 56-point maximum: Foundation Stage, Building Stage, Ready to Compete, and Established Practitioner. Reaching Ready to Compete means your craft, credibility, and commercial understanding all hold up well enough to take on executive clients.',
          },
          {
            q: 'Is this a certification or a qualification?',
            a: 'No. It is a self-assessment for reflection and planning, not a professional certification and not a guarantee of business results. Credentials come from bodies such as ICF, EMCC, or the Association for Coaching.',
          },
          {
            q: 'How often should I retake it?',
            a: 'Every 90 days is a useful cadence. Compare the shape of your radar chart rather than just the total — progress usually shows up as one dimension catching up with the others.',
          },
        ],
      },
    },
  ],
}
