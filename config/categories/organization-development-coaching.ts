import type { CategoryFile } from '../schema'

/**
 * niche · 组织发展教练
 * 已补 intro + faq，收录 change-readiness-assessment（cu9m4j8h）并促级上线（去 draft）。
 * 另有两个测评通过 alsoIn 交叉归属：team-health-scorecard（team-coaching）、
 * leadership-scorecard（leadership-coaching）。
 */
export const organizationDevelopmentCoaching: CategoryFile = {
  category: {
    slug: 'organization-development-coaching',
    name: 'Organization Development Coach',
    title: 'Organizational Change & OD Assessments — Free Diagnostic Quizzes',
    description:
      'Free organization development assessments — score your change readiness, team health and leadership strength, and find the one condition blocking your next transformation.',
    emoji: '🏗️',
    heroCopy:
      'Diagnose the organization, not the slide deck. Short assessments that show which condition is actually blocking your next change.',
    order: 20,
    parent: 'career-business-leadership',
    intro: [
      'Organization development (OD) is the practice of improving how an organization works as a system — its structure, culture, leadership behaviour and capacity to adapt — rather than fixing one team or one process at a time. An OD coach or practitioner usually starts the same way: with a diagnosis. Before designing an intervention, you need a shared, honest read on where the organization actually is.',
      'That diagnostic step is the one most often skipped, and it is expensive to skip. Change programmes rarely fail because the plan was wrong; they fail because the organization had no room left to absorb them, or because the last change taught people that waiting it out works. Gartner research reported in Harvard Business Review found that the share of employees willing to support enterprise change fell from 74% in 2016 to just 38% in 2022, while the average employee went from two planned enterprise changes a year to ten. Readiness, in other words, has been quietly eroding underneath most transformation plans.',
      'The assessments on this page are diagnostic instruments, not personality tests. Each one scores observable behaviour — what people actually do when a leader announces something, what happens when two executives disagree in a meeting, whether anything was allowed to stop to make room for the new thing — and returns a score plus a profile showing which condition is weakest. They are deliberately short so that a whole leadership team can complete one independently in the same week.',
      'The most useful way to run any of them is as a group, not as an individual. Have each leader answer separately before any discussion, then compare the spread rather than the average. The question your leadership team disagrees on most is almost always the finding — and an averaged score hides exactly that. If you are about to launch a transformation, start with the Change Readiness Assessment. If the problem is inside one unit, start with the Team Health Scorecard. If you suspect the constraint is the leadership behaviour itself, start with the Leadership Scorecard. All three are free and take under ten minutes.',
    ],
    faq: [
      {
        q: 'What does an organization development coach do?',
        a: 'An OD coach works at the level of the system rather than the individual: diagnosing how decisions get made, how change is absorbed, how teams coordinate and where culture and structure work against the stated strategy. The typical sequence is diagnose, feed the data back to the group, co-design an intervention, then re-measure. It overlaps with executive coaching but the client is the organization, not one leader.',
      },
      {
        q: 'What is a change readiness assessment?',
        a: 'It is a structured diagnostic taken before a change is launched, measuring whether the conditions for it to stick are in place — typically a clear case for change, alignment among the leaders sponsoring it, spare capacity in the people expected to deliver it, and enough trust left over from previous changes. It answers "should we launch yet?" rather than "how did that go?".',
      },
      {
        q: 'Which of these assessments should I start with?',
        a: 'Start with the Change Readiness Assessment if a transformation, restructure or system rollout is coming. Start with the Team Health Scorecard if the issue is contained inside one team. Start with the Leadership Scorecard if the pattern repeats across teams, which usually points at leadership behaviour rather than at any one group.',
      },
      {
        q: 'Should the whole leadership team take them, or just me?',
        a: 'The whole group, answering independently before you discuss it. A single score tells you where one person sits; a set of scores tells you where your leaders see the organization differently, and that disagreement is the most actionable data an OD intervention can start from.',
      },
      {
        q: 'Are these OD assessments free, and can consultants use them with clients?',
        a: 'Every assessment on this page is free, gives an instant personalized report, and needs no account to start. Consultants and internal OD practitioners are welcome to use them as a discovery or workshop instrument with clients — share the link and have participants type the same organization name so the results can be grouped.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'cu9m4j8h',
      slug: 'change-readiness-assessment',
      order: 1,
      alsoIn: ['leadership-coaching'],
      seo: {
        title: 'Change Readiness Assessment — Is Your Organization Ready to Change?',
        description:
          'A free 3-minute change readiness assessment scoring your organization across four pillars: case for change, leadership alignment, capacity to absorb, and trust from the last change.',
        overview:
          'Most change programmes do not fail because the plan was wrong. They fail because the organization had no capacity left to absorb them, or because the last change taught people that waiting it out works. This free assessment scores your organization out of 120 across the four conditions that predict whether a change actually sticks, and shows you which one is blocking you — before you announce anything.',
        whoFor:
          'Executive sponsors, change and transformation leads, managers expected to deliver a change in their team, and external OD consultants or coaches assessing a client. It works for any planned change — restructure, system rollout, operating-model shift, merger integration or a new way of working.',
        whatYouLearn: [
          'Whether people below the leadership team can say why this change is happening — and whether anyone has stated what gets worse if it does not',
          'Whether your leaders genuinely agree, model the change themselves, and would hold the line in month three when it gets unpopular',
          'Whether anything has been allowed to stop to make room, or this simply lands on top of everything else',
          'What the last change taught people to expect, and whether it is safe to raise a problem with this one',
          'Which single pillar to fix first — and why strengthening the pillars that are already strong changes almost nothing',
        ],
        sampleQuestions: [
          'If you stopped someone mid-level in the hallway and asked why this change is happening, what would they say?',
          'Has anyone said out loud what specifically gets worse if nothing changes?',
          'The last time two senior leaders disagreed about this in a meeting, what happened?',
          'How many other major initiatives are your people absorbing at the same time as this one?',
          'Think of the last big change here. How did it end?',
        ],
        howItWorks:
          'Twelve scored questions ask what people actually do rather than how you would describe the culture, each worth up to 10 points, for a total out of 120. Scores roll up into four pillars — Case for Change, Leadership Alignment, Capacity to Absorb, and Trust & Track Record — shown on a radar chart, and the total maps to one of four bands from "Not Ready" to "Change-Ready". Read the lowest pillar rather than the total: readiness behaves like a chain, not an average, so an organization strong on three pillars and empty on the fourth is blocked on the fourth. It takes about three minutes and is free.',
        faq: [
          {
            q: 'What does a change readiness assessment measure?',
            a: 'This one measures four conditions that decide whether a change survives contact with reality: whether there is a clear, stated case for change; whether the leaders sponsoring it are genuinely aligned and modelling it; whether people have the capacity and protected time to absorb it; and how much trust and credibility the last change left behind.',
          },
          {
            q: 'Why does change fail so often even when the plan is good?',
            a: 'Usually because of capacity and trust rather than planning. Gartner research reported in Harvard Business Review found the average employee faced ten planned enterprise changes in 2022, up from two in 2016, while willingness to support change fell from 74% to 38%. No amount of communication fixes an overloaded organization — only removing something does.',
          },
          {
            q: 'Should my leadership team take it separately?',
            a: 'Yes, and that is the highest-value way to use it. Send it to your leadership team plus a few managers one level down, ask everyone to answer before any group discussion, and have each person type the same organization or programme name. In the debrief look at the spread, not the average — the question your leaders disagree on most is the finding.',
          },
          {
            q: 'What should I do with a low score?',
            a: 'Treat your lowest pillar as a prerequisite rather than a parallel workstream, and spend 60 days on it before you announce anything. A low score is not a reason to abandon the change; launching without addressing it usually burns credibility you will need later.',
          },
          {
            q: 'When should we re-run it?',
            a: 'At the halfway point of the change, and compare pillar by pillar rather than by total. Readiness is a snapshot and decays quickly — as soon as two or three more initiatives land on the same people, capacity drops even if nothing about your plan changed.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About three minutes for twelve scored questions plus a few context questions that do not affect your score. It is free, gives you an instant report with a radar chart, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
