import type { CategoryFile } from '../schema'

/**
 * niche · 游泳教练
 * 首题：open-water readiness scorecard（ysv9t4hh），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const swimmingCoaching: CategoryFile = {
  category: {
    slug: 'swimming-coaching',
    name: 'Swimming Coach',
    title: 'Swimming Coach Quizzes & Open-Water Readiness Assessments',
    description:
      'Free swimming-coaching quizzes and assessments to check your open-water readiness, spot your weakest skill, and swim more safely and confidently.',
    emoji: '🏊',
    heroCopy: 'Build swim skills and open-water confidence. Start by seeing exactly where you stand today.',
    intro: [
      'Swimming coaching helps you swim farther, faster, and — above all — more safely. A good coach diagnoses the specific things holding you back: your stroke technique, your breathing, your open-water skills like sighting and pacing, and the safety habits that keep every swim within your limits. Progress in swimming comes less from raw effort than from fixing the right weak link.',
      'These free quizzes are a quick way to benchmark yourself before you get in the water. Open-water swimming in particular is rewarding but unforgiving: cold water can trigger an involuntary gasp reflex, and open water has no lane lines or walls to rest on. Drowning remains a leading cause of unintentional injury death worldwide (World Health Organization), and a large share of open-water incidents involve swimmers who overestimated their readiness. A short self-assessment helps you find the gaps before they find you.',
      'Pick the quiz that matches your goal, get your result in a couple of minutes, and use it to decide what to work on next — whether that is pool fitness, open-water skills, cold-water safety, or mindset. Each quiz is free and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a swimming coach do?',
        a: 'A swimming coach improves your technique, endurance, and safety. They break down your stroke, fix your breathing and body position, build a training plan for your goal — fitness, a first open-water swim, or a triathlon — and teach the open-water skills a pool never covers, like sighting, pacing, and handling cold water.',
      },
      {
        q: 'How do I know if I am ready for open water?',
        a: 'Readiness is more than how far you can swim in a pool. It also depends on open-water skills (sighting and resting mid-swim), safety know-how (planning for conditions, never swimming alone, handling cold water), and a calm, prepared mindset. The open-water readiness scorecard on this page rates all four areas so you know exactly what to work on.',
      },
      {
        q: 'Are these swimming quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
    order: 15,
    parent: 'sports-athletics',
  },
  quizzes: [
    {
      publicToken: 'ysv9t4hh',
      slug: 'open-water-swim-readiness-scorecard',
      featured: true,
      order: 1,
      seo: {
        title: 'Are You Open-Water Swim Ready? Free Readiness Scorecard',
        description:
          'A free 2-minute open-water swim readiness scorecard rating your pool fitness, open-water skills, safety know-how, and mindset before your first swim.',
        overview:
          'This free 8-question scorecard rates your open-water swim readiness out of 32 across four areas — pool fitness, open-water skills, safety know-how, and mindset — and returns one clear score plus your strongest and weakest area on a radar chart. You land in one of three bands, Pool-First, Getting Ready, or Open-Water Ready, each with specific next steps. It takes about two minutes and needs no signup to start.',
        whoFor:
          'Pool swimmers eyeing their first open-water swim — a lake, the sea, or a triathlon leg — and returning open-water swimmers who want an honest safety and skills check before the season.',
        whatYouLearn: [
          'Your overall open-water readiness score out of 32',
          'Your strongest and weakest of four areas: fitness, skills, safety, mindset',
          'Whether you are Pool-First, Getting Ready, or Open-Water Ready',
          'The specific skills and safety habits to practice before you go',
        ],
        sampleQuestions: [
          'How far can you currently swim front crawl non-stop in a pool?',
          'Can you “sight” — lift your eyes to spot a buoy or landmark without stopping?',
          'How do you handle cold water on entry?',
          'Do you swim with safety measures (a buddy, a tow float, a supervised venue)?',
        ],
        howItWorks:
          'You answer 8 quick questions, each scored 1–4, that add up to a readiness score out of 32 and split across four dimensions shown on a radar chart. Higher bands mean you are more prepared across fitness, skills, safety, and mindset. The scoring reflects widely taught open-water safety guidance: acclimatize slowly to avoid the cold-water gasp reflex, learn to sight and to rest or float mid-swim, always check conditions, and never swim open water alone. This scorecard is educational and not a substitute for qualified coaching or a supervised venue.',
        faq: [
          {
            q: 'Why is open-water swimming different from pool swimming?',
            a: 'Open water has no lane lines, walls, or clear bottom, plus cold, currents, chop, and limited visibility. You need to sight to stay on course, pace without a wall to push off, stay calm in cold water, and be able to float and rest anywhere. Strong pool swimmers are often surprised how different it feels.',
          },
          {
            q: 'What is the most important open-water safety rule?',
            a: 'Never swim open water alone. Swim with a buddy or in a supervised venue, use a brightly colored tow float for visibility and rest, check conditions (tides, currents, temperature, weather) beforehand, and enter cold water slowly to control the gasp reflex.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes for the 8 questions. It is free and gives you a score, a strongest/weakest breakdown, and clear next steps — no signup required to start.',
          },
        ],
      },
    },
  ],
}
