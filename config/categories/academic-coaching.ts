import type { CategoryFile } from '../schema'

/**
 * niche · 学业教练
 * 首题：General Knowledge Quiz（t3ppkthk），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const academicCoaching: CategoryFile = {
  category: {
    slug: 'academic-coaching',
    name: 'Academic Coach',
    title: 'Academic Coaching Quizzes & Study Skills Tests',
    description:
      'Free academic coaching quizzes and study skills tests — check your general knowledge, learning style, memory and vocabulary in a few minutes each.',
    emoji: '🎓',
    heroCopy: 'Find out how you actually learn — then study for that, not against it.',
    intro: [
      'Academic coaching is not tutoring. A tutor explains the subject; an academic coach works on everything around it — how you plan a week, how you revise, how you handle a deadline you have already half-missed, and how you keep going when motivation runs out. It treats studying as a set of learnable habits rather than a talent you either have or do not.',
      'The research behind it is unusually encouraging for a field this young. A 2025 systematic review of academic coaching in higher education found consistent benefits across academic performance, retention, executive function, self-regulation and wellbeing, with moderate to large effect sizes. Individual programmes report semester GPA gains of roughly 0.3 for students who attend at least one session and around 0.5 for those who complete three or more, alongside double-digit improvements in returning the following term. The pattern across studies is simple: a small number of structured conversations changes study behaviour more reliably than being told to work harder.',
      'These free quizzes are a fast way to see where your own study system stands. Start with the general knowledge quiz for a low-pressure read on your recall across science, geography and history, then use the learning style and memory tests to work out how information actually sticks for you. Each takes a few minutes, is free, and gives you a score with an explanation after every question — so the quiz doubles as a short revision session.',
    ],
    faq: [
      {
        q: 'What does an academic coach do?',
        a: 'An academic coach works on the process of studying rather than the content of a subject: planning and time management, revision technique, note-taking, exam strategy, procrastination, and the self-regulation habits that hold all of it together. Sessions are usually short, regular, and built around goals the student sets themselves.',
      },
      {
        q: 'How is academic coaching different from tutoring?',
        a: 'A tutor teaches the material — the calculus, the essay, the chemistry. A coach teaches the system around the material: when you study, how you revise, how you recover from a bad week. Students who understand the content but keep underperforming usually need coaching; students who genuinely do not follow the material need a tutor. Many benefit from both.',
      },
      {
        q: 'Does academic coaching actually improve grades?',
        a: 'The evidence points that way. Published programme evaluations report semester GPA increases of about 0.3 for students attending at least one coaching session and roughly 0.5 for those completing three or more, and a 2025 systematic review found moderate to large effects on performance, retention and executive function. Effects are largest for students who were struggling to begin with.',
      },
      {
        q: 'Who is academic coaching for?',
        a: 'Most often university and college students, but also secondary students preparing for exams, adults returning to study, and anyone learning something demanding alongside a job. It is especially useful for students with ADHD or executive-function difficulties, where the barrier is rarely understanding and almost always structure.',
      },
      {
        q: 'Are these academic quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a score with an explanation after each question — no signup required to start.',
      },
    ],
    order: 12,
    parent: 'learning-education',
  },
  quizzes: [
    {
      publicToken: 't3ppkthk',
      slug: 'general-knowledge-quiz',
      featured: true,
      order: 1,
      seo: {
        title: 'General Knowledge Quiz — How Smart Are You Really?',
        description:
          'A free 10-question general knowledge quiz on science, space, geography and history. Get a score out of 100 and an explanation after every answer.',
        overview:
          'This free 10-question general knowledge quiz spans science, space, the human body, geography and a few facts most people get wrong. You score out of 100 and land as a Curious Mind, Quick Learner, Sharp Thinker or Certified Genius — and every question comes with a short explanation, so it works as much as a quick lesson as a test. It takes a few minutes and needs no signup to start.',
        whoFor:
          'Students who want a low-pressure read on their recall, trivia fans looking for a quick challenge, and anyone curious how their general knowledge compares.',
        whatYouLearn: [
          'Your general knowledge score out of 100 and which of four levels you land in',
          'Core science facts — the hardest natural material, what the mitochondria do, which gas dominates the atmosphere',
          'Space and geography basics, from the largest planet to the largest ocean',
          'Which widely repeated "facts" are actually myths, with a short explanation each time',
        ],
        sampleQuestions: [
          'What is the largest planet in our solar system?',
          'The Great Wall of China is visible from space with the naked eye — true or false?',
          'How many bones are in the adult human body?',
          'Which gas makes up most of the Earth’s atmosphere?',
        ],
        howItWorks:
          'You answer 10 multiple-choice and true/false questions drawn from science, space, biology, geography and common misconceptions. Each correct answer is worth 10 points for a total out of 100, which maps to one of four levels — Curious Mind, Quick Learner, Sharp Thinker, or Certified Genius. After every question you get the correct answer and a one-line explanation, so you pick up the facts you missed as you go. It is free and needs no signup to start.',
        faq: [
          {
            q: 'What topics does the general knowledge quiz cover?',
            a: 'Ten questions spread across astronomy, chemistry, human biology, physics, geography and popular myths — the largest planet, the symbol for gold, the number of bones in the adult body, the largest ocean, and whether sound really travels faster in water than in air.',
          },
          {
            q: 'Is the Great Wall of China really visible from space?',
            a: 'No — and it is one of the most repeated myths in general knowledge. The wall is long but only a few metres wide, far too narrow to pick out with the naked eye from orbit against a similarly coloured landscape.',
          },
          {
            q: 'How is a general knowledge quiz useful for studying?',
            a: 'Answering questions before you review the material is a well-established study technique: retrieval practice strengthens memory more than rereading does. Because every question here is followed by an explanation, a short quiz like this gives you both a benchmark and a small amount of genuine revision.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'A few minutes for the 10 questions. It is free, scores you out of 100, and explains every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
