import type { CategoryFile } from '../schema'

/**
 * niche · 企业教练
 * 2026-09-07 促级上线：补 intro + faq，收录 coaching-culture-scorecard（ccdx4haz），去 draft。
 * 该测评通过 alsoIn 交叉归属 organization-development-coaching / leadership-coaching。
 */
export const corporateCoaching: CategoryFile = {
  category: {
    slug: 'corporate-coaching',
    name: 'Corporate Coach',
    title: 'Corporate Coaching Assessments & Coaching Culture Scorecard',
    description:
      'Free corporate coaching assessments — score your coaching culture across asking, feedback, development time and reinforcement, and see which one is the constraint.',
    emoji: '🏢',
    heroCopy:
      'Most companies say they want managers who coach. Find out whether yours actually does — measured on behaviour, not values.',
    order: 14,
    parent: 'career-business-leadership',
    intro: [
      'Corporate coaching is coaching delivered inside an organization rather than to a private client: executive and leadership coaching at the top, manager-as-coach training in the middle, and internal coach programmes run by HR or L&D. The goal is not a set of individually improved leaders but a change in how the whole company handles problems — whether the default response to a struggling employee is to tell them the answer or to help them find it.',
      'The business case is well documented. Research by the International Coaching Federation with the Human Capital Institute found that organizations with a strong coaching culture were more likely to report revenue growth above their industry peer group — 51% of them, against 41% of the rest (source: ICF/HCI, Building a Coaching Culture, https://researchportal.coachingfederation.org/Document/Pdf/1313.pdf). The pressure has also grown: Gallup\'s State of the Global Workplace research recorded manager engagement falling from 31% in 2022 to 22% in 2025, the steepest decline of any employee group (source: Gallup, https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx). Managers are the layer that carries coaching into a company, and that layer is under strain.',
      'The gap between wanting a coaching culture and having one is behavioural, and it is measurable. A company either can or cannot point to a manager who asked instead of told last week, a one-to-one that was not cancelled, a piece of critical feedback that travelled upward, and a promotion decision that visibly weighed how well someone develops their people. Values statements are cheap; those four behaviours are not.',
      'The assessment on this page scores exactly those behaviours. It is free, takes about three minutes, and is designed to be answered separately by several people in the same organization — leaders, managers and individual contributors — so you can compare the spread. A high average with a wide spread usually means the coaching culture is real in some teams and a slogan in others, which is a different problem from never having started.',
    ],
    faq: [
      {
        q: 'What is corporate coaching?',
        a: 'Corporate coaching is coaching provided within an organization — executive coaching for senior leaders, manager-as-coach training for people managers, and internal coaching programmes run by HR or L&D. It is bought to improve business outcomes such as retention, leadership bench strength and change capability, so it is usually measured against those rather than against individual satisfaction alone.',
      },
      {
        q: 'What is a coaching culture, and how do you know if you have one?',
        a: 'A coaching culture exists when asking rather than telling is the normal managerial reflex, feedback moves in both directions quickly, time for developing people is protected from delivery pressure, and the system — reviews, promotion, manager training — reinforces all three. You can tell you have one by pointing at recent, specific instances of each. If you can only point at the values page, you do not have one yet.',
      },
      {
        q: 'Does building a coaching culture actually pay off?',
        a: 'The evidence points that way. ICF and Human Capital Institute research found 51% of organizations with strong coaching cultures reported revenue growth above their industry peer group, compared with 41% of other organizations. The mechanism is usually indirect: better manager conversations show up first in retention, internal mobility and speed of decision-making.',
      },
      {
        q: 'Who should take the coaching culture assessment?',
        a: 'Anyone with a view of how managers behave: senior leaders, people managers, HR/People/L&D teams, individual contributors, and external coaches or consultants assessing a client. It is most useful when five to twelve people from the same organization answer it independently and compare results before discussing them.',
      },
      {
        q: 'Is this corporate coaching assessment free?',
        a: 'Yes. It is free, takes about three minutes, returns an instant report with a radar chart across four dimensions, and needs no account to start. Coaches and L&D consultants are welcome to use it as a discovery or workshop instrument with clients.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'ccdx4haz',
      slug: 'coaching-culture-scorecard',
      order: 1,
      alsoIn: ['organization-development-coaching', 'leadership-coaching'],
      seo: {
        title: 'Coaching Culture Assessment — Free Coaching Culture Scorecard',
        description:
          'A free 3-minute coaching culture assessment. Score your organization out of 120 across asking vs telling, feedback, development time and reinforcement.',
        overview:
          'Most organizations say they want managers who coach; far fewer can point to a manager who actually did it last week. This free assessment asks about twelve observable behaviours — not values, not intentions — and scores your organization out of 120 across four dimensions: asking vs telling, feedback and candour, time for development, and systems and reinforcement. You get a radar chart showing which dimension is the constraint, and a band from Command & Control to Coaching Culture.',
        whoFor:
          'Senior leaders, people managers, HR/People/L&D teams and individual contributors who want an honest read on how managers here behave — plus external coaches and consultants running a discovery conversation with a corporate client.',
        whatYouLearn: [
          'Whether managers here pull thinking out of people or hand them the answer',
          'Whether real feedback travels upward, and how fast it arrives after the thing it is about',
          'Whether one-to-ones actually happen, and whether they are status updates or development conversations',
          'Whether developing people visibly affects promotion and pay, or only appears in the values',
          'Which single dimension is the constraint — and why strengthening the strong ones changes almost nothing',
        ],
        sampleQuestions: [
          'The last time someone brought their manager a problem they could have solved themselves, what did the manager do?',
          'When did someone last give their own manager critical feedback, unprompted, where you could see it?',
          'How reliably do one-to-ones between managers and their reports actually happen?',
          'Is "develops their people" part of how managers here are actually assessed?',
          'Do senior leaders here visibly get coached themselves?',
        ],
        howItWorks:
          'Twelve scored questions, each worth up to 10 points, for a total out of 120. Every question asks what people here actually did rather than how you would describe the culture. Scores roll up into four dimensions — Asking vs Telling, Feedback & Candour, Time for Development, and Systems & Reinforcement — shown on a radar chart, and the total maps to one of four bands: Command & Control, Pockets of Coaching, Coaching Habit Forming, or Coaching Culture. Read the lowest dimension rather than the total. A few context questions about your role and organization size do not affect your score. It takes about three minutes and is free.',
        faq: [
          {
            q: 'What does a coaching culture assessment measure?',
            a: 'This one measures four dimensions of observable behaviour: whether managers ask rather than tell, whether candid feedback travels in both directions and arrives quickly, whether time for developing people is protected from delivery work, and whether the organization measures, trains and rewards coaching behaviour. It deliberately avoids asking what the company values, because stated values and manager behaviour routinely diverge.',
          },
          {
            q: 'Why does manager coaching training so often fail to stick?',
            a: 'Usually because the system underneath it was not changed. Managers who are measured only on delivery revert within a quarter, whatever the training taught them — the behaviour the organization rewards wins. That is why the Systems & Reinforcement dimension is worth reading first if your score is low: it is the dimension that decides whether investment in the other three survives.',
          },
          {
            q: 'Should several people from the same organization take it?',
            a: 'Yes, and that is the highest-value way to run it. Send it separately to five to twelve people mixing leaders, managers and individual contributors, ask them not to discuss it first, and have everyone type the same organization name. In the debrief, look at the spread rather than the average — the dimension where leaders score high and individual contributors score low is the most valuable conversation available to you.',
          },
          {
            q: 'Is a coaching culture worth building?',
            a: 'ICF and Human Capital Institute research found 51% of organizations with strong coaching cultures reported revenue growth above their industry peer group, against 41% of others. Context matters too: Gallup recorded manager engagement dropping from 31% in 2022 to 22% in 2025, and coaching capability is one of the few levers that works on that layer directly.',
          },
          {
            q: 'What should we do with a low score?',
            a: 'Take your lowest dimension and change one thing inside it, rather than launching a programme across all four. If Systems & Reinforcement is lowest, start there — until developing people shows up in how managers are assessed, skills training washes out. Then re-run the assessment after 90 days; if the number has not moved, the change was announced rather than reinforced.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About three minutes for twelve scored questions plus a few context questions. It is free, gives an instant report with a radar chart across the four dimensions, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
