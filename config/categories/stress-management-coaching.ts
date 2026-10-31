import type { CategoryFile } from '../schema'

/**
 * niche · 压力管理教练（已上线）
 * 现有 2 道题（stress-type / burnout-risk），两卷均已跨挂到相关分类。
 * 待补第 3 道（建议 "How Regulated Is Your Nervous System? The Regulation Check"）以加厚分类页。
 */
export const stressManagementCoaching: CategoryFile = {
  category: {
    slug: 'stress-management-coaching',
    name: 'Stress Management',
    title: 'Stress & Burnout Coaching Quizzes',
    description:
      'Understand your stress response and burnout risk with free stress management coaching assessments — find your stress type and the pattern behind it.',
    emoji: '🌊',
    heroCopy: 'Stress is not the enemy — how you respond to it is. Start by understanding your pattern.',
    order: 13,
    parent: 'life-mindset-relationships',
    intro: [
      'Stress-management coaching starts from a simple idea: stress itself is not the problem — how you respond to it is. Instead of trying to eliminate pressure, you learn to recognize your own pattern, spot the triggers that hit you hardest, and build recovery habits that fit your nervous system rather than generic "just relax" advice.',
      'These free assessments make that pattern visible. One reveals your stress type and the coping strategies that actually calm it; another scores your burnout risk across energy, motivation, boundaries, and recovery so you can catch the strain early. This matters because chronic, unmanaged stress is now widely recognized as a serious health issue — the World Health Organization classifies burn-out in its ICD-11 as an occupational phenomenon resulting from workplace stress that has not been successfully managed (WHO, 2019).',
      'Feeling wired or worn down? Start with the stress type quiz to understand how you react under pressure, then use the burnout risk scorecard to see where the strain is greatest right now. Each takes about two minutes, is free, and ends with a personalized result and a practical first step.',
    ],
    faq: [
      {
        q: 'What is stress-management coaching?',
        a: 'Stress-management coaching helps you understand and regulate your stress response — identifying your triggers, recognizing your natural reaction to pressure, and building coping and recovery habits that actually fit how you work. It focuses on managing stress well rather than pretending it away.',
      },
      {
        q: 'What can a stress or burnout quiz tell me?',
        a: 'A good assessment shows you your stress type and what calms it, or measures your burnout risk across energy, motivation, boundaries, and recovery — so you know where the strain is greatest and what to work on first.',
      },
      {
        q: 'Is stress always bad for you?',
        a: 'No. Short bursts of stress can sharpen focus and performance. The real risk is chronic, unmanaged stress, which is why understanding and regulating your pattern matters more than trying to remove stress entirely.',
      },
      {
        q: 'Are these stress quizzes free, and are they a medical diagnosis?',
        a: 'Every quiz on this page is free, takes about two minutes, and needs no signup to start. They are self-reflection tools, not medical diagnoses — if stress or burnout is seriously affecting your health, please consult a qualified professional.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'kv33pxut',
      slug: 'stress-type',
      featured: true,
      order: 13,
      alsoIn: ['emotional-intelligence-coaching', 'meditation-coaching', 'exam-coaching'],
      seo: {
        title: 'Stress Type Quiz — What Kind of Stress Do You Have?',
        description:
          'A free stress type quiz revealing how you react under pressure, what is happening beneath the surface, and the strategies that help you regulate.',
        overview:
          'Everyone handles pressure differently, and the tactics that calm one person can wind another up tighter. This quick quiz reveals your stress type, what is happening underneath the surface, and what actually helps you regulate.',
        whoFor:
          'Anyone who feels frequently stressed or wired and wants coping strategies that fit their nervous system instead of generic "just relax" advice.',
        whatYouLearn: [
          'Your stress type',
          'What is really happening underneath your stress response',
          'The triggers that hit you hardest',
          'What actually calms your particular type',
        ],
        sampleQuestions: [
          'When pressure builds, does your body speed up and get wired, or shut down and go flat?',
          'Under stress, do you reach for control and action, connection with others, distraction, or withdrawal?',
          'What tips you over the edge fastest — too many demands, uncertainty, conflict, or lack of time to yourself?',
          'After a stressful day, what actually helps you reset: movement, talking it out, quiet alone time, or a clear plan?',
        ],
        howItWorks:
          'You answer a short set of questions about how your mind and body react under pressure. Your answers are scored across common stress-response patterns, and your result names your stress type with what is driving it and the coping strategies that genuinely fit your nervous system. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Why do people respond to stress so differently?',
            a: 'Stress responses are shaped by biology, past experience, and habits, so the same pressure can make one person shut down and another speed up. Knowing your type helps you pick coping strategies that match how you actually react.',
          },
          {
            q: 'Is all stress bad?',
            a: 'No. Short bursts of stress can sharpen focus and performance. The problem is chronic, unmanaged stress — which is why understanding and regulating your pattern matters more than trying to eliminate stress entirely.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '9jfaswcx',
      slug: 'burnout-risk',
      order: 14,
      alsoIn: ['sleep-coaching'],
      seo: {
        title: 'Burnout Risk Test — Are You Burning Out? Free 2-Minute Quiz',
        description:
          'A free 2-minute burnout risk assessment measuring your energy, motivation, boundaries, and recovery — see where the strain is greatest.',
        overview:
          'Running on empty? Burnout builds quietly until it is hard to ignore. This 2-minute scorecard measures your burnout risk across energy, motivation, boundaries, and recovery, then shows where the strain is greatest and what to do about it.',
        whoFor:
          'Anyone feeling drained, cynical, or stretched thin who wants an early read on burnout risk before it becomes a crisis.',
        whatYouLearn: [
          'Your overall burnout risk (a higher score means more at risk)',
          'How you rate across energy, motivation, boundaries, and recovery',
          'Where the strain is greatest right now',
          'A first step to relieve the pressure',
        ],
        sampleQuestions: [
          'How often do you wake up already feeling drained before the day has started?',
          'Have you started to feel cynical, detached, or numb about work or responsibilities that used to matter?',
          'How well are you holding boundaries between work and the rest of your life right now?',
          'When did you last have real recovery time that actually left you feeling restored?',
        ],
        howItWorks:
          'You rate a series of statements about your energy, mindset, boundaries, and recovery over recent weeks. Your answers are scored into an overall burnout-risk level, and your result shows where the strain is greatest along with a practical first step to relieve the pressure. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is burnout?',
            a: 'Burnout is a state of chronic physical and emotional exhaustion, often with growing cynicism and a drop in sense of accomplishment, caused by prolonged unmanaged stress. It tends to build gradually across energy, motivation, boundaries, and recovery.',
          },
          {
            q: 'Is this scorecard a medical diagnosis?',
            a: 'No. It is a self-reflection tool that flags your risk level and where the strain is greatest. If burnout is seriously affecting your health, please consult a qualified professional.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'jvtmu4yp',
      slug: 'manager-burnout-scorecard',
      order: 15,
      alsoIn: ['leadership-coaching', 'corporate-coaching'],
      seo: {
        title: 'Manager Burnout Test: Are You Burning Out, or Just Tired? (Free)',
        description:
          'A free 12-question manager burnout scorecard across exhaustion, detachment, efficacy and load. Four minutes to see which kind of strain you are carrying.',
        overview:
          'Tiredness lifts after a good weekend; burnout does not, and the two call for completely different responses. This free 12-question scorecard separates them by looking at four things that behave differently in each case — whether rest still restores you, how much distance has opened up between you and the work, whether your effort still seems to change anything, and how much you are structurally carrying. You get a strain score, a radar across the four dimensions, and what your highest one specifically calls for.',
        whoFor:
          'People who manage others — team leads, managers of managers, founders and anyone in HR or people ops — who suspect the tiredness has stopped being ordinary, plus individual contributors who want the same four-dimension read.',
        whatYouLearn: [
          'Whether your answers look more like ordinary tiredness or like sustained strain',
          'Which of the four dimensions is highest, and why that changes the right response',
          'Why losing a sense of efficacy is a symptom of conditions rather than evidence about you',
          'How much of your load is invisible to the people who could resource it',
          'What to raise upward, and when the right next step is a professional rather than a plan',
        ],
        sampleQuestions: [
          'After a normal weekend off, how do you feel on Monday morning — reset, slightly better, barely touched, or no different?',
          'When someone on your team brings you a problem, what is your first internal reaction?',
          'Does your effort still seem to change outcomes, or does a lot of it feel like running in place?',
          'How much of what you carry would show up on anyone else’s plan if you stopped?',
          'Who do you talk to honestly about how work is actually going?',
        ],
        howItWorks:
          'You answer 12 questions, three for each of four dimensions — Exhaustion & Recovery, Detachment, Sense of Efficacy, and Load & Boundaries — each scored from 0 to 3, giving a strain score out of 36 across four bands from "tired, not burning out" to "severe strain". The four dimensions follow the way occupational burnout is commonly described: exhaustion that rest does not resolve, mental distance from the work, and a reduced sense of professional efficacy, with structural load treated separately because it is the part a decision can change. Manager burnout is tracked separately in workplace research for a reason — people who manage others absorb pressure from above and below at once, and large-scale workplace surveys consistently report burnout among managers at rates close to or above those of the teams they lead.',
        faq: [
          {
            q: 'What is the difference between burnout and being tired?',
            a: 'Tiredness is a deficit that rest resolves. Burnout is better understood as a chronic mismatch between what a job demands and the resources and control available to meet it, and it shows up as three things together: exhaustion that rest does not touch, mental distance from the work, and a sense that your effort no longer changes anything. The third is the one people miss, because it feels like a personal failing rather than a symptom.',
          },
          {
            q: 'Why a separate scorecard for managers?',
            a: 'The manager version has a distinctive shape. Much of the load is invisible — absorbing other people’s pressure, smoothing conflicts, covering gaps — so it never appears in anyone’s plan and never gets resourced. Managers are also the people least likely to be asked how they are doing, which is why the scorecard treats load and who you can talk to as a dimension in its own right.',
          },
          {
            q: 'Can this quiz diagnose burnout?',
            a: 'No. It is a structured reflection tool, not a clinical or diagnostic instrument, and it cannot assess any health condition. It is useful for naming which kind of strain you are carrying and starting a conversation about it. If symptoms have persisted for months, a doctor or mental health professional is the right place to take that.',
          },
          {
            q: 'What should I actually do with a high score?',
            a: 'Act on your highest dimension rather than the total, because the responses differ: high exhaustion calls for protected recovery, high detachment for reconnecting with the part of the work you can influence, low efficacy for a conversation about mismatched expectations, and high load for putting one thing you have been quietly absorbing on the table. At higher bands, self-management alone is usually not enough — the conditions need to change, which means someone else has to know.',
          },
          {
            q: 'Is it free and private?',
            a: 'It is free and takes about four minutes, with no signup required to start. You can also use it as a periodic check-in — the dimension pattern is more informative than any single score.',
          },
        ],
      },
    },
  ],
}
