import type { CategoryFile } from '../schema'

/** niche · 记忆教练 */
export const memoryCoaching: CategoryFile = {
  category: {
    slug: 'memory-coaching',
    name: 'Memory Coach',
    title: 'Memory Quizzes & Assessments',
    description:
      'Free memory quizzes on how recall really works — the forgetting curve, spaced repetition, chunking, and memory palaces. Every answer explained.',
    emoji: '🧠',
    heroCopy:
      'Memory is a skill, not a fixed trait. Start by testing how well you understand the way recall actually works.',
    order: 16,
    parent: 'learning-education',
    intro: [
      'Memory coaching teaches the mechanics of remembering: how information is encoded, how it is consolidated, and why it slips away. The techniques are old and well documented — chunking, the method of loci, spaced review, retrieval practice — but most people never learn them, and instead fall back on re-reading and highlighting, two of the least effective study habits there are.',
      'The evidence favours effortful recall. In Roediger and Karpicke’s widely cited experiments, students who practised retrieval outperformed students who simply re-read the material a week later, 61% to 40% (source: Roediger & Karpicke, Perspectives on Psychological Science, https://www.sciencedirect.com/topics/psychology/testing-effect). Spacing works for the same reason: reviewing just as you begin to forget makes retrieval difficult enough to strengthen the memory trace, and spaced review beats cramming even when total study time is identical.',
      'Working memory is also more limited than folklore suggests. Miller’s famous “seven plus or minus two” has been revised down; current research puts the limit at roughly three to four meaningful chunks — which is exactly why chunking and memory palaces work so well.',
      'A quick knowledge check is a good place to start, and taking one is itself retrieval practice. Each quiz on this page is free, takes about three minutes, and explains every answer.',
    ],
    faq: [
      {
        q: 'What does a memory coach help with?',
        a: 'A memory coach teaches encoding and retrieval techniques — chunking, the method of loci, spaced repetition, and retrieval practice — and helps you build them into how you study or work. The goal is a repeatable system rather than a one-off trick.',
      },
      {
        q: 'Can memory actually be improved?',
        a: 'Yes, in the sense that matters. Raw capacity is fairly fixed, but how you encode and retrieve information is trainable, and technique accounts for most of the difference between average and exceptional recall. Sleep and regular aerobic exercise support memory health; brain-training games mostly improve performance at the game itself.',
      },
      {
        q: 'What is the single most effective study technique?',
        a: 'Retrieval practice — closing the book and recalling from memory — with reviews spaced over increasing intervals. Both effects are among the most robust findings in learning science, and both beat re-reading and highlighting.',
      },
      {
        q: 'Are these memory quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with an explanation for every answer — no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'sxq2xn5t',
      slug: 'memory-iq-quiz',
      order: 1,
      seo: {
        title: 'Memory IQ Quiz — Test Your Recall and Retention',
        description:
          'A free 10-question memory quiz on the forgetting curve, working-memory limits, spaced repetition, chunking, and memory palaces. Every answer explained.',
        overview:
          'How much do you actually know about how memory works? This free 10-question quiz covers the science of recall, retention, and forgetting — the forgetting curve, working-memory limits, spaced repetition, mnemonic techniques, and the habits that genuinely improve memory. Every question comes with a short explanation, so you sharpen your memory while you test it, and you get your Memory IQ score in about three minutes.',
        whoFor:
          'Students, self-directed learners, professionals sitting exams or certifications, and anyone curious about which study habits actually hold up under evidence.',
        whatYouLearn: [
          'Your Memory IQ level from Memory Novice to Memory Master',
          'How many chunks working memory really holds — and why it is fewer than you think',
          'What Ebbinghaus’s forgetting curve says about when to review',
          'Why retrieval practice beats re-reading, highlighting, and copying summaries',
          'What the method of loci and chunking are, and how to use them',
          'Which habits genuinely support long-term memory health, and which are myths',
        ],
        sampleQuestions: [
          'Roughly how many items can most adults hold in working memory at once?',
          'What does Ebbinghaus’s “forgetting curve” describe?',
          'Which study method produces the strongest long-term retention?',
          'What is the “method of loci” (memory palace)?',
          'Human memory works like a video recording — it stores events exactly as they happened. True or false?',
        ],
        howItWorks:
          'You answer 10 questions — multiple-choice and true/false — on working memory, consolidation, retrieval, and memory techniques, each worth 10 points toward a Memory IQ out of 100. Every question includes an explanation of the underlying research, so the quiz doubles as a short lesson. Scores map to four levels: Memory Novice, Solid Rememberer, Memory Sharp, and Memory Master. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a memory test or a knowledge quiz?',
            a: 'It is a knowledge quiz about how memory works — the forgetting curve, working-memory limits, spaced repetition, chunking, and mnemonics. It does not measure your raw recall span, and it is not a clinical or diagnostic memory test.',
          },
          {
            q: 'What is a good Memory IQ score?',
            a: 'Scores out of 100 map to four levels: Memory Novice (under 40), Solid Rememberer (40–70), Memory Sharp (70–90), and Memory Master (90+). Scoring 70 or above means you understand the mechanics — encoding, consolidation, retrieval — rather than the folklore.',
          },
          {
            q: 'What should I do after taking it?',
            a: 'Three things with strong evidence behind them: test yourself instead of re-reading, review new material after a day, a week, then a month, and protect your sleep after heavy learning, since consolidation happens overnight.',
          },
          {
            q: 'Do brain-training games improve memory?',
            a: 'Mostly they improve performance at the game itself. Transfer to everyday memory is weak, whereas regular aerobic exercise has the most consistent evidence for supporting long-term memory health.',
          },
        ],
      },
    },
  ],
}
