import type { CategoryFile } from '../schema'

/** niche · 团队教练 */
export const teamCoaching: CategoryFile = {
  category: {
    slug: 'team-coaching',
    name: 'Team Coach',
    title: 'Team Health Quizzes & Team Effectiveness Assessments',
    description:
      'Free team health assessments scoring trust, alignment, accountability and conflict — with a radar chart of what is holding your team back. No signup.',
    emoji: '👥',
    heroCopy:
      'Teams rarely fail on talent. Find out which of the four dimensions of team health is quietly costing you the most.',
    order: 4,
    parent: 'career-business-leadership',
    intro: [
      'Team coaching works on the team as a unit rather than on its members one at a time. Where individual coaching asks what one person should do differently, team coaching asks what the group keeps doing to itself: the decision that gets reopened every week, the standard nobody wrote down, the disagreement that leaves the meeting and reappears in direct messages. Those patterns belong to the team, so they cannot be fixed one person at a time.',
      'Most frameworks converge on the same short list of what makes a team work. Google\'s Project Aristotle, a multi-year internal study of its own teams, found that psychological safety — whether people can admit a mistake or say "I don\'t know" without paying a social price — was the strongest single predictor of team effectiveness, ahead of who was on the team. Gallup\'s workplace research points the same way from the other end: US employee engagement fell to a ten-year low of about 31% in 2025, and only around three in ten employees strongly agree that their opinions count at work (sources: Gallup via Fortune, https://fortune.com/2026/06/23/gallup-worker-engagement-low-psychological-safety-gap/).',
      'A useful team assessment therefore separates the dimensions instead of returning one number. Trust and psychological safety sit underneath everything else; clarity and alignment determine how much work gets redone; accountability determines whether decisions survive the meeting they were made in; and how the team handles conflict determines whether the real conversation happens in the room or afterwards. Teams usually try to fix the wrong one — installing an accountability process when the actual problem is that nobody feels safe enough to flag a slip early.',
      'The assessment on this page is free, takes about four minutes, and plots all four dimensions on a radar chart. Managers, team leads and coaches often have every member take it independently: the spread between answers is usually more revealing than the average.',
    ],
    faq: [
      {
        q: 'What is a team health assessment?',
        a: 'A structured self-assessment of how a team actually operates — typically covering trust, shared priorities, ownership of work, and how disagreement is handled. It is a diagnostic and conversation starter for a team development or coaching session, not a performance review of individuals.',
      },
      {
        q: 'What actually makes a team high-performing?',
        a: 'Research consistently points at how the team behaves rather than who is on it. Google\'s Project Aristotle found psychological safety to be the leading factor, followed by dependability, structure and clarity, meaning, and impact. In practice that means people can admit mistakes, commitments hold, everyone can name the top priority, and disagreement is argued openly and then committed to.',
      },
      {
        q: 'How often should a team run a health check?',
        a: 'Quarterly is the common rhythm — frequent enough to see whether a change stuck, spaced enough that the numbers move for real reasons. Re-running the same assessment after 90 days and comparing radar charts is more useful than a one-off score.',
      },
      {
        q: 'Should the whole team take it, or just the leader?',
        a: 'Both, ideally. A leader-only result shows the leader\'s view of the team; having each member answer independently surfaces where perceptions diverge. Dimensions where teammates disagree most are usually the highest-value thing to discuss.',
      },
      {
        q: 'Is this team assessment free?',
        a: 'Yes. It is free, takes about four minutes, and shows your score, band and four-dimension radar chart immediately — no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'rkqf3edm',
      slug: 'team-health-scorecard',
      order: 1,
      alsoIn: ['leadership-coaching', 'organization-development-coaching'],
      seo: {
        title: 'How Strong Is Your Team? Free Team Health Scorecard (4 min)',
        description:
          'A free 12-question team health assessment scoring trust, alignment, accountability and conflict, with a radar chart of your weakest dimension.',
        overview:
          'Most teams do not fail on talent — they fail because trust is thin, priorities are fuzzy, commitments quietly slip, and the real conversation happens after the meeting rather than in it. This free 12-question scorecard rates your team out of 60 across four dimensions of team health and returns a radar chart showing which one is dragging the others down, plus a specific first behaviour to change. It takes about four minutes.',
        whoFor:
          'Team leads, engineering and product managers, founders, HR and L&D partners, and team coaches who want a fast, structured read on how a team actually operates on a normal week.',
        whatYouLearn: [
          'Your team band — Fragile, Strained, Solid or High-Performing — out of 60',
          'Separate scores for trust and psychological safety, clarity and alignment, accountability and ownership, and conflict and communication',
          'Which single dimension is the constraint on all the others',
          'Whether decisions in your meetings are actually being executed as decided',
          'How much of the real conversation is happening in back channels',
          'One concrete behaviour to change at your next team meeting',
        ],
        sampleQuestions: [
          'When someone on the team makes a visible mistake, what usually happens?',
          'If you asked five teammates what the single top priority is this quarter, how similar would the answers be?',
          'How do peers handle it when a teammate\'s work is not up to standard?',
          'Once a decision is made, how do the people who disagreed behave?',
          'How much of the real conversation happens in the meeting versus in DMs and hallways afterwards?',
        ],
        howItWorks:
          'Twelve multiple-choice questions, three per dimension, each scored 1–5 for a total out of 60. The four dimensions — Trust & Psychological Safety, Clarity & Alignment, Accountability & Ownership, and Conflict & Communication — are plotted on a radar chart against a reference line, so the shape matters more than the total. Scores map to four bands: Fragile (under 26), Strained (26–37), Solid (37–48) and High-Performing (48+). Answer for how the team behaves on a normal week rather than on its best day. Free, about four minutes, no signup to start.',
        faq: [
          {
            q: 'What is a good team health score?',
            a: 'Out of 60: under 26 is Fragile, 26–37 Strained, 37–48 Solid, and 48 or above High-Performing. Most functioning teams land in Strained or Solid. The more actionable number is your lowest dimension — improving your strongest one further buys almost nothing.',
          },
          {
            q: 'Which dimension should we fix first?',
            a: 'Start with trust and psychological safety if it is anywhere near your lowest. The other three sit on top of it: if people are not safe enough to say "I am behind" or "I think this is wrong", no accountability process or alignment workshop will hold.',
          },
          {
            q: 'Can the whole team take this and compare results?',
            a: 'Yes, and it is the recommended use. Have each member complete it independently, then compare radar charts. The variance between teammates on a dimension is itself a finding — it usually means people are having very different experiences of the same team.',
          },
          {
            q: 'Is this a validated psychometric instrument?',
            a: 'No. It is a structured self-reflection tool for team development and coaching conversations, built on well-established team-effectiveness dimensions. It is not a clinical or psychometric assessment and does not replace professional HR or organisational advice.',
          },
          {
            q: 'Do I need to sign up to see the result?',
            a: 'No. The scorecard is free and your score, band and radar chart appear as soon as you finish.',
          },
        ],
      },
    },
  ],
}
