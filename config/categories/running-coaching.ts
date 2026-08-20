import type { CategoryFile } from '../schema'

/**
 * niche · 跑步教练
 * 本身不挂题：runner-type（acbrrbf4）由 fitness-coaching 通过 alsoIn 交叉归属。
 * 已补 intro + faq 并促级上线（去 draft）。
 * 文案已对齐线上卷真实内容（2026-08-21 用 get_form 核对）：
 *  - acbrrbf4 为 8 题 outcome_quiz，5 型结果：
 *    Zen Jogger / Competitor / Social Runner / Trail Explorer / Data-Driven Runner。
 * intro 引用的外部资料：
 *  - SFIA 2025 Topline Participation Report（running/jogging 首次自 2020 年后重回 5,000 万人以上）
 *    https://sfia.org/resources/sfias-topline-participation-report-shows-247-1-million-americans-were-active-in-2024/
 *  - Int. J. Environ. Res. Public Health 2023;20(17):6682（英国 Couch-to-5K 研究，
 *    110 人参与、27.3% 完成率、19% 报告伤病，非完成主因为伤病与进度过快）
 *    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10487403/
 */
export const runningCoaching: CategoryFile = {
  category: {
    slug: 'running-coaching',
    name: 'Running Coach',
    title: 'Running Coach Quizzes & Runner Type Tests',
    description:
      'Free running quizzes to find your runner type and train the way you are wired — pace, endurance, trails, and the habits that keep you consistent.',
    emoji: '🏃',
    heroCopy:
      'Train for the way you actually run. Start by finding out what kind of runner you are.',
    intro: [
      'Running coaching is mostly about progression and fit. A good running coach builds mileage at a rate your body can absorb, adds the speed and strength work that makes you durable, and — just as importantly — shapes a plan around why you run in the first place. Someone chasing a personal best needs a different week from someone who runs to clear their head, even if both are training for the same 5K.',
      'That fit matters more than most beginners expect. A UK study of a nine-week Couch-to-5K programme published in the International Journal of Environmental Research and Public Health followed 110 novice runners and found that only 27.3% finished it, with 19% reporting an injury along the way. Interviews pointed to two main reasons for dropping out: musculoskeletal injury and a programme that progressed too aggressively — and the authors recommended future plans build in injury-prevention guidance and more flexible progression (source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10487403/). Running is also more popular than it has been in years: SFIA reported running and jogging passing 50 million U.S. participants for the first time since 2020 (source: https://sfia.org/resources/sfias-topline-participation-report-shows-247-1-million-americans-were-active-in-2024/).',
      'The free quiz on this page starts with motivation rather than mileage. In eight questions it sorts you into one of five runner types — the Zen Jogger, who runs for calm; the Competitor, who chases the PR; the Social Runner, who shows up for the people; the Trail Explorer, who needs new routes; and the Data-Driven Runner, who trains by heart rate and cadence — and gives each one a concrete next step. It takes about two minutes, is free, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a running coach actually do?',
        a: 'A running coach sets your weekly structure — easy miles, speed work, long runs, and recovery — at a progression your body can handle, and adds strength and technique work to keep you injury-free. Coaches also handle the parts plans usually miss: pacing by effort, adapting a week when life gets busy, and race-day strategy.',
      },
      {
        q: 'What are the five runner types in the quiz?',
        a: 'The Zen Jogger runs to feel good rather than to chase numbers. The Competitor is driven by splits and personal bests. The Social Runner is kept consistent by community and accountability. The Trail Explorer needs variety, hills, and new routes. The Data-Driven Runner trains by heart rate, cadence, and recovery scores. Each result explains the strength of that style and the one thing to work on next.',
      },
      {
        q: 'Why does knowing my runner type help?',
        a: 'Because most beginner plans fail on adherence rather than fitness. Research on Couch-to-5K programmes found injury and overly aggressive progression were the main reasons people quit. Knowing what actually keeps you lacing up — calm, competition, company, scenery, or data — tells you which plan you will still be following in week six.',
      },
      {
        q: 'Do I need to be a runner already to take this quiz?',
        a: 'No. The questions are about motivation and preference, not performance, so complete beginners, returning runners, and marathoners all get a useful result. Nothing in it measures your pace or fitness.',
      },
      {
        q: 'Is the running quiz free?',
        a: 'Yes. It is free, takes about two minutes, and gives you a personalized runner type with a suggested next step — no signup required to start.',
      },
    ],
    order: 16,
    parent: 'sports-athletics',
  },
  quizzes: [],
}
