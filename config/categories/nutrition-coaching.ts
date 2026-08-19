import type { CategoryFile } from '../schema'

/**
 * niche · 营养教练
 * 本身不挂题：两个测评由 health-wellness-coaching 通过 alsoIn 交叉归属
 * （nutrition-iq af8c5j4t、eating-personality x8xgbenx）。
 * 已补 intro + faq 并促级上线（去 draft）。
 * intro 引用的外部研究：
 *  - Burke et al. 2011 / Cambridge Public Health Nutrition 2022 系统综述（膳食自我监测与减重）
 *    https://pmc.ncbi.nlm.nih.gov/articles/PMC8928602/
 *  - Berry et al. 2019（自我监测频率 × 一致性 >3 天/周 才见效）
 *    https://pmc.ncbi.nlm.nih.gov/articles/PMC6861632/
 */
export const nutritionCoaching: CategoryFile = {
  category: {
    slug: 'nutrition-coaching',
    name: 'Nutrition Coach',
    title: 'Nutrition Coach Quizzes & Nutrition IQ Tests',
    description:
      'Free nutrition quizzes to test your nutrition IQ and uncover your eating personality — protein, fibre, food labels, and the habits that actually stick.',
    emoji: '🥗',
    heroCopy:
      'Understand what you eat and why you eat that way. Start by testing what you already know.',
    intro: [
      'Nutrition coaching is less about handing someone a meal plan and more about closing the gap between what people know and what they actually do. A good nutrition coach helps you read food labels without being fooled by them, get enough protein and fibre, understand which claims are marketing rather than science, and then build habits that survive a busy week. The knowledge half and the behaviour half both matter — knowing the target does not help if the routine falls apart by Wednesday.',
      'Research on behaviour change backs the second half up. A systematic review of dietary self-monitoring in behavioural weight-loss programmes found that participants with high adherence to tracking lost significantly more weight than low-adherence participants (about 5.4 kg vs 3.5 kg at 12 weeks), and a separate analysis found that frequency of self-monitoring only helped when it was consistent — roughly more than three days a week. In other words, the pattern you keep beats the plan you admire.',
      'These free quizzes work on both halves. The Nutrition IQ quiz checks the facts — protein, fibre, labels, and the myths that refuse to die — with an explanation after every question. The Eating Personality quiz looks at the pattern behind your choices: whether you eat on autopilot, on emotion, on a schedule, or on whatever is nearest. Each takes a few minutes, is free, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a nutrition coach do?',
        a: 'A nutrition coach helps you translate nutrition knowledge into daily habits — building meals around adequate protein, fibre, and vegetables, reading labels critically, and setting up routines that hold up on busy weeks. Coaches focus on behaviour change and accountability rather than prescribing clinical diets; medical nutrition therapy for a diagnosed condition belongs with a registered dietitian or physician.',
      },
      {
        q: 'What is a good “nutrition IQ” score?',
        a: 'On the Nutrition IQ quiz, most people land in the middle band — they know the headline advice but slip on specifics like fibre targets, protein per meal, and what “no added sugar” legally means on a label. The score matters less than which questions you missed; each answer comes with a short explanation so you can close that particular gap.',
      },
      {
        q: 'Does knowing more about nutrition actually change how I eat?',
        a: 'Knowledge alone is a weak predictor of behaviour, which is why these two quizzes pair together. Studies of behavioural weight-loss programmes show that consistent self-monitoring — more than three days a week — is what separates people who sustain a change from people who do not. Knowing the target tells you where to aim; knowing your eating pattern tells you which habit to build first.',
      },
      {
        q: 'Are these nutrition quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a result with an explanation — no signup required to start.',
      },
    ],
    order: 21,
    parent: 'health-body-fitness',
  },
  quizzes: [],
}
