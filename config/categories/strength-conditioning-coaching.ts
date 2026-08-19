import type { CategoryFile } from '../schema'

/**
 * niche · 体能教练
 * 首题：Strength Readiness Scorecard（8byhb586），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const strengthConditioningCoaching: CategoryFile = {
  category: {
    slug: 'strength-conditioning-coaching',
    name: 'Strength & Conditioning Coach',
    title: 'Strength & Conditioning Quizzes & Readiness Assessments',
    description:
      'Free strength-training quizzes and readiness assessments to rate your technique, consistency, and mobility — and find the one gap to fix first.',
    emoji: '🏋️',
    heroCopy: 'Build power and stay injury-free. Start by finding your biggest gap.',
    intro: [
      'Strength and conditioning coaching develops the qualities that make you more capable and resilient: force, power, work capacity, and durable joints. A good coach makes sure the foundations are in place before piling on load — clean technique on the core lifts, a program with progressive overload, and enough recovery for your body to adapt. Strength is built between sessions as much as during them.',
      'These free quizzes are a quick way to audit where you actually stand before you chase a heavier squat or a new PR. Research consistently links regular resistance training to better health: major guidelines such as the U.S. Physical Activity Guidelines and the World Health Organization recommend muscle-strengthening activity on at least two days a week, and adequate sleep is repeatedly shown to support strength gains and recovery. A short self-assessment helps you train hard in the right places and avoid the most common cause of stalled progress — an unaddressed weak link.',
      'Take the quiz that matches your goal, get your score and your biggest gap in about two minutes, and use it to prioritize your next block of training. Each is free and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a strength and conditioning coach do?',
        a: 'A strength and conditioning coach improves technique, programming, and recovery so you get stronger without getting hurt. They assess your movement, teach the core lifts, build a plan with progressive overload for your goal, and manage warm-ups, mobility, and rest — the parts of training where strength is actually built.',
      },
      {
        q: 'How do I know if I am ready to train heavier?',
        a: 'Readiness spans three areas: foundation and technique (do you know the core lifts and program with progression?), consistency and recovery (are you training regularly, sleeping enough, and planning rest?), and mobility and injury prevention (do you warm up, move well, and train pain-free?). The scorecard on this page rates all three and shows your biggest gap.',
      },
      {
        q: 'Are these strength quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start. They are for general fitness education, not medical advice.',
      },
    ],
    order: 12,
    parent: 'health-body-fitness',
  },
  quizzes: [
    {
      publicToken: '8byhb586',
      slug: 'strength-training-readiness-scorecard',
      featured: true,
      order: 1,
      seo: {
        title: 'Are You Strength-Training Ready? Free Readiness Scorecard',
        description:
          'A free 2-minute scorecard rating your strength-training readiness across technique, consistency, recovery, and mobility — plus the first gap to fix.',
        overview:
          'This free 12-question scorecard rates your strength-training readiness out of 36 across three areas — foundation and technique, consistency and recovery, and mobility and injury prevention — and returns one clear score plus your biggest gap on a radar chart. You land in one of four bands, from Building the Base to Strength-Ready, each with focused next steps. It takes about two minutes and needs no signup to start.',
        whoFor:
          'Beginners about to start lifting who want to train safely, and returning or self-taught lifters who suspect one weak area is quietly capping their progress.',
        whatYouLearn: [
          'Your overall strength-readiness score out of 36 and your level',
          'Your weakest of three areas: technique, consistency/recovery, or mobility',
          'Whether you are Building the Base, Getting Stronger, Well-Conditioned, or Strength-Ready',
          'The single gap to prioritize before adding more load',
        ],
        sampleQuestions: [
          'How would you describe your form on the core lifts (squat, hinge, press, pull)?',
          'Do you follow a structured program with progressive overload?',
          'How many nights a week do you get 7+ hours of sleep?',
          'Do you experience pain or a nagging injury when you train?',
        ],
        howItWorks:
          'You answer 12 quick questions, each scored 0–3, that add up to a readiness score out of 36 and split across three dimensions shown on a radar chart. Higher bands mean stronger foundations across technique, consistency and recovery, and mobility and injury prevention. The scoring reflects mainstream training principles: master the core lifts before adding load, progress gradually, train muscle-strengthening movements at least twice a week (per U.S. and WHO physical-activity guidelines), warm up, and protect recovery and sleep. This scorecard is for general fitness education, not medical advice — if you have pain or a health condition, check with a qualified professional before starting a new program.',
        faq: [
          {
            q: 'How many days a week should I strength train?',
            a: 'Major public-health guidelines (including the U.S. Physical Activity Guidelines and the World Health Organization) recommend muscle-strengthening activity that works all major muscle groups on at least two days a week. Beginners often do well with two or three full-body sessions, prioritizing technique and consistency over heavy loads.',
          },
          {
            q: 'Why does the scorecard ask about sleep and rest?',
            a: 'Strength is built during recovery, not just during workouts. Inadequate sleep and no planned rest blunt adaptation and raise injury risk, so the scorecard weighs consistency and recovery alongside technique and mobility to give a realistic picture of readiness.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About two minutes for the 12 questions. It is free and gives you a score out of 36, your biggest gap, and clear next steps — no signup required to start.',
          },
        ],
      },
    },
  ],
}
