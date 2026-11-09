import type { CategoryFile } from '../schema'

/**
 * niche · 生活整理教练
 * 2026-11-10 自挂 life-organization-scorecard（qq9b8rku）、ai-ideal-week-planner（pvbwfeb5，alsoIn life-coaching）。
 * 另有两个测评通过 alsoIn 交叉归属
 * （productivity-style vdes5a8j 来自 career-coaching、
 *   procrastination-type 9gcn38sp 来自 life-coaching）。
 * 2026-09-01 补 intro + faq 并促级上线（去 draft）。
 * 文案已对齐两份卷子在原文件里核对过的真实题目与结果类型：
 *  - vdes5a8j outcome_quiz，围绕专注时段、清单/日程偏好、干扰源、冲刺 vs 长块。
 *  - 9gcn38sp 6 题 outcome_quiz，4 型：Perfectionist / Dreamer / Avoider / Crisis-Maker。
 * intro/faq 引用的外部资料（定性表述）：
 *  - Ferrari JR, "The Prevalence of Procrastination", Psychology Today, 2020
 *    （约 20% 成年人自认长期拖延者）
 *    https://www.psychologytoday.com/us/blog/still-procrastinating/202010/the-prevalence-procrastination
 *  - Sirois FM & Pychyl TA, Social and Personality Psychology Compass 2013;7(2):115-127
 *    （拖延是情绪调节问题而非时间管理问题）
 *    https://onlinelibrary.wiley.com/doi/10.1111/spc3.12011
 */
