import type { CategoryFile } from '../schema'

/** niche · 体态矫正教练 */
export const postureCoaching: CategoryFile = {
  category: {
    slug: 'posture-coaching',
    name: 'Posture Coach',
    title: 'Posture Coach Quizzes & Assessments',
    description:
      'Fix rounded shoulders, tech neck, and desk slump. Free posture coaching quizzes and assessments.',
    emoji: '🧍',
    heroCopy:
      'Sit and stand taller — start by scoring your posture habits and finding the first fix to make today.',
    order: 15,
    parent: 'health-body-fitness',
    intro: [
      'Posture coaching helps you undo the effects of long hours at a desk and on a phone — rounded shoulders, forward head, and a slumped lower back — and rebuild alignment through better habits, ergonomics, and mobility. It is less about standing rigidly upright and more about moving often and setting your body up to succeed.',
      'A quick self-assessment is an easy way to see where you stand across the areas that matter: sitting habits, standing alignment, desk and screen ergonomics, and mobility. It names your biggest gap and the first small change worth making today.',
      'This matters because sedentary time is now the norm: many desk workers sit for the majority of their waking hours, and forward-head “tech neck” loads the cervical spine far beyond the head’s natural weight as the neck tilts forward (source: Hansraj, Surgical Technology International, 2014, https://pubmed.ncbi.nlm.nih.gov/25393825/). These free assessments are a friendly first step for anyone who sits a lot, works at a desk, or trains.',
    ],
    faq: [
      {
        q: 'What does a posture coach help with?',
        a: 'A posture coach helps you correct rounded shoulders, forward head, and desk slump by improving your sitting and standing habits, optimizing your workstation ergonomics, and building the mobility and back-chain strength that make an upright posture feel effortless.',
      },
      {
        q: 'Can posture really be improved?',
        a: 'Yes. Posture is highly trainable. Small, consistent changes — raising your screen to eye level, moving every 30–45 minutes, and adding a little core and upper-back work each week — compound quickly into better comfort and alignment.',
      },
      {
        q: 'Are these posture quizzes free?',
        a: 'Yes. Each assessment on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'degba6na',
      slug: 'posture-health-scorecard',
      order: 1,
      seo: {
        title: 'Posture Health Scorecard — How Good Is Your Posture? (Free 2-Minute Assessment)',
        description:
          'A free 2-minute posture scorecard that rates you out of 60 across sitting habits, standing alignment, desk ergonomics, and mobility — with your biggest gap and the first fix to make today.',
        overview:
          'How good is your posture, really? This free 2-minute scorecard rates you across four areas — sitting posture, standing alignment, desk and screen ergonomics, and mobility and movement — and gives you one clear score out of 60. You will instantly see your strongest area, your biggest gap, and the first small fix to make today.',
        whoFor:
          'Anyone who sits a lot, works at a desk, studies, or trains and wants a quick, honest read on their posture habits and where to improve first.',
        whatYouLearn: [
          'Your overall posture score out of 60 and level, from Posture At Risk to Posture Pro',
          'How you rate across four areas: sitting posture, standing alignment, desk ergonomics, and mobility',
          'Your strongest area and your biggest gap on a simple radar breakdown',
          'The first small, high-impact fix to make today',
        ],
        sampleQuestions: [
          'When you sit at a desk, where is your lower back most of the time?',
          'Where does your head sit relative to your shoulders when working?',
          'Where is the top of your monitor relative to your eyes?',
          'How long do you sit before standing or moving?',
        ],
        howItWorks:
          'You answer 12 quick questions across four areas — sitting posture, standing alignment, desk and screen ergonomics, and mobility and movement — each scored up to 5 points for a total out of 60. Your result maps to a level and a radar chart showing where to focus first. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a medical assessment?',
            a: 'No. This scorecard is an educational self-check of everyday posture habits and ergonomics, not a medical diagnosis. If you have persistent pain, numbness, or a specific condition, see a qualified health professional.',
          },
          {
            q: 'What is a good posture score?',
            a: 'Scores map to four levels: Posture At Risk (0–24), Room to Improve (24–39), Good Posture (39–51), and Posture Pro (51–60). A higher score means your habits, setup, and mobility all support a healthy spine.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes for 12 questions, and it is free with a personalized score, a radar breakdown, and clear next steps — no signup required to start.',
          },
        ],
      },
    },
  ],
}
