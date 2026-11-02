import type { CategoryFile } from '../schema'

/**
 * niche · 考试教练
 * 无自有 quiz，靠跨分类归属（alsoIn）聚合 5 个既有测评：
 * Stress Type（stress-management）、Procrastination Type（life）、
 * Growth vs Fixed Mindset（mindset）、Memory IQ（memory）、Sleep Quality（sleep）。
 * 定位与 academic-coaching 区分：academic 读「一学期的学习系统」，
 * exam 读「考试本身」——考前焦虑、复习拖延、回忆提取、考砸后的心态、考期睡眠。
 * 已补 intro + faq 并促级上线（去 draft）。
 * 2026-11-03 新增 2 道自有测评：exam-readiness-scorecard（zc6g9hu3）、ai-study-plan（fb9tadve）。
 */
export const examCoaching: CategoryFile = {
  category: {
    slug: 'exam-coaching',
    name: 'Exam Coach',
    title: 'Exam Coaching Quizzes — Test Anxiety, Revision & Exam Performance',
    description:
      'Free exam coaching quizzes on test anxiety, revision procrastination, recall, mindset, and exam-period sleep. Each takes a few minutes, with no signup.',
    emoji: '📝',
    heroCopy:
      'Most exams are not lost on the day — they are lost in the weeks before it. Find out which part of your exam game is actually costing you marks.',
    intro: [
      'Exam coaching is narrower than academic coaching. Academic coaching builds the study system you run across a whole term; exam coaching works on the exam itself — the last few weeks of revision, the way nerves behave in the hall, how reliably you can pull an answer out of memory under time pressure, and what you do with yourself after a paper that went badly. Those are different skills, and being good at one does not make you good at the other.',
      'Exam anxiety is far more common than most students assume, which matters because a lot of the damage comes from believing you are the only one struggling. A meta-analysis pooling 67 studies and 43,545 students put overall exam anxiety prevalence at about 48%, with roughly 20% in the high-anxiety band and rates somewhat higher among female students (source: Prevalence of exam anxiety: a systematic review and meta-analysis, APA PsycNet, https://psycnet.apa.org/record/2026-89362-001). Research tracking adolescents across a school year also found test anxiety to be predominantly stable rather than something that simply fades with practice — it holds steady for roughly 71–81% of students unless something is actively done about it (source: PubMed, https://pubmed.ncbi.nlm.nih.gov/41843454/).',
      'The other half of the picture is technique, and here the evidence is refreshingly blunt. In a landmark review of ten common study strategies, only two were rated high-utility across subjects, ages, and materials: practice testing and distributed practice — testing yourself, and spreading reviews out over time. Rereading and highlighting, the two habits most students rely on in the final week, were rated low utility (source: Dunlosky et al., Psychological Science in the Public Interest, https://journals.sagepub.com/doi/abs/10.1177/1529100612453266). Studies of test anxiety point in a compatible direction: poor time management and weak study skills are among the strongest correlates, which means much of what feels like an anxiety problem is a preparation problem wearing a disguise.',
      'These free quizzes are a quick way to find out which part is yours. Check how you react under pressure, why revision keeps sliding to tomorrow, how well you actually recall, whether a bad result reads to you as a verdict or as information, and what your sleep is doing during exam season. Each takes a few minutes, is free, and ends with a personalized result and a first step — no signup required to start.',
    ],
    faq: [
      {
        q: 'What does an exam coach do?',
        a: 'An exam coach works on the run-up to a specific exam and on exam-day performance: building a revision timetable that uses spacing and self-testing instead of rereading, rehearsing exam technique and timing, and reducing the anxiety that stops prepared students from showing what they know. A tutor teaches the subject; an academic coach builds your term-long study system; an exam coach gets you through this paper.',
      },
      {
        q: 'How common is exam anxiety?',
        a: 'Common enough that it is closer to the norm than the exception. A meta-analysis across 67 studies and more than 43,000 students found overall exam anxiety prevalence of roughly 48%, with about one student in five in the high-anxiety band. It also tends to be stable across a school year rather than something that wears off on its own, so it usually needs to be worked on deliberately.',
      },
      {
        q: 'What is the best way to revise for an exam?',
        a: 'Test yourself and spread it out. A major review of study techniques rated practice testing and distributed practice as the only two high-utility strategies across subjects and age groups, and rated rereading and highlighting as low utility. In practice that means closing the book and trying to recall, doing past papers under time, and reviewing after a day, a week, and a month rather than cramming the night before.',
      },
      {
        q: 'Why do I keep putting revision off even when I care about the result?',
        a: 'Procrastination around exams is usually an emotion-regulation problem rather than a laziness problem — the task triggers something uncomfortable, and delaying is what makes the discomfort stop. That is why willpower advice rarely works and why knowing your specific pattern helps: the fix for avoidance-driven delay is different from the fix for perfectionism-driven delay. The procrastination type quiz on this page is built to tell them apart.',
      },
      {
        q: 'Does sleep really affect exam performance?',
        a: 'Yes, and it is one of the most commonly traded-away variables during exam season. Sleep is when the day\'s learning is consolidated, so the all-nighter that buys you three extra hours of revision tends to charge them back in recall and concentration the next morning. Checking your sleep quality is a useful part of exam prep, not a distraction from it.',
      },
      {
        q: 'Are these exam quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized result with a breakdown of where to focus — no signup required to start.',
      },
    ],
    order: 13,
    parent: 'learning-education',
  },
  quizzes: [
    {
      publicToken: 'zc6g9hu3',
      slug: 'exam-readiness-scorecard',
      order: 1,
      alsoIn: ['academic-coaching'],
      seo: {
        title: 'Am I Ready for My Exam? Free Exam Readiness Test',
        description:
          'A free 12-question exam readiness scorecard rating content mastery, exam technique, study consistency and test-day mindset. Find your weak spot weeks early.',
        overview:
          'Most students find out they were not ready on exam day. This free 12-question scorecard finds out four to six weeks earlier, across the four things that actually decide the result: content mastery, exam technique, study consistency and test-day mindset. You get an overall readiness score and a breakdown by area, so you know whether the next few weeks should go on topics, timed past papers, a proper revision schedule or managing nerves.',
        whoFor:
          'Students preparing for standardized tests such as the SAT, ACT or GCSEs, end-of-term finals, class tests or entrance and certification exams — plus parents, tutors and coaches assessing a student.',
        whatYouLearn: [
          'Your overall exam readiness score',
          'How you rate on Content Mastery, Exam Technique, Study Consistency and Test-Day Mindset',
          'Which area is most likely to cost you marks if left alone',
          'Whether your revision methods match what learning research recommends',
          'A focused first step for the weeks you have left',
        ],
        sampleQuestions: [
          'When you sit a past paper for this exam without help, how do you do?',
          'How many syllabus topics could you explain to someone else right now?',
          'How many full timed past papers have you completed under real exam conditions?',
          'How do you usually revise — rereading, highlighting, or practice questions with spaced review?',
          'When you hit a hard question in the exam, do you freeze or flag it and move on?',
        ],
        howItWorks:
          'You answer 12 multiple-choice questions, three for each of four areas, and each answer scores from 0 to 3. The scores combine into an overall readiness result and a per-area breakdown. A few optional questions at the end — who you are, what exam you are preparing for, and the one thing you would fix — do not affect the score. The four areas reflect the evidence on exam performance: knowing the material, practising under real timing, revising consistently with self-testing and spacing rather than rereading, and managing anxiety and sleep in the final week.',
        faq: [
          {
            q: 'How do I know if I am ready for an exam?',
            a: 'The most reliable signal is how you perform on full past papers under real timing without help. If you are scoring comfortably, can explain most topics in your own words, and finish sections on time, you are likely ready. This scorecard checks those signals alongside your revision consistency and test-day mindset.',
          },
          {
            q: 'When should I take this scorecard?',
            a: 'Ideally four to six weeks before the exam, when there is still time to act on the weakest area. Taking it again a week or two out is a useful check that the gap has closed.',
          },
          {
            q: 'Can parents or tutors use it?',
            a: 'Yes. You can answer on behalf of a student, and an optional name field makes it easy to compare results across a family, class or tutoring group.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About four minutes for the 12 questions. It is free and needs no signup to start.',
          },
        ],
      },
    },
    {
      publicToken: 'fb9tadve',
      slug: 'ai-study-plan',
      order: 2,
      alsoIn: ['academic-coaching', 'learning-coaching'],
      seo: {
        title: 'Free AI Study Plan Generator for Your Next Exam',
        description:
          'Answer 13 questions and get a free week-by-week AI study plan for your exam, built on practice testing and spaced review instead of rereading and highlighting.',
        overview:
          'Most students work hard on the wrong things. This free AI study plan generator asks 13 questions about your exam, your timeline, your weak and strong topics and how you study now, then builds a week-by-week plan to exam day around the techniques learning research rates most effective. You also get a Study Readiness rating, a check of your current methods against the evidence, a daily session template, and advice on using AI chatbots as a quiz master rather than an answer machine.',
        whoFor:
          'Students preparing for school, university, language, entrance or professional certification exams, and tutors, teachers and learning coaches who want a structured starting plan for a student.',
        whatYouLearn: [
          'A Study Readiness rating from 1 to 10 with a clear verdict',
          'How your current study methods compare with learning research',
          'A week-by-week plan to exam day built around your weakest topics',
          'How to use AI chatbots to quiz yourself instead of just reading answers',
          'A daily study session template plus exam-week and exam-day tips',
        ],
        sampleQuestions: [
          'What exam or subject are you studying for, and how long until it takes place?',
          'How many hours a week can you realistically study?',
          'How do you usually study — rereading, highlighting, summaries, flashcards, past papers or asking AI to explain?',
          'Which topics feel weakest or most confusing right now?',
          'What pulls you away from studying most often?',
        ],
        howItWorks:
          'The quiz has three short parts: your exam, how you study now, and your focus and wellbeing. When you finish, an AI writes your report from your answers, so the timetable reflects your actual weeks remaining, available hours, weak topics and best focus time. The plan leans on the two strategies a major review of learning techniques rated high-utility — practice testing and spacing study out over time — and moves you away from rereading and highlighting, which were rated low utility (source: Dunlosky et al., Psychological Science in the Public Interest, 2013, https://journals.sagepub.com/doi/abs/10.1177/1529100612453266).',
        faq: [
          {
            q: 'Is the AI study plan free?',
            a: 'Yes. The quiz and your personalized study plan are free, and no signup is needed to start. It takes about four minutes.',
          },
          {
            q: 'What is the most effective way to study for an exam?',
            a: 'Test yourself and space it out. Practice questions, past papers and recalling material from memory, reviewed over several days or weeks, consistently outperform rereading notes and highlighting. Your plan is built around exactly those methods.',
          },
          {
            q: 'Does it work if my exam is only a week away?',
            a: 'Yes. You tell it how long you have, and the plan prioritises your weakest topics and the highest-value practice for the time left, along with exam-week and exam-day tips.',
          },
          {
            q: 'Should I use ChatGPT to study?',
            a: 'It can help if you use it to quiz you and check your explanations rather than to hand you answers. Your report includes specific ways to use AI chatbots as a quiz master so you get the benefit of retrieval practice.',
          },
        ],
      },
    },
  ],
}
