import type { CategoryFile } from '../schema'

/** Hub · 健康 · 身体 · 运动（顶层支柱页；测评来自旗下 niche） */
export const healthBodyFitness: CategoryFile = {
  category: {
    slug: 'health-body-fitness',
    name: 'Health, Body & Fitness',
    title: 'Health, Body & Fitness Coaching Quizzes',
    description:
      'Free wellness and fitness assessments — rate your energy, sleep, eating, strength, and mind-body habits, then start where you are.',
    emoji: '🧘',
    heroCopy:
      'Small changes, big results — start by understanding your current baseline across stress, fitness, and nutrition.',
    order: 3,
    intro: [
      'Lasting health is built from daily habits, not dramatic overhauls — and the habits that stick are the ones that fit how you are actually wired. This hub gathers more than twenty free coaching assessments across nine focus areas: overall wellness, fitness and exercise readiness, strength training, nutrition and eating patterns, sleep quality, posture, yoga, Pilates, and meditation.',
      'Each quiz gives you an honest baseline and a realistic starting point rather than another all-or-nothing plan. You will find out how healthy your current balance is, whether you are cleared and ready to train, the kind of movement most likely to stick for you, the patterns behind how you eat, how well you actually sleep, and which style of yoga or meditation suits the way your mind works. Wellness coaching has moved from reactive to preventive — sleep, recovery and burnout prevention are now treated as trainable skills rather than problems to fix after the fact.',
      'A good place to start is the wellness scorecard for an overall read, then go deeper: the PAR-Q screening and fitness level assessment before you start training, the strength or Pilates readiness scorecard if you are picking a discipline, the sleep quality scorecard if your energy is the bottleneck, and the yoga or meditation style quiz if you want a practice you will actually keep. Every quiz is free and takes just a few minutes.',
    ],
    faq: [
      {
        q: 'What does health, body & fitness coaching cover?',
        a: 'It covers the everyday foundations of wellbeing: overall lifestyle balance (wellness scorecard), exercise readiness and fitness level, strength and conditioning, nutrition and your relationship with food, sleep quality, posture, and mind-body practice through yoga, Pilates and meditation.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the wellness scorecard for a big-picture baseline, then dig into whichever area needs the most attention. If you are about to start training, take the PAR-Q screening and fitness level assessment first. If you are tired rather than unfit, start with the sleep quality scorecard. Each takes only a few minutes.',
      },
      {
        q: 'Do I need a readiness check before starting a new exercise programme?',
        a: 'A short screening is a sensible first step, especially if you are returning after a break or managing a health condition. The PAR-Q pre-exercise screening on this hub follows the standard self-screening questions used in gyms and studios, and flags whether it is worth speaking to a professional before you begin. It is a self-check, not a medical clearance.',
      },
      {
        q: 'Are these health quizzes a substitute for medical advice?',
        a: 'No. They are self-reflection and coaching tools, not medical or diagnostic assessments. For health concerns, please consult a qualified professional.',
      },
    ],
  },
  quizzes: [],
}
