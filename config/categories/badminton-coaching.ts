import type { CategoryFile } from '../schema'

/** niche · 羽毛球教练 */
export const badmintonCoaching: CategoryFile = {
  category: {
    slug: 'badminton-coaching',
    name: 'Badminton Coach',
    title: 'Badminton Coach Quizzes & Assessments',
    description:
      'Sharpen your rules knowledge, footwork, and shot IQ. Free badminton coaching quizzes and assessments.',
    emoji: '🏸',
    heroCopy:
      'Raise your game — start by testing how well you know badminton scoring, serving rules, and shots.',
    order: 14,
    parent: 'sports-athletics',
    // 已收录 1 道完整 GEO 测评（badminton-iq-quiz）。沿用作者约定：≥3 道再去 draft 促级开页。
    draft: true,
    intro: [
      'Badminton coaching brings together footwork, racquet skills, serving rules, and match strategy. Knowing how the game works — from rally scoring and the underarm serve rule to the difference between a smash, a clear, and a drop shot — gives you a foundation that stroke technique and on-court tactics build on.',
      'A quick knowledge check is an easy way to see where you stand, covering scoring, equipment, rules, and the sport’s all-time greats. Each answer explains the why, so you leave a little sharper than you arrived.',
      'Badminton is often described as the fastest racquet sport in the world, with elite smashes recorded well over 400 km/h in equipment testing (source: Guinness World Records, https://www.guinnessworldrecords.com/world-records/fastest-badminton-hit-in-competition-male). It is also one of the most widely played sports globally, governed by the Badminton World Federation across nearly 200 member associations (source: BWF, https://bwfbadminton.com). These free quizzes are a friendly first step for players, fans, and coaches.',
    ],
    faq: [
      {
        q: 'What does a badminton coach help with?',
        a: 'A badminton coach helps you develop reliable clears, drops, and smashes, sharpen footwork and court positioning, and build match strategy — alongside the scoring and rules knowledge that help you compete with confidence.',
      },
      {
        q: 'Do I need to play badminton to take these quizzes?',
        a: 'No. The quizzes suit players and fans at any level. Each question comes with a short explanation, so you learn the game whether you are picking up a racquet or following the world tour.',
      },
      {
        q: 'Are these badminton quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'thjpfxdc',
      slug: 'badminton-iq-quiz',
      order: 1,
      seo: {
        title: 'Badminton IQ Quiz — Test Your Knowledge of the Fastest Racquet Sport (Free 12-Question Quiz)',
        description:
          'A free 12-question badminton IQ quiz on rally scoring, serving rules, the shuttlecock, shots, and legends like Lin Dan. Each answer comes with a quick explanation.',
        overview:
          'Think you know badminton? This free 12-question quiz tests your grasp of BWF rally scoring, the underarm serve rule, court dimensions, shots, and the sport’s greatest players — and reveals your Badminton IQ in about three minutes. Each answer comes with a quick explanation, so you pick up something new.',
        whoFor:
          'Badminton players, fans following the world tour, and coaches who want a quick, fun check of badminton rules, gear, and terminology.',
        whatYouLearn: [
          'Your Badminton IQ level from Weekend Warmer-Upper to Badminton Brain',
          'How rally scoring works: games to 21 and winning by two',
          'The rules behind the underarm serve and even/odd service courts',
          'Shot terms like smash, clear, and drop shot — and why the smash is among the fastest shots in sport',
        ],
        sampleQuestions: [
          'How many points are in a standard singles game under current BWF rally scoring?',
          'If the score reaches 20-20, how does the game end?',
          'A serve in badminton must be hit…',
          'Which legendary player, nicknamed ‘Super Dan’, won two Olympic singles golds for China?',
        ],
        howItWorks:
          'You answer 12 multiple-choice questions on scoring, rules, equipment, shots, and legends, each worth 10 points toward your Badminton IQ out of 120. Every question includes an explanation, so you learn as you play. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a badminton skills test or a knowledge quiz?',
            a: 'It is a knowledge quiz covering rally scoring, serving rules, equipment, shots, and famous players — the badminton IQ that complements your on-court game. It does not assess your physical strokes.',
          },
          {
            q: 'What is a good Badminton IQ score?',
            a: 'Scores map to three levels: Weekend Warmer-Upper, Solid Club Player, and Badminton Brain. Scoring 90 or above out of 120 means you know your rules, gear, and legends like a seasoned player.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes for 12 questions, and it is free with a personalized result and an explanation for every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
