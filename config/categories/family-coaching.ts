import type { CategoryFile } from '../schema'

/**
 * niche · 家庭教练
 * 已补 intro + faq 并促级上线（去 draft）。
 * 本身不挂题：4 个测评通过 alsoIn 交叉归属到本分类——
 * parenting-partnership-scorecard（6drmsvpg，parenting-coaching）、
 * parenting-style / relationship-health-scorecard（zfxrszr6 / kvvv4txe，relationship-coaching）、
 * child-development-iq-quiz（nnce4kgj，child-development-coaching）。
 */
export const familyCoaching: CategoryFile = {
  category: {
    slug: 'family-coaching',
    name: 'Family Coach',
    title: 'Family Coaching Quizzes & Family Relationship Assessments',
    description:
      'Free family coaching quizzes — check how healthy your family relationships are, see how well you and your co-parent work as a team, and find the one pattern worth changing first.',
    emoji: '👪',
    heroCopy:
      'Fewer repeat arguments, more of the family you actually want. Short assessments that show you what is really driving the friction at home.',
    intro: [
      'Family coaching looks at the household as a system rather than at one difficult person inside it. Instead of asking who is at fault, it asks what keeps happening: which conversations always end the same way, which rules only one adult enforces, who quietly absorbs the logistics, and which relationship in the house is carrying more strain than anyone has said out loud. The work is practical and forward-looking — name the pattern, change one part of it on purpose, and see what moves.',
      'Most families are in far better shape than the recurring argument suggests, which is exactly why a single stuck pattern feels so disproportionate. Pew Research Center found that 77% of parents describe the relationship with their young adult children as excellent or very good, and that 66% of young adults say they talk with their parent as often as they would like (source: Pew Research Center, “Parents, Young Adult Children and the Transition to Adulthood”, January 2024, https://www.pewresearch.org/social-trends/2024/01/25/parents-relationship-with-their-young-adult-children/). Strong overall, with one or two friction points that never resolve — that is the typical starting position, and it is a coachable one.',
      'The friction is worth taking seriously because it rarely stays contained. A 2025 systematic review in Adolescent Research Review found that every one of the 20 studies it examined reported a positive association between family conflict and problematic digital media use in children and adolescents (source: https://link.springer.com/article/10.1007/s40894-025-00274-2). Tension between the adults tends to show up somewhere else in the house — in a child’s screen habits, in bedtime battles, in who has stopped talking to whom.',
      'Not sure where to start? If the strain sits between you and your partner, take the Relationship Health Scorecard. If the two of you are running different playbooks with the kids, take the Parenting Partnership Scorecard — separately, then compare. If you want to understand your own default around warmth and limits, take the Parenting Style quiz, and if you are trying to tell a real problem apart from a normal stage, try the Child Development IQ quiz. Each is free, takes about five minutes, and ends with a specific next step rather than a verdict.',
    ],
    faq: [
      {
        q: 'What is family coaching?',
        a: 'Family coaching is a practical, present-focused process that helps a family see its own recurring patterns — around rules, conflict, workload and communication — and change one of them deliberately. A coach works with the family as a system, usually over a small number of sessions, on goals the family sets itself.',
      },
      {
        q: 'How is family coaching different from family therapy?',
        a: 'Coaching is future-oriented and works with functioning families who want to change how they operate. Therapy is clinical treatment, appropriate where there is trauma, mental illness, addiction, abuse or a family in crisis. If any of those are present, start with a licensed family therapist rather than a coach.',
      },
      {
        q: 'Which family quiz should I take first?',
        a: 'Start with the relationship or the partnership that feels most strained. The Relationship Health Scorecard reads the couple; the Parenting Partnership Scorecard reads the two of you as a parenting team; the Parenting Style quiz reads your own instincts; the Child Development IQ quiz helps you judge what is age-appropriate. Any of them takes about five minutes.',
      },
      {
        q: 'Should other family members take the quiz too?',
        a: 'For the partnership and relationship scorecards, yes — take them separately, without discussing first, then compare results. Totals often land close together while one dimension sits several points apart, and that gap is usually the most useful conversation available to you this month.',
      },
      {
        q: 'Are these quizzes free, and is the result a diagnosis?',
        a: 'Every quiz on this page is free, needs no signup to start, and gives you a personalized result immediately. None of them is a clinical assessment. If you are worried about a child’s development, someone’s mental health, or safety at home, speak with a qualified professional.',
      },
    ],
    order: 15,
    parent: 'life-mindset-relationships',
  },
  quizzes: [],
}
