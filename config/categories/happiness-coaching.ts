import type { CategoryFile } from '../schema'

/** niche · 幸福教练 */
export const happinessCoaching: CategoryFile = {
  category: {
    slug: 'happiness-coaching',
    name: 'Happiness Coach',
    title: 'Happiness Quizzes & Assessments',
    description:
      'Free happiness quizzes grounded in positive psychology — what really raises wellbeing, what only looks like it does. Instant result, every answer explained.',
    emoji: '😊',
    heroCopy:
      'Most of what we believe about happiness turns out to be wrong. Start by testing what the research actually found.',
    order: 18,
    parent: 'life-mindset-relationships',
    intro: [
      'Happiness coaching applies positive psychology to ordinary life: identifying the habits, relationships and conditions that reliably raise wellbeing, and letting go of the ones that only promise to. The field has a large evidence base, and much of it contradicts intuition — we systematically overestimate how much circumstances matter and underestimate how much attention, relationships and small repeated habits do.',
      'The longest-running evidence points somewhere unglamorous. The Harvard Study of Adult Development has followed participants for more than eight decades, and the strongest predictor of who stayed happy and healthy into old age was not income, fame or social class but the quality of close relationships (source: Harvard Study of Adult Development, https://www.adultdevelopmentstudy.org/).',
      'Everyday habits show the same pattern. The World Happiness Report found that how often people share meals with others is associated with life satisfaction about as strongly as income or employment, and that countries with more shared meals report more social support and less loneliness — while in the United States roughly one in four people now report eating every meal alone (source: World Happiness Report 2025, https://www.worldhappiness.report/ed/2025/sharing-meals-with-others-how-sharing-meals-supports-happiness-and-social-connections/).',
      'The quizzes on this page are free, take about three minutes, and explain the research behind every answer. They are educational rather than clinical: none of them is a diagnostic or mental-health assessment.',
    ],
    faq: [
      {
        q: 'What does a happiness coach actually do?',
        a: 'A happiness coach works on the levers the evidence supports — close relationships, sleep, movement, attention, gratitude, and how you spend time and money — and helps you build them into a normal week. It is skills and habit work for people who are functioning, not treatment for depression or anxiety, which is a job for a qualified clinician.',
      },
      {
        q: 'Can happiness really be increased, or is it fixed?',
        a: 'Partly fixed, meaningfully changeable. Temperament sets a baseline and people largely drift back toward it after big life events — the pattern known as hedonic adaptation — but habits, relationships and recurring daily conditions still move average wellbeing. That is why fixing a long commute or a chronic sleep debt tends to pay out more than a one-off windfall.',
      },
      {
        q: 'Does money make people happier?',
        a: 'Yes, with strong diminishing returns. Higher income is associated with higher average wellbeing on roughly a logarithmic scale, so a given raise matters enormously at low incomes and much less at high ones. Spending on experiences and on other people holds up better than spending on possessions.',
      },
      {
        q: 'Are these happiness quizzes free, and are they a mental-health test?',
        a: 'They are free, take about three minutes, and require no signup to start. They are educational quizzes about wellbeing research, not screening or diagnostic tools. If low mood is persistent, talking to a qualified professional is a reasonable and effective step.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'c25q7f9e',
      slug: 'happiness-iq-quiz',
      order: 1,
      seo: {
        title: 'Happiness IQ Quiz — Test What Really Makes People Happier',
        description:
          'A free 10-question happiness quiz on what positive psychology actually found about money, relationships, gratitude and comparison. Every answer explained.',
        overview:
          'Most of what we believe about happiness turns out to be wrong. This free 10-question quiz tests your knowledge of what decades of positive-psychology research actually found — about money, relationships, gratitude, attention, social comparison and the surprising things that do and do not move wellbeing. Every question is followed by a short explanation, so you learn the evidence as you go, and you get your Happiness IQ score out of 100 in about three minutes.',
        whoFor:
          'Coaches, therapists and HR professionals who want to check their assumptions, plus anyone curious about which wellbeing advice actually survives contact with the research.',
        whatYouLearn: [
          'Your Happiness IQ level from Happiness Myth-Believer to Happiness Researcher',
          'What the Harvard Study of Adult Development found predicts a happy old age',
          'What hedonic adaptation is, and why raises and new cities stop feeling good',
          'How income and wellbeing are really related — and where the returns fall off',
          'Why mind-wandering predicts lower mood even on pleasant topics',
          'The difference between eudaimonic and hedonic wellbeing, and why a full life needs both',
        ],
        sampleQuestions: [
          'In the Harvard Study of Adult Development, which factor best predicted who stayed happy and healthy into old age?',
          'Hedonic adaptation describes which well-documented pattern?',
          'How does the relationship between income and wellbeing generally behave?',
          'Research on attention and mood found that people report being less happy when what happens?',
          'Which everyday factor is most consistently linked to lower reported life satisfaction?',
        ],
        howItWorks:
          'Ten questions — multiple-choice and true/false — cover relationships, adaptation, spending, income, gratitude, attention, commuting, social comparison, meaning versus pleasure, and reliable mood lifters. Each is worth 10 points toward a Happiness IQ out of 100, and every question reveals an explanation of the underlying research, so the quiz doubles as a short lesson. Scores map to three levels: Happiness Myth-Believer, Well-Informed and Happiness Researcher. Free, about three minutes, no signup to start.',
        faq: [
          {
            q: 'Does this quiz measure how happy I am?',
            a: 'No. It measures how well you understand happiness research — the findings on relationships, adaptation, income, attention and habits. It is a knowledge quiz, not a wellbeing scale or a mental-health screening tool.',
          },
          {
            q: 'What is a good Happiness IQ score?',
            a: 'Out of 100: under 50 is Happiness Myth-Believer, 50–80 Well-Informed, and 80 or above Happiness Researcher. Most people lose points on the counterintuitive findings — hedonic adaptation, diminishing returns on income, and mind-wandering.',
          },
          {
            q: 'What are the most reliable ways to feel happier?',
            a: 'The research keeps pointing at unglamorous things: close relationships and regular contact with people you like, protected sleep, regular physical activity, specific rather than generic gratitude, and spending time and money on experiences and other people rather than possessions.',
          },
          {
            q: 'Is this mental-health advice?',
            a: 'No. The quiz is educational and for general interest. If you are dealing with persistent low mood, a qualified professional is the right place to start.',
          },
        ],
      },
    },
  ],
}
