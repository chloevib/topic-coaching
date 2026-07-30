import type { CategoryFile } from '../schema'

/**
 * niche · 领导力教练（draft）
 * 现有 2 道题（leadership-style / leadership-scorecard），未达 ≥3 开页门槛。
 * 补齐第 3 道（如 "Are You Ready to Lead? Leadership Readiness Scorecard"）后去掉 draft 即促级。
 */
export const leadershipCoaching: CategoryFile = {
  category: {
    slug: 'leadership-coaching',
    name: 'Leadership Coaching',
    title: 'Leadership Coaching Quizzes & Assessments',
    description:
      'Discover your leadership style and how ready you are to lead with free leadership-coaching assessments.',
    emoji: '🧭',
    heroCopy: 'Great leaders are made. See your natural style and where to grow next.',
    order: 3,
    parent: 'career-business-leadership',
    intro: [
      'Leadership coaching helps you lead on purpose instead of by default. Rather than copying a template, you get clear on how you naturally set direction, make decisions, and bring people with you — then build the specific habits that turn that natural style into consistent, trusted leadership.',
      'These free assessments are a fast way to see yourself as your team sees you. One names your leadership archetype and its built-in strengths and blind spots; another scores your day-to-day habits across vision, communication, empowering others, and decision-making. That self-awareness matters because managers account for an estimated 70% of the variance in team engagement (Gallup, State of the American Manager), so small shifts in how you lead ripple across everyone you work with.',
      'Not sure where to begin? Take the leadership style quiz first to understand your default, then use the leadership scorecard to pinpoint the single pillar worth developing next. Each takes about two minutes, is free, and ends with a personalized result you can act on.',
    ],
    faq: [
      {
        q: 'What is leadership coaching?',
        a: 'Leadership coaching is a structured process that helps you lead more effectively — clarifying your natural style, strengthening habits like vision-setting and clear communication, and working through your blind spots. It focuses on how you actually lead day to day rather than abstract theory.',
      },
      {
        q: 'What can a leadership quiz tell me?',
        a: 'A good leadership assessment shows you two things: your dominant style, with the strengths and blind spots that come with it, and how you rate across the core habits of effective leadership — vision, communication, empowering others, and decision-making — so you know exactly where to grow.',
      },
      {
        q: 'Is there one best leadership style?',
        a: 'No. No single style wins in every situation; the most effective leaders know their default, understand its blind spots, and flex to fit the moment. Self-awareness is the starting point, which is what these assessments are built to give you.',
      },
      {
        q: 'Are these leadership quizzes free?',
        a: 'Yes. Every assessment on this page is free and takes about two minutes, with a personalized result and no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '8dmhyvuu',
      slug: 'leadership-style',
      featured: true,
      order: 8,
      seo: {
        title: 'Leadership Style Quiz — What Kind of Leader Are You?',
        description:
          'Take this free leadership style quiz to reveal your leadership archetype, your core strengths and blind spots, and how to lead more effectively with your natural style. No signup.',
        overview:
          'What kind of leader are you, really? This quick quiz reveals your leadership archetype — your core strengths, your blind spots, and how to lead more effectively by working with your natural style instead of against it.',
        whoFor:
          'New and experienced managers, team leads, and founders who want a clear read on how they lead and where to grow.',
        whatYouLearn: [
          'Your leadership archetype',
          'The strengths you lead with',
          'The blind spots that can trip you up',
          'How to lead more effectively from your natural style',
        ],
        sampleQuestions: [
          'When your team hits a setback, is your first instinct to rally people around a vision, coach individuals through it, open it up for group input, or take charge and give clear orders?',
          'How do you most naturally motivate people — with an inspiring picture of the future, one-on-one development, shared ownership of decisions, or clear standards and accountability?',
          'When you delegate, do you hand over the outcome and step back, or stay close to guide the how?',
          'In a fast-moving crisis, do you slow down to build consensus or move decisively and explain later?',
        ],
        howItWorks:
          'You answer a short set of questions about how you set direction, make decisions, and work with people. Your answers are scored across the core leadership archetypes, and your result names your dominant style with its signature strengths, blind spots, and how to flex it to the situation. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a leadership style?',
            a: 'A leadership style is your characteristic way of setting direction, making decisions, and working with people — for example, visionary, coaching, democratic, or commanding. Most effective leaders know their default and flex it to fit the situation.',
          },
          {
            q: 'Is there a best leadership style?',
            a: 'No single style is best in every situation. The most effective leaders understand their natural style, its blind spots, and when to adapt. This quiz helps you start with that self-awareness.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'h2s7shhn',
      slug: 'leadership-scorecard',
      order: 9,
      seo: {
        title: 'Leadership Assessment — Rate Your Leadership Skills Free',
        description:
          'A free 2-minute leadership assessment scoring your vision, communication, empowerment, and decision-making — see your strongest and weakest pillar and where to grow. No signup.',
        overview:
          'Great leadership is a set of habits, not a personality. This 2-minute scorecard rates yours across vision, communication, empowering others, and decision-making, then shows your strongest and weakest pillar so you know exactly where to grow.',
        whoFor:
          'Leaders who want an honest, structured read on their effectiveness — and a specific area to work on next rather than vague feedback.',
        whatYouLearn: [
          'Your overall leadership score (a higher score means stronger leadership)',
          'How you rate across vision, communication, empowering others, and decision-making',
          'Your strongest pillar to lean on',
          'Your weakest pillar to develop next',
        ],
        sampleQuestions: [
          'How consistently do you set a clear direction your team actually understands and believes in?',
          'When you communicate expectations, how often do people leave knowing exactly what to do next?',
          'How much do you empower others to own decisions versus keeping the calls to yourself?',
          'When a hard decision comes up, how confidently and promptly do you make it?',
        ],
        howItWorks:
          'You rate a series of statements about your day-to-day leadership habits. Your answers are scored across four pillars — vision, communication, empowering others, and decision-making — and your result gives an overall score plus your strongest and weakest pillar so you know exactly where to focus. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Can leadership really be measured?',
            a: 'You cannot capture everything in a quiz, but effective leadership does come down to observable habits — casting a clear vision, communicating well, empowering others, and making sound decisions. This scorecard rates those pillars to show where you are strong and where to grow.',
          },
          {
            q: 'What does a higher score mean?',
            a: 'A higher score means stronger leadership habits overall. The more useful output is the breakdown — your strongest and weakest pillar — which tells you where to focus.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
