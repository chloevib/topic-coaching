import type { CategoryFile } from '../schema'

/** niche · 足球教练 */
export const soccerCoaching: CategoryFile = {
  category: {
    slug: 'soccer-coaching',
    name: 'Soccer Coach',
    title: 'Soccer Coach Quizzes & Assessments',
    description:
      'Test your soccer knowledge, tactics, and match sense. Free soccer quizzes and assessments.',
    emoji: '⚽',
    heroCopy:
      'Sharpen your soccer brain — test what you know about the game, the 2026 World Cup, and the style of football that fits you.',
    order: 11,
    parent: 'sports-athletics',
    intro: [
      'Soccer coaching blends technique, tactics, and match sense: first touch and passing, shape and pressing, and the laws of the game that decide every restart. Knowing how the game actually works — the group-stage format, why a third-placed team can still advance, what a possession-first system is trying to do — is the foundation that on-ball skill and tactical work sit on top of.',
      'A quick knowledge check is the easiest way to see where you stand. These free quizzes cover tournament format, history, records, and playing styles, and every answer comes with a short explanation, so you finish a little sharper than you started.',
      'Interest in the game in the United States is at a record level: SFIA reported 16.8 million outdoor soccer participants in 2025 — an all-time high and a 15.8% jump in a single year, the largest annual rise in 15 years of its data (source: SFIA, https://sfia.org/resources/soccer-participation-in-the-u-s-hits-an-all-time-high-ahead-of-world-cup/). With the 2026 World Cup hosted across the U.S., Canada, and Mexico, more new players and fans are learning the game than ever.',
    ],
    faq: [
      {
        q: 'What does a soccer coach help with?',
        a: 'A soccer coach works on technique such as first touch, passing, and finishing, plus team concepts like shape, pressing, and transitions — alongside the rules, formats, and game reading that let you play, watch, and coach with confidence.',
      },
      {
        q: 'Do I need to play soccer to take these quizzes?',
        a: 'No. They suit players, fans, and coaches at any level. Every question includes a short explanation, so you pick up something whether you are stepping onto a pitch for the first time or following every match.',
      },
      {
        q: 'Are these soccer quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'sntnp9ef',
      slug: 'world-cup-2026-quiz',
      order: 1,
      seo: {
        title: '2026 World Cup Quiz — How Well Do You Know It?',
        description:
          'A free 12-question 2026 World Cup quiz on the 48-team format, the three hosts, the final, and the records. Every answer explained. Takes 3 minutes.',
        overview:
          'How much do you actually remember about the 2026 World Cup? This free 12-question quiz covers the first-ever 48-team format, the three co-hosts, the opening match, the final at MetLife Stadium, and the all-time tournament records — then scores your World Cup IQ in about three minutes. Every answer comes with a short explanation.',
        whoFor:
          'Football fans who followed the 2026 tournament, newcomers to the sport in the U.S., Canada, and Mexico, and coaches or teachers looking for a quick, shareable warm-up.',
        whatYouLearn: [
          'Your World Cup IQ level, from Bench Warmer to World Cup Legend',
          'How the expanded 48-team format and new Round of 32 worked',
          'Key 2026 milestones: the three hosts, the opener, and the final',
          'Tournament records and recent winners across 2022 and 2026',
        ],
        sampleQuestions: [
          'How many teams competed at the 2026 World Cup?',
          'Which three nations co-hosted the 2026 World Cup?',
          'How were the 48 teams divided in the group stage?',
          'Who holds the record for the most goals in men’s World Cup history?',
        ],
        howItWorks:
          'You answer 12 multiple-choice and true/false questions on format, hosts, results, and records, each worth 10 points toward your World Cup IQ out of 100. Scores map to four levels, from Bench Warmer to World Cup Legend. Every question carries an explanation, so you learn as you go. It is free and needs no signup to start.',
        faq: [
          {
            q: 'What was new about the 2026 World Cup format?',
            a: 'It was the first 48-team World Cup, expanded from 32, and the first co-hosted by three countries — the United States, Canada, and Mexico. Teams were drawn into 12 groups of four, with the top two plus the eight best third-placed teams advancing to a new Round of 32.',
          },
          {
            q: 'Who won the 2026 World Cup?',
            a: 'Spain beat Argentina 1-0 after extra time in the final at MetLife Stadium on 19 July 2026, with Ferran Torres scoring in the 106th minute — Spain’s second title after 2010. The quiz explains this and the other results as you answer.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes. It is free, gives you a scored result with an explanation for every answer, and needs no signup to start.',
          },
        ],
      },
    },
    {
      publicToken: '6myrcbdn',
      slug: 'which-world-cup-team-are-you',
      order: 2,
      seo: {
        title: 'Which World Cup Team Are You? Football Personality Quiz',
        description:
          'A free 8-question quiz matching your personality to a World Cup nation — Brazil, Argentina, France, England, Spain, or Germany. Get your result in 3 minutes.',
        overview:
          'Forget the bracket — which World Cup nation actually plays football the way you live? This free 8-question personality quiz reads how you handle matchday nerves, going a goal behind, and pressure moments, then matches you to one of six footballing identities: Brazil, Argentina, France, England, Spain, or Germany.',
        whoFor:
          'Football fans who want a light, shareable read on their own style, plus coaches and team captains looking for an icebreaker that opens up a conversation about temperament and playing philosophy.',
        whatYouLearn: [
          'Which of six World Cup nations matches your personality',
          'The playing style and motto that go with your result',
          'How you tend to respond to pressure and setbacks',
          'The blind spot your style is most likely to have',
        ],
        sampleQuestions: [
          'It’s matchday. How do you show up?',
          'Your dream style of football is…',
          'You go a goal down. Your reaction?',
          'Choose a footballing superpower.',
        ],
        howItWorks:
          'Each of the 8 questions casts a vote for one or more of six team profiles — Brazil the joyful showman, Argentina the passionate heart, France the cool talent, England the loyal believer, Spain the patient maestro, and Germany the relentless machine. The most-voted profile becomes your result, with its style, motto, and one thing to watch out for. It is for fun rather than a validated personality test.',
        faq: [
          {
            q: 'Is this a real personality test?',
            a: 'No. It is a light, for-fun typing quiz built around footballing styles, not a validated psychometric instrument. Treat the result as a conversation starter rather than an assessment.',
          },
          {
            q: 'Which teams can I get as a result?',
            a: 'Six: Brazil, Argentina, France, England, Spain, and Germany. Each result describes a playing style, a motto, and the weakness that style tends to carry.',
          },
          {
            q: 'How long does it take, and do I need to sign up?',
            a: 'About three minutes for 8 questions. It is free and needs no signup to start, and you can share your result straight away.',
          },
        ],
      },
    },
  ],
}
