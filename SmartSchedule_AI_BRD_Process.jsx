import { useState } from "react";

const steps = [
  {
    id: 1,
    phase: "Setup",
    title: "Define the product & context",
    description: "Before touching any AI tool, I defined the problem space, target customer, and domain constraints. This is the BA work that happens BEFORE AI gets involved.",
    baWork: `PRODUCT: SmartSchedule AI — Intelligent Patient Scheduling Platform
DOMAIN: Healthcare (mid-size US hospital systems, 200–500 beds)
TARGET USER: Hospital operations directors

BUSINESS PROBLEM RESEARCH (done manually):
• US hospitals lose ~$150B/year to scheduling inefficiencies (MGMA data)
• Average no-show rate in outpatient settings: 18–25%
• Average provider utilization: 65–72%
• Average patient wait time: 20–28 minutes
• Most scheduling systems are rule-based, no predictive capability

KEY STAKEHOLDERS IDENTIFIED:
VP of Operations, CMO, Scheduling Coordinators, IT/CIO, 
Physicians, Patients, Compliance/Legal

REGULATORY CONTEXT:
HIPAA, HITECH, state-specific health data privacy laws
EHR Integration: Epic & Cerner (HL7 FHIR R4 APIs)

WHY THIS PRODUCT?
→ I chose healthcare because it matches my Verto Health experience
→ AI scheduling is a real, growing market segment
→ It lets me showcase HIPAA awareness and clinical workflow knowledge`,
    prompt: null,
    aiOutput: null,
    humanEdit: null,
    lesson: "Key takeaway: The best AI-assisted BA work starts with deep context-setting BEFORE you write a single prompt. I spent 45 minutes researching industry benchmarks and defining the problem space. This investment pays off in every prompt that follows."
  },
  {
    id: 2,
    phase: "Prompt Engineering",
    title: "Executive summary — first prompt attempt",
    description: "My first prompt was too vague. The AI output was generic and could have been about any SaaS product. This is a common mistake — I'm showing it intentionally.",
    baWork: null,
    prompt: `Write an executive summary for a BRD for an AI patient scheduling platform.`,
    aiOutput: `Healthcare organizations face significant challenges with patient scheduling. An AI-powered scheduling platform can help hospitals improve their operations by using advanced algorithms to optimize appointment management. The solution will leverage artificial intelligence to enhance scheduling efficiency, reduce wait times, and improve patient satisfaction. The platform will integrate with existing hospital systems and provide real-time analytics for decision-making.

Implementation is expected to take approximately 4 months and deliver significant ROI through improved operational efficiency.`,
    humanEdit: null,
    lesson: `WHAT WENT WRONG:
• Too vague — "significant challenges" and "significant ROI" say nothing
• No specific numbers, metrics, or benchmarks
• Could describe ANY scheduling tool, not an AI-specific one
• No mention of the target customer or hospital size
• Missing: compliance, integration specifics, timeline details

LESSON: Generic prompts produce generic outputs. The AI needs CONTEXT, CONSTRAINTS, and SPECIFICITY to generate useful BA content.`
  },
  {
    id: 3,
    phase: "Prompt Engineering",
    title: "Executive summary — refined prompt",
    description: "I rewrote the prompt with specific context, constraints, persona, and format requirements. The difference in output quality is dramatic.",
    baWork: null,
    prompt: `You are a senior business analyst working on a healthcare SaaS product. Write an executive summary for a BRD for "SmartSchedule AI" — an AI-powered patient scheduling platform designed for mid-size US hospital systems (200-500 beds). 

The platform uses machine learning to predict no-shows, optimize provider schedules, and reduce patient wait times. The target customer is hospital operations directors who currently lose $150K+ annually to scheduling inefficiencies.

Requirements:
- Include the business problem with specific industry data
- Describe the proposed solution with AI-specific capabilities
- State expected ROI with measurable targets
- Include implementation timeline estimate
- Mention HIPAA compliance requirement
- Keep it to 2 paragraphs, max 150 words
- Use professional BA language, not marketing speak`,
    aiOutput: `US hospitals lose an estimated $150 billion annually due to scheduling inefficiencies, including patient no-shows, underutilized provider slots, and excessive wait times. For mid-size hospital systems with 200-500 beds, this translates to over $150,000 in lost revenue per facility each year. Current scheduling systems rely on static rules and manual processes that cannot adapt to real-time changes in patient behavior, provider availability, or clinical urgency.

SmartSchedule AI is a cloud-based, HIPAA-compliant scheduling platform that leverages machine learning to predict no-show risk, dynamically optimize provider calendars, and intelligently match patients to available slots based on clinical priority and historical patterns. The platform is expected to reduce no-show rates by 30%, improve provider utilization by 20%, and decrease average patient wait times by 40%. Implementation timeline is 16 weeks from contract signing to full deployment across all departments.`,
    humanEdit: `Mid-size US hospital systems (200–500 beds) lose an estimated $150,000–$300,000 annually per facility due to scheduling inefficiencies, including patient no-shows averaging 18–25% of appointments, underutilized provider slots, and excessive patient wait times exceeding 20 minutes on average. Current scheduling systems rely on static rule-based logic and manual coordinator intervention, making them unable to adapt to real-time fluctuations in patient demand, provider availability, or clinical urgency.

SmartSchedule AI is a cloud-based, HIPAA-compliant intelligent scheduling platform that uses predictive machine learning models to forecast no-show probability per appointment, dynamically rebalance provider calendars, and match patients to optimal slots based on clinical priority, travel distance, and historical attendance patterns. Target outcomes include a 25–30% reduction in no-show rates, 15–20% improvement in provider utilization, and 35–40% reduction in average patient wait times. Estimated implementation: 14–18 weeks from contract to full deployment across all clinical departments.`,
    lesson: `MY EDITS AND WHY:

1. ADDED SPECIFIC BENCHMARKS: "18–25% no-show rate" and "20 minutes wait time" — these come from MGMA and published healthcare data. AI gave vague language; I grounded it in real numbers.

2. CHANGED EXACT FIGURES TO RANGES: "30%" became "25–30%" — in a real BRD, exact predictions are a red flag. Ranges show professional maturity and account for implementation variability.

3. ADDED PATIENT-FACING FACTORS: "travel distance" and "historical attendance patterns" — the AI focused on the hospital's perspective. I added the patient dimension because that's what actually drives no-shows.

4. ADJUSTED TIMELINE TO A RANGE: "16 weeks" became "14–18 weeks" — no two hospital implementations are identical. A range is more credible.

5. ADDED "$300,000" UPPER BOUND: The AI only used the lower number from my prompt. Real losses vary widely by facility size.

TIME: Prompt iteration took 10 min. AI drafting took 30 sec. Human editing took 15 min. Traditional method: 2–3 hours.`
  },
  {
    id: 4,
    phase: "Requirements",
    title: "Functional requirements generation",
    description: "I used AI to generate the initial set of functional requirements, then heavily edited for testability and healthcare-specific nuance.",
    baWork: null,
    prompt: `Generate 8 functional requirements for SmartSchedule AI, a healthcare patient scheduling platform with ML-based no-show prediction. 

For each requirement, provide:
- Requirement ID (FR-01 through FR-08)
- Description (1-2 sentences, specific and testable)
- Priority (Must Have / Should Have / Could Have — MoSCoW)
- Acceptance Criteria (must be measurable and testable)
- Dependencies (other requirements or systems needed)

Focus on: no-show prediction, schedule optimization, patient self-scheduling, EHR integration, automated reminders, waitlist backfill, analytics dashboard, and provider preference settings.

IMPORTANT: Acceptance criteria must include specific numeric thresholds, not vague language like "should be fast" or "should be accurate."`,
    aiOutput: `FR-01: No-Show Prediction Engine
Description: System shall predict no-show probability for each scheduled appointment using ML models.
Priority: Must Have
Acceptance Criteria: Prediction accuracy >= 80% on validation set; predictions available in real-time.
Dependencies: Historical scheduling data; patient demographics from EHR.

FR-02: Dynamic Schedule Optimization  
Description: System shall generate optimized daily provider schedules based on demand predictions.
Priority: Must Have
Acceptance Criteria: Optimized schedules reduce idle time by >= 20% vs. manual scheduling.
Dependencies: FR-01; provider availability data.

[...continued for FR-03 through FR-08 with similar structure...]`,
    humanEdit: `FR-01: No-Show Prediction Engine
Description: System shall predict no-show probability for each scheduled appointment using ML models TRAINED ON MINIMUM 18 MONTHS of historical appointment data, patient demographics, and behavioral signals.
Priority: Must Have
Acceptance Criteria: Prediction accuracy >= 75% AUC-ROC on held-out validation set; predictions generated within 2 seconds per appointment; model retrained monthly.
Dependencies: 18+ months historical scheduling data; EHR integration for patient demographics (FR-06).

WHAT I CHANGED:
→ Lowered accuracy from 80% to 75% AUC-ROC — 80% is unrealistic for healthcare no-show prediction with real-world data quality issues. I specified AUC-ROC as the metric because "accuracy" is misleading for imbalanced datasets (which no-show data always is).
→ Added "2 seconds per appointment" — the AI said "real-time" which is not a testable acceptance criterion.
→ Added "model retrained monthly" — ML models degrade over time. The AI missed this critical operational requirement.
→ Specified "18 months" minimum data — not all hospitals have clean historical data. This sets a clear prerequisite.

FR-06: EHR Integration
Description: System shall integrate bidirectionally with Epic and Cerner EHR systems via HL7 FHIR R4 APIs.
Priority: Must Have  
Acceptance Criteria: Appointment CRUD operations sync within 30 seconds; zero data loss in 30-day integration test; supports FHIR R4 Patient, Appointment, Schedule, and Slot resources.
Dependencies: EHR FHIR endpoints active; API credentials and rate limits agreed with EHR vendor; HIPAA BAA executed with integration middleware provider.

WHAT I CHANGED:
→ AI wrote "integrate with EHR systems" — I specified Epic and Cerner by name because those are 80%+ of the market.
→ Added specific FHIR resource types — this shows I understand the technical integration, not just the concept.
→ Added "HIPAA BAA executed" dependency — the AI consistently underspecified compliance requirements.`,
    lesson: `KEY INSIGHT: AI is great at generating the STRUCTURE of requirements (ID, description, criteria format) but weak at:

1. REALISTIC THRESHOLDS — AI defaults to round, optimistic numbers. Real BAs know what's achievable.
2. TESTABILITY — "real-time" is not testable. "Within 2 seconds" is.  
3. OPERATIONAL REQUIREMENTS — AI focuses on the feature. BAs think about what happens AFTER launch (model retraining, data quality, compliance renewals).
4. DEPENDENCY CHAINS — AI listed surface-level dependencies. I added the regulatory dependencies that could block the entire project.

Time comparison:
• Traditional: 8–12 hours for 8 detailed functional requirements
• AI-assisted: 2–3 hours (including iteration and editing)
• Time saved: ~65%`
  },
  {
    id: 5,
    phase: "Stakeholders",
    title: "Stakeholder analysis with AI-simulated interviews",
    description: "I used AI to simulate stakeholder perspectives, then validated against my real healthcare experience at Verto Health.",
    baWork: null,
    prompt: `You are helping me prepare for stakeholder interviews for SmartSchedule AI (healthcare scheduling platform). 

Simulate a brief interview response from each of these stakeholders when asked: "What are your top 3 concerns about implementing an AI scheduling system?"

Stakeholders:
1. VP of Operations (budget holder)
2. Chief Medical Officer  
3. Lead Scheduling Coordinator (20 years experience)
4. CIO / IT Director
5. A patient (65-year-old, not tech-savvy)

For each, respond IN CHARACTER with realistic concerns based on their role and perspective. Include emotional undertones, not just rational points.`,
    aiOutput: `VP OF OPERATIONS:
"Look, I'm all for innovation, but I need hard numbers. What's the implementation cost, what's the payback period, and how long until we see actual revenue impact? I've been burned before by vendors who promise the moon. My second concern is disruption — we can't afford scheduling chaos during a transition. And third, I need to know this actually works with our Epic system, not just in a demo."

LEAD SCHEDULING COORDINATOR:
"Honestly? I'm worried about my job. I've been doing this for 20 years and now you're telling me a computer can do it better? My second concern is that the AI won't understand the things I just KNOW — like that Dr. Martinez always runs 15 minutes late on Tuesdays, or that Mrs. Johnson needs the first appointment because of her dialysis schedule. And third, what happens when the system goes down? Someone still needs to know how to schedule the old way."

[...continued for other stakeholders...]`,
    humanEdit: `WHAT THE AI GOT RIGHT:
→ The scheduling coordinator's emotional response about job security — this is the #1 change management risk I've seen in real healthcare implementations
→ The VP's focus on ROI and vendor skepticism — operations leaders are metrics-driven
→ The patient's concern about technology — age-related digital literacy gaps are real

WHAT I ADDED FROM MY VERTO HEALTH EXPERIENCE:
→ The coordinator also cares about SHIFT SCHEDULING — AI missed that coordinators manage complex shift patterns, not just appointment slots
→ The CMO's #1 concern is actually PATIENT SAFETY, not efficiency — if the AI schedules a high-risk patient into a slot without proper prep time, that's a liability issue
→ The CIO is worried about DATA MIGRATION, not just integration — moving from a legacy system is a 6-month project itself
→ Added COMPLIANCE OFFICER as a missing stakeholder — the AI didn't include them, but in healthcare, legal/compliance is always at the table

HOW I USED THIS:
These simulated interviews helped me PREPARE my stakeholder analysis matrix and anticipate objections before writing the BRD. In a real project, I'd use these to draft my actual interview questions.`,
    lesson: `AI INTERVIEW SIMULATION IS POWERFUL BUT INCOMPLETE:

The AI captured about 70% of realistic stakeholder concerns. The missing 30% came from my domain experience — things like shift scheduling complexity, patient safety liability, and data migration reality that only someone who has worked in healthcare would flag.

THIS IS THE BA VALUE PROPOSITION: AI can simulate conversations, but it can't replace the pattern recognition you build from actually sitting in rooms with these stakeholders.`
  },
  {
    id: 6,
    phase: "User Stories",
    title: "User story generation & refinement",
    description: "AI generated structurally correct user stories, but the acceptance criteria needed significant tightening to be truly testable.",
    baWork: null,
    prompt: `Generate 6 user stories for SmartSchedule AI using the format:
As a [specific role], I want [specific action with context] so that [measurable business benefit].

Include 3 testable acceptance criteria for each.

Cover these perspectives:
1. Operations director — wants to see ROI data
2. Scheduling coordinator — wants AI to help, not replace
3. Physician — wants schedule control  
4. Patient — wants easy self-scheduling
5. Patient — wants smart reminders
6. Compliance officer — wants AI audit trails

CRITICAL: Every acceptance criterion must be binary (pass/fail testable). No subjective language like "easy to use" or "user-friendly."`,
    aiOutput: `US-01: Operations Director — No-Show Dashboard
As an operations director, I want to view a real-time dashboard of no-show rates by department so that I can track the AI system's impact on scheduling efficiency.

Acceptance Criteria:
• Dashboard displays daily, weekly, and monthly no-show rates
• Data can be filtered by department
• Report can be exported to PDF`,
    humanEdit: `US-01: Operations Director — No-Show Dashboard
As an operations director, I want to view a real-time dashboard of predicted vs. actual no-show rates by department so that I can identify problem areas and quantify the ROI of the scheduling AI to hospital leadership.

Acceptance Criteria:
• Dashboard displays daily, weekly, and monthly no-show rates WITH department-level drill-down (not just filtering)
• COMPARISON VIEW shows pre-AI vs. post-AI metrics side by side (this is how you prove ROI)
• Data exportable to PDF AND Excel for board presentations (executives always want Excel)

WHAT I CHANGED:
→ Added "predicted vs. actual" — this is the key metric for an AI system. Just showing no-show rates doesn't prove the AI is working.
→ Changed "filtered by department" to "department-level drill-down" — drill-down implies hierarchical navigation, which is what an ops director actually needs.
→ Added "pre-AI vs. post-AI comparison" — the AI missed the entire point: the dashboard needs to PROVE the AI is delivering ROI.
→ Added Excel export — anyone who has presented to a hospital board knows they want the raw data.`,
    lesson: `PATTERN I NOTICED: AI generates user stories that are structurally correct but lack the "so what" factor. The AI's acceptance criteria answer "does it work?" but not "does it solve the business problem?"

A good BA always asks: "If all acceptance criteria pass, will the stakeholder actually be satisfied?" That's the test the AI consistently fails.`
  },
  {
    id: 7,
    phase: "Reflection",
    title: "Final analysis — where AI helps vs. where it doesn't",
    description: "Honest assessment of the AI-assisted BRD process after completing the full document.",
    baWork: `TOTAL TIME COMPARISON:

Traditional BRD Creation:        25–40 hours
AI-Assisted BRD Creation:       8–12 hours  
Time Saved:                      60–70%

BREAKDOWN BY SECTION:
Executive Summary:     2–3 hrs → 30 min (AI draft + human edit)
Business Objectives:   2–3 hrs → 45 min
Scope Definition:      2–3 hrs → 1 hr (mostly manual — scope is judgment-heavy)
Stakeholder Analysis:  3–4 hrs → 1.5 hrs
Functional Reqs:       8–12 hrs → 2–3 hrs
User Stories:          4–6 hrs → 1–2 hrs
Risk Assessment:       3–4 hrs → 1 hr
Success Metrics:       1–2 hrs → 30 min`,
    prompt: null,
    aiOutput: null,
    humanEdit: null,
    lesson: `WHERE AI EXCELLED:
✅ Generating initial structure and boilerplate — saved hours
✅ Producing comprehensive lists (stakeholders, risks) that I refined
✅ Creating consistent user story formatting across personas
✅ Brainstorming requirements I might have missed (AI explainability NFR)
✅ Simulating stakeholder perspectives for interview prep

WHERE HUMAN JUDGMENT WAS IRREPLACEABLE:
❌ Realistic numeric thresholds (AI defaults to optimistic round numbers)
❌ Healthcare regulatory nuance (HIPAA details, state laws, BAA requirements)
❌ Stakeholder politics and change management empathy
❌ Testable acceptance criteria (AI writes "should be fast" not "within 2 seconds")
❌ Operational post-launch requirements (model retraining, data quality monitoring)
❌ Patient-facing factors AI overlooked (travel distance, digital literacy, cultural needs)

MY CONCLUSION:
AI does not replace the Business Analyst — it amplifies them. The BA's domain expertise, stakeholder empathy, and critical judgment remain irreplaceable. AI simply makes us faster at the parts that used to slow us down.

The real skill isn't using AI. It's knowing WHEN to trust it and WHEN to override it.`
  }
];

