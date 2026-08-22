import type { CategoryFile } from '../schema'

/** niche · 旅行教练 */
export const travelCoaching: CategoryFile = {
  category: {
    slug: 'travel-coaching',
    name: 'Travel Coach',
    title: 'Travel Quizzes & Assessments',
    description:
      'Free travel quizzes that score how well-travelled you really are — reach, independence, cultural depth and travel craft. Instant result, no signup.',
    emoji: '✈️',
    heroCopy:
      'Being well-travelled is not a stamp count. Find out how you score on the four things that actually make someone good at travel.',
    order: 11,
    parent: 'lifestyle-interests',
    intro: [
      'Travel coaching is about the skills behind the trip rather than the destination list: planning a route you will actually enjoy, moving through an unfamiliar city without a guide, reading local customs before you land, and staying functional when a connection is missed or a document goes astray. Those skills are learnable, and they are what separates someone who has been to twenty countries from someone who has genuinely understood three.',
      'They also matter more each year. Solo travel has moved from niche to mainstream — market analysts now put the segment at roughly half a trillion dollars with double-digit annual growth, and searches for solo travel have climbed steeply over the past decade (source: Grand View Research, https://www.grandviewresearch.com/industry-analysis/solo-travel-market-report). Travelling alone removes the safety net of a group, so independence and practical travel craft stop being optional.',
      'Most people are uneven across these dimensions. Frequent business travellers often have excellent travel craft and very little cultural depth. Careful planners rack up countries but have never spent a day without a booking. Knowing which spoke is shortest is the fastest way to make the next trip better than the last one.',
      'The assessment on this page is free, takes about two minutes, and scores you across all four dimensions with a radar chart — no signup required to start.',
    ],
    faq: [
      {
        q: 'What does it actually mean to be well-travelled?',
        a: 'Four things, not one: reach (how far and how widely you have gone), independence (how well you function without a guide, group or fixed plan), cultural depth (how much of a place you take in — language, food, context), and travel craft (packing, local transport, handling things that go wrong). Reach is the most visible and the least informative of the four.',
      },
      {
        q: 'Is solo travel worth trying if it makes me nervous?',
        a: 'For most people it is the single biggest upgrade available, because it moves independence and travel craft at the same time. The usual advice is to start small: a few days somewhere with good infrastructure and a language you can partly navigate, rather than a month somewhere demanding.',
      },
      {
        q: 'How do I get past the tourist layer in a new place?',
        a: 'Cheaply, as it turns out. Read one book set in the country before you go, eat where locals eat rather than where reviews aim at visitors, and learn enough of the language to order food and ask directions. Cultural depth improves faster than any other dimension and costs almost nothing.',
      },
      {
        q: 'Is this travel quiz free?',
        a: 'Yes. It is free, takes about two minutes, and gives you an instant score plus a radar chart of your four travel dimensions — no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'rya3zmex',
      slug: 'travel-experience-scorecard',
      order: 1,
      seo: {
        title: 'How Well-Travelled Are You? Free Travel Experience Scorecard',
        description:
          'A free 12-question travel quiz scoring your reach, independence, cultural depth and travel craft, with a radar chart of your strengths. About 2 minutes.',
        overview:
          'Anyone can collect passport stamps. This free 12-question scorecard measures how well-travelled you actually are across four dimensions — reach, independence, cultural depth and travel craft — and returns a score out of 120 with a radar chart showing where you are strong and where you are still a tourist. It takes about two minutes and every dimension comes with a concrete way to improve it.',
        whoFor:
          'Frequent flyers, first-time solo travellers, digital nomads, gap-year planners, and anyone who suspects their country count says less about them than they would like.',
        whatYouLearn: [
          'Your travel level from Homebody with Potential to Citizen of the World',
          'How you score on reach, independence, cultural depth and travel craft',
          'Which of the four dimensions is holding the rest back',
          'Whether your planning style is building independence or quietly preventing it',
          'The cheapest specific upgrade available for your weakest dimension',
        ],
        sampleQuestions: [
          'Have you ever travelled completely solo — planning and going alone?',
          'How comfortable are you using local public transport in a city you have never visited?',
          'Before visiting a country, how much do you learn about its history, customs and etiquette?',
          'Have you ever had a trip seriously go wrong and sorted it out yourself?',
          'Have you ever stayed somewhere with no fixed plan for the next day and let the trip decide?',
        ],
        howItWorks:
          'Twelve multiple-choice questions cover countries and continents visited, trip length, solo travel, planning style, local transport, languages, food, cultural preparation, crisis handling, packing and improvisation. Each answer scores up to 10 points toward a total out of 120, and the questions group into four dimensions — Reach, Independence, Cultural Depth and Travel Craft — plotted on a radar chart. Scores map to four levels: Homebody with Potential, Holiday Traveller, Seasoned Explorer and Citizen of the World. Free, about two minutes, no signup to start.',
        faq: [
          {
            q: 'Does visiting more countries mean a higher score?',
            a: 'Only partly. Countries and continents feed the Reach dimension, which is one quarter of the total. Someone who has spent a month alone in one country can outscore someone who has weekended in fifteen, because independence, cultural depth and travel craft carry the same weight.',
          },
          {
            q: 'What is a good travel experience score?',
            a: 'Out of 120: under 35 is Homebody with Potential, 35–65 Holiday Traveller, 65–95 Seasoned Explorer, and 95 or above Citizen of the World. More useful than the total is the shortest spoke on your radar chart — that is where the next real improvement is.',
          },
          {
            q: 'I travel constantly for work. Will I score well?',
            a: 'Often less well than expected. Business travel builds travel craft and reach quickly but tends to leave cultural depth and unstructured independence untouched, since hotels, transfers and itineraries are handled for you.',
          },
          {
            q: 'Do I need to sign up to see my result?',
            a: 'No. The quiz is free and your score, level and radar chart appear as soon as you finish.',
          },
        ],
      },
    },
  ],
}
