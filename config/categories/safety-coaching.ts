import type { CategoryFile } from '../schema'

/**
 * niche · 安全教练（2026-11-17 促级上线）
 * 3 道测评：dmv-practice-test（alsoIn driving-coaching）/ food-handler-practice-test（alsoIn cooking-coaching）
 * / scam-spotting-iq-quiz（alsoIn financial-coaching），均为完整 GEO 内容。
 */
export const safetyCoaching: CategoryFile = {
  category: {
    slug: 'safety-coaching',
    name: 'Safety Coach',
    title: 'Safety Practice Tests & Quizzes: DMV, Food Handler, Scams',
    description:
      'Free safety practice tests and awareness quizzes — DMV permit practice test, food handler practice test, and a scam-spotting quiz — with instant scores and explanations.',
    emoji: '🦺',
    heroCopy: 'Safe habits are learned habits. Check what you know before it matters.',
    order: 13,
    parent: 'specialized-skills',
    intro: [
      'Safety coaching is about turning rules you have “sort of heard of” into reflexes you can rely on — on the road, in the kitchen and online. Most safety failures are not caused by people who do not care; they come from small gaps in knowledge that only show up under pressure, like a four-way stop, a busy dinner service or an urgent text from your “bank”.',
      'The free practice tests on this page find those gaps quickly. The DMV practice test covers the road rules shared by most US states, from right-of-way to school buses and Move Over laws. The food handler practice test follows the FDA Food Code on temperatures, storage, allergens and hygiene. The scam-spotting quiz puts you through real-world fraud scenarios, from AI-cloned voices to fake toll texts and QR-code tricks. Every question comes with a short explanation, so each mistake becomes something you will remember.',
      'The stakes are real. The CDC estimates that about 48 million people in the US get sick from foodborne illness each year, and the Federal Trade Commission says consumers reported losing a record $15.9 billion to fraud in 2025. Start with the test that matches what is coming up for you — a permit test, a new job in food service, or simply keeping your family’s money safe. Each one is free and takes two or three minutes.',
    ],
    faq: [
      {
        q: 'What is safety coaching?',
        a: 'Safety coaching helps people build the knowledge and habits that prevent accidents, illness and losses — whether that is driving, handling food at work, or protecting money and accounts from fraud. It focuses on practical rules and quick decision-making rather than memorizing a manual.',
      },
      {
        q: 'Which safety quiz should I take first?',
        a: 'Pick the one tied to your next real-world test or risk: the DMV practice test if you are preparing for a learner’s permit, the food handler practice test if you are starting a food service job, or the scam-spotting quiz if you want to protect yourself or an older relative from fraud.',
      },
      {
        q: 'Are these official certification exams?',
        a: 'No. They are free practice tests. Official driver knowledge tests are run by your state DMV, and food handler cards are issued by accredited training providers or local health departments. Use these quizzes to find gaps before the real thing.',
      },
      {
        q: 'Do the rules differ by state?',
        a: 'Some details do. The DMV and food handler questions are based on rules shared by most US states and the FDA Food Code, but your state handbook or local health department has the final word, so check it before your exam.',
      },
      {
        q: 'Are these safety quizzes free?',
        a: 'Yes. Every quiz here is free, takes only a few minutes, and gives you an instant score with explanations — no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'fcvkjkqk',
      slug: 'dmv-practice-test',
      order: 1,
      alsoIn: ['driving-coaching'],
      seo: {
        title: 'Free DMV Practice Test — Would You Pass Your Permit Test?',
        description:
          'A free 10-question DMV practice test on the road rules every permit test covers: right-of-way, signals, signs, school buses and Move Over laws.',
        overview:
          'Find out whether you would pass your learner’s permit knowledge test today. This free DMV practice test covers the road rules shared by most US states — right turns on red, four-way stops, school buses, flashing signals, sign shapes, following distance, lane markings, hydroplaning and Move Over laws — and explains the right answer after every question so you learn as you go.',
        whoFor:
          'Teens and adults preparing for a learner’s permit or driver’s license knowledge test, parents quizzing a new driver, and anyone moving to a new state who wants a quick refresher on the rules of the road.',
        whatYouLearn: [
          'Your score out of 100 and whether you are likely test-ready',
          'Which right-of-way rules (four-way stops, emergency vehicles, school buses) you already know cold',
          'How to read sign shapes, flashing signals and lane markings at a glance',
          'Safe-driving habits examiners love to test: the 3-second rule and what to do when you hydroplane',
          'A short explanation for every question, so each mistake becomes a lesson',
        ],
        sampleQuestions: [
          'You are stopped at a solid red light and want to turn right — what must you do first?',
          'Two cars reach a four-way stop at the same moment. Which one has the right-of-way?',
          'A school bus on a two-lane road has its red lights flashing and stop arm out. Do drivers coming the other way have to stop too?',
          'What is the minimum following distance most state driver manuals recommend in good conditions?',
          'Your car starts to hydroplane on a wet road. What is the safest reaction?',
        ],
        howItWorks:
          'Ten multiple-choice questions, several with road-scene illustrations, are split into three short rounds. Each correct answer is worth 10 points, and you see an explanation after every question plus your total score at the end. The questions reflect rules common to most US states, but details vary — always confirm with your state’s official driver handbook before test day. Pass rates show why practice pays off: an analysis of 36 state DMVs reported by USA Today found that only about 62% of applicants passed the written knowledge test on their first try between 2020 and 2023. It takes about two minutes and is free with no signup.',
        faq: [
          {
            q: 'Is this the real DMV test?',
            a: 'No. It is a free practice test built on rules shared by most US states. Your state’s official knowledge test draws on its own driver handbook, so use this quiz to find gaps, then study the handbook sections behind any questions you missed.',
          },
          {
            q: 'How many questions are on the actual permit test?',
            a: 'It depends on the state. Most knowledge tests have somewhere between 20 and 50 multiple-choice questions, and the passing score is usually around 80%. Check your state DMV website for the exact format.',
          },
          {
            q: 'What do people most often get wrong on the permit test?',
            a: 'Right-of-way situations, the meaning of flashing signals, school bus rules on divided versus undivided roads, and specific numbers such as following distances and speed limits in school zones. This practice test focuses on those high-miss areas.',
          },
          {
            q: 'What score should I aim for before booking my test?',
            a: 'Aim to score 90% or higher consistently on practice tests. If you scored lower here, review the explanations, re-read the matching handbook chapters, and retake the quiz in a few days.',
          },
          {
            q: 'Is the DMV practice test free?',
            a: 'Yes. It is free, takes about two minutes, and needs no signup to start.',
          },
        ],
      },
    },
    {
      publicToken: 'x2njusmu',
      slug: 'food-handler-practice-test',
      order: 2,
      alsoIn: ['cooking-coaching'],
      seo: {
        title: 'Free Food Handler Practice Test — Are You Ready to Pass?',
        description:
          'A free 10-question food handler practice test based on the FDA Food Code: danger zone, cooking and cooling temps, allergens, hygiene and storage.',
        overview:
          'Check whether you are ready for your food handler card exam. This free practice test covers the food safety essentials that food handler courses and exams are built on — the temperature danger zone, minimum cooking temperatures, two-stage cooling, cold holding, safe thawing, refrigerator storage order, the nine major allergens, handwashing and when a sick worker must stay home — with a clear explanation after every answer.',
        whoFor:
          'New restaurant, café, catering and food-truck staff preparing for a food handler card or certificate, managers refreshing a team before an inspection, and home cooks who want to know the professional food safety rules.',
        whatYouLearn: [
          'Your score out of 100 and whether you are ready to sit the exam',
          'The temperatures you must know by heart: danger zone, poultry, cold holding and cooling',
          'How to store, thaw and rotate food safely (including what FIFO means)',
          'The nine major food allergens recognized under US federal law',
          'When a food handler must be excluded from work, and why gloves are not enough',
        ],
        sampleQuestions: [
          'What temperature range does the FDA Food Code call the danger zone?',
          'What internal temperature must poultry reach before it is safe to serve?',
          'How quickly must cooked food be cooled using the two-stage cooling method?',
          'Where in the refrigerator should raw chicken be stored?',
          'How many major food allergens does US federal law currently recognize?',
        ],
        howItWorks:
          'Ten multiple-choice questions in three short rounds, each worth 10 points, with an explanation after every answer and your total at the end. Questions follow the US FDA Food Code; your state, county or employer may use slightly different rules, so confirm local requirements before your exam. Why it matters: the CDC estimates that about 48 million people in the US get sick from foodborne illness each year, and handwashing, temperature control and keeping sick workers home are among the most effective ways food workers prevent it. It takes about two minutes, is free and needs no signup.',
        faq: [
          {
            q: 'Is this an official food handler exam?',
            a: 'No. It is a free practice test to help you prepare. Official food handler cards are issued through accredited training providers or local health departments, depending on your state and county.',
          },
          {
            q: 'What is the temperature danger zone?',
            a: 'Under the FDA Food Code, the danger zone is 41°F to 135°F (5°C to 57°C) — the range in which bacteria multiply fastest. Keep cold food at 41°F or below and hot food at 135°F or above.',
          },
          {
            q: 'What topics does a food handler test usually cover?',
            a: 'Personal hygiene and handwashing, time and temperature control, cross-contamination, cleaning and sanitizing, safe storage, allergens, and when sick employees must stay home. This practice test samples each of those areas.',
          },
          {
            q: 'What are the nine major food allergens in the US?',
            a: 'Milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame. Sesame was added as the ninth major allergen in 2023.',
          },
          {
            q: 'Is the food handler practice test free?',
            a: 'Yes. It is free, takes about two minutes, and there is no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'jngr3bra',
      slug: 'scam-spotting-iq-quiz',
      order: 3,
      alsoIn: ['financial-coaching'],
      seo: {
        title: 'Scam-Spotting IQ Quiz — Can You Spot Fraud Before It Hits?',
        description:
          'A free 15-scenario scam awareness quiz: AI voice clones, fake toll texts, QR-code tricks, task scams and fake investments. Get your score and a protection plan.',
        overview:
          'Test how well you can spot a scam before it costs you. This free scam awareness quiz walks you through 15 real-world scenarios in three rounds — texts, calls and impostors; money, jobs and romance; and online and account security — covering today’s most common frauds, from AI-cloned voices and unpaid-toll texts to QR-code “quishing”, task scams and “guaranteed” crypto returns. You get an instant Scam-Spotting score, a short explanation after every answer, and a simple protection plan to share with family.',
        whoFor:
          'Anyone who wants to protect their money and accounts — especially people helping older parents or teens stay safe — plus financial coaches, advisors, banks, educators and community groups running fraud-awareness sessions.',
        whatYouLearn: [
          'Your Scam-Spotting score and level across 15 real-world scenarios',
          'The red flags shared by almost every scam: urgency, secrecy and unusual payment methods',
          'How AI voice-clone, fake toll, QR-code and task scams actually work',
          'Which payment methods are nearly impossible to recover once sent',
          'Exactly what to do in the first hour if you have already paid a scammer',
        ],
        sampleQuestions: [
          'Your bank texts that your account is locked and asks you to verify through a link. What is the safest move?',
          'A family member calls in a panic needing bail money wired right now, and the voice sounds exactly right. What should you do first?',
          'A text says you owe a few dollars in unpaid tolls and will be fined unless you pay today. Real or fake?',
          'An online platform promises guaranteed weekly returns with no risk. What should you conclude?',
          'You notice a “Scan to pay” QR sticker on a parking meter. What is the safest way to pay?',
        ],
        howItWorks:
          'Fifteen multiple-choice scenarios are grouped into three rounds, each worth 10 points, and every answer is followed by a short explanation of the trick and the safer response. Your total becomes a Scam-Spotting level with a practical protection plan. The scenarios reflect the fraud types consumers report most often: according to the US Federal Trade Commission, people reported losing a record $15.9 billion to fraud in 2025, with investment scams and impostor scams causing the largest losses. It takes about three minutes, is free and needs no signup.',
        faq: [
          {
            q: 'What are the most common scams right now?',
            a: 'Impostor scams (fake banks, government agencies, tech support or family members), investment and crypto scams, fake unpaid-toll and delivery texts, job and task scams, romance scams, and QR-code phishing. Investment scams cause the largest dollar losses, while impostor scams are reported most often.',
          },
          {
            q: 'How can I tell if a call from a family member is an AI voice clone?',
            a: 'You often cannot tell by voice alone, because a short clip from social media can be enough to clone it. Hang up and call the person back on a number you already know, or agree on a private family code word for emergencies.',
          },
          {
            q: 'What should I do if I already sent money to a scammer?',
            a: 'Contact your bank or payment provider immediately — fast action sometimes stops or reverses a payment — then report the scam (in the US, at ReportFraud.ftc.gov). Be wary of “recovery services” that promise to get your money back for a fee; they are often a second scam.',
          },
          {
            q: 'Can I use this quiz in a workshop or with clients?',
            a: 'Yes. It works well as a warm-up for financial coaching sessions, bank and credit-union education, workplace training or community fraud-awareness events. Everyone takes it individually and you can discuss the scenarios together afterwards.',
          },
          {
            q: 'Is the scam quiz free?',
            a: 'Yes. It is free, takes about three minutes, and needs no signup to start.',
          },
        ],
      },
    },
  ],
}
