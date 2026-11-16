import type { CategoryFile } from '../schema'

/**
 * niche · 领导力教练（已上线）
 * 自有 3 道：leadership-style / leadership-scorecard / new-manager-readiness-scorecard（2026-11-17 收录），
 * 另有多道测评经 alsoIn 交叉归属。
 */
export const leadershipCoaching: CategoryFile = {
  category: {
    slug: 'leadership-coaching',
    name: 'Leadership Coaching',
    title: 'Leadership Coaching Quizzes & Assessments',
    description:
      'Free leadership assessments: discover your leadership style, score your leadership habits, and check how ready you are as a new or first-time manager.',
    emoji: '🧭',
    heroCopy: 'Great leaders are made. See your natural style and where to grow next.',
    order: 3,
    parent: 'career-business-leadership',
    intro: [
      'Leadership coaching helps you lead on purpose instead of by default. Rather than copying a template, you get clear on how you naturally set direction, make decisions, and bring people with you — then build the specific habits that turn that natural style into consistent, trusted leadership.',
      'These free assessments are a fast way to see yourself as your team sees you. One names your leadership archetype and its built-in strengths and blind spots; another scores your day-to-day habits across vision, communication, empowering others, and decision-making. That self-awareness matters because managers account for an estimated 70% of the variance in team engagement (Gallup, State of the American Manager), so small shifts in how you lead ripple across everyone you work with.',
      'Not sure where to begin? Take the leadership style quiz first to understand your default, then use the leadership scorecard to pinpoint the single pillar worth developing next. If you have stepped into management within the last two years, the new manager readiness scorecard checks what you actually did last week — delegation, one-on-ones, feedback and clarity — and names the one area to fix first. Each is free and ends with a personalized result you can act on.',
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
        q: 'I just became a manager. Which assessment should I take?',
        a: 'Start with the new manager readiness scorecard. It is built for people in their first two years of managing and measures recent behavior — how you delegate, run one-on-ones, give feedback and set expectations — rather than leadership theory. Ask your own manager to take it about you separately and compare the results.',
      },
      {
        q: 'Are these leadership quizzes free?',
        a: 'Yes. Every assessment on this page is free and takes two to four minutes, with a personalized result and no signup required to start.',
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
          'A free leadership style quiz revealing your leadership archetype, your core strengths and blind spots, and how to lead better with your natural style.',
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
      alsoIn: ['organization-development-coaching'],
      seo: {
        title: 'Leadership Assessment — Rate Your Leadership Skills Free',
        description:
          'A free 2-minute leadership assessment scoring your vision, communication, empowerment, and decision-making — see your strongest and weakest pillar.',
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
    {
      publicToken: 'xcqcxmfb',
      slug: 'new-manager-readiness-scorecard',
      order: 10,
      alsoIn: ['corporate-coaching', 'team-coaching'],
      seo: {
        title: 'New Manager Assessment — The New Manager Readiness Scorecard',
        description:
          'A free 12-question new manager assessment on delegation, one-on-ones, feedback, clarity and support. Get a score out of 120, a radar chart and your focus area.',
        overview:
          'Most new managers were promoted for being great at the work, then handed a team and no manual. This free new manager assessment asks what you actually did in the last few weeks — not what you believe about management — across four areas: Role Shift, One-on-Ones & Feedback, Expectations & Clarity, and Support & Self-Awareness. You get a score out of 120, a radar chart of your four areas and the one area to fix first.',
        whoFor:
          'First-time and recently promoted managers (under two years in the role), the leaders who manage them, and HR, L&D teams and coaches who support new managers through the transition from individual contributor.',
        whatYouLearn: [
          'Your new manager readiness score out of 120',
          'A radar chart across Role Shift, One-on-Ones & Feedback, Expectations & Clarity, and Support & Self-Awareness',
          'The single area to fix first for the biggest impact on your team',
          'Behavioral signs of the most common first-time manager traps, like doing the work yourself',
          'How your view compares with your own manager’s when you both take it separately',
        ],
        sampleQuestions: [
          'Think of the last task you handed to someone on your team. What actually happened?',
          'Looking at last week’s calendar, how much of your time went to your team rather than your own individual work?',
          'How are your one-on-ones with each direct report really going?',
          'If you asked each person on your team for their top priority this month, how many would give the answer you would?',
          'Is there a conversation you know you need to have with someone on your team and have been putting off?',
        ],
        howItWorks:
          'Twelve behavior-based questions each score 0, 3, 7 or 10 points depending on what you actually did, for a total out of 120 split across four dimensions and shown as a radar chart. A few optional context questions at the end do not affect your score. It works best used twice — once by the new manager and once by their own manager, separately — because the gap between the two views is often the most useful finding. Getting new managers right matters: Gallup’s 2026 State of the Global Workplace report found manager engagement fell from 27% to 22% in a single year, the steepest drop of any group. It takes about four minutes and is free. It is a self-assessment to start a conversation, not a performance review.',
        faq: [
          {
            q: 'What are the biggest challenges for first-time managers?',
            a: 'Letting go of the individual work that got them promoted, delegating outcomes rather than tasks, running useful one-on-ones, giving timely feedback, having difficult conversations early, and making sure everyone knows what “good” looks like. The scorecard measures each of these through recent behavior.',
          },
          {
            q: 'How long does it take to become an effective manager?',
            a: 'Most people need 12 to 18 months to feel confident, and the first six months shape the habits that stick. Regular one-on-ones, deliberate delegation and structured support — a programme, coach or peer group — shorten the curve considerably.',
          },
          {
            q: 'Why does the scorecard ask about behavior instead of beliefs?',
            a: 'Almost every new manager agrees that feedback and one-on-ones matter; far fewer are doing them consistently. Asking what you did last week gives a more honest and actionable picture than asking what you think.',
          },
          {
            q: 'Can HR or L&D teams use this with a cohort of new managers?',
            a: 'Yes. Ask each manager and their own leader to take it separately and enter the same company or team name, so results can be compared side by side and turned into development priorities for the cohort.',
          },
          {
            q: 'Is the new manager scorecard free?',
            a: 'Yes. It is free, takes about four minutes, and there is no signup required to start.',
          },
        ],
      },
    },
  ],
}
