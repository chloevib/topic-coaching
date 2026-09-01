import type { CategoryFile } from '../schema'

/**
 * niche · 礼仪教练
 * 首题：Business Etiquette Scorecard（retkra3d），完整 GEO。
 * 已补 intro + faq 并促级上线（去 draft）。
 */
export const etiquetteCoaching: CategoryFile = {
  category: {
    slug: 'etiquette-coaching',
    name: 'Etiquette Coach',
    title: 'Business Etiquette Quizzes & Professional Assessments',
    description:
      'Free business etiquette quizzes and assessments — score how your client-facing team handles meetings, email, hosting and cross-cultural norms.',
    emoji: '🎩',
    heroCopy: 'Clients rarely complain about etiquette. They just stop calling back.',
    intro: [
      'Etiquette coaching is not about cutlery. In a professional setting it is about the behaviours that travel across cultures and industries: turning up prepared, replying when you said you would, getting someone’s name and title right, adapting to how a client likes to work, and doing what you promised in the meeting. Those habits are what a client actually experiences, and they are formed long before anyone reads your proposal.',
      'The commercial case is well documented. Research on professional-services client relationships repeatedly finds that communication and responsiveness sit just behind underperformance as a reason clients leave — and unlike results, they are entirely within your control. In legal services, one 2026 client-experience study found roughly three in four clients call themselves highly satisfied while only 41% would recommend their firm, a gap that etiquette and follow-through do more to explain than technical quality does. Meanwhile the business etiquette training market is growing at around 7% a year, pushed by hybrid work, digital communication norms, and cross-border teams.',
      'These free etiquette assessments give you an honest read before a client gives you a quiet one. Score how your client-facing team really behaves across meetings and presence, written communication and responsiveness, hosting and cross-cultural awareness, and follow-through. Each takes a few minutes, is free, and ends with a breakdown and a first step — no signup required to start.',
    ],
    faq: [
      {
        q: 'What does an etiquette coach do?',
        a: 'A business etiquette coach works on how people and teams come across professionally: meeting conduct and presence, written and email norms, responsiveness, hosting clients, cross-cultural awareness, and follow-through. In corporate work it usually sits alongside communication and client-service training rather than being about formal social rules.',
      },
      {
        q: 'Why does business etiquette affect revenue?',
        a: 'Because clients judge a firm on the experience of working with it, not only on the output. Studies of professional-services relationships consistently rank communication and responsiveness among the top reasons clients leave, and clients who describe their treatment as exceptional return at a markedly higher rate than those judging outcomes alone. Etiquette failures are rarely complained about — they show up as slower replies and a quieter pipeline.',
      },
      {
        q: 'Does etiquette still matter in remote and hybrid work?',
        a: 'It matters more, because there are fewer cues to fall back on. Response times, meeting punctuality, camera and attention norms, and the clarity of a written ask carry most of the professional signal on a video call or in an inbox. Demand for digital and virtual etiquette training has grown alongside hybrid work for exactly that reason.',
      },
      {
        q: 'How do you assess etiquette without imposing one culture’s rules?',
        a: 'By scoring behaviours rather than customs. Preparation, responsiveness, keeping promises, discretion, and adapting to the person in front of you are valued across business cultures; specific greetings, titles, and dining conventions are not. A good assessment measures the first group and treats the second as something to research per client.',
      },
      {
        q: 'Are these etiquette quizzes free?',
        a: 'Yes. Every assessment on this page is free, takes a few minutes, and gives you a score with a breakdown — no signup required to start.',
      },
    ],
    order: 16,
    parent: 'lifestyle-interests',
  },
  quizzes: [
    {
      publicToken: 'retkra3d',
      slug: 'business-etiquette-scorecard',
      order: 1,
      alsoIn: ['business-coaching', 'communication-coaching'],
      seo: {
        title: 'Business Etiquette Scorecard — How Polished Is Your Team?',
        description:
          'A free 4-minute business etiquette assessment. Twelve questions, four areas, a score out of 120 — and the one habit quietly costing your team client trust.',
        overview:
          'Deals rarely die because of etiquette; they erode because of it. This free scorecard asks twelve questions about what your client-facing team actually does — not what it intends — across meetings and presence, written communication and responsiveness, hosting and cross-cultural awareness, and follow-through and discretion. You get a score out of 120, a radar chart of the four areas, and a clear read on which one is dragging the others down. It takes about four minutes and needs no signup to start.',
        whoFor:
          'Team leads, founders, account and client-service teams, and the L&D, enablement or coaching professionals assessing them — anyone whose revenue depends on how a team shows up in front of a client.',
        whatYouLearn: [
          'Your team’s etiquette score out of 120 and which of four bands you land in',
          'How you rate on meetings & presence, written & responsiveness, hosting & cross-culture, and follow-through & discretion',
          'Which single area is your constraint — clients form an impression from your worst moment, not your average',
          'A concrete way to run it across the team and debrief the questions where answers disagree most',
        ],
        sampleQuestions: [
          'Think about the last three external meetings your team joined. How many started on time, with everyone who was needed present?',
          'A client emails at 4pm with a question nobody can answer straight away. What normally happens?',
          'Your team is about to meet a client from a business culture they don’t know well. What happens first?',
          'Of the things your team said out loud in the last client meeting, how many were done by the date promised?',
        ],
        howItWorks:
          'Twelve scenario questions are scored 0–10 each and grouped into four areas of ten-point questions, totalling a score out of 120 that places you in one of four bands — Leaking Trust, Good on Good Days, Reliably Professional, or Genuinely Polished. A radar chart shows all four areas so you can see the weakest one, which is the one worth fixing. It is designed to be taken by three to six people on the same team separately, using the same team name, so the spread between answers is visible. About four minutes, free, no signup required to start.',
        faq: [
          {
            q: 'Is this about formal etiquette rules, like cutlery and dress codes?',
            a: 'No. It scores behaviours that travel across cultures and industries — preparation, responsiveness, keeping promises, discretion, and adapting to the client in front of you — rather than any one country’s conventions. The questions on hosting and cross-cultural awareness measure whether your team researches and adapts, not whether it already knows the local rules.',
          },
          {
            q: 'Why take it as a team rather than individually?',
            a: 'Because the gap between people is more useful than the average. If half your team says “someone always writes the recap” and the other half says there is no recap, a client’s experience depends on who they happen to get — a visibility problem on top of a habit problem. Have three to six people answer separately without discussing it first, then debrief the two most-disagreed questions.',
          },
          {
            q: 'What should I do with a low score?',
            a: 'Start with the lowest area on the radar, not the total, and change one habit rather than four. Follow-through usually comes first: nothing else matters if the things said in a meeting do not happen. Consistency problems are almost always solved by a default that runs without anyone deciding — a recap template, an acknowledgement rule, a pre-call checklist.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About four minutes for the twelve questions. It is free, gives you a score out of 120 with a four-area radar breakdown, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
