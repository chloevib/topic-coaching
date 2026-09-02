import type { CategoryFile } from '../schema'

/** niche · 旅行教练 */
export const travelCoaching: CategoryFile = {
  category: {
    slug: 'travel-coaching',
    name: 'Travel Coach',
    title: 'Travel & Geography Quizzes — Free, Instant Results',
    description:
      'Free travel and geography quizzes: score how well-travelled you really are, then test yourself on capitals, flags and landmarks. Instant result, no signup.',
    emoji: '✈️',
    heroCopy:
      'Being well-travelled is not a stamp count. Score the four things that actually make someone good at travel — then see how well you really know the map.',
    order: 11,
    parent: 'lifestyle-interests',
    intro: [
      'Travel coaching is about the skills behind the trip rather than the destination list: planning a route you will actually enjoy, moving through an unfamiliar city without a guide, reading local customs before you land, and staying functional when a connection is missed or a document goes astray. Those skills are learnable, and they are what separates someone who has been to twenty countries from someone who has genuinely understood three.',
      'They also matter more each year. Solo travel has moved from niche to mainstream — market analysts now put the segment at roughly half a trillion dollars with double-digit annual growth, and searches for solo travel have climbed steeply over the past decade (source: Grand View Research, https://www.grandviewresearch.com/industry-analysis/solo-travel-market-report). Travelling alone removes the safety net of a group, so independence and practical travel craft stop being optional.',
      'Most people are uneven across these dimensions. Frequent business travellers often have excellent travel craft and very little cultural depth. Careful planners rack up countries but have never spent a day without a booking. Knowing which spoke is shortest is the fastest way to make the next trip better than the last one.',
      'The assessment on this page is free, takes about two minutes, and scores you across all four dimensions with a radar chart — no signup required to start.',
      'Cultural depth starts with knowing where things are. The geography quiz on this page is the lighter companion to the scorecard: ten questions on capitals, flags, landmarks and continents, each with a short explanation, so you leave knowing more about the map than when you arrived. It is a fair first check on the knowledge every travel plan quietly assumes.',
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
      {
        q: 'What is the difference between the travel scorecard and the geography quiz?',
        a: 'The scorecard measures you — how you travel, and how independent and culturally prepared you are. The geography quiz measures what you know about the world: capitals, flags, landmarks and continents, scored out of 100 with an explanation after every answer. Take the scorecard to plan a better trip, the geography quiz to settle an argument.',
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
    {
      publicToken: 'f4s8fukz',
      slug: 'geography-quiz',
      order: 2,
      seo: {
        title: 'Geography Quiz: Capitals, Flags & Landmarks (Free, 10 Qs)',
        description:
          'A free 10-question geography quiz on world capitals, flags, landmarks and continents. Instant score out of 100 and an explanation after every answer.',
        overview:
          'A free ten-question geography quiz covering world capitals, national flags, famous landmarks and the basic shape of the planet — the questions that trip up most people, including the ones who assume Sydney is the capital of Australia. You get an instant score out of 100, a level from Casual Explorer to Geography Genius, and a short explanation after every answer, so it teaches as much as it tests. About two minutes, no signup to start.',
        whoFor:
          'Travellers testing what they actually know before the next trip, pub-quiz regulars, students revising world geography, teachers and parents looking for a quick classroom or dinner-table round, and anyone who wants to settle a map argument.',
        whatYouLearn: [
          'Your geography level, from Casual Explorer to Geography Genius',
          'Whether you know the capitals that are commonly guessed wrong',
          'How well you recognise national flags and their symbols',
          'Which famous landmarks you can place in the right city',
          'A short factual explanation for every question you miss',
        ],
        sampleQuestions: [
          'What is the capital of Australia?',
          'Which is the smallest country in the world by area?',
          'Which country has the largest population in the world?',
          'Which major city is split between the continents of Europe and Asia?',
          'Which country features a red maple leaf on its national flag?',
        ],
        howItWorks:
          'Ten multiple-choice and true/false questions cover capitals, country size and population, flags, landmarks and continents. Each correct answer is worth 10 points for a total out of 100, and every question reveals a one-line explanation once you answer. Scores map to four levels: Casual Explorer (under 40), Map Reader (40–70), Globetrotter (70–90) and Geography Genius (90 or above). Free, about two minutes, no signup required to start.',
        faq: [
          {
            q: 'Is this geography quiz free?',
            a: 'Yes. All ten questions are free, it takes about two minutes, and your score and level appear as soon as you finish — no signup required to start.',
          },
          {
            q: 'How hard is it?',
            a: 'Deliberately mixed. A few questions are gentle warm-ups, and several are the classic traps — the capital of Australia, the smallest country by area, which continent is actually the largest. Most people score in the 40–70 range on a first attempt.',
          },
          {
            q: 'What counts as a good geography quiz score?',
            a: 'Out of 100: under 40 is Casual Explorer, 40–70 Map Reader, 70–90 Globetrotter, and 90 or above Geography Genius. Because every question is worth the same 10 points, a single trap question moves you a whole band — so it is worth reading the explanations before a rematch.',
          },
          {
            q: 'Are the answers explained?',
            a: 'Yes. Every question comes with a short factual explanation, including the reasoning behind the common wrong answer — for example that India overtook China as the most populous country in 2023, and that Asia, not Africa, is the largest continent.',
          },
          {
            q: 'Can I use this quiz with a class or a group?',
            a: 'Yes. It is a self-contained ten-question round with instant scoring, which makes it usable as a classroom warm-up, a team icebreaker or a pub-quiz geography round. Everyone can take it on their own device and compare scores.',
          },
        ],
      },
    },
  ],
}
