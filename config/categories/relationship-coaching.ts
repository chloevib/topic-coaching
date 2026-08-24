import type { CategoryFile } from '../schema'

/** niche · 关系教练 */
export const relationshipCoaching: CategoryFile = {
  category: {
    slug: 'relationship-coaching',
    name: 'Relationship Coaching',
    title: 'Relationship Coaching Quizzes',
    description:
      'Explore your communication style and relationship patterns with free relationship-coaching quizzes.',
    emoji: '💬',
    heroCopy: 'Better relationships start with self-awareness. Take a quiz to begin.',
    order: 2,
    parent: 'life-mindset-relationships',
    intro: [
      'Relationship coaching helps you understand the patterns you bring to your connections — how you communicate, handle conflict, build trust, and respond when you feel close or threatened. The aim is self-awareness you can act on, so you can show up in your relationships more intentionally rather than repeating the same cycles.',
      'These free relationship quizzes are a quick way to start. Each turns a vague sense that "something keeps happening" into something specific — your attachment style, the health of your current relationship, the dating pattern that keeps recurring, or how your personality type falls in love.',
      'A useful place to begin is attachment style, since it shapes so much of how we connect: research on adult attachment suggests roughly half of adults have a secure style, with the rest falling into anxious or avoidant patterns (source: Verywell Mind, https://www.verywellmind.com/attachment-styles-2795344). Each quiz is free, takes a few minutes, and ends with a personalized result and a next step.',
    ],
    faq: [
      {
        q: 'What does a relationship coach do?',
        a: 'A relationship coach helps you build self-awareness and practical skills — communication, boundaries, conflict repair — so you can create healthier connections. It is forward-looking and skills-based, and differs from couples therapy, which can also treat deeper clinical or historical issues.',
      },
      {
        q: 'What can a relationship quiz tell me?',
        a: 'A good relationship quiz turns a recurring frustration into something specific — such as your attachment style, how healthy your current relationship is across key areas, or the dating pattern you keep repeating — along with a practical first step.',
      },
      {
        q: 'Are these relationship quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
      {
        q: 'Can a quiz replace couples counseling?',
        a: 'No. These quizzes are a starting point for reflection and better conversations. If a relationship is in serious distress, a qualified therapist or counselor can provide support a quiz cannot.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'kvvv4txe',
      slug: 'relationship-health-scorecard',
      featured: true,
      order: 17,
      seo: {
        title: 'Relationship Health Quiz — How Healthy Is Yours?',
        description:
          'A free 3-minute relationship health scorecard that rates your connection across communication, trust, intimacy, and respect — and shows what to nurture next.',
        overview:
          'Healthy relationships are not the ones without problems — they are the ones with the skills to work through them. This scorecard rates your relationship across communication, trust, intimacy, and mutual respect, then highlights what is strong and where a little attention would go furthest.',
        whoFor:
          'Anyone in a relationship who wants an honest, structured read on how things are going — whether to reassure yourself, spot early strain, or find a constructive place to start a conversation with your partner.',
        whatYouLearn: [
          'Your overall relationship health score across four key dimensions',
          'How you rate on communication, trust, intimacy, and respect',
          'The strengths worth protecting in your relationship',
          'The one area where focused attention would help most',
        ],
        sampleQuestions: [
          'When you disagree, do conversations tend to move toward resolution or escalate?',
          'How comfortable do you feel bringing up something that is bothering you?',
          'Do you feel genuinely heard by your partner most of the time?',
          'How connected do you feel to each other day to day?',
        ],
        howItWorks:
          'You answer a short set of questions about how you and your partner relate day to day. Your answers are scored across four pillars of relationship health, and your result gives an overall rating with a breakdown of strengths and the area to focus on next. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What makes a relationship "healthy"?',
            a: 'Relationship researchers point to skills more than the absence of conflict — how partners communicate, repair after disagreements, maintain trust and respect, and stay emotionally connected. This scorecard reflects those dimensions rather than judging your relationship as good or bad.',
          },
          {
            q: 'Should my partner take it too?',
            a: 'It can help. Taking it separately and comparing results often surfaces useful differences in how each of you experiences the relationship, which can open a constructive conversation.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About three minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'dtvby4ca',
      slug: 'attachment-style',
      featured: true,
      order: 18,
      seo: {
        title: 'Attachment Style Quiz — Discover Your Attachment Style Free',
        description:
          'A free 12-question attachment style quiz — discover whether you are secure, anxious, avoidant, or disorganized, and what it means for relationships.',
        overview:
          'The way you bond, argue, and pull close — or pull away — often traces back to one of four attachment styles formed early in life. This honest 12-question quiz reveals yours and what it means for how you show up in relationships.',
        whoFor:
          'Anyone who wants to understand their patterns in dating or long-term relationships, or why closeness and conflict tend to play out the way they do.',
        whatYouLearn: [
          'Your primary attachment style: secure, anxious, avoidant, or disorganized',
          'How it shapes the way you bond and handle conflict',
          'What tends to trigger you in relationships',
          'What it means for building healthier connection',
        ],
        sampleQuestions: [
          'When a partner needs space, how do you usually react?',
          'How comfortable are you depending on someone else?',
          'What goes through your mind when a partner does not reply for a while?',
          'In conflict, do you tend to lean in or shut down?',
        ],
        howItWorks:
          'You answer 12 honest questions about how you bond, communicate, and handle conflict in relationships. Your answers map to one of four attachment styles, along with what it means for closeness and connection. It takes about three to four minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the four attachment styles?',
            a: 'Attachment theory describes four broad styles: secure (comfortable with closeness and independence), anxious (craves closeness, fears abandonment), avoidant (values independence, uneasy with too much closeness), and disorganized (a mix of the anxious and avoidant patterns). Most people lean toward one.',
          },
          {
            q: 'Can your attachment style change?',
            a: 'Yes. Attachment style is a pattern, not a life sentence. With awareness, healthier relationships, and sometimes support from a professional, people can move toward more secure attachment over time.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three to four minutes for the 12 questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'sn97jbar',
      slug: 'dating-pattern',
      order: 21,
      seo: {
        title: 'Dating Pattern Quiz — Why You Keep Repeating the Same Cycle',
        description:
          'A free dating pattern quiz uncovering the relationship cycle you keep repeating, where it comes from, and the first step to break it. 3 minutes.',
        overview:
          'Why do your relationships keep following the same script? This quick quiz uncovers your dating pattern — where it comes from, what it costs you, and the first step to change it — so you can stop repeating the cycle without realizing it.',
        whoFor:
          'Anyone who notices the same dynamics repeat across relationships, or who keeps ending up in situations that feel frustratingly familiar.',
        whatYouLearn: [
          'Your recurring dating pattern',
          'Where the pattern comes from',
          'What it quietly costs you',
          'A first step to break the cycle',
        ],
        sampleQuestions: [
          'What kind of person are you most often drawn to?',
          'At what point do your relationships tend to run into trouble?',
          'How do you respond when someone becomes genuinely available?',
          'What familiar feeling keeps showing up across your relationships?',
        ],
        howItWorks:
          'You answer a short set of questions about who you are drawn to and how your relationships tend to unfold. Your answers surface your recurring dating pattern, where it comes from, and a first step to change it. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a dating pattern?',
            a: 'A dating pattern is a recurring dynamic in who you are drawn to and how your relationships tend to unfold — for example, chasing the unavailable, moving too fast, or avoiding real closeness. Because it often runs on autopilot, naming it is the first step to changing it.',
          },
          {
            q: 'Why do I keep repeating the same relationships?',
            a: 'Repeating patterns usually come from familiar dynamics and unmet needs, not bad luck. Seeing the pattern clearly — its origin and its cost — is what makes it possible to choose differently.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'ua66tw76',
      slug: 'mbti-love-test',
      order: 19,
      alsoIn: ['personal-development-coaching'],
      seo: {
        title: 'MBTI Love Test — How Your Personality Type Falls in Love',
        description:
          'A free 20-question MBTI love test: find your romantic archetype, how you flirt, fight and commit, your blind spot, and the types you match best with.',
        overview:
          'The same four Myers-Briggs dimensions, pointed straight at your love life. This 20-question MBTI love test reveals how your type falls in love — how you flirt, how you fight, what makes you feel safe — and ends with your love archetype, your blind spot, and the types you tend to click with.',
        whoFor:
          'Anyone curious about how their personality type shows up in dating and long-term relationships — whether you are figuring out a new connection, making sense of an old pattern, or comparing results with a partner.',
        whatYouLearn: [
          'Your love archetype across all 16 Myers-Briggs types',
          'How you connect and recharge with a partner (Extraversion vs Introversion)',
          'What actually makes you feel loved day to day (Sensing vs Intuition)',
          'How you handle conflict and repair after an argument (Thinking vs Feeling)',
          'How fast you want to define a relationship (Judging vs Perceiving)',
          'Your biggest blind spot in love, and the types you tend to click with',
        ],
        sampleQuestions: [
          'Your ideal Friday night with someone you are into: out with a group, or just the two of you talking for hours?',
          'Your partner is upset — do you work out how to fix it, or get close and feel it with them first?',
          'Early on, would you rather know where this is going, or let it unfold?',
          'Right after an argument, do you want to talk it out now or take some space first?',
          'Once you commit, do you close the other doors, or commit fully but keep the plan loose?',
        ],
        howItWorks:
          'You answer 20 quick either-or questions about how you date, argue, and commit. Each answer votes across the four Myers-Briggs dimensions, and the winning combination gives you one of 16 love archetypes — with how you show love, what you need, your blind spot, the types you click with, and one thing to try this week. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is an MBTI love test?',
            a: 'It applies the four Myers-Briggs dimensions — Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving — to romantic behaviour specifically: how you flirt, what makes you feel loved, how you handle conflict, and how quickly you want to define things. The result is a love archetype rather than a general personality profile.',
          },
          {
            q: 'Which MBTI types are most compatible?',
            a: 'Popular pairings such as INFJ with ENFP or INTJ with ENTP pair depth with momentum, but compatibility guides broadly agree that matching letters matters far less than understanding each other\'s communication style, emotional needs, and conflict patterns — any two types can work with that awareness (background: https://www.mbtiquiz.com/blog/personality-types-love-compatibility-2026).',
          },
          {
            q: 'Is the MBTI love test scientifically accurate?',
            a: 'Treat it as a structured way to reflect, not a diagnosis. The Myers-Briggs framework is popular and useful for language and self-awareness, but it is not a clinical instrument, and its type categories are debated among researchers. The value is in what the result helps you notice about your own patterns.',
          },
          {
            q: 'Should my partner take it too?',
            a: 'It works well as a pair. Taking it separately and swapping results usually surfaces where your needs differ — for example one of you wanting to define things early while the other prefers to let it unfold — which is an easier conversation to have with a name attached.',
          },
          {
            q: 'How long does the MBTI love test take, and is it free?',
            a: 'About three minutes for the 20 questions, and it is free with a full archetype write-up — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'zfxrszr6',
      slug: 'parenting-style',
      order: 20,
      alsoIn: ['child-development-coaching'],
      seo: {
        title: 'Parenting Style Quiz — What Kind of Parent Are You?',
        description:
          'A free parenting style quiz revealing your approach, its strengths and blind spots, and one way to grow as a parent. Just 3 minutes, no signup.',
        overview:
          'There is no perfect parent — just different styles, each with its own strengths and blind spots. This quick quiz reveals your parenting style, what it does well, where it can trip you up, and one way to grow.',
        whoFor:
          'Parents and caregivers who want to understand their instincts, play to their strengths, and grow in the areas that matter most to their kids.',
        whatYouLearn: [
          'Your parenting style',
          'The strengths it brings to your kids',
          'Its blind spots to watch for',
          'One concrete way to grow',
        ],
        sampleQuestions: [
          'How do you respond when your child breaks a rule?',
          'How much do you involve your child in decisions that affect them?',
          'Day to day, what comes more naturally — warmth or structure?',
          'How do you handle it when your child pushes back?',
        ],
        howItWorks:
          'You answer a short set of questions about how you set rules, show warmth, and respond when your child pushes back. Your answers reveal your parenting style, its strengths and blind spots, and one concrete way to grow. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the main parenting styles?',
            a: 'Research commonly describes styles along dimensions of warmth and structure — for example authoritative (high warmth, high structure), authoritarian, permissive, and uninvolved. Most parents lean toward one, and each has strengths and trade-offs.',
          },
          {
            q: 'Is there a best parenting style?',
            a: 'Balancing warmth with clear, consistent structure tends to serve kids well, but no style is perfect and context matters. This quiz focuses on understanding your natural style and one practical way to grow.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
