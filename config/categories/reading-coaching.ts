import type { CategoryFile } from '../schema'

/**
 * niche · 阅读教练
 * 2026-11-03 促级上线（去 draft）：补 4 段 intro + 5 条 FAQ。
 * 自有 1 道：reading-effectiveness-scorecard（sgjhe5rx）。
 * 经 alsoIn 交叉归属 2 道：memory-iq-quiz（sxq2xn5t，memory）、english-vocabulary-quiz（ebw5krcp，language）。
 * 共 3 道，达到开页门槛。
 */
export const readingCoaching: CategoryFile = {
  category: {
    slug: 'reading-coaching',
    name: 'Reading Coach',
    title: 'Reading Coaching Quizzes — Reading Comprehension & Retention Tests',
    description:
      'Free reading coaching quizzes: score how well you choose, focus on, engage with and remember what you read, plus memory and vocabulary tests. No signup.',
    emoji: '📖',
    heroCopy:
      'Finishing a book is not the same as keeping it. Find out where your reading leaks — before the next one goes the same way.',
    intro: [
      'Reading coaching is for people who already read and want more of it to stick. It is less about speed and more about what happens around the page: how you choose what to read, the conditions you read in, whether you argue with the text while you are inside it, and what you do with your notes afterwards. A reading coach looks at that whole loop and finds the step where understanding quietly drains away.',
      'It is a skill worth protecting, because the habit itself is thinning out. An analysis of more than 236,000 American Time Use Survey diaries found that the share of Americans who read for pleasure on a given day fell from about 28% in 2004 to roughly 16% in 2023 — a relative drop of around 40% over two decades (source: UCL and University of Florida study in iScience, 2025, summarised by UCL at https://www.ucl.ac.uk/news/2025/aug/proportion-americans-reading-pleasure-fell-40-over-20-years). Fewer and shorter reading sessions leave less room for the slow, effortful kind of reading that actually builds knowledge.',
      'The good news is that retention responds to technique. Learning research has repeatedly found that active strategies — putting a passage into your own words, testing yourself on it later, and spacing those reviews out — beat rereading and highlighting by a wide margin (source: Dunlosky et al., Psychological Science in the Public Interest, https://journals.sagepub.com/doi/abs/10.1177/1529100612453266). Most readers who say they forget everything are not short of memory; they are short of a retrieval step.',
      'These free quizzes give you a quick, honest read on where you stand. The Reading Effectiveness Scorecard grades four pillars of how you read and returns a radar of the weakest one. The Memory IQ quiz checks what you know about how recall works, and the vocabulary quiz shows which confusable words still trip you up on the page. Each takes a few minutes, is free, and needs no signup to start.',
    ],
    faq: [
      {
        q: 'What does a reading coach do?',
        a: 'A reading coach helps you get more out of what you read — choosing books with a clear purpose, building conditions for focused reading, using active techniques such as summarising and questioning while you read, and setting up a note and review system so ideas survive past the last page. For students it often overlaps with study skills; for professionals it is usually about turning reading into decisions and action.',
      },
      {
        q: 'Why do I forget most of what I read?',
        a: 'Usually because nothing asks you to retrieve it. Reading straight through and closing the book leaves only a weak memory trace, and unrevisited highlights do little to strengthen it. Pausing to restate a chapter in your own words, writing down a question before you start, and coming back to your notes a few days later are the habits that change how much you keep.',
      },
      {
        q: 'Is speed reading worth learning?',
        a: 'For most people, no. Comprehension tends to fall as reading speed rises past a natural pace, and the bigger gains come from choosing better, reading with fewer interruptions, and reviewing what you read. The scorecard on this page deliberately measures those habits rather than words per minute.',
      },
      {
        q: 'How can I build a reading habit again?',
        a: 'Protect one reliable slot rather than reading in scattered gaps, put the phone in another room for that slot, and give yourself permission to drop books that are not working. Starting with something you have a real question about makes it far easier to keep going than starting with something you feel you ought to read.',
      },
      {
        q: 'Are these reading quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
    order: 17,
    parent: 'learning-education',
  },
  quizzes: [
    {
      publicToken: 'sgjhe5rx',
      slug: 'reading-effectiveness-scorecard',
      order: 1,
      alsoIn: ['academic-coaching', 'learning-coaching'],
      seo: {
        title: 'Reading Effectiveness Test: How Much Do You Retain? (Free)',
        description:
          'A free 12-question reading scorecard that grades how you choose, focus on, engage with and retain what you read. Get a score out of 100 and a 4-part radar.',
        overview:
          'You finish books — the real question is whether anything survives the last page. This free 12-question scorecard measures reading the way it actually works, not by speed or volume but by habits: how you pick what to read, the conditions you read in, how actively you engage with the text, and what you do afterwards to keep it. You get a score out of 100 and a radar across four pillars, so you can see exactly which one is draining your retention.',
        whoFor:
          'Professionals who read for work but see little of it turn into action, students reading for an exam or qualification, keen leisure readers who want more to stick, and anyone rebuilding a reading habit from close to zero. Teachers, coaches and book-club hosts can also use it to compare a group.',
        whatYouLearn: [
          'Your reading effectiveness score out of 100',
          'A radar across Selection & Intent, Focus & Conditions, Active Engagement and Retention & Use',
          'Which single pillar is doing the least work for you',
          'Practical changes to choosing, reading and reviewing that improve recall',
          'How to turn notes and highlights into something you actually reuse',
        ],
        sampleQuestions: [
          'Think of the last book you started — did you pick it to answer a specific question, or was it simply in front of you?',
          'In a typical 30-minute reading session, how many times do you pick up your phone?',
          'When did you last read for 45 minutes without switching to something else?',
          'An author makes a claim you are not sure about — do you stop and test it, or take it as given?',
          'Pick a non-fiction book you finished a year ago: could you still explain its core argument and where you disagreed?',
        ],
        howItWorks:
          'You answer 12 questions, three for each of four pillars, and every question asks what you last did rather than how you would describe yourself — which keeps the result honest. Your answers combine into an overall score out of 100 and a four-part radar. A short final page asks about your goals; it does not affect the score but helps frame the advice. The pillars reflect what learning research says drives retention: purposeful selection, distraction-free attention, active processing such as self-explanation, and later retrieval of what you read.',
        faq: [
          {
            q: 'Does this test my reading speed?',
            a: 'No. It deliberately ignores words per minute and measures the habits that decide how much you remember and use — choosing with intent, reading without interruption, engaging actively and reviewing afterwards.',
          },
          {
            q: 'What is a good reading effectiveness score?',
            a: 'Higher is better, but the shape matters more than the total. Your lowest pillar on the radar is the constraint: improving it will raise retention far more than polishing a pillar that is already strong.',
          },
          {
            q: 'Can I use it with a class or book club?',
            a: 'Yes. Everyone can enter the same group name on the final page, which makes it easy to line the radars up side by side and spot the pillar a whole group is weakest on.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'Under five minutes for the 12 questions. It is free and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
