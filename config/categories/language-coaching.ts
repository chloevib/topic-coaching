import type { CategoryFile } from '../schema'

/**
 * niche · 语言教练
 * 现有 1 道英语能力测评（english-vocabulary-quiz），完整 GEO 内容。
 * 距 ≥3 开页门槛差 2 道；补更多语言/英语测评后去掉 draft 即促级。
 */
export const languageCoaching: CategoryFile = {
  category: {
    slug: 'language-coaching',
    name: 'Language Coach',
    title: 'Language Coaching Quizzes & English Tests',
    description:
      'Free language-coaching quizzes and English tests to check your level, catch common mistakes, and learn a language more effectively.',
    emoji: '🗣️',
    heroCopy: 'Learn a language effectively. Start by seeing exactly where your skills stand today.',
    intro: [
      'Language coaching helps you learn a new language faster by focusing on how you practice, not just how much. A coach helps you set a clear goal, target the gaps holding you back, and build habits that turn study time into real fluency — speaking, listening, reading, and writing with confidence.',
      'These free quizzes are a quick way to benchmark where you are right now. Instead of guessing, you get a concrete score and see the specific mistakes — the tricky vocabulary, grammar traps, and words even native speakers mix up — that separate an intermediate learner from a confident one.',
      'Start with the quiz that matches your goal, get your result in a few minutes, and use it to decide what to practice next. Each is free, needs no signup to start, and ends with a personalized breakdown.',
    ],
    faq: [
      {
        q: 'What does a language coach do?',
        a: 'A language coach helps you learn more efficiently — clarifying your goal (travel, work, exams, or fluency), diagnosing your weak spots, choosing the right methods, and keeping you accountable. Unlike a traditional teacher who follows a fixed syllabus, a coach tailors the plan to how you learn best.',
      },
      {
        q: 'What can a language quiz tell me?',
        a: 'A good quiz gives you a fast, honest benchmark — your current level and the specific vocabulary, grammar, or usage mistakes you make most — so you can focus your practice where it will move the needle instead of studying at random.',
      },
      {
        q: 'Are these language quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
    order: 14,
    parent: 'learning-education',
  },
  quizzes: [
    {
      publicToken: 'ebw5krcp',
      slug: 'english-vocabulary-quiz',
      featured: true,
      order: 1,
      alsoIn: ['writing-coaching'],
      seo: {
        title: 'Test Your English: Vocabulary & Common Mistakes Quiz (Free)',
        description:
          'A free 10-question English test on tricky vocabulary, grammar, and the words even native speakers mix up. Get your score and see how sharp your English is.',
        overview:
          'Think your English is on point? This free 10-question quiz tests the tricky vocabulary, grammar, and confusable words that trip up even native speakers — their vs there, affect vs effect, fewer vs less, and more. Answer, get your score out of 100, and see exactly which common mistakes to fix, with a clear explanation for every question.',
        whoFor:
          'English learners who want to benchmark their level, and confident speakers who want to see whether the classic grammar and spelling traps still catch them out.',
        whatYouLearn: [
          'Your English level score from Beginner to Fluent Pro',
          'Which commonly confused words and grammar rules you still mix up',
          'The correct answer and a short explanation for every question',
          'Where to focus your practice next',
        ],
        sampleQuestions: [
          'Choose the correct word: “They forgot ____ umbrella.” (their / there / they’re / thier)',
          'Choose the correct word: “I have ____ books than you.” (less / fewer / lesser / little)',
          'Choose the correct word: “This medicine will ____ your mood.” (affect / effect / afect / effekt)',
          'What does the idiom “a piece of cake” mean?',
        ],
        howItWorks:
          'You answer 10 multiple-choice and true/false questions covering vocabulary, spelling, grammar, and idioms. Each correct answer adds to your score out of 100, which maps to an English level from Beginner to Fluent Pro, and every question comes with an explanation so you learn as you go. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What does this English test cover?',
            a: 'It focuses on the vocabulary, grammar, and spelling mistakes people make most often — commonly confused words (their/there/they’re, its/it’s, affect/effect, than/then), countable vs uncountable (fewer/less), tricky spellings, idioms, and irregular plurals.',
          },
          {
            q: 'What score means my English is strong?',
            a: 'Scores map to four levels: Beginner, Improving, Confident, and Fluent Pro. Reaching Confident or Fluent Pro means you handle the common traps well, including the words native speakers themselves often mix up.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About three minutes for the 10 questions, and it is free with a score and per-question explanations — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'hbhx5f2b',
      slug: 'language-learning-style-quiz',
      featured: true,
      order: 2,
      alsoIn: ['learning-coaching'],
      seo: {
        title: 'What’s Your Language-Learning Style? Free Quiz',
        description:
          'A free 8-question quiz that reveals how you learn a language best — immersion, structure, conversation, or visual review — plus your path to fluency.',
        overview:
          'This free 8-question quiz reveals how you learn a language best, then hands you a path to fluency built around that style. You are matched to one of four learner types — the Immersion Explorer, the Structured Scholar, the Social Speaker, or the Visual Organizer — each with concrete next steps and a common pitfall to avoid. It takes about two minutes and needs no signup to start.',
        whoFor:
          'Anyone learning a new language — beginners choosing where to start and stalled intermediates who suspect they are using the wrong method for how they actually learn.',
        whatYouLearn: [
          'Your language-learning style: immersion, structured, social, or visual',
          'The study methods most likely to click for you — and which to stop forcing',
          'A tailored path to fluency with a specific next step',
          'The blind spot your style tends to create, so you can balance it',
        ],
        sampleQuestions: [
          'You have 30 free minutes for a new language — do you reach for a podcast, a grammar chapter, a chat with a partner, or a flashcard deck?',
          'A new grammar rule confuses you. What helps most: hearing it in real content, a clear table of examples, using it in conversation, or a color-coded diagram?',
          'How do you most enjoy building vocabulary — picking words up from what you watch, organized themed lists, words you need for real talks, or spaced-repetition cards?',
          'Your ideal language teacher would fill class with real audio and stories, follow a structured curriculum, keep you talking, or give you great notes and visuals.',
        ],
        howItWorks:
          'You answer 8 quick multiple-choice questions about how you like to study, handle grammar, build vocabulary, and track progress. Each answer maps to one of four learning styles, and your most-chosen style becomes your result — with a tailored path to fluency and a caution to keep your practice balanced. Language research consistently finds that regular speaking and listening practice, not passive review alone, is what drives real fluency, so every result pairs your natural style with the input and output you still need.',
        faq: [
          {
            q: 'Is there a “best” language-learning style?',
            a: 'No single style is best — the most effective learners blend all four. This quiz shows your natural default so you can lean into what motivates you while deliberately adding the piece your style tends to skip, such as speaking practice for visual learners or structure for immersion learners.',
          },
          {
            q: 'Will this tell me which language to learn?',
            a: 'No — it focuses on how you learn rather than what to learn. The result works for any language and helps you pick methods, tools, and routines that fit the way you naturally absorb and remember new material.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About two minutes for the 8 questions. It is completely free and gives you a personalized learning-style result with tailored tips — no signup required to start.',
          },
        ],
      },
    },
  ],
}