export const lifeOrganizationCoaching: CategoryFile = {
  category: {
    slug: 'life-organization-coaching',
    name: 'Life Organization Coach',
    title: 'Life Organization Quizzes & Productivity Style Tests',
    description:
      'Free life organization quizzes — find the productivity system that fits how you actually work, and the reason you keep putting things off.',
    emoji: '🗂️',
    heroCopy:
      'Getting organized is not about more discipline. It is about a system that matches how you are wired.',
    intro: [
      'Life organization coaching is about making the everyday run without constant effort — where things live, when work gets done, and how tasks move from a vague worry to something finished. A good coach does not hand you a colour-coded template. They look at how you actually operate, then build the smallest structure that survives a bad week, because a system you abandon by Wednesday is worse than no system at all.',
      'Two things quietly wreck most attempts. The first is borrowing someone else\'s method: time-blocking that rescues one person paralyzes another, and a detailed list that calms one brain overwhelms the next. The second is treating delay as a discipline problem. Research argues the opposite — Sirois and Pychyl describe procrastination as short-term mood repair rather than poor time management, meaning you postpone a task to escape the feeling it triggers, not because you cannot read a calendar (source: https://onlinelibrary.wiley.com/doi/10.1111/spc3.12011). It is common, too: work summarized by Joseph Ferrari puts chronic procrastination at roughly 20% of adults (source: https://www.psychologytoday.com/us/blog/still-procrastinating/202010/the-prevalence-procrastination).',
      'Start with the Life Organization Scorecard if you are not sure where the chaos actually lives: twelve concrete questions score your home, time, paperwork and everyday habits out of 120 and name the one bottleneck to fix first. Then two quizzes take one half of the problem each. The Productivity Style quiz finds when you focus best, how you feel about lists and rigid schedules, what derails you first, and whether you run on short sprints or long blocks — then names the systems most likely to fit and one change to try this week. The Procrastination Type quiz sorts you into Perfectionist, Dreamer, Avoider, or Crisis-Maker and gives you a first step matched to your driver. Finally, the AI Ideal Week Planner turns all of it into an actual Monday-to-Sunday schedule with routines and boundary scripts. Each is free and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a life organization coach do?',
        a: 'A life organization coach helps you build the practical structure your week runs on: how tasks get captured and chosen, when focused work happens, how commitments and spaces stay manageable, and what happens when the plan falls apart. The work is behavioural rather than aesthetic — the goal is a routine that holds up on a bad week, not a system that looks good on day one.',
      },
      {
        q: 'Why do productivity systems work for some people and not others?',
        a: 'Because attention, motivation, and planning genuinely differ between people. Someone who does their best thinking at 6am with a rigid schedule and someone who works in unpredictable bursts need different structures, even for identical work. Matching the method to your style is what turns it into a habit instead of another abandoned app.',
      },
      {
        q: 'Is procrastination a time-management problem?',
        a: 'Usually not. The dominant view in the research literature — argued by Sirois and Pychyl — is that procrastination is an emotional-regulation problem: you delay to avoid an uncomfortable feeling the task triggers, such as fear of failure, boredom, or being overwhelmed. That is why better calendars rarely fix it, and why naming your specific driver is the more useful first step.',
      },
      {
        q: 'What are the four procrastination types?',
        a: 'The Perfectionist, who cannot start until conditions are ideal; the Dreamer, who loves the vision but never lands on the details; the Avoider, who delays to escape judgement or discomfort; and the Crisis-Maker, who only moves under deadline pressure. Each result explains what is driving the pattern and gives you a matched first step rather than generic advice to try harder.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the Productivity Style quiz if you get things done but inconsistently, and want a setup that finally sticks. Start with the Procrastination Type quiz if the problem is starting at all — if important tasks slide for days while smaller ones get done. Many people take both: one explains the system, the other explains the stall.',
      },
      {
        q: 'Are these organization quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes between two and five minutes, and ends with a personalized result and a concrete first step — no signup required to start.',
      },
    ],
    order: 14,
    parent: 'lifestyle-interests',
  },
  quizzes: [
    {
      publicToken: 'qq9b8rku',
      slug: 'life-organization-scorecard',
      order: 1,
      seo: {
        title: 'Life Organization Scorecard: How Organized Are You?',
        description:
          'A free 4-minute life organization test. Score your home, time, paperwork and habits out of 120 and find the one bottleneck to fix first.',
        overview:
          'Clutter is rarely a stuff problem — it is a systems problem. This free life organization scorecard asks twelve concrete questions about your keys, counters, calendar, to-do list, paperwork, inbox and how long your last clean-up lasted, then scores you across four areas: home and physical space, time and calendar, paperwork and digital admin, and everyday systems and habits. Instead of a vague verdict, it names the one area that is quietly holding the others back.',
        whoFor:
          'Anyone who keeps starting over with getting organized — and professional organizers, productivity coaches and office managers who want a quick, comparable baseline for a client, household or team.',
        whatYouLearn: [
          'Your overall score out of 120 and the band you fall into',
          'Separate scores for home and space, time and calendar, paperwork and digital admin, and systems and habits',
          'Which of the four areas is your real bottleneck',
          'Why reorganizing pushes fade within weeks, and the weekly reset habit that makes them stick',
        ],
        sampleQuestions: [
          'The last time you needed your keys, wallet or phone before leaving, what happened?',
          'How much on your kitchen counters and entryway has no permanent home?',
          'A bill, form or official letter arrives. What happens to it?',
          'You need your passport or a tax record today. How long would it take to put your hands on it?',
          'How long did the results of your last big clean-up actually last?',
        ],
        howItWorks:
          'Twelve scenario questions — three for each of four areas — are each scored from 1 to 10 based on what you actually did recently, not what you intend to do. They add up to a score out of 120 with a breakdown by area. A few optional questions at the end (who you are organizing for, who shares the space, and the one thing you would change) do not affect your score; if several people in the same household or team enter the same name, their results can be compared side by side. It takes about four minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a good life organization score?',
            a: 'Higher is better, but the breakdown matters more than the total. A middling score with one very low area usually means a single broken system — often paperwork or a missing weekly reset — is dragging everything else down. Fix that one first.',
          },
          {
            q: 'Why does my house get messy again so fast after I clean?',
            a: 'Because a clean-up resets the result, not the system. Without a home for every item and a short weekly reset, new things land on the nearest surface and the piles regrow. Two of the scorecard questions measure exactly that.',
          },
          {
            q: 'Can professional organizers use this with clients?',
            a: 'Yes. It asks whether you are assessing your own life, a family member, a client or a shared office, and lets you tag results with a household, team or client name so before-and-after or multi-person results can be compared.',
          },
          {
            q: 'Is the life organization scorecard free?',
            a: 'Yes. It is free, takes about four minutes, and gives you a score and breakdown immediately — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'pvbwfeb5',
      slug: 'ai-ideal-week-planner',
      order: 2,
      alsoIn: ['life-coaching'],
      seo: {
        title: 'Free AI Ideal Week Planner: Design Your Time Blocks',
        description:
          'Answer 12 questions for a free AI ideal week plan: a time audit, a Monday-to-Sunday time-block schedule, morning and evening routines and boundary scripts.',
        overview:
          'Most people have more time than it feels like; it just is not going where they want. The U.S. Bureau of Labor Statistics\' American Time Use Survey consistently finds that watching TV takes up roughly half of Americans\' daily leisure time. This free AI ideal week planner asks 12 questions about your commitments, energy, time sinks and priorities, and asks you to describe an ideal but realistic Tuesday. It then returns a Time Blueprint: a time audit with what to reclaim, a Monday-to-Sunday timetable that protects your non-negotiable, morning and evening routines, and word-for-word boundary scripts.',
        whoFor:
          'Busy professionals, business owners, parents juggling caregiving, and students who feel their week runs them rather than the other way round. Productivity and life coaches can use it as a practical starting point for time-management work.',
        whatYouLearn: [
          'A Time Alignment score out of 10 and a short, kind read on where you are',
          'A time audit of your biggest time sinks, with a reclaim strategy for each',
          'An ideal-week timetable with focused work placed in your peak-energy hours and buffers built in',
          'Five-to-fifteen-minute morning and evening shutdown routines',
          'Three boundary scripts for saying no, and a 15-minute weekly review that fits how you already plan',
        ],
        sampleQuestions: [
          'What fixed commitments shape your week — school runs, commute, regular meetings or classes?',
          'When is your energy at its peak?',
          'Where does your time slip away: scrolling, email, meetings, streaming, saying yes to too much, or switching between tasks?',
          'Describe an ideal but realistic ordinary Tuesday, from waking up to going to bed.',
          'What is one thing you want protected in your week, no matter what?',
        ],
        howItWorks:
          'Three short parts — your life right now, where your time goes, and your ideal — take about five minutes. An AI coach then builds a timetable around your fixed commitments and working hours, places demanding work in your peak-energy window and keeps rest in the plan rather than squeezing it out. Time estimates in the audit are labelled as estimates. Time-use background: U.S. Bureau of Labor Statistics, American Time Use Survey (https://www.bls.gov/tus/). The planner is free and needs no signup to start.',
        faq: [
          {
            q: 'What is time blocking?',
            a: 'Time blocking means giving specific kinds of work their own slots in your calendar instead of working down a to-do list. It protects focused work from email and meetings and makes trade-offs visible. The planner builds a time-blocked week around your real commitments and energy.',
          },
          {
            q: 'How do I plan my ideal week?',
            a: 'Start with the commitments you cannot move, put your most demanding work where your energy peaks, protect one non-negotiable — exercise, family dinner, a creative hour — and leave buffers so one overrun does not wreck the day. Then review it weekly and adjust.',
          },
          {
            q: 'How is this different from the Productivity Style quiz?',
            a: 'The Productivity Style quiz tells you which kind of system fits how you work. The ideal week planner builds the actual schedule. Many people take the style quiz first, then use the planner to turn it into a concrete week.',
          },
          {
            q: 'Is the AI ideal week planner free?',
            a: 'Yes. The quiz and your full Time Blueprint are free, take about five minutes, and need no signup to start.',
          },
        ],
      },
    },
  ],
}
