import type { CategoryFile } from '../schema'

/**
 * niche · 营养教练
 * 两个测评由 health-wellness-coaching 通过 alsoIn 交叉归属
 * （nutrition-iq af8c5j4t、eating-personality x8xgbenx）；
 * 2026-11-10 自挂 ai-meal-prep-plan（kvbagpec，alsoIn health-wellness-coaching）。
 * 其 overview 引用 CDC MMWR 2022（2019 年成人蔬果达标率 10.0% / 12.3%）。
 * 已补 intro + faq 并促级上线（去 draft）。
 * 文案已对齐两份卷子的真实题目与结果类型（2026-08-20 用 get_form 核对）：
 *  - af8c5j4t 10 题：每克热量、维生素 D、膳食脂肪迷思、反式脂肪、钙、Omega-3、
 *    早餐迷思、钠与血压、饮水、冷冻蔬菜；4 档结果 Getting Started → Nutrition Pro。
 *  - x8xgbenx 6 题 4 型：Emotional Eater / Mindless Muncher /
 *    All-or-Nothing Eater / Intuitive Eater。
 * intro 引用的外部研究（均为定性表述，不引用未经核实的具体数字）：
 *  - Raber M, Liao Y, Rara A, et al. Public Health Nutrition. 2021;24(17):5885-5913.
 *    https://pmc.ncbi.nlm.nih.gov/articles/PMC8928602/
 *  - Goldstein SP, et al. Health Psychology. 2019 (PMID 31556659).
 *    https://pmc.ncbi.nlm.nih.gov/articles/PMC6861632/
 */
