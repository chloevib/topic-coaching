import type { CategoryFile } from '../schema'

/** niche · 创意教练 */
export const creativityCoaching: CategoryFile = {
  category: {
    slug: 'creativity-coaching',
    name: 'Creativity Coach',
    title: 'Creativity Coach Quizzes & Assessments',
    description:
      'Unlock how you create best, find your creative archetype, and get unstuck. Free creativity coaching quizzes and assessments.',
    emoji: '💡',
    heroCopy:
      'Do your best creative work — start by discovering how you naturally generate ideas and where you get stuck.',
    order: 16,
    parent: 'performance-creativity',
    intro: [
      'Creativity coaching helps you understand how you create best and remove what gets in the way. Everyone is creative, but no two people generate ideas the same way — some dream big, some build with their hands, some think through story, some solve problems, and some spark off other people. Knowing your pattern is the fastest route to doing more of your best work.',
      'A quick self-assessment is an easy way to name your creative style, see the strengths it gives you, and spot the blind spot that quietly stalls your projects. Each result comes with a concrete way to get unstuck and ship.',
      'This matters more than ever: employers now rank creative thinking among the fastest-rising skills for the years ahead (source: World Economic Forum, Future of Jobs Report 2023, https://www.weforum.org/publications/the-future-of-jobs-report-2023/). These free assessments are a friendly first step for anyone who wants to create with more confidence and consistency.',
    ],
    faq: [
      {
        q: 'What is creativity coaching?',
        a: 'Creativity coaching is a forward-looking process that helps you understand your creative strengths, work with your natural style instead of against it, and build habits that turn ideas into finished work. It focuses on how you create and where you get stuck, not on judging talent.',
      },
      {
        q: 'What can a creativity quiz tell me?',
        a: 'A good creativity quiz names your dominant creative style — for example Visionary, Maker, Storyteller, Innovator, or Connector — along with the strengths it gives you, the blind spot that most often stalls your work, and one practical way to do your best work next.',
      },
      {
        q: 'Are these creativity quizzes free?',
        a: 'Yes. Each assessment on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'xzxeqbmg',
      slug: 'creativity-style-quiz',
      order: 1,
      alsoIn: ['content-creator-coaching'],
      seo: {
        title: 'Creativity Style Quiz — Find Your Creative Archetype',
        description:
          'A free 2-minute creativity style quiz that reveals your creative archetype — Visionary, Maker, Storyteller, Innovator, or Connector — and your blind spot.',
        overview:
          'Everyone is creative, but no two people create the same way. This quick 8-question quiz reveals your creativity style across five archetypes — the Visionary, the Maker, the Storyteller, the Innovator, and the Connector — and shows how you generate ideas, where you get stuck, and how to do your best creative work. It takes about two minutes.',
        whoFor:
          'Anyone who creates — designers, writers, founders, marketers, artists, and hobbyists — who wants to understand their creative strengths and stop stalling on their ideas.',
        whatYouLearn: [
          'Your dominant creative archetype: Visionary, Maker, Storyteller, Innovator, or Connector',
          'How you naturally generate your best ideas',
          'The blind spot that most often keeps your projects from getting finished',
          'One concrete way to do your best creative work next',
        ],
        sampleQuestions: [
          'A blank page or empty project lands in front of you. Your first instinct is to…',
          'Where do your best ideas usually come from?',
          'What most often gets in the way of your creativity?',
          'How do you know a creative piece is truly done?',
        ],
        howItWorks:
          'You answer eight quick questions about how you start, where your ideas come from, what stalls you, and how you finish. Your answers are scored across five creative archetypes, and your result highlights your dominant style with its strengths, its blind spot, and a way to do your best work. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the five creativity archetypes?',
            a: 'This quiz uses five creative styles: the Visionary (creates from big ideas), the Maker (creates with their hands), the Storyteller (creates through narrative and emotion), the Innovator (creates by solving problems), and the Connector (creates through collaboration and synthesis). Most people lead with one but borrow from the others.',
          },
          {
            q: 'Can I be more than one creative type?',
            a: 'Yes. Most creators blend styles — for example a Visionary who is also a Storyteller. The quiz names your dominant archetype so you know which strengths to build on and which blind spot to watch first.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes for eight questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
