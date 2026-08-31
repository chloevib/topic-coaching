import type { CategoryFile } from '../schema'

/**
 * niche · 生活整理教练
 * 本身不挂题：两个测评通过 alsoIn 交叉归属
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
    title: 'Life Organization Coaching Quizzes & Productivity Style Tests',
    description:
      'Free life organization quizzes — find the productivity system that fits how you actually work, and the reason you keep putting things off.',
    emoji: '🗂️',
    heroCopy:
      'Getting organized is not about more discipline. It is about a system that matches how you are wired.',
    intro: [
      'Life organization coaching is about making the everyday run without constant effort — where things live, when work gets done, and how tasks move from a vague worry to something finished. A good coach does not hand you a colour-coded template. They look at how you actually operate, then build the smallest structure that survives a bad week, because a system you abandon by Wednesday is worse than no system at all.',
      'Two things quietly wreck most attempts. The first is borrowing someone else\'s method: time-blocking that rescues one person paralyzes another, and a detailed list that calms one brain overwhelms the next. The second is treating delay as a discipline problem. Research argues the opposite — Sirois and Pychyl describe procrastination as short-term mood repair rather than poor time management, meaning you postpone a task to escape the feeling it triggers, not because you cannot read a calendar (source: https://onlinelibrary.wiley.com/doi/10.1111/spc3.12011). It is common, too: work summarized by Joseph Ferrari puts chronic procrastination at roughly 20% of adults (source: https://www.psychologytoday.com/us/blog/still-procrastinating/202010/the-prevalence-procrastination).',
      'The two free quizzes here take one half each. The Productivity Style quiz finds when you focus best, how you feel about lists and rigid schedules, what derails you first, and whether you run on short sprints or long blocks — then names the systems most likely to fit and one change to try this week. The Procrastination Type quiz sorts you into Perfectionist, Dreamer, Avoider, or Crisis-Maker and gives you a first step matched to your driver. Each takes about two minutes, is free, and needs no signup to start.',
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
        a: 'Yes. Both are free, take about two minutes each, and end with a personalized result and a concrete first step — no signup required to start.',
      },
    ],
    order: 14,
    parent: 'lifestyle-interests',
  },
  quizzes: [],
}
