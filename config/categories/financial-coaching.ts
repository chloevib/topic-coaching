import type { CategoryFile } from '../schema'

/** niche · 财务教练 */
export const financialCoaching: CategoryFile = {
  category: {
    slug: 'financial-coaching',
    name: 'Financial Coach',
    title: 'Financial Coaching Quizzes & Assessments',
    description:
      'Take control of your money with free financial-coaching quizzes — discover your money personality, test your financial IQ, score your financial wellness, and check your debt payoff readiness.',
    emoji: '💰',
    heroCopy: 'Money stress is rarely about the math. Start by understanding how you actually relate to money.',
    order: 12,
    parent: 'lifestyle-interests',
    intro: [
      'Financial coaching is about behavior, not just budgets. Most money problems are not caused by a lack of information — they come from the habits, emotions, and beliefs that quietly drive how we earn, spend, save, and worry. A good financial coach helps you see those patterns clearly and build a plan that fits how you actually think about money.',
      'It matters more than ever. Surveys in 2025 found that roughly 7 to 9 in 10 Americans feel some form of financial stress, and most say money worries disrupt their sleep, relationships, and focus at work. Naming what is really going on with your money is the first step to loosening that grip.',
      'Debt is where that shows up most clearly. Americans carried about $1.26 trillion in credit card balances in the second quarter of 2026, part of $18.77 trillion in total household debt, and the households that clear their balances are usually not the ones with the best spreadsheet. Behavioural research on debt repayment found that people who close accounts one at a time are significantly more likely to eliminate all their debt, whatever the interest-rate maths says — readiness and momentum beat optimisation.',
      'These free financial-coaching quizzes are a fast, judgment-free place to begin. Discover your money personality, pressure-test your financial knowledge, score your overall financial wellness, or rate how ready you actually are to become debt-free. Each takes just a few minutes, is free, and ends with a personalized result and a practical next step — no signup required to start.',
    ],
    faq: [
      {
        q: 'What is financial coaching?',
        a: 'Financial coaching is a forward-looking, behavior-focused process that helps you understand your relationship with money and build habits that move you toward your goals. Unlike a financial advisor who manages investments, a financial coach focuses on the mindset, decisions, and day-to-day behaviors behind your finances.',
      },
      {
        q: 'Why does my "money personality" matter?',
        a: 'Financial-psychology research — notably Dr. Brad Klontz\'s work on "money scripts" — shows that beliefs about money form early in life and unconsciously drive adult financial behavior. Knowing your pattern (for example, whether you avoid money, worship it, tie it to status, or watch it anxiously) helps you build a plan that works with your tendencies instead of against them.',
      },
      {
        q: 'Should I pay off the smallest debt or the highest interest rate first?',
        a: 'The highest-rate debt first (the "avalanche") always wins on paper and saves the most interest. But research published in the Journal of Marketing Research found that people who reduce the number of open debt accounts faster are significantly more likely to eliminate all their debt — the "snowball" wins on completion. The practical answer is to pick one order deliberately and stay with it; spreading spare money evenly across every balance is the option that clears nothing quickly.',
      },
      {
        q: 'Are these financial quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes just a few minutes, with a personalized result and no signup required to start.',
      },
      {
        q: 'Can a quiz replace real financial advice?',
        a: 'No. These quizzes are self-reflection and coaching tools to help you understand your habits and knowledge. For decisions about investments, taxes, or debt, consult a qualified financial professional.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '5dwmcn9s',
      slug: 'money-personality',
      featured: true,
      order: 1,
      seo: {
        title: 'Money Personality Quiz — Discover Your Financial Type',
        description:
          'A free 5-minute money personality quiz that reveals how you really relate to money — and how to work with your natural tendencies instead of against them.',
        overview:
          'The way you spend, save, and stress about money is shaped less by the numbers than by beliefs you may not even notice. This quick quiz reveals your money personality, where it comes from, and how to play to its strengths while managing its blind spots.',
        whoFor:
          'Anyone who wants to understand their financial habits, keeps repeating the same money mistakes, or feels their emotions run the show whenever money is involved.',
        whatYouLearn: [
          'Your dominant money personality',
          'The beliefs and early experiences driving it',
          'The financial strengths your type brings',
          'The blind spots to watch — and one habit to build next',
        ],
        sampleQuestions: [
          'When unexpected money comes in, is your first instinct to spend it, save it, or avoid thinking about it?',
          'Do you check your account balance more out of curiosity, anxiety, or avoidance?',
          'How much does what you own or earn shape how you feel about yourself?',
          'When a big financial decision comes up, do you research it thoroughly or put it off?',
        ],
        howItWorks:
          'You answer a short set of statements about how you feel and act around money. Your answers map to common money personality patterns — drawing on financial-psychology frameworks like Brad Klontz\'s "money scripts" (money avoidance, worship, status, and vigilance) — and your result explains your dominant type with a plain-language breakdown and a next step. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a money personality?',
            a: 'A money personality is your characteristic pattern of beliefs and behaviors around earning, spending, saving, and risk. Financial psychologists trace much of it to "money scripts" — unconscious beliefs about money formed in childhood that quietly shape adult financial decisions.',
          },
          {
            q: 'Can my money personality change?',
            a: 'Your underlying tendencies are fairly stable, but the behaviors are not fixed. Once you can name your pattern, you can build systems and habits that lean on its strengths and guard against its blind spots.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '2w8zfhnt',
      slug: 'financial-wellness-scorecard',
      order: 2,
      seo: {
        title: 'Financial Wellness Scorecard — How Money-Healthy Are You?',
        description:
          'A free 2-minute financial wellness scorecard that rates your money health across spending, saving, debt, and peace of mind — and shows where to focus first.',
        overview:
          'Financial wellness is more than your account balance — it is whether your money supports the life you want without constant stress. This scorecard rates your financial health across spending, saving, debt, and peace of mind, then shows where the strain is greatest and what to strengthen first.',
        whoFor:
          'Anyone who wants a clear, honest read on their financial health — whether things feel shaky, surprisingly stable, or somewhere in between — and a concrete place to start improving.',
        whatYouLearn: [
          'Your overall financial wellness score (a higher score means healthier finances)',
          'How you rate across spending, saving, debt, and financial peace of mind',
          'Where the biggest strain on your money health sits right now',
          'A practical first step to improve your weakest area',
        ],
        sampleQuestions: [
          'Could you cover an unexpected $500 expense without borrowing?',
          'Do you know roughly where your money goes each month?',
          'How often do money worries keep you up at night?',
          'Are you saving something consistently, even a small amount?',
        ],
        howItWorks:
          'You answer a short set of questions about your money habits and feelings. Your answers are scored across four pillars of financial wellness, and your result gives you an overall rating plus a breakdown of where you are solid and where to focus. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is financial wellness?',
            a: 'Financial wellness is the sense that you can meet your obligations, absorb a shock, and make progress toward your goals without being ruled by money stress. It combines objective habits (saving, debt, spending) with subjective peace of mind.',
          },
          {
            q: 'What does my score mean?',
            a: 'A higher score means your finances are on healthier footing across the four pillars; a lower score highlights where the strain is and what to strengthen first. It is a starting point for reflection, not a credit score or financial rating.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'x5kjbgay',
      slug: 'money-iq',
      order: 3,
      alsoIn: ['investment-coaching'],
      seo: {
        title: 'Money IQ Quiz — Test Your Personal Finance Smarts',
        description:
          'A free money IQ quiz that tests your personal finance knowledge — budgeting, saving, credit, and investing — with clear explanations so you learn as you go.',
        overview:
          'How sharp are your money smarts, really? This quick quiz tests your personal finance knowledge across budgeting, saving, credit, and investing basics — and explains each answer so you walk away knowing more than when you started.',
        whoFor:
          'Anyone who wants to check how strong their financial literacy actually is, spot the gaps, and pick up practical money knowledge in a few minutes.',
        whatYouLearn: [
          'Your money IQ across core personal-finance topics',
          'The concepts you have solid — and the ones worth brushing up on',
          'Practical rules of thumb for budgeting, credit, and saving',
          'Where a little more knowledge could save or earn you money',
        ],
        sampleQuestions: [
          'What does APR actually measure on a credit card or loan?',
          'Roughly how much should a starter emergency fund cover?',
          'What is the main advantage of compound interest over time?',
          'How does paying only the minimum on a credit card affect what you owe?',
        ],
        howItWorks:
          'You answer a set of multiple-choice personal-finance questions. Each answer comes with a short explanation, and your final score shows how your money knowledge stacks up along with the topics worth revisiting. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What does the money IQ quiz cover?',
            a: 'It covers everyday personal-finance essentials — budgeting, saving, credit and debt, and the basics of investing — the knowledge that most affects day-to-day financial decisions.',
          },
          {
            q: 'Is this a test I can fail?',
            a: 'No. It is a low-stakes way to check and build your financial literacy. Every question includes an explanation, so the quiz teaches as much as it tests.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes, and it is free with your score and explanations — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'eqqnwctr',
      slug: 'debt-payoff-readiness-scorecard',
      order: 4,
      seo: {
        title: 'Debt Payoff Readiness Scorecard — Are You Ready to Be Debt-Free?',
        description:
          'A free 3-minute debt payoff quiz that scores the five things deciding how fast your debt comes off — clarity, room to pay, strategy, holding the line, and support. No credit check.',
        overview:
          'Most debt plans fail on readiness, not on the maths. This free 3-minute scorecard rates the five things that actually decide how fast debt comes off: how clearly you see what you owe, how much room your month leaves you, whether you have a payoff order, whether new debt is still going on the other end, and who is in your corner. You get a score out of 100, a radar chart of all five areas, and the one to fix first — no account numbers and no credit check.',
        whoFor:
          'Anyone carrying credit cards, loans, buy-now-pay-later balances or money owed to family who wants an honest read on whether a payoff plan would actually stick this time — and coaches who want a starting point with a client.',
        whatYouLearn: [
          'Your debt payoff readiness score out of 100 across five areas',
          'Whether your constraint is clarity, cash flow, strategy, discipline, or support',
          'Whether new debt is quietly cancelling out the payments you are already making',
          'The one area to fix in the next 90 days, rather than a list of everything at once',
        ],
        sampleQuestions: [
          'Could you say roughly what you owe in total right now, without looking it up?',
          'After minimum payments and normal living costs, what’s typically left at the end of the month?',
          'Is there an order you’re paying your debts off in?',
          'Over the last three months, your total debt has gone up, stayed flat, or gone down?',
        ],
        howItWorks:
          'Fifteen questions across five sections — Clarity, Room to Pay, Payoff Strategy, Holding the Line, and Support & Mindset — are each scored on a 0/3/7/10 scale and combined into a score out of 100, shown as a radar so you can see which area is lowest. A few closing questions about your largest balance and your 90-day priority shape the advice but do not affect the score. It takes about three minutes, is free, asks for no account numbers, and runs no credit check.',
        faq: [
          {
            q: 'Is this a credit check or a debt-relief application?',
            a: 'Neither. It is a self-assessment: no account numbers, no credit pull, no effect on your credit file. It scores habits and readiness, not your balances, and nothing you enter is verified against any financial institution.',
          },
          {
            q: 'How much debt do people usually carry?',
            a: 'For scale, US households held roughly $1.26 trillion in credit card balances in the second quarter of 2026 within about $18.77 trillion of total household debt, and among households actually carrying a card balance the average sits near $9,900. Your number matters far less than the five behaviours this scorecard measures.',
          },
          {
            q: 'Why does readiness matter more than the payoff method?',
            a: 'Because most plans stop before the maths gets a chance to work. Behavioural research published in the Journal of Marketing Research found that people who close debt accounts faster are significantly more likely to eliminate all their debt regardless of interest rates — momentum, visibility and support predict completion better than picking the optimal order does.',
          },
          {
            q: 'Can I take it with my partner?',
            a: 'Yes, and it is more useful that way. Take it separately, enter the same name in the optional box, then compare: the questions where your answers disagree most — usually clarity and holding the line — are the conversation worth having before you pick a payoff order.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About three minutes for fifteen questions. It is free, gives you a score out of 100 with a five-area radar breakdown, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
