import type { CategoryFile } from '../schema'

/**
 * niche · 心态教练
 * 首题：Growth vs. Fixed Mindset quiz（uujahpzh），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const mindsetCoaching: CategoryFile = {
  category: {
    slug: 'mindset-coaching',
    name: 'Mindset Coach',
    title: 'Mindset Coaching Quizzes — Growth Mindset & Resilience',
    description:
      'Free mindset quizzes to reveal your growth vs. fixed mindset, how you handle setbacks, and one small shift to build resilience and keep growing.',
    emoji: '🧠',
    heroCopy: 'Change how you think, change what you achieve. Start by seeing your mindset clearly.',
    intro: [
      'Mindset coaching works on the beliefs underneath your behavior — how you interpret challenges, effort, feedback, and failure. These beliefs quietly shape whether you take on hard things or avoid them, whether criticism helps you or crushes you, and whether a setback is a lesson or a verdict. Shift the belief and the behavior tends to follow.',
      'A central idea comes from psychologist Carol Dweck’s research at Stanford: people lean toward a “growth mindset” (abilities can be developed through effort and strategy) or a “fixed mindset” (abilities are largely set). The distinction predicts how people respond to difficulty, and studies — including large-scale trials such as the National Study of Learning Mindsets — have found that brief growth-mindset interventions can improve outcomes, especially for those who are struggling. Most people are a mix, and the mix can change.',
      'These free quizzes are a quick way to see your default pattern and the one small shift that helps you grow. Take the one that fits your goal, get your result in about two minutes, and use it to notice — and rewrite — the story you tell yourself when things get hard. Each is free and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a mindset coach do?',
        a: 'A mindset coach helps you notice and reshape the beliefs that drive your behavior — around challenge, effort, feedback, and failure. Rather than giving advice, they ask questions that surface fixed-mindset stories (“I’m just not good at this”) and help you replace them with more accurate, growth-oriented ones, then turn that into concrete action.',
      },
      {
        q: 'What is the difference between a growth and fixed mindset?',
        a: 'A growth mindset treats abilities as things you can develop with effort, strategy, and help; a fixed mindset treats them as largely innate and unchangeable. The concept comes from psychologist Carol Dweck. Most people are a blend, and the goal is not to be “perfectly growth” but to catch fixed thinking where it holds you back.',
      },
      {
        q: 'Are these mindset quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes about two minutes, and gives you a personalized result with one small shift to try — no signup required to start.',
      },
    ],
    order: 12,
    parent: 'life-mindset-relationships',
  },
  quizzes: [
    {
      publicToken: 'uujahpzh',
      slug: 'growth-vs-fixed-mindset-quiz',
      featured: true,
      order: 1,
      seo: {
        title: 'Growth vs. Fixed Mindset Quiz — What’s Your Mindset? (Free)',
        description:
          'Do you have a growth mindset or a fixed mindset? Based on Carol Dweck’s research, this free 2-minute quiz reveals how you handle challenges, effort, feedback, and setbacks — plus one small shift to grow.',
        overview:
          'This free 10-question quiz reveals whether you lean toward a growth mindset, a fixed mindset, or a mix, based on Carol Dweck’s research on how we interpret challenge, effort, feedback, and failure. Each result explains your pattern, its strengths and costs, and gives you one small shift to practice. It takes about two minutes and needs no signup to start.',
        whoFor:
          'Anyone who wants to understand how they respond to difficulty and setbacks — students, professionals, parents, and coaches looking to build resilience and a healthier relationship with failure.',
        whatYouLearn: [
          'Whether you lean growth, fixed, or mixed in your mindset',
          'How your beliefs shape your response to challenges and criticism',
          'The hidden cost of fixed thinking in the areas it shows up',
          'One concrete shift to practice this week, like adding the word “yet”',
        ],
        sampleQuestions: [
          'When you face a genuinely difficult challenge, your first instinct is to…',
          'When you get critical feedback, you usually…',
          'To you, “talent” mostly means…',
          'After you make a mistake, your inner voice says…',
        ],
        howItWorks:
          'You answer 10 quick questions about how you handle challenge, effort, feedback, and setbacks. Each answer points toward a growth, mixed, or fixed pattern, and your most-chosen response becomes your result — with a plain-language read on your strengths, your blind spots, and a single next move. The framework draws on Carol Dweck’s mindset research; large studies such as the National Study of Learning Mindsets suggest that small shifts in these beliefs can meaningfully change how people respond to difficulty. It is free and needs no signup to start.',
        faq: [
          {
            q: 'Is a fixed-mindset result a bad thing?',
            a: 'No. A fixed lean is a pattern, not a flaw or a fixed trait — and simply seeing it is the first step to changing it. Almost everyone is fixed in some areas and growth-oriented in others; the quiz helps you spot where fixed thinking is quietly costing you so you can practice a different response.',
          },
          {
            q: 'Is this quiz based on real research?',
            a: 'It is built on the growth vs. fixed mindset framework developed by Stanford psychologist Carol Dweck, which has been studied widely in education and performance. It is a self-reflection tool to prompt insight and action, not a clinical or diagnostic assessment.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About two minutes for the 10 questions. It is free and ends with a personalized result plus one small shift to try — no signup required to start.',
          },
        ],
      },
    },
  ],
}
