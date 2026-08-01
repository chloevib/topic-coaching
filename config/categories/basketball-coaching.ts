import type { CategoryFile } from '../schema'

/** niche · 篮球教练 */
export const basketballCoaching: CategoryFile = {
  category: {
    slug: 'basketball-coaching',
    name: 'Basketball Coach',
    title: 'Basketball Coach Quizzes & Assessments',
    description:
      'Sharpen your skills, team play, and knowledge of the game. Free basketball coaching quizzes and assessments.',
    emoji: '🏀',
    heroCopy:
      'Raise your hoops game — start by testing how well you know the rules, scoring, positions, and NBA history.',
    order: 12,
    parent: 'sports-athletics',
    intro: [
      'Basketball coaching brings together fundamentals, team play, and game sense: shooting and ball-handling, spacing and positions, and the rules that shape every possession. Knowing how the game works — from the shot clock to what counts as traveling — gives you a foundation that skill work and tactics build on.',
      'A quick knowledge check is an easy way to see where you stand, covering scoring, rules, positions, and NBA history. Each answer explains the why, so you leave a little sharper than you arrived.',
      'Basketball is the most popular team sport in the United States: about 29.7 million Americans aged 6 and older played in 2023, and participation has grown 13% since 2019 (source: SFIA 2023 U.S. Trends in Team Sports Report, https://sfia.org/resources/team-sport-participation-recovered-to-pre-pandemic-levels-last-year/). These free quizzes are a friendly first step for players, fans, and coaches.',
    ],
    faq: [
      {
        q: 'What does a basketball coach help with?',
        a: 'A basketball coach helps you develop shooting form, ball-handling, and footwork, plus team concepts like spacing, defense, and reading the game — alongside the rules and scoring knowledge that help you play and coach with confidence.',
      },
      {
        q: 'Do I need to play basketball to take these quizzes?',
        a: 'No. The quizzes suit players and fans at any level. Each question comes with a short explanation, so you learn the game whether you are picking up a ball or following the NBA.',
      },
      {
        q: 'Are these basketball quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'u7xw2qsy',
      slug: 'basketball-iq-quiz',
      order: 1,
      seo: {
        title: 'Basketball IQ Quiz — Test Your Knowledge of the Game (Free 12-Question Quiz)',
        description:
          'A free 12-question basketball IQ quiz on rules, scoring, positions, and NBA history — from the shot clock and traveling to triple-doubles and the all-time scoring record. Each answer comes with a quick explanation.',
        overview:
          'Think you know basketball? This free 12-question quiz tests your grasp of rules, scoring, positions, and NBA history — from the 24-second shot clock to double-doubles and the all-time scoring record — and reveals your Basketball IQ in about three minutes. Each answer comes with a quick explanation, so you pick up something new.',
        whoFor:
          'Basketball players, fans following the NBA, and coaches who want a quick, fun check of hoops knowledge and terminology.',
        whatYouLearn: [
          'Your Basketball IQ level from Bench Warmer to Hoops MVP',
          'Core rules like the shot clock, fouling out, and traveling',
          'How scoring works, including the three-point line and stat lines',
          'Positions, court terms like "the paint," and NBA history',
        ],
        sampleQuestions: [
          'How long is the NBA shot clock?',
          'A shot made from beyond the three-point line is worth how many points?',
          'What is a "double-double"?',
          'Who is the NBA’s all-time leading scorer in the regular season?',
        ],
        howItWorks:
          'You answer 12 multiple-choice questions on rules, scoring, positions, and NBA history, each worth 10 points toward your Basketball IQ. Every question includes an explanation, so you learn as you play. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a basketball skills test or a knowledge quiz?',
            a: 'It is a knowledge quiz covering rules, scoring, positions, and NBA history — the basketball IQ that complements your on-court game. It does not assess your physical shooting or ball-handling.',
          },
          {
            q: 'What is a good Basketball IQ score?',
            a: 'Scores map to three levels: Bench Warmer, Solid Role Player, and Hoops MVP. Scoring 100 or above out of 120 means you know the game inside and out.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes, and it is free with a personalized result and an explanation for every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