const phaseColors = {
  Setup: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-800", badge: "bg-amber-100 text-amber-700" },
  "Prompt Engineering": { bg: "bg-purple-50", border: "border-purple-300", text: "text-purple-800", badge: "bg-purple-100 text-purple-700" },
  Requirements: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-800", badge: "bg-blue-100 text-blue-700" },
  Stakeholders: { bg: "bg-teal-50", border: "border-teal-300", text: "text-teal-800", badge: "bg-teal-100 text-teal-700" },
  "User Stories": { bg: "bg-green-50", border: "border-green-300", text: "text-green-800", badge: "bg-green-100 text-green-700" },
  Reflection: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-800", badge: "bg-rose-100 text-rose-700" },
};

function CodeBlock({ label, color, children }) {
  const colors = {
    purple: "bg-purple-50 border-purple-300 text-purple-900",
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    green: "bg-green-50 border-green-300 text-green-900",
    amber: "bg-amber-50 border-amber-300 text-amber-900",
    rose: "bg-rose-50 border-rose-300 text-rose-900",
    gray: "bg-gray-50 border-gray-300 text-gray-900",
  };
  const labelColors = {
    purple: "bg-purple-200 text-purple-800",
    blue: "bg-blue-200 text-blue-800",
    green: "bg-green-200 text-green-800",
    amber: "bg-amber-200 text-amber-800",
    rose: "bg-rose-200 text-rose-800",
    gray: "bg-gray-200 text-gray-800",
  };
  return (
    <div className={`rounded-lg border-2 ${colors[color]} p-4 my-3`}>
      <div className={`inline-block text-xs font-bold px-2 py-1 rounded mb-2 ${labelColors[color]}`}>{label}</div>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">{children}</pre>
    </div>
  );
}

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const pc = phaseColors[step.phase] || phaseColors.Setup;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 uppercase tracking-wide">Portfolio project</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">AI-Enhanced BRD: SmartSchedule AI</h1>
        <p className="text-sm text-gray-600 mt-1">Healthcare patient scheduling platform — built with AI as my co-pilot</p>
        <p className="text-xs text-gray-400 mt-1">By Varshini Maskapuri | AI-Focused Business Analyst</p>
      </div>

      <div className="flex gap-1 mb-4 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(i)}
            className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
              i === activeStep
                ? "bg-gray-900 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="block">{s.id}.</span>
            <span className="block max-w-20 truncate">{s.title.split("—")[0].trim()}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className={`p-4 rounded-t-xl ${pc.bg} border-b ${pc.border}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${pc.badge}`}>{step.phase}</span>
            <span className="text-xs text-gray-500">Step {step.id} of {steps.length}</span>
          </div>
          <h2 className={`text-lg font-bold ${pc.text}`}>{step.title}</h2>
          <p className="text-sm text-gray-700 mt-1">{step.description}</p>
        </div>

        <div className="p-4 space-y-3">
          {step.baWork && (
            <CodeBlock label="BA WORK (Manual)" color="amber">{step.baWork}</CodeBlock>
          )}

          {step.prompt && (
            <CodeBlock label="MY AI PROMPT" color="purple">{step.prompt}</CodeBlock>
          )}

          {step.aiOutput && (
            <CodeBlock label="RAW AI OUTPUT" color="blue">{step.aiOutput}</CodeBlock>
          )}

          {step.humanEdit && (
            <CodeBlock label="MY HUMAN-EDITED VERSION + REASONING" color="green">{step.humanEdit}</CodeBlock>
          )}

          {step.lesson && (
            <CodeBlock label="KEY LESSON" color="rose">{step.lesson}</CodeBlock>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-sm text-gray-400 self-center">{activeStep + 1} / {steps.length}</span>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next step
        </button>
      </div>
    </div>
  );
}