export const nutritionCoaching: CategoryFile = {
  category: {
    slug: 'nutrition-coaching',
    name: 'Nutrition Coach',
    title: 'Nutrition Coach Quizzes & Nutrition IQ Tests',
    description:
      'Free nutrition quizzes to test your nutrition IQ and find your eating personality — fats, vitamins, sodium, food myths, and the habits that actually stick.',
    emoji: '🥗',
    heroCopy:
      'Understand what you eat and why you eat that way. Start by testing what you already know.',
    intro: [
      'Nutrition coaching is less about handing someone a meal plan and more about closing the gap between what people know and what they actually do. A good nutrition coach helps you get the fundamentals right — which fats matter, where sodium hides, what vitamins and minerals actually do, and which popular claims are myth rather than science — and then helps you build habits that survive a busy week. Both halves count: knowing the target does not help if the routine falls apart by Wednesday.',
      'Research on behavior change supports the second half. A systematic review in Public Health Nutrition found that behavioral weight-loss programs built around dietary self-monitoring produced significant results across a wide range of formats and intensities, and that digitally supported tracking tended to see better adherence than paper. A secondary analysis of the Live SMART trial pointed the same way: how consistently people recorded their food, activity, and weight was associated with how much weight they lost. In short, the pattern you keep tends to matter more than the plan you admire.',
      'These free quizzes work on both halves. The Nutrition IQ quiz checks the facts across ten questions — calories per gram, vitamin D, trans fats, calcium, omega-3s, sodium and blood pressure, hydration, and whether frozen vegetables really lose out to fresh — with a short explanation after every answer. The Eating Personality quiz looks at the pattern behind your choices, sorting you into one of four types: the Emotional Eater, the Mindless Muncher, the All-or-Nothing Eater, or the Intuitive Eater. When you are ready to act on it, the AI Meal-Prep Plan turns your goal, eating pattern, time, kitchen and budget into a 7-day menu, a prep-day schedule and a shopping list. Each takes a few minutes, is free, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a nutrition coach do?',
        a: 'A nutrition coach helps you turn nutrition knowledge into daily habits — building balanced meals, spotting hidden sodium and added sugar, and setting up routines that hold up on busy weeks. Coaches focus on behavior change and accountability rather than prescribing clinical diets; medical nutrition therapy for a diagnosed condition belongs with a registered dietitian or physician.',
      },
      {
        q: 'What does the Nutrition IQ quiz actually test?',
        a: 'Ten questions on everyday nutrition fundamentals: which nutrient carries the most calories per gram, the vitamin your skin makes in sunlight, which fat is least healthy, the mineral tied to bone strength, where omega-3s come from, the mineral linked to high blood pressure, the best everyday drink for hydration, and two common myths about dietary fat and skipping breakfast. Every answer comes with a one-line explanation, and you land in one of four bands from Getting Started to Nutrition Pro.',
      },
      {
        q: 'What are the eating personality types?',
        a: 'Four: the Emotional Eater, who uses food to soothe stress or sadness; the Mindless Muncher, who grazes while scrolling, working, or watching TV; the All-or-Nothing Eater, who swings between strict rules and rebound; and the Intuitive Eater, who mostly eats in step with hunger and fullness. Each result explains what is driving the pattern and gives you one concrete first step.',
      },
      {
        q: 'Does knowing more about nutrition actually change how I eat?',
        a: 'Knowledge on its own is a weak predictor of behavior, which is why these two quizzes pair well. Studies of behavioral weight-loss programs consistently find that how regularly people track and reflect on their eating is associated with their results. The facts tell you where to aim; knowing your eating pattern tells you which habit to build first.',
      },
      {
        q: 'Are these nutrition quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized result — no signup required to start.',
      },
    ],
    order: 21,
    parent: 'health-body-fitness',
  },
  quizzes: [
    {
      publicToken: 'kvbagpec',
      slug: 'ai-meal-prep-plan',
      order: 1,
      alsoIn: ['health-wellness-coaching'],
      seo: {
        title: 'Free AI Meal Prep Plan: 7-Day Menu & Shopping List',
        description:
          'Answer 13 questions for a free AI meal-prep plan: a 7-day menu for your diet, a prep-day schedule that fits your time, a shopping list and storage tips.',
        overview:
          'CDC data show that only about one in ten U.S. adults eat enough vegetables — 10.0% met the recommendation in 2019, and 12.3% met it for fruit. Planning meals ahead is one of the simplest ways to close that gap, and it cuts last-minute takeout too. This free AI meal-prep planner asks 13 questions about your goal, household, eating pattern, allergies, time, kitchen and budget, then writes a fridge-door plan: a 7-day menu for the meals you choose, a component-cooking plan, a timed prep-day schedule, a shopping list grouped by store section, and a storage and reheat guide.',
        whoFor:
          'Busy professionals, parents feeding picky eaters, people in training who want more protein, and anyone tired of deciding what is for dinner every night. Nutrition and wellness coaches can use it as a practical first deliverable for new clients.',
        whatYouLearn: [
          'A Meal-Prep Readiness score out of 10 and a summary of your week',
          'A Monday-to-Sunday menu grid for whichever meals you choose — breakfast, lunch, dinner or snacks',
          'Four to six base components to cook once, and the meals each one becomes',
          'A prep-day timeline sized to the time and equipment you actually have',
          'A grouped shopping list with budget swaps, a storage guide, and fixes for whatever usually derails your plan',
        ],
        sampleQuestions: [
          'What do you most want from meal prep — saving time, saving money, more vegetables, more protein, steadier energy or family meals?',
          'Do you follow any eating pattern, such as vegetarian, gluten-free, halal or kosher?',
          'How long can you spend on one main prep session each week?',
          'Which kitchen equipment do you have — slow cooker, pressure cooker, air fryer, freezer space?',
          'What usually derails your meal plans?',
        ],
        howItWorks:
          'Three short parts — your goals and food preferences, your time and kitchen, and your budget and obstacles — take about four minutes. The AI never includes foods you list as allergies or must-avoids, reminds you to check labels for cross-contact, and does not set calorie or macro targets. If a doctor or dietitian has given you diet instructions, the plan asks you to follow those first. Figures above: CDC Morbidity and Mortality Weekly Report, 2022 (https://www.cdc.gov/mmwr/volumes/71/wr/mm7101a1.htm). This is general guidance, not medical or dietetic advice.',
        faq: [
          {
            q: 'How do I start meal prepping as a beginner?',
            a: 'Start small: plan one meal type, usually dinners or lunches, cook three or four base components in a single session, and combine them into different meals through the week. The planner sizes the plan to your skill level, prep time and equipment so the first week is realistic.',
          },
          {
            q: 'How long does meal-prepped food last in the fridge?',
            a: 'Most cooked dishes keep about three to four days in the fridge, so freeze anything you plan to eat later in the week. Your report includes a storage and reheat guide for the specific menu it creates.',
          },
          {
            q: 'Can the meal plan handle allergies or a special diet?',
            a: 'Yes. It plans around vegetarian, vegan, pescatarian, gluten-free, dairy-free, halal and kosher patterns and any foods you list to avoid. It is not a substitute for a medical diet prescribed by a doctor or registered dietitian.',
          },
          {
            q: 'Is the AI meal-prep plan free?',
            a: 'Yes. The quiz and your full plan are free, take about four minutes, and need no signup to start.',
          },
        ],
      },
    },
  ],
}
