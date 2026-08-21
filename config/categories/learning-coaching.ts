import type { CategoryFile } from '../schema'

/**
 * niche · 学习教练
 * 无自有 quiz，靠跨分类归属（alsoIn）聚合：VARK 学习风格（life-coaching）、
 * Memory IQ（memory-coaching）、Language-Learning Style（language-coaching）。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const learningCoaching: CategoryFile = {
  category: {
    slug: 'learning-coaching',
    name: 'Learning Coach',
    title: 'Learning Coach Quizzes — Learn Faster, Study Smarter',
    description:
      'Free quizzes on how you learn best — learning styles, memory, and the study methods research actually supports. Every answer explained, no signup.',
    emoji: '📚',
    heroCopy:
      'Learning is a skill you can train. Start by finding out how you take in information — and which study habits actually hold up.',
    intro: [
      'Learning coaching is about method, not talent. A learning coach helps you work out how you take in new material, then replaces the habits that feel productive but rarely are — re-reading, highlighting, passively watching lectures — with techniques that reliably move information into long-term memory. It applies just as much to an adult picking up a language or a certification as it does to a student sitting exams.',
      'The evidence is unusually clear about which techniques work. In a landmark review of ten popular study strategies, Dunlosky and colleagues rated only two as high-utility across subjects, ages, and materials: practice testing (retrieval practice) and distributed practice (spacing your reviews out over time). Rereading and highlighting — by far the most common student habits — were rated low utility (source: Dunlosky et al., Psychological Science in the Public Interest, https://journals.sagepub.com/doi/abs/10.1177/1529100612453266).',
      'Learning preferences are a more nuanced story, and worth understanding before you build a study plan around them. Frameworks like VARK describe real preferences about how people like information presented, and knowing yours makes study feel less like a slog. What the research does not support is the stronger claim — that matching instruction to a preferred style improves results. Pashler and colleagues reviewed the literature and found no adequate evidence base for the so-called meshing hypothesis (source: Pashler, McDaniel, Rohrer & Bjork, Psychological Science in the Public Interest, https://journals.sagepub.com/doi/10.1111/j.1539-6053.2009.01038.x). The practical read: use your preference to choose materials you will actually stick with, and use retrieval and spacing to do the real work.',
      'A quick self-check is a sensible starting point — and answering questions from memory is itself retrieval practice. Each quiz on this page is free, takes a few minutes, and explains every answer.',
    ],
    faq: [
      {
        q: 'What does a learning coach do?',
        a: 'A learning coach diagnoses how you currently study, then builds a method around evidence-based techniques: retrieval practice instead of re-reading, reviews spaced over increasing intervals, interleaved problem sets, and realistic planning. The output is a repeatable system you can run yourself, not a set of motivational tips.',
      },
      {
        q: 'Is a learning coach only for students?',
        a: 'No. Adults make up a large share of the work — professionals preparing for certifications, career changers learning a technical skill, and anyone studying a language. The techniques are the same; the constraint is usually time, so spacing and short, focused retrieval sessions matter even more.',
      },
      {
        q: 'Should I choose study methods based on my learning style?',
        a: 'Use it as a tiebreaker, not a strategy. Knowing you prefer diagrams or discussion helps you pick materials you will stay with, but reviews of the research find no reliable benefit from matching teaching to a preferred style. The methods that consistently improve retention — self-testing and spaced review — work regardless of your preference.',
      },
      {
        q: 'What is the fastest way to start learning more effectively?',
        a: 'Close the book and try to recall what you just read, then check. Repeat that after a day, a week, and a month. Those two moves — retrieval practice and spacing — are the only study techniques a major review rated high-utility across nearly every subject and age group.',
      },
      {
        q: 'Are these learning quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized result with an explanation for each answer — no signup required to start.',
      },
    ],
    order: 11,
    parent: 'learning-education',
  },
  quizzes: [],
}
