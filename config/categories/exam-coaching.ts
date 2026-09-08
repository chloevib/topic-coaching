import type { CategoryFile } from '../schema'

/**
 * niche · 考试教练
 * 无自有 quiz，靠跨分类归属（alsoIn）聚合 5 个既有测评：
 * Stress Type（stress-management）、Procrastination Type（life）、
 * Growth vs Fixed Mindset（mindset）、Memory IQ（memory）、Sleep Quality（sleep）。
 * 定位与 academic-coaching 区分：academic 读「一学期的学习系统」，
 * exam 读「考试本身」——考前焦虑、复习拖延、回忆提取、考砸后的心态、考期睡眠。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const examCoaching: CategoryFile = {
  category: {
    slug: 'exam-coaching',
    name: 'Exam Coach',
    title: 'Exam Coaching Quizzes — Test Anxiety, Revision & Exam Performance',
    description:
      'Free exam coaching quizzes on test anxiety, revision procrastination, recall, mindset, and exam-period sleep. Each takes a few minutes, with no signup.',
    emoji: '📝',
    heroCopy:
      'Most exams are not lost on the day — they are lost in the weeks before it. Find out which part of your exam game is actually costing you marks.',
    intro: [
      'Exam coaching is narrower than academic coaching. Academic coaching builds the study system you run across a whole term; exam coaching works on the exam itself — the last few weeks of revision, the way nerves behave in the hall, how reliably you can pull an answer out of memory under time pressure, and what you do with yourself after a paper that went badly. Those are different skills, and being good at one does not make you good at the other.',
      'Exam anxiety is far more common than most students assume, which matters because a lot of the damage comes from believing you are the only one struggling. A meta-analysis pooling 67 studies and 43,545 students put overall exam anxiety prevalence at about 48%, with roughly 20% in the high-anxiety band and rates somewhat higher among female students (source: Prevalence of exam anxiety: a systematic review and meta-analysis, APA PsycNet, https://psycnet.apa.org/record/2026-89362-001). Research tracking adolescents across a school year also found test anxiety to be predominantly stable rather than something that simply fades with practice — it holds steady for roughly 71–81% of students unless something is actively done about it (source: PubMed, https://pubmed.ncbi.nlm.nih.gov/41843454/).',
      'The other half of the picture is technique, and here the evidence is refreshingly blunt. In a landmark review of ten common study strategies, only two were rated high-utility across subjects, ages, and materials: practice testing and distributed practice — testing yourself, and spreading reviews out over time. Rereading and highlighting, the two habits most students rely on in the final week, were rated low utility (source: Dunlosky et al., Psychological Science in the Public Interest, https://journals.sagepub.com/doi/abs/10.1177/1529100612453266). Studies of test anxiety point in a compatible direction: poor time management and weak study skills are among the strongest correlates, which means much of what feels like an anxiety problem is a preparation problem wearing a disguise.',
      'These free quizzes are a quick way to find out which part is yours. Check how you react under pressure, why revision keeps sliding to tomorrow, how well you actually recall, whether a bad result reads to you as a verdict or as information, and what your sleep is doing during exam season. Each takes a few minutes, is free, and ends with a personalized result and a first step — no signup required to start.',
    ],
    faq: [
      {
        q: 'What does an exam coach do?',
        a: 'An exam coach works on the run-up to a specific exam and on exam-day performance: building a revision timetable that uses spacing and self-testing instead of rereading, rehearsing exam technique and timing, and reducing the anxiety that stops prepared students from showing what they know. A tutor teaches the subject; an academic coach builds your term-long study system; an exam coach gets you through this paper.',
      },
      {
        q: 'How common is exam anxiety?',
        a: 'Common enough that it is closer to the norm than the exception. A meta-analysis across 67 studies and more than 43,000 students found overall exam anxiety prevalence of roughly 48%, with about one student in five in the high-anxiety band. It also tends to be stable across a school year rather than something that wears off on its own, so it usually needs to be worked on deliberately.',
      },
      {
        q: 'What is the best way to revise for an exam?',
        a: 'Test yourself and spread it out. A major review of study techniques rated practice testing and distributed practice as the only two high-utility strategies across subjects and age groups, and rated rereading and highlighting as low utility. In practice that means closing the book and trying to recall, doing past papers under time, and reviewing after a day, a week, and a month rather than cramming the night before.',
      },
      {
        q: 'Why do I keep putting revision off even when I care about the result?',
        a: 'Procrastination around exams is usually an emotion-regulation problem rather than a laziness problem — the task triggers something uncomfortable, and delaying is what makes the discomfort stop. That is why willpower advice rarely works and why knowing your specific pattern helps: the fix for avoidance-driven delay is different from the fix for perfectionism-driven delay. The procrastination type quiz on this page is built to tell them apart.',
      },
      {
        q: 'Does sleep really affect exam performance?',
        a: 'Yes, and it is one of the most commonly traded-away variables during exam season. Sleep is when the day\'s learning is consolidated, so the all-nighter that buys you three extra hours of revision tends to charge them back in recall and concentration the next morning. Checking your sleep quality is a useful part of exam prep, not a distraction from it.',
      },
      {
        q: 'Are these exam quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized result with a breakdown of where to focus — no signup required to start.',
      },
    ],
    order: 13,
    parent: 'learning-education',
  },
  quizzes: [],
}
