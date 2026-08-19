import type { CategoryFile } from '../schema'

/** niche · 宠物训练教练 */
export const petTrainingCoaching: CategoryFile = {
  category: {
    slug: 'pet-training-coaching',
    name: 'Pet Training Coach',
    title: 'Dog & Pet Training Quizzes & Assessments',
    description:
      'Free dog training quizzes — find your training style, spot the habit holding your dog back, and get one concrete thing to work on this week.',
    emoji: '🐕',
    heroCopy:
      'Every owner trains their dog, including the ones who say they do not. Find out what your style is teaching them.',
    order: 18,
    parent: 'lifestyle-interests',
    intro: [
      'Pet training coaching is about the human end of the lead. Most everyday problems — jumping on guests, ignoring a recall, pulling on the lead, unsettled nights — come down to timing, consistency, and what the dog is actually being rewarded for, rather than stubbornness or a difficult breed.',
      'Understanding your own default style is the fastest way to improve. A handler who rewards generously has different blind spots from one who prizes routine above all else, and knowing which one you are tells you what to change first.',
      'Dogs live in roughly 42.6% of US households, around 87.3 million dogs in total (source: American Veterinary Medical Association, https://www.avma.org/news/press-releases/national-pet-week-2026-pet-ownership-surges-avma-celebrates-human-animal-bond), and a Texas A&M study found that more than 99% of US dogs show at least one potentially problematic behaviour — most commonly separation and attachment behaviours, fear and anxiety, or aggression (source: Texas A&M University, https://stories.tamu.edu/news/2025/04/01/more-than-99-of-us-dogs-have-a-behavior-problem-texas-am-researcher-finds/). In other words, an imperfect dog is the normal case, not a failure.',
      'On method, the veterinary consensus is clear: the American Veterinary Society of Animal Behavior states that reward-based training offers the most advantages and the least risk to welfare, and that aversive methods are not necessary (source: AVSAB Humane Dog Training Position Statement, https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf). These free quizzes reflect that.',
      'They are a starting point for self-awareness, not veterinary advice. For serious behavioural issues — aggression, severe anxiety, or a sudden change in behaviour — speak to a qualified trainer or your vet.',
    ],
    faq: [
      {
        q: 'What is a dog training style?',
        a: 'Your training style is your default pattern for setting boundaries, delivering rewards, and reacting when things go wrong. It shows up in how you handle a missed recall, where your dog sleeps, and whether a rule holds on a bad day. Every style has strengths and one predictable blind spot.',
      },
      {
        q: 'Which dog training method actually works best?',
        a: 'Reward-based, force-free training has the strongest professional backing. The American Veterinary Society of Animal Behavior recommends it as the approach with the most benefit and least welfare risk, and research links aversive methods to poorer welfare outcomes in companion dogs.',
      },
      {
        q: 'Can a quiz replace a professional dog trainer?',
        a: 'No. These quizzes help you see your own habits clearly and give you one thing to practise this week. For aggression, severe anxiety, or any sudden behaviour change, work with a qualified trainer or veterinary behaviourist.',
      },
      {
        q: 'Are these dog training quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'pr884nfv',
      slug: 'dog-training-style',
      order: 1,
      seo: {
        title: 'Dog Training Style Quiz — Find Your Dog-Parent Archetype (Free, 2 Minutes)',
        description:
          'A free 10-question dog training style quiz. Find your dog-parent archetype — Reward Coach, Steady Handler, Soft Heart, or Thoughtful Student — plus your blind spot and one thing to fix this week.',
        overview:
          'Every dog owner trains their dog, even the ones who swear they do not. This free 10-question quiz reveals your dog-parent archetype: how you set boundaries, how you reward, how you handle the hard days, and where your instincts quietly hold your dog back. You get your archetype, your strengths, your blind spot, and one concrete thing to work on this week.',
        whoFor:
          'Dog owners at any stage — new puppy parents, rescue adopters, and long-time owners stuck on one behaviour — who want to understand their own habits rather than collect more generic tips.',
        whatYouLearn: [
          'Your dog-parent archetype: the Reward Coach, the Steady Handler, the Soft Heart, or the Thoughtful Student',
          'The strengths your style already gives your dog',
          'The blind spot that comes with it — bribery, rigidity, inconsistency, or over-analysis',
          'One specific thing to practise this week, sized to your style',
          'Why consistency matters more to a dog than any single technique',
        ],
        sampleQuestions: [
          'Your dog jumps on a guest the moment they walk in. What is your first move?',
          'How do you usually reward good behaviour?',
          'Your dog ignores a recall at the park. What do you do?',
          'How do you handle a behaviour you do not like?',
          'Your dog is anxious in a new place. What is your instinct?',
        ],
        howItWorks:
          'You answer 10 everyday scenario questions about rewards, routine, recall, sleeping arrangements, and how you respond when things go wrong. Each answer votes toward one of four archetypes, and the most-voted type becomes your result — with your strengths, your blind spot, and a one-week practice suggestion. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the four dog training archetypes?',
            a: 'The Reward Coach trains with motivation and good reward timing. The Steady Handler runs on clarity and consistent routine. The Soft Heart leads with affection and reads moods well. The Thoughtful Student studies the dog and adapts constantly. Most owners lead with one and borrow from the others.',
          },
          {
            q: 'Is one archetype better than the others?',
            a: 'No. Each has a real strength and a predictable failure mode — rewards drifting into bribes, consistency hardening into rigidity, warmth without follow-through, or analysis crowding out repetition. The useful part of the result is the blind spot, not the label.',
          },
          {
            q: 'Does this quiz assess my dog or me?',
            a: 'You. It maps your handling habits and instincts, not your dog’s temperament or obedience level. That is deliberate: the handler side is the part you can change this week.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes for 10 questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
