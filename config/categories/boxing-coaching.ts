import type { CategoryFile } from '../schema'

/**
 * niche · 拳击教练
 * 首题：Boxing IQ knowledge quiz（82bqjzjf），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const boxingCoaching: CategoryFile = {
  category: {
    slug: 'boxing-coaching',
    name: 'Boxing Coach',
    title: 'Boxing Coach Quizzes & Boxing IQ Tests',
    description:
      'Free boxing quizzes to test your boxing IQ — rules, technique, and famous fights — and check how well you really know the sweet science.',
    emoji: '🥊',
    heroCopy: 'Sharpen your boxing knowledge and technique. Start by testing what you really know.',
    intro: [
      'Boxing coaching builds the fundamentals that separate a flailing beginner from a controlled boxer: stance and footwork, a sharp jab, defense and head movement, and the ring craft to read an opponent. It is called “the sweet science” for a reason — timing, distance, and strategy matter as much as power. Understanding the rules, punches, and history of the sport is the first step toward training and sparring smarter.',
      'These free quizzes are a fast way to test your boxing IQ and fill the gaps. Whether you are new to the heavy bag or a lifelong fan, knowing why the jab sets up every combination, what a technical knockout actually means, or how the sanctioning bodies work makes you a sharper student of the sport — and a safer, more thoughtful trainee in the gym.',
      'Pick a quiz, answer at your own pace, and learn from the explanation after every question. Each is free, takes just a few minutes, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a boxing coach do?',
        a: 'A boxing coach teaches the fundamentals — stance, footwork, punches, and defense — then develops your conditioning, ring craft, and sparring safely. Good coaches emphasize technique and defense before power, and tailor pad work and drills to your level and goals, whether fitness, competition, or confidence.',
      },
      {
        q: 'Do I need boxing knowledge before I start training?',
        a: 'You do not need to be an expert, but understanding the basics — the punches, the rules, and core defensive ideas — helps you learn faster and train more safely. Testing your boxing IQ is a quick, low-pressure way to see what you already know and where to focus.',
      },
      {
        q: 'Are these boxing quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a score with an explanation after each question — no signup required to start.',
      },
    ],
    order: 18,
    parent: 'sports-athletics',
  },
  quizzes: [
    {
      publicToken: '82bqjzjf',
      slug: 'boxing-iq-quiz',
      featured: true,
      order: 1,
      seo: {
        title: 'What’s Your Boxing IQ? Free 10-Question Boxing Quiz',
        description:
          'Test your boxing IQ with this free 10-question quiz on the rules, technique, and famous fights of the sweet science. Every answer comes with an explanation.',
        overview:
          'This free 10-question quiz tests your knowledge of boxing across rules, technique, and history — from the jab and the southpaw stance to the 12-round championship limit and Ali’s rope-a-dope. You score out of 100 and land as a Ringside Rookie, Solid Contender, or Boxing Brainiac, and every question comes with a short explanation so you sharpen up as you go. It takes a few minutes and needs no signup to start.',
        whoFor:
          'Boxing fans who want to test how deep their knowledge really goes, and beginners in the gym who want to learn the sport’s rules, punches, and lore.',
        whatYouLearn: [
          'Your boxing IQ score out of 100 and your knowledge level',
          'Core rules: rounds, the ten count, TKO, and sanctioning bodies',
          'Technique basics: the jab, uppercut, and orthodox vs southpaw stance',
          'Famous moments like the rope-a-dope, with a clear explanation each time',
        ],
        sampleQuestions: [
          'How many rounds are in a modern men’s professional world championship boxing match?',
          'What does the abbreviation “TKO” stand for?',
          'Which boxer famously used the “rope-a-dope” against George Foreman in 1974?',
          'A “southpaw” boxer leads with which hand?',
        ],
        howItWorks:
          'You answer 10 multiple-choice questions covering rules, technique, and boxing history. Each correct answer is worth 10 points for a total out of 100, which maps to one of three levels — Ringside Rookie, Solid Contender, or Boxing Brainiac. After every question you get the correct answer and a short explanation, so the quiz doubles as a quick lesson in the sweet science. It is free and needs no signup to start.',
        faq: [
          {
            q: 'What does the boxing quiz cover?',
            a: 'It mixes rules (rounds, the ten count, technical knockouts, sanctioning bodies), technique (the jab, uppercut, and orthodox vs southpaw stance), and history (the “sweet science” nickname and Ali’s rope-a-dope), so it rewards both fans and students of the sport.',
          },
          {
            q: 'Why were championship fights cut from 15 rounds to 12?',
            a: 'The limit was reduced in the 1980s over safety concerns, with the WBC leading the change in 1982. Modern professional championship bouts run 12 three-minute rounds with one minute of rest between them.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'A few minutes for the 10 questions. It is free, gives you a score out of 100, and explains every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
