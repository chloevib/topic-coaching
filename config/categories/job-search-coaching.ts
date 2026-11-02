import type { CategoryFile } from '../schema'

/** niche · 求职教练 */
export const jobSearchCoaching: CategoryFile = {
  category: {
    slug: 'job-search-coaching',
    name: 'Job Search Coach',
    title: 'Job Search Coaching Quizzes & Interview Assessments',
    description:
      'Free job search coaching quizzes and interview assessments — check your interview readiness, senior-level positioning, and readiness to change roles.',
    emoji: '📄',
    heroCopy: 'Find the stage of your job search that is quietly costing you the offer.',
    order: 11,
    parent: 'career-business-leadership',
    intro: [
      'Job search coaching works on the search itself rather than on your career direction. A job search coach looks at the whole funnel — how your experience is framed, which roles you target, how you answer in the room, and how you follow up — and finds the specific stage where good candidates lose good jobs. That stage is rarely the one people assume.',
      'The numbers explain why the search feels harder than it used to. A single posting now draws around 250 applications, and analyses of recruiting data put the application-to-interview rate at roughly 2–3%, down sharply from a decade ago. Once you reach the interview stage the odds change completely: about one interview process in four ends in an offer. So the search has two very different problems — getting seen, and converting the conversations you already have.',
      'These free job search quizzes are a fast way to find out which of the two is yours. The interview readiness scorecard rates preparation, answers, presence and follow-up. The senior interview scorecard is for experienced candidates who keep reaching final rounds without the offer, and measures positioning rather than preparation. And if you are still deciding whether to search at all, the career change readiness scorecard is the place to start. Each takes a few minutes, is free, and ends with a score and a first step.',
    ],
    faq: [
      {
        q: 'What does a job search coach do?',
        a: 'A job search coach works on the mechanics of getting hired: targeting the right roles, framing your experience so it reads as relevant, preparing answers and examples, interviewing well, negotiating, and following up. It is narrower and more tactical than career coaching, which deals with direction and long-term choices.',
      },
      {
        q: 'How many applications does it take to get an offer?',
        a: 'It varies a lot by level and industry, but published 2026 benchmarks put it somewhere between roughly 30 and 200 applications per offer. A large share of that gap comes down to targeting: tailored applications convert to interviews at several times the rate of generic ones, so volume is usually the wrong lever to pull first.',
      },
      {
        q: 'Why do I get interviews but no offers?',
        a: 'Because interviews and applications reward different things. Applications reward relevance and keyword fit; interviews reward judgement, impact and memorability. Experienced candidates in particular tend to describe what they were responsible for rather than what they decided — which reads as competent but replaceable. The senior interview scorecard on this page is built to spot exactly that pattern.',
      },
      {
        q: 'How long does a senior or executive job search take?',
        a: 'Longer than most people plan for. Industry estimates for 2026 put VP and SVP searches at roughly four to seven months and C-suite or board-facing searches at nine to twelve months or more, with three to six interview rounds spread over four to twelve weeks. Preparing for a long search changes how you pace applications and follow-up.',
      },
      {
        q: 'Are these job search quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes a few minutes, and gives you a personalized score and breakdown with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'pr6gveac',
      slug: 'senior-interview-scorecard',
      order: 1,
      alsoIn: ['career-coaching', 'executive-coaching'],
      seo: {
        title: 'Senior Interview Scorecard — Do You Interview at Your Level?',
        description:
          'A free 5-minute senior interview scorecard for experienced candidates — twelve situations, four dimensions, and the one habit costing you the offer.',
        overview:
          'Experienced candidates rarely lose offers on competence. They lose them on how the competence comes across: answering at the wrong level, describing responsibilities instead of decisions, sounding credible without being compelling. This scorecard puts twelve realistic interview situations in front of you — none with an obviously right answer — and scores which option you reach for first.',
        whoFor:
          'Senior individual contributors, managers, directors and executives who keep reaching final rounds without the offer, or who walk out thinking "I nailed it" and never hear back.',
        whatYouLearn: [
          'Your overall score out of 120 and which of four senior-interview bands you land in',
          'How you rate on positioning & relevance, impact & commercial framing, decision narrative, and persuasion under pressure',
          'Whether you are describing duties or decisions — the single biggest tell of level in an interview',
          'The one habit to change before your next interview, rather than a list of everything to rehearse',
        ],
        sampleQuestions: [
          '"Tell me about a project you owned." Your opening line is closest to which of these?',
          'In "tell me about yourself", how long before you reach something directly relevant to this specific role?',
          'When an outcome is genuinely hard to quantify, what do you do?',
          'An interviewer pushes back on something you just said — what is your first move?',
        ],
        howItWorks:
          'You start by naming the level you are targeting, so your result is read against the right bar. Then twelve scenario questions are scored across four dimensions — positioning and relevance, impact and commercial framing, decision narrative, and persuasion under pressure — and totalled into a score out of 120. Your result places you in one of four bands, shows a radar of the four dimensions, and names the lowest one as your prep plan. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'How is this different from a general interview readiness quiz?',
            a: 'A readiness scorecard measures preparation — research, structured answers, presence, follow-up. This one assumes you already do those things and measures positioning instead: whether you answer at the level you are applying for. If you are early in your career or have not interviewed in a while, start with the interview readiness scorecard; if you are senior and keep losing at the final stage, start here.',
          },
          {
            q: 'Why do senior candidates get rejected after strong interviews?',
            a: 'Usually because nothing they said was wrong. Clearing the bar without giving anyone a reason to argue for you is the most common senior failure mode, and it typically traces to one habit: too much setup before the point, impact stated so carefully it sounds small, or a story about responsibility rather than a trade-off. The dimension breakdown is designed to show which one it is.',
          },
          {
            q: 'How long does a senior job search usually take?',
            a: 'Industry estimates for 2026 put VP and SVP searches at around four to seven months and C-suite or board-facing searches at nine to twelve months, with three to six rounds over four to twelve weeks. Because each round is expensive in time, how you come across in a single conversation matters more at this level than at any other.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About five minutes for the twelve situations, and it is free with a full dimension breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'ts3qebt3',
      slug: 'ai-resume-review',
      order: 2,
      alsoIn: ['career-coaching'],
      seo: {
        title: 'Free AI Resume Review: Will Your Resume Get Past the Bots?',
        description:
          'Answer 16 questions or upload your resume for a free AI resume review: a strength rating, a 6-area breakdown, and a rewritten summary and bullets.',
        overview:
          'Worried an applicant tracking system is throwing your resume away? In a recruiter survey by Enhancv, 23 of 25 U.S. recruiters said their systems do not auto-reject resumes on formatting or content — what usually gets a resume skipped is volume, timing and a weak match that a busy human spots in seconds. This free AI resume review asks 16 questions about the job you want and your resume today (upload it for a line-by-line read) and returns a Resume Strength rating, a six-area breakdown, the doubts a recruiter may have about you, and a rewritten summary and bullet points you can use immediately.',
        whoFor:
          'Job seekers at any stage — new graduates, mid-career professionals, career changers and people returning after a break — especially anyone sending applications and hearing nothing back. Career coaches and resume writers can use it as a fast first-pass audit.',
        whatYouLearn: [
          'A Resume Strength rating from 1 to 10 with a clear verdict',
          'A breakdown across targeting, summary, impact, readability, career story and tailoring',
          'What “getting past the ATS” really means — and what actually gets resumes skipped',
          'The doubts a recruiter may have about your background, and how to answer them',
          'A rewritten summary and two or three rewritten bullet points ready to paste in',
        ],
        sampleQuestions: [
          'What job titles are you applying for, and which industry are you targeting?',
          'How has your job search gone in the last three months — few replies, interviews but no offers, or offers you want to upgrade?',
          'How many of your bullet points include numbers or measurable results?',
          'How often do you tailor your resume to a specific job ad?',
          'Is anything in your background you worry a recruiter will question, such as a gap, a career change or several short jobs?',
        ],
        howItWorks:
          'The quiz has three parts: the job you want, your resume today, and your story and strengths. You paste in real lines — your summary, a few recent bullet points, key requirements from a job ad you would love to land — and can optionally upload your resume as a PDF or Word file. An AI then reviews it the way a recruiter would, judged against your target role rather than in the abstract, and writes your report with specific rewrites. The recruiter data cited above comes from a small survey published by a resume-tool company (source: Enhancv, https://enhancv.com/blog/does-ats-reject-resumes/), so treat it as directional; its core point — that relevance and tailoring matter more than ATS-proof formatting tricks — matches standard recruiter advice.',
        faq: [
          {
            q: 'Do applicant tracking systems automatically reject resumes?',
            a: 'Far less often than the viral “75% rejected by bots” claim suggests. Most recruiters say their systems store and rank applications while humans make the decisions; automatic rejections are usually tied to hard requirements such as work authorisation, location or a required licence answered in knockout questions. A clear, tailored, relevant resume matters far more than formatting tricks.',
          },
          {
            q: 'Is the AI resume review free?',
            a: 'Yes. The quiz and your personalized review, including the rewritten summary and bullets, are free and need no signup to start. It takes about six minutes.',
          },
          {
            q: 'Do I need to upload my resume?',
            a: 'No, but it helps. Pasting your summary and a few bullet points is enough for a useful review; uploading the full file lets the AI give line-by-line feedback.',
          },
          {
            q: 'Why am I applying to lots of jobs but getting no interviews?',
            a: 'The most common reasons are a weak match between your resume and the role, untailored applications, and bullet points that list duties instead of results. The review scores targeting, impact and tailoring separately so you can see which one is costing you replies.',
          },
        ],
      },
    },
  ],
}
