import type { CategoryFile } from '../schema'

/**
 * niche · 运动表现教练
 * 2026-11-03 促级上线（去 draft）：补 4 段 intro + 5 条 FAQ。
 * 自有 1 道：athlete-performance-scorecard（f4ufrhta）。
 * 经 alsoIn 交叉归属 2 道：ai-workout-plan（p8bttrhc，fitness）、fitness-level-assessment（qg768s6r，fitness）。
 * 共 3 道，达到开页门槛。
 */
export const sportsPerformanceCoaching: CategoryFile = {
  category: {
    slug: 'sports-performance-coaching',
    name: 'Sports Performance Coach',
    title: 'Sports Performance Coaching Quizzes — Athlete Assessments',
    description:
      'Free sports performance quizzes for athletes and coaches: score training design, recovery, fuelling and mental game, check your fitness level, and get a plan.',
    emoji: '🎯',
    heroCopy:
      'Most athletes who plateau are not training too little. Find the pillar that is quietly leaking your gains.',
    intro: [
      'Sports performance coaching is about turning training into results on the day that counts. Where a fitness coach builds general health and capacity, a performance coach works backwards from a competition or a goal time — planning how load progresses, making the training specific to the sport, managing recovery, fuelling the sessions that matter, and rehearsing the mental side so it holds up under pressure.',
      'Plateaus usually come from the parts nobody watches. Training gets the attention, but recovery is where adaptation happens. In one well-known Stanford study, varsity basketball players who extended their sleep for several weeks — adding close to two hours a night on average — ran faster sprint times and improved free-throw and three-point accuracy by about 9% (source: Mah et al., Sleep, 2011, https://pmc.ncbi.nlm.nih.gov/articles/PMC3119836/). The sample was small, but the lesson is widely shared by coaches: an athlete with an excellent programme and poor sleep has a recovery problem, not a training problem.',
      'The same logic applies to fuelling and to the mental game. What you eat in the two hours either side of a hard session, how you hydrate in the heat, and whether you have a rehearsed routine for the ten minutes before a start all decide whether the fitness you have built shows up on the clock. These are learnable skills, and they tend to be the cheapest gains available to recreational and club athletes.',
      'These free assessments help you find where to start. The Athlete Performance Scorecard grades training design, recovery and sleep, fuelling and hydration, and mental game on a radar chart. The Fitness Level Assessment benchmarks your current capacity, and the AI Workout Plan turns your goal, schedule and equipment into a four-week plan. Each is free, takes a few minutes, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a sports performance coach do?',
        a: 'A sports performance coach plans and adjusts an athlete’s preparation for competition: periodising training load, making sessions specific to the sport, monitoring recovery, advising on fuelling around training, and building pre-competition routines and mental skills. The goal is not just to get fitter but to perform better when it counts.',
      },
      {
        q: 'Why have I stopped improving even though I train hard?',
        a: 'The most common causes are training that no longer progresses on purpose, insufficient recovery and sleep, poor fuelling around hard sessions, or a mental game that falls apart under pressure. Training harder rarely fixes a recovery or fuelling problem. A pillar-by-pillar self-assessment like the scorecard on this page helps identify which one is actually the limiter.',
      },
      {
        q: 'How much does sleep affect athletic performance?',
        a: 'More than most athletes assume. Research on sleep extension in college athletes found faster sprint times and better shooting accuracy after several weeks of extra sleep. Consistently getting less than seven hours a night is one of the clearest warning signs that recovery is limiting your progress.',
      },
      {
        q: 'Are these assessments only for elite athletes?',
        a: 'No. They are built for recreational, club and competitive athletes alike, as well as parents and coaches answering on behalf of an athlete. The habits they measure matter at every level, and the biggest gains are usually found by athletes who have never planned these areas deliberately.',
      },
      {
        q: 'Is this medical advice?',
        a: 'No. These are self-assessments for training and coaching purposes. If you have pain, an injury or a health condition, speak to a doctor or a qualified physiotherapist before changing how you train.',
      },
    ],
    order: 13,
    parent: 'health-body-fitness',
  },
  quizzes: [
    {
      publicToken: 'f4ufrhta',
      slug: 'athlete-performance-scorecard',
      order: 1,
      alsoIn: ['fitness-coaching'],
      seo: {
        title: 'Athlete Performance Test: What’s Limiting You? (Free)',
        description:
          'A free 12-question athlete scorecard grading training design, recovery & sleep, fuelling & hydration and mental game. Get a radar chart of your weakest pillar.',
        overview:
          'Most athletes who stop improving are not training too little — they are strong in two or three areas and quietly leaking gains in another, usually recovery, fuelling or the ten minutes before a start. This free 12-question scorecard grades you across four pillars of athletic performance and returns a score out of 120, a performance band, and a radar chart that shows which pillar is actually holding you back, with specific fixes for each.',
        whoFor:
          'Recreational, club and competitive athletes in any sport who have plateaued, plus coaches and parents assessing an athlete or a whole squad.',
        whatYouLearn: [
          'Your athlete performance score out of 120 and your band, from “Effort Without a System” to “Performance-Ready”',
          'A radar across Training Design, Recovery & Sleep, Fuelling & Hydration and Mental Game',
          'Which pillar is your true constraint — and why improving your strongest one buys you little',
          'A concrete first fix for whichever pillar comes out lowest',
          'How to run the scorecard across a squad and read the spread, not the average',
        ],
        sampleQuestions: [
          'In the last eight weeks, has anything measurable about your training actually changed — load, volume, pace or complexity?',
          'In a normal training week, how many nights do you sleep less than seven hours?',
          'What did you eat in the two hours before your last hard session?',
          'The last time you woke up feeling wrecked before a hard session, what did you actually do?',
          'What was going through your head in the ten minutes before your last competition or time trial?',
        ],
        howItWorks:
          'You answer 12 questions, three per pillar, each describing what you actually did recently rather than what you intended. Every answer scores from 1 to 10, giving each pillar a maximum of 30 and a total out of 120 across four performance bands. The radar chart compares your four pillars against a reference line so the dent is easy to see. A few final questions about who you are and your competition level do not affect the score; they only shape how the advice is framed. The pillar model reflects common sports-science practice: progressive and specific training, adequate sleep and planned rest, fuelling around key sessions, and rehearsed mental routines.',
        faq: [
          {
            q: 'What are the four pillars of athletic performance in this test?',
            a: 'Training Design (progression, specificity and measurement), Recovery & Sleep (sleep, rest days and backing off when needed), Fuelling & Hydration (the two hours either side of hard sessions and fluid intake) and Mental Game (pre-start routines, resetting after mistakes and a clear season goal).',
          },
          {
            q: 'Can a coach use this with a team?',
            a: 'Yes. Have every athlete score it separately before any group discussion, enter the same squad name, and then look at the spread on each question. The questions where athletes disagree most usually point to something the coach believes has been taught but has not landed.',
          },
          {
            q: 'How often should I retake it?',
            a: 'Every 90 days works well. You are not chasing a higher total so much as watching for your lowest pillar to move — and for any pillar that has quietly slipped during a busy block.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About four minutes. It is free, needs no signup to start, and is a self-assessment for training purposes, not medical advice.',
          },
        ],
      },
    },
  ],
}
