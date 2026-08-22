import type { CategoryFile } from '../schema'

/** niche · 儿童成长教练 */
export const childDevelopmentCoaching: CategoryFile = {
  category: {
    slug: 'child-development-coaching',
    name: 'Child Development Coach',
    title: 'Child Development Quizzes & Assessments',
    description:
      'Free child development quizzes on milestones from the first smile to two-word phrases and tantrums. Every answer explained. Educational, not a screening tool.',
    emoji: '🧒',
    heroCopy:
      'Milestones are signposts, not deadlines. Test how well you know what children do, and when.',
    order: 17,
    parent: 'life-mindset-relationships',
    intro: [
      'Child development coaching helps parents, educators and carers understand what children are doing at each stage and why — the shift from cooing to babbling, the arrival of object permanence, parallel play at two, and the emotional storms that come with big intentions and very little regulation. Knowing the pattern turns a lot of alarming behaviour into ordinary development.',
      'Milestones describe what most children do by a given age, not what every child must. The CDC and the American Academy of Pediatrics revised their milestone checklists in 2022 for the first time since 2004, moving from a 50th-percentile standard to behaviours that 75% or more of children can be expected to show at a given age — explicitly to help families act earlier instead of waiting and seeing (source: AAP News, https://publications.aap.org/aapnews/news/19554/CDC-AAP-update-developmental-milestones-for).',
      'What adults do in between milestones matters more than the timing of any single one. The back-and-forth of "serve and return" — a child babbles, points or gazes, and an adult responds in kind — is one of the strongest known drivers of healthy brain architecture, which is why narrating your day out loud and following a child\'s lead in play beat almost any purchased program.',
      'The quizzes on this page are free, take about three minutes, and explain every answer. They are educational and are not developmental screening or diagnostic tools; if you have concerns about a child, a pediatrician is the right first call, and early support consistently works better than waiting.',
    ],
    faq: [
      {
        q: 'What does a child development coach do?',
        a: 'A child development coach helps adults read what a child is doing developmentally and respond well — language exposure, responsive interaction, play, routines and age-appropriate expectations. It is guidance and skill-building for families and educators, not clinical assessment or therapy.',
      },
      {
        q: 'Should I worry if my child misses a milestone?',
        a: 'Not automatically. Milestones mark what most children do by an age, and normal variation is wide — independent walking, for example, ranges roughly from 9 to 17 months. What warrants a conversation with a pediatrician is a pattern: several delays together, or a loss of skills a child previously had.',
      },
      {
        q: 'How much screen time is appropriate for very young children?',
        a: 'Major pediatric guidance advises avoiding screen media other than video chatting for children under about 18 months, and from 18 to 24 months limiting it to high-quality programming watched together with a caregiver. The reasoning is that interaction with a responsive adult, not the screen itself, is what builds language at that age.',
      },
      {
        q: 'Are these child development quizzes free?',
        a: 'Yes. Each takes about three minutes, is free, needs no signup to start, and explains every answer. They are for learning and general interest — not a developmental screening or diagnosis.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'nnce4kgj',
      slug: 'child-development-iq-quiz',
      order: 1,
      seo: {
        title: 'Child Development IQ Quiz — Test Your Milestones Knowledge',
        description:
          'A free 10-question quiz on baby and toddler milestones — first smile, babbling, object permanence, walking, parallel play, tantrums. Every answer explained.',
        overview:
          'How much do you really know about how children develop? This free 10-question quiz covers the milestones babies and toddlers reach in their first five years — the first social smile, babbling, object permanence, first steps, two-word phrases, parallel play and tantrums — plus the principles behind them, like serve-and-return interaction and early brain growth. Every question reveals an explanation, and you get your score out of 100 in about three minutes.',
        whoFor:
          'Parents and expecting parents, grandparents, nannies, early-years educators, and coaches who work with families and want a quick check on what they actually know.',
        whatYouLearn: [
          'Your Child Development IQ level from Curious Beginner to Child Development Pro',
          'When the first true social smile, babbling and first steps typically appear',
          'What object permanence is and why peekaboo suddenly becomes funny',
          'Why parallel play at age two is normal rather than antisocial',
          'What "serve and return" means and why it drives brain development',
          'What pediatric guidance says about screens before age two',
        ],
        sampleQuestions: [
          'At roughly what age does a baby produce their first true social smile?',
          'Object permanence — knowing a toy still exists after you hide it — typically emerges around what age?',
          'A two-year-old plays happily next to another child but not really with them. What is this called?',
          'By age 5, a child’s brain has reached roughly what share of its adult volume?',
          'At what age are temper tantrums most common?',
        ],
        howItWorks:
          'Ten questions — multiple-choice and true/false — cover social, language, motor, cognitive and play milestones across the first five years, plus early brain development and screen-media guidance. Each is worth 10 points toward a score out of 100, and every question comes with an explanation, so the quiz doubles as a short refresher. Scores map to three levels: Curious Beginner, Solid Knowledge and Child Development Pro. Free, about three minutes, no signup to start.',
        faq: [
          {
            q: 'Is this a developmental screening for my child?',
            a: 'No. It tests the adult’s knowledge of typical milestones — it asks nothing about a specific child and produces no assessment of one. If you have concerns about a child’s development, speak with a pediatrician or child health professional.',
          },
          {
            q: 'What is a good Child Development IQ score?',
            a: 'Out of 100: under 50 is Curious Beginner, 50–80 Solid Knowledge, and 80 or above Child Development Pro. The questions people miss most often are object permanence timing, parallel play and how much of adult brain volume is reached by age five.',
          },
          {
            q: 'Why do milestone ages differ between sources?',
            a: 'Because they use different thresholds. Older checklists often described what half of children do by an age, while the 2022 CDC and AAP revision uses behaviours that 75% or more of children show — so the listed ages shifted, without child development itself changing.',
          },
          {
            q: 'What helps a young child develop most?',
            a: 'Responsive, everyday interaction: narrate what you are doing, follow the child’s lead in play rather than directing it, read together, and treat milestones as a conversation starter with a pediatrician rather than a scorecard.',
          },
        ],
      },
    },
  ],
}
