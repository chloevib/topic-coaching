import type { CategoryFile } from '../schema'

/**
 * niche · 父母教练
 * 已补 intro + faq，收录 parenting-partnership-scorecard（6drmsvpg）并促级上线（去 draft）。
 * 另有两个测评通过 alsoIn 交叉归属：parenting-style（relationship-coaching）、
 * child-development-iq-quiz（child-development-coaching）。
 */
export const parentingCoaching: CategoryFile = {
  category: {
    slug: 'parenting-coaching',
    name: 'Parenting Coach',
    title: 'Parenting Quizzes & Assessments for Parents and Co-Parents',
    description:
      'Free parenting quizzes and coaching assessments — find your parenting style, check how strong your parenting partnership is, and see what to work on next.',
    emoji: '🧸',
    heroCopy:
      'Fewer battles, more teamwork. Short assessments that show you what is actually driving the friction at home.',
    order: 16,
    parent: 'life-mindset-relationships',
    intro: [
      'Parenting coaching is not about being told you are doing it wrong. It is a practical, forward-looking process that helps you see the patterns in your own home — how you set limits, how you respond to big feelings, how you and your partner divide the work — and then change one of them on purpose rather than by accident.',
      'A surprising amount of what feels like a child problem is really a coordination problem. Children quickly learn which parent to ask for what, and a rule that only one adult enforces stops being a rule. Researchers call the quality of that adult partnership the coparenting alliance, and studies consistently link it to lower parenting stress and better family functioning — independently of how skilled either parent is on their own.',
      'The other quiet pressure is the invisible load: the mental list of appointments, forms, sizes and who needs what by Thursday. A 2025 study by researchers at the University of Bath and the University of Melbourne, published in the Journal of Marriage and Family, found that mothers report carrying around 71% of that household mental load — and that fathers are far more likely to describe it as evenly shared. Pew Research Center finds a similar gap even where both parents work full time, with 52% of those couples saying the mother does more of the day-to-day parenting and only 10% saying the father does. That mismatch in perception, more than the split itself, is usually what turns into the recurring argument.',
      'Not sure where to start? If the friction is mostly between the two adults, take the Parenting Partnership Scorecard — and have your partner take it separately, then compare. If you want to understand your own default approach to limits and warmth, start with the Parenting Style quiz. If you are trying to work out whether a behaviour is a problem or just the age, try the Child Development IQ quiz. Each one is free, takes about five minutes, and ends with a specific next step rather than a verdict.',
    ],
    faq: [
      {
        q: 'What does a parenting coach actually do?',
        a: 'A parenting coach helps you look at what is happening in your home, name the pattern behind the recurring flashpoints, and design a small, testable change — an agreed rule, a weekly sync, a different response to meltdowns. It is practical and present-focused, unlike family therapy, which is designed to treat clinical or trauma-related difficulties.',
      },
      {
        q: 'Which parenting quiz should I take first?',
        a: 'If the tension is mainly between you and your co-parent, start with the Parenting Partnership Scorecard. If you want to understand your own instincts around limits, warmth and control, take the Parenting Style quiz. If you mostly want to know what is normal for your child\'s age, take the Child Development IQ quiz.',
      },
      {
        q: 'Can these quizzes help with co-parenting after a separation?',
        a: 'Yes. The Parenting Partnership Scorecard asks about your setup first, so it reads your result in context — living together, co-parenting across two homes, a blended family, or parenting largely alone. The five things it measures, especially a consistent united front and finishing conflict properly, matter more across two households, not less.',
      },
      {
        q: 'Are the parenting quizzes free, and do I need an account?',
        a: 'Every quiz on this page is free and gives you a personalized result immediately. You can start without creating an account.',
      },
      {
        q: 'Is a parenting quiz a diagnosis?',
        a: 'No. These are self-reflection and coaching tools, not clinical assessments. If you are worried about your child\'s development, your own mental health, or safety at home, speak with a qualified professional such as your paediatrician, GP or a licensed family therapist.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '6drmsvpg',
      slug: 'parenting-partnership-scorecard',
      order: 1,
      alsoIn: ['relationship-coaching'],
      seo: {
        title: 'Parenting Partnership Quiz — Are You Two Actually a Team?',
        description:
          'A free 5-minute parenting partnership scorecard across 5 dimensions — united front, conflict repair, the invisible load, couple time and alignment.',
        overview:
          'Most parenting problems are not really about the child. They are about two adults who love the same kid and are quietly running two different playbooks. This free scorecard measures the partnership rather than the parenting, across the five dimensions that decide whether your home feels like a team or a tug-of-war, and gives you a score out of 100 with one experiment to run for the next two weeks.',
        whoFor:
          'Parents and co-parents who keep having the same argument, feel like the good cop or the bad cop, suspect one of them is carrying the whole mental list, or want a calm way to start that conversation. It works whether you live together, co-parent across two homes, or are blending two families.',
        whatYouLearn: [
          'Whether your household gives one answer or two — and if your rules survive a determined child',
          'What your children actually see when you disagree, and whether conflict reliably gets an ending',
          'Who really carries the invisible load of appointments, forms, sizes and sick days',
          'How much of the couple is left underneath the logistics',
          'Whether you handle big feelings the same way, and which single dimension to work on first',
        ],
        sampleQuestions: [
          'Your child asks for something you have already said no to — and goes straight to your partner. What usually happens?',
          'How aligned are you on the big house rules: screens, bedtime, sweets, homework?',
          'After a real argument between the two of you, what happens next?',
          'Who carries the mental list — appointments, forms, birthdays, sizes, who needs what by when?',
          'Honestly: are you a couple who happen to be parents, or two people running a household?',
        ],
        howItWorks:
          'You answer 20 questions about how things actually went in the last month, plus a few context questions about your setup and your children\'s ages. Answers are scored across five dimensions — united front, conflict and repair, the invisible load, us beyond the kids, and emotional alignment — for a total out of 100 and a radar chart. The shape matters more than the total: one collapsed dimension is usually where your recurring fight really lives. It takes about five minutes and is free.',
        faq: [
          {
            q: 'What is a parenting partnership, and why does it matter?',
            a: 'It is the working relationship between the adults raising a child — how consistently you back each other, resolve disagreements and share the load. Research on the coparenting alliance links its quality to lower parenting stress and better family functioning, separately from how skilled either parent is individually.',
          },
          {
            q: 'Should my partner take it too?',
            a: 'That is the most useful way to use it. Take it separately, without discussing it first, then put the two radar charts side by side. Totals often come out similar while one dimension sits several points apart — that gap is usually a difference in what each of you is carrying, and it is the most productive conversation available to you this month.',
          },
          {
            q: 'Does it work if we are separated or in a blended family?',
            a: 'Yes. The first question asks how you are parenting right now — together, co-parenting across two homes, blended, or largely alone — so your report is read in the right context.',
          },
          {
            q: 'Is it bad for children to see their parents argue?',
            a: 'What matters most is whether conflict gets an ending. Children are far less affected by seeing a calm disagreement that is repaired than by tension that is never named or resolved, which is why the scorecard treats repair as its own dimension.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About five minutes for 20 questions. It is free, gives you a personalized report and radar chart, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
