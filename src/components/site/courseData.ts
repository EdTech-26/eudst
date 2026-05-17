import { Course } from "./CourseCard";
import bannerTL21C from "@/assets/course-tl21c.jpg";
import bannerTL21C_C1 from "@/assets/tl21c-c1-banner.png";
import bannerTL21C_C2 from "@/assets/tl21c-c2-banner.png";
import bannerTL21C_C3 from "@/assets/tl21c-c3-banner-v2.png";
import bannerTL21C_C4 from "@/assets/tl21c-c4-banner.png";
import bannerTL21C_C5 from "@/assets/tl21c-c5-banner.png";
import bannerHDPSG from "@/assets/course-hdpsg.png";
import bannerHIG_C1 from "@/assets/hig-c1-banner.png";
import bannerHIG_C2 from "@/assets/hig-c2-banner.png";
import bannerHIG_C3 from "@/assets/hig-c3-banner.png";
import bannerHIG_C4 from "@/assets/hig-c4-banner.png";
import bannerALICP from "@/assets/course-alicp.png";
import bannerAL_C1 from "@/assets/al-c1-banner.png";
import bannerAL_C2 from "@/assets/al-c2-banner.png";
import bannerAL_C3 from "@/assets/al-c3-banner.png";
import bannerAL_C4 from "@/assets/al-c4-banner.png";
import bannerAL_C5 from "@/assets/al-c5-banner.png";
import bannerAL_C6 from "@/assets/al-c6-banner.png";
import bannerPM from "@/assets/pme-banner.png";
import bannerPME_C1 from "@/assets/pme-c1-banner.png";
import bannerPME_C2 from "@/assets/pme-c2-banner.png";
import bannerPME_C3 from "@/assets/pme-c3-banner.png";
import bannerPME_C4 from "@/assets/pme-c4-banner.png";
import bannerPME_C5 from "@/assets/pme-c5-banner.png";
import bannerPME_C6 from "@/assets/pme-c6-banner.png";
import bannerPME_C7 from "@/assets/pme-c7-banner.png";
import bannerPME_C8 from "@/assets/pme-c8-banner.png";
import bannerPME_C9 from "@/assets/pme-c9-banner.png";
import bannerPME_C10 from "@/assets/pme-c10-banner.png";
import bannerDSC from "@/assets/course-dsc.jpg";
import bannerELE from "@/assets/course-ele.jpg";
import bannerPGD from "@/assets/course-pgd.jpg";

// Subject accent palette (replaces previous college tags)
const accent = {
  Health: "bg-[#80BC00]/15 text-[#5a8a00]",
  Education: "bg-[#853275]/15 text-[#853275]",
  Computing: "bg-[#FFB600]/20 text-[#8a6300]",
  Business: "bg-[#0083C1]/15 text-[#0083C1]",
  Engineering: "bg-[#EE7623]/15 text-[#b85412]",
  Communication: "bg-[#8E1537]/15 text-[#8E1537]",
} as const;

const pmeAudience =
  "This course is designed for university and college students, early-career professionals, administrative and support staff, entrepreneurs and small business owners, individuals interested in developing project management skills, and individuals considering professional project management certification pathways. No advanced technical background is required.";

const pmeSyllabus = [
  { label: "Module 1", topic: "Introduction" },
  { label: "Module 2", topic: "Watch & Think" },
  { label: "Module 3", topic: "Concept Exploration" },
  { label: "Module 4", topic: "Worked Example" },
  { label: "Module 5", topic: "Knowledge Check" },
  { label: "Module 6", topic: "Reflection" },
];

const alAudience =
  "This Micro-credential is designed for healthcare professionals, graduate students interested in healthcare settings, university and college faculty in health, healthcare startup founders and entrepreneurs, individuals interested in working in healthcare settings, corporate trainers in the healthcare industry, and academic leaders and education administrators in healthcare organisations. No advanced technical background is required.";

const makeAlCourse = (
  code: string,
  title: string,
  headline: string,
  longDesc: string,
  outcomes: string[],
  modules: string[],
  bannerImage: string = bannerALICP,
  launchUrl?: string,
): Course => ({
  code,
  subject: "Health",
  title,
  headline,
  desc: headline,
  type: "Professional",
  delivery: "Online",
  duration: "1 hr",
  accent: accent.Health,
  bannerImage,
  hasDetailPage: true,
  parentCode: "ALICP-001",
  price: 100,
  currency: "QAR",
  language: "en",
  startDate: "Enrol anytime",
  longDesc,
  outcomes,
  audience: alAudience,
  syllabus: modules.map((topic, i) => ({ label: `Module ${i + 1}`, topic })),
  ...(launchUrl ? { launchUrl } : {}),
});

const alSubCourses: Course[] = [
  makeAlCourse(
    "AL-C1",
    "Introduction to Theories of Leadership",
    "Understand the practice of adaptive leadership: tools and tactics for changing your organisation and the world.",
    "This course delves into the theories of leadership and examines leadership as a trait versus leadership as a process. Learners will apply the principles of adaptive leadership to person-centred care for people with complex care needs.",
    [
      "Explain the difference between adaptive leadership as a process and traditional leadership as a set of traits",
      "Differentiate between technical problems and adaptive challenges using relevant examples",
      "Analyse the concept of resistance to change and explain why the statement \u201Cpeople resist change\u201D may be misleading",
      "Describe how leadership principles can be applied effectively in the role of a NICU nurse",
    ],
    [
      "What is Adaptive Leadership?",
      "Technical vs Adaptive Challenge",
      "Adaptive Leadership in Organisational Settings",
    ],
    bannerAL_C1,
  ),
  makeAlCourse(
    "AL-C2",
    "Diagnosing Your Immunity to Change",
    "Learn the importance of diagnosing personal immunity to change in the context of personal and professional growth.",
    "This course introduces the concept of immunity to change \u2014 a hidden, psychological resistance that can block our progress, even when we are highly motivated. Learners will examine competing commitments, big assumptions, and the behaviours that quietly maintain the status quo.",
    [
      "Explain the importance of diagnosing personal immunity to change in the context of personal and professional growth",
      "Describe how competing commitments function as a form of self-protection",
      "Interpret the analogy of big assumptions acting like an immune system in your own words",
      "Identify areas for change in the workplace that could enhance personal effectiveness and job satisfaction",
      "Analyse how personal complaints can reveal underlying commitments",
      "Evaluate behaviours that may be unintentionally undermining one\u2019s own commitments",
      "Reflect on emotional responses that arise when considering actions contrary to undermining behaviours",
      "Identify the worrisome outcomes that undermining behaviours aim to prevent and explain their role in maintaining the status quo",
    ],
    [
      "Overcoming Your Immunity to Change",
      "Reasons behind Resisting Change",
      "Competing Commitments",
    ],
    bannerAL_C2,
  ),
  makeAlCourse(
    "AL-C3",
    "Understanding the Roadmap for Adaptive Solutions",
    "Learn how to build the mindset and skills needed to lead change and not just manage it.",
    "This course guides learners through the roadmap for developing adaptive solutions \u2014 a step-by-step approach to diagnosing complex problems, engaging stakeholders, and testing new ways of working. Learners will distinguish technical from adaptive challenges, identify root causes, and apply leadership strategies that promote learning and lasting change.",
    [
      "Describe the concept of \u201Cgetting on the balcony\u201D and its significance in adaptive leadership",
      "Explain how adaptive leadership addresses challenges and drives change within organisations",
      "Analyse the role of leaders in diagnosing the nature and scope of adaptive challenges",
      "Evaluate how adaptive leadership promotes a balance between preserving tradition and encouraging innovation",
      "Describe strategies leaders can use to create a safe space that fosters diversity and innovation",
      "Identify and explain the steps involved in overcoming resistance to organisational change",
    ],
    [
      "Introduction to Adaptive Challenges",
      "Adaptive Challenge Archetypes",
      "Tools for Diagnosing the Adaptive Challenges",
    ],
    bannerAL_C3,
  ),
  makeAlCourse(
    "AL-C4",
    "Interprofessional Competencies for Leadership",
    "Equip yourself to lead confidently, foster collaboration, and make a meaningful impact as a nursing professional.",
    "In this course, learners explore the core interprofessional competencies that support strong, inclusive leadership \u2014 communication, mutual respect, role clarity, shared decision-making, and collaborative problem-solving. Learners examine how these competencies apply in real-world healthcare settings and reflect on how to strengthen their own leadership practice within diverse teams.",
    [
      "Explain the relationship between adaptive leadership and interprofessional healthcare collaboration",
      "Analyse how interprofessional healthcare collaboration can be viewed as an adaptive challenge",
      "Describe how adaptive leaders can navigate the challenge of integrating parental presence into the NICU",
    ],
    [
      "Adaptive Leadership and Healthcare Collaboration",
      "Difference between Technical and Adaptive Solution",
      "Developing Interprofessional Competencies",
    ],
    bannerAL_C4,
  ),
  makeAlCourse(
    "AL-C5",
    "The Science of Decision-Making",
    "Identify and explain key cognitive and unconscious biases that affect decision-making.",
    "In this course, learners explore the science behind decision-making \u2014 how cognitive processes, emotional factors, biases, and team dynamics influence the choices we make in clinical settings. Learners examine decision-making models relevant to healthcare and gain insight into strategies for improving judgement, reducing errors, and making more confident, evidence-informed decisions.",
    [
      "Identify and explain key cognitive and unconscious biases that affect decision-making",
      "Evaluate strategies for reducing bias in decision-making",
      "Reflect on how bias impacts leadership in interprofessional teams",
    ],
    [
      "Understanding Decision Making",
      "Bias in Group Settings",
      "Impact of Bias in Healthcare",
    ],
    bannerAL_C5,
  ),
  makeAlCourse(
    "AL-C6",
    "Difficult Conversations",
    "Get ready to grow not just as a communicator, but as a compassionate and courageous nursing professional.",
    "This course is designed to help learners approach challenging interactions with confidence, empathy, and clarity. Learners explore the key principles of effective communication, strategies for managing emotions \u2014 their own and others\u2019 \u2014 and techniques for maintaining professionalism and compassion, even when the stakes are high.",
    [
      "Compare key frameworks for managing difficult conversations through a leadership lens",
      "Apply interprofessional competencies to navigate emotionally charged conversations in person-centred care",
      "Analyse how adaptive leadership addresses difficult, ambiguous, or high-stakes dialogue in clinical settings",
      "Recognise and mitigate personal and organisational barriers to effective communication",
      "Examine how empathy, communication strategies, and situational awareness support adaptive leadership in health care",
    ],
    [
      "Understanding Difficult Conversations",
      "Anticipated Conversational Process",
      "Practical Applications",
    ],
    bannerAL_C6,
  ),
];

const makePmeCourse = (
  code: string,
  title: string,
  headline: string,
  longDesc: string,
  outcomes: string[],
  bannerImage: string = bannerPM,
  launchUrl?: string,
): Course => ({
  code,
  subject: "Professional Skills",
  title,
  headline,
  desc: headline,
  type: "Professional",
  delivery: "Online",
  duration: "1 hr",
  accent: accent.Business,
  bannerImage,
  hasDetailPage: true,
  parentCode: "PME-GE-001",
  price: 100,
  currency: "QAR",
  language: "en",
  startDate: "Enrol anytime",
  longDesc,
  outcomes,
  audience: pmeAudience,
  syllabus: pmeSyllabus,
  ...(launchUrl ? { launchUrl } : {}),
});

const pmeSubCourses: Course[] = [
  makePmeCourse(
    "PME-C1",
    "Introduction to Project Management",
    "Discover how successful projects are planned, organised, and delivered.",
    "This course introduces learners to the foundational concepts of project management and explains how projects differ from routine operations. Learners will explore the characteristics of projects, the triple constraint of scope, time, and cost, and the role of the project manager in coordinating project activities. Through practical examples and simple scenarios, learners will develop a foundational understanding of project management principles and their application in everyday life and work environments.",
    [
      "Define a project and distinguish it from routine operations",
      "Identify the components of the triple constraint",
      "Describe the role of a project manager",
      "Recognise the major process groups in project management",
    ],
    bannerPME_C1,
    "https://d2l.udst.edu.qa/d2l/le/sequenceLauncher/193561/View",
  ),
  makePmeCourse(
    "PME-C2",
    "Project Lifecycle and Phases",
    "Understand the complete project journey from initiation to successful completion.",
    "This course explores the major phases of the project lifecycle and explains how projects progress from initiation to closure. Learners will examine the activities involved in planning, execution, monitoring, and project closing while understanding how each phase contributes to project success. Practical examples and interactive learning activities will help learners connect project lifecycle concepts to real-world projects.",
    [
      "Identify the phases of the project lifecycle",
      "Sequence project phases correctly",
      "Describe key activities within each phase",
      "Explain how project phases support project success",
    ],
    bannerPME_C2,
    "https://d2l.udst.edu.qa/d2l/le/sequenceLauncher/193562/View",
  ),
  makePmeCourse(
    "PME-C3",
    "Defining Scope and Requirements",
    "Learn how clear scope and requirements keep projects focused and on track.",
    "This course focuses on defining project scope and gathering project requirements effectively. Learners will explore how unclear requirements and uncontrolled changes can impact project success. The course introduces scope definition, stakeholder requirements, scope creep, and Work Breakdown Structure (WBS) concepts using practical examples and activities that support effective project planning and control.",
    [
      "Define project scope and requirements",
      "Identify examples of scope creep",
      "Explain the purpose of Work Breakdown Structure (WBS)",
      "Apply scope management concepts to simple project scenarios",
    ],
    bannerPME_C3,
  ),
  makePmeCourse(
    "PME-C4",
    "Scheduling and Time Management",
    "Build realistic schedules and manage timelines with confidence.",
    "This course introduces learners to the principles of project scheduling and time management. Learners will examine task sequencing, dependencies, Gantt charts, and critical path analysis while exploring how scheduling tools help projects stay organised and reduce delays. Through practical examples and scheduling activities, learners will build foundational skills in managing project timelines effectively.",
    [
      "Identify task dependencies and sequencing relationships",
      "Interpret simple project schedules and Gantt charts",
      "Explain the concept of the critical path",
      "Analyse scheduling challenges and project delays",
    ],
    bannerPME_C4,
  ),
  makePmeCourse(
    "PME-C5",
    "Cost Estimation and Budgeting",
    "Plan project budgets effectively and make smarter financial decisions.",
    "This course introduces learners to the fundamental concepts of project budgeting and cost estimation. Learners will explore how project costs are estimated, how budgets are developed, and how direct and indirect costs influence project decisions. The course also examines contingency planning and the importance of preparing for unexpected expenses. Through practical examples and worked activities, learners will build confidence in managing project finances effectively.",
    [
      "Define cost estimation and budgeting concepts",
      "Differentiate between direct and indirect costs",
      "Explain the purpose of contingency planning",
      "Apply budgeting concepts to simple project scenarios",
    ],
    bannerPME_C5,
  ),
  makePmeCourse(
    "PME-C6",
    "Risk Management",
    "Identify project risks early and respond before problems grow.",
    "This course explores the importance of identifying, analysing, and managing project risks. Learners will examine different types of project risks, evaluate likelihood and impact, and explore common response strategies such as avoidance, mitigation, transfer, and acceptance. Through practical examples and simple risk analysis activities, learners will develop foundational skills for reducing uncertainty and improving project outcomes.",
    [
      "Define project risk and explain its impact on projects",
      "Identify and analyse project risks",
      "Differentiate between likelihood and impact",
      "Select appropriate risk response strategies",
    ],
    bannerPME_C6,
  ),
  makePmeCourse(
    "PME-C7",
    "Team Management and Communication",
    "Strengthen teamwork, communication, and collaboration for project success.",
    "This course focuses on the importance of teamwork and communication in project success. Learners will explore team roles and responsibilities, communication planning, stakeholder management, and conflict resolution strategies. Through practical scenarios and interactive activities, learners will develop communication and collaboration skills that support effective teamwork in project environments.",
    [
      "Describe the importance of communication in project success",
      "Identify team roles and stakeholder responsibilities",
      "Apply communication planning concepts",
      "Recognise basic conflict resolution strategies",
    ],
    bannerPME_C7,
  ),
  makePmeCourse(
    "PME-C8",
    "Monitoring, Control, and Quality",
    "Track project performance and maintain quality every step of the way.",
    "This course introduces learners to the processes used to monitor project performance and maintain quality standards. Learners will examine key performance indicators (KPIs), progress tracking methods, quality assurance, quality control, and change management processes. The course emphasises how monitoring and quality practices help projects stay aligned with timelines, budgets, and project goals.",
    [
      "Define key performance indicators (KPIs)",
      "Differentiate between quality assurance and quality control",
      "Explain the purpose of project monitoring and change control",
      "Identify corrective actions for common project issues",
    ],
    bannerPME_C8,
  ),
  makePmeCourse(
    "PME-C9",
    "Project Closure and Lessons Learned",
    "Close projects successfully and turn experience into future improvement.",
    "This course explores the final stage of the project lifecycle: project closure. Learners will examine the importance of finalising deliverables, completing project documentation, and capturing lessons learned to improve future projects. The course highlights how proper project closure supports accountability, organisational learning, and continuous improvement through practical examples and reflection activities.",
    [
      "Explain the importance of project closure",
      "Identify key project closure activities",
      "Describe the purpose of lessons learned documentation",
      "Evaluate project closure scenarios and identify improvements",
    ],
    bannerPME_C9,
  ),
  makePmeCourse(
    "PME-C10",
    "Course Review and Completion",
    "Review key concepts, reinforce your learning, and complete the programme with confidence.",
    "This course provides a comprehensive review of the major concepts covered throughout the Project Management Essentials Micro-credential. Learners will revisit topics including project lifecycle phases, scope management, scheduling, budgeting, risk management, communication, quality management, and project closure. The course is designed to reinforce understanding, support reflection, and prepare learners to successfully complete the final assessment and apply project management concepts in real-world situations.",
    [
      "Recall key project management concepts from previous courses",
      "Apply project management concepts to simple scenarios",
      "Evaluate project situations and identify improvements",
    ],
    bannerPME_C10,
  ),
];

export const sampleCourses: Course[] = [
  // Featured 1: Teaching and Learning for the 21st Century — Micro-credential parent
  {
    code: "TL21C-001",
    subject: "Education",
    title: "Teaching and Learning for the 21st Century",
    headline: "Lead the Future of Education — master AI, digital tools and sustainable teaching strategies.",
    desc: "Rethink your teaching practice with evidence-based pedagogy, purposeful technology integration, and the evolving role of AI in education.",
    type: "Micro-credential",
    delivery: "Online",
    duration: "5 hrs",
    accent: accent.Education,
    bannerImage: bannerTL21C,
    hasDetailPage: true,
    isMicroCredential: true,
    subCourseCodes: ["TL21C-C1", "TL21C-C2", "TL21C-C3", "TL21C-C4", "TL21C-C5"],
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This Micro-credential is designed to help you rethink, refine and reimagine your approach to teaching in a rapidly evolving world.\n\nIt enables educators to develop the knowledge and skills to design purposeful, technology-enhanced learning experiences grounded in 21st century teaching principles and informed by the evolving role of artificial intelligence in education, to improve student learning and create sustainable educational impact.",
    outcomes: [
      "Integrate generative AI meaningfully into your classes",
      "Design 21st-century learning experiences",
      "Apply the 5 pillars to your teaching",
      "Choose technology based on learning goals, not trends",
      "Create lessons that have lasting, transferable impact",
    ],
    audience:
      "This Micro-credential is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    structure:
      "Teaching and Learning for the 21st Century is a 5-course Micro-credential delivered in a self-paced online learning environment, designed to equip educators with practical frameworks, digital strategies, and future-ready mindsets to transform teaching and learning for the modern world.\n\nEach course can be enrolled in individually, or completed as a full pathway.",
    howYouLearn:
      "You will learn through self-paced online modules, guided activities, reflective tasks, and applied scenarios drawn from contemporary classrooms. Each of the 5 courses is fully online and can be completed flexibly at your own pace.",
  },
  // TL21C sub-course 1
  {
    code: "TL21C-C1",
    subject: "Education",
    title: "Education in the Age of AI",
    headline: "Understanding Artificial Intelligence and its impact on teaching and learning",
    desc: "Examine the growing influence of AI on teaching and learning and develop the awareness, knowledge, and practical strategies needed to respond thoughtfully and effectively.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Education,
    bannerImage: bannerTL21C_C1,
    hasDetailPage: true,
    parentCode: "TL21C-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/sequenceLauncher/187819/View",
    longDesc:
      "This course invites educators to examine the growing influence of AI on teaching and learning, and to develop the awareness, knowledge, and practical strategies needed to respond thoughtfully and effectively.\n\nYou will explore how AI is transforming not only the tools we use, but also the skills students need, the role of the instructor, and the very purpose of education itself, with the goal of creating learning experiences that remain meaningful, ethical, and future-ready.",
    outcomes: [
      "Evaluate the impact of AI on education, including its current uses, opportunities, challenges, and implications for teaching and learning",
      "Analyse ethical considerations and risks associated with AI in educational contexts, including responsible and appropriate use in teaching practice",
      "Design AI-enhanced learning experiences into classroom practice that support student success and reflect sound pedagogical principles",
      "Integrate AI and digital technologies with intention and purpose to support effective teaching and learning design",
      "Design classroom practices that utilise AI to support student success while adhering to sound pedagogical principles",
    ],
    audience:
      "This course is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Experience AI in Education" },
      { label: "Module 2", topic: "Making Sense of AI in Practice" },
      { label: "Module 3", topic: "Understanding AI in Education" },
      { label: "Module 4", topic: "Applying AI in Your Teaching Practice" },
    ],
  },
  // TL21C sub-course 2
  {
    code: "TL21C-C2",
    subject: "Education",
    title: "Teaching for the 21st Century",
    headline: "Exploring modern teaching approaches for today's learners",
    desc: "Explore how teaching and learning are evolving in response to digital transformation, changing learner expectations, and the demands of a rapidly changing world.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Education,
    bannerImage: bannerTL21C_C2,
    hasDetailPage: true,
    parentCode: "TL21C-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course invites educators to explore how teaching and learning are evolving in response to digital transformation, changing learner expectations, and the demands of a rapidly changing world.\n\nYou will examine the shift from traditional, instructor-centered approaches toward more active, learner-centered experiences that foster collaboration, creativity, critical thinking, and adaptability, with the goal of creating engaging learning environments that prepare students for success in the 21st century.",
    outcomes: [
      "Describe characteristics of 21st century learning",
      "Apply learner-centered teaching strategies",
      "Identify approaches that support student engagement",
      "Explain the changing role of educators",
    ],
    audience:
      "This course is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "What does 21st Century Teaching look like?" },
      { label: "Module 2", topic: "Rethinking Your Teaching Practice" },
      { label: "Module 3", topic: "Frameworks for 21st Century Learning" },
      { label: "Module 4", topic: "Designing for 21st Century Learning" },
    ],
  },
  // TL21C sub-course 3
  {
    code: "TL21C-C3",
    subject: "Education",
    title: "The 5 Pillars of Teaching and Learning",
    headline: "A practical framework for effective and engaging learning experiences",
    desc: "Explore five essential pillars that support meaningful and effective learning experiences across applied learning, communication, relationships, classroom management and engagement.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Education,
    bannerImage: bannerTL21C_C3,
    hasDetailPage: true,
    parentCode: "TL21C-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course invites educators to explore five essential pillars that support meaningful and effective learning experiences: applied and experiential learning, communication, student-teacher relationships, classroom management, and student engagement and motivation.\n\nYou will examine how these interconnected elements shape learner success and influence the quality of teaching and learning environments, with the goal of designing experiences that are engaging, inclusive, reflective, and impactful for diverse learners.",
    outcomes: [
      "Describe the 5 pillars framework",
      "Identify strategies to improve learner engagement",
      "Apply inclusive teaching practices",
      "Support reflection and collaboration in learning",
    ],
    audience:
      "This course is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Experiencing the Pillars in Action" },
      { label: "Module 2", topic: "Evaluating Your Strengths and Gaps" },
      { label: "Module 3", topic: "Understanding the Pillars" },
      { label: "Module 4", topic: "Strengthening Your Teaching Practice" },
    ],
  },
  // TL21C sub-course 4
  {
    code: "TL21C-C4",
    subject: "Education",
    title: "Using Technology with Purpose",
    headline: "Integrating technology intentionally to enhance learning",
    desc: "Rethink the role of technology in teaching and learning by focusing not on the tools themselves, but on the purpose behind their use.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Education,
    bannerImage: bannerTL21C_C4,
    hasDetailPage: true,
    parentCode: "TL21C-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course invites educators to rethink the role of technology in teaching and learning by focusing not on the tools themselves, but on the purpose behind their use.\n\nYou will explore how digital technologies can support pedagogy, enhance engagement, and align with learning outcomes when used intentionally and meaningfully, with the goal of creating technology-enhanced learning experiences that are effective, learner-centered, and aligned with educational goals.",
    outcomes: [
      "Select technologies that support learning outcomes",
      "Apply principles of digital pedagogy",
      "Design simple technology-enhanced learning activities",
      "Evaluate the effectiveness of educational technologies",
    ],
    audience:
      "This course is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Exploring Technology in Action" },
      { label: "Module 2", topic: "Questioning Technology Use" },
      { label: "Module 3", topic: "Principles for Purposeful Integration" },
      { label: "Module 4", topic: "Designing with Technology" },
    ],
  },
  // TL21C sub-course 5
  {
    code: "TL21C-C5",
    subject: "Education",
    title: "Teaching for Sustainable Impact",
    headline: "Designing inclusive and future-focused learning experiences that last",
    desc: "Consider how teaching and learning can create lasting impact in an increasingly complex and changing world through sustainability, inclusion and lifelong learning.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Education,
    bannerImage: bannerTL21C_C5,
    hasDetailPage: true,
    parentCode: "TL21C-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course invites educators to consider how teaching and learning can create lasting impact in an increasingly complex and changing world.\n\nYou will explore approaches that support sustainability, inclusion, adaptability, and lifelong learning, while examining how educators can design learning experiences that remain relevant, equitable, and future-focused, with the goal of building learning environments that empower learners today while preparing them for the challenges and opportunities of tomorrow.",
    outcomes: [
      "Explain principles of sustainable teaching and learning",
      "Identify strategies for inclusive learning design",
      "Support lifelong learning and adaptability",
      "Design learning experiences with long-term impact",
    ],
    audience:
      "This course is designed for university and college faculty, school teachers and instructional staff, corporate trainers and learning professionals, instructional designers and eLearning developers, academic leaders and education administrators, and graduate students interested in education and technology. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Understanding Impact in Education" },
      { label: "Module 2", topic: "Evaluating Long-Term Effectiveness" },
      { label: "Module 3", topic: "Principles of Sustainable Teaching" },
      { label: "Module 4", topic: "Designing for Lasting Impact" },
    ],
  },
  // Featured 2: Health Information Governance — Micro-credential parent
  {
    code: "HDPSG-001",
    subject: "Health",
    title: "Health Data Mastery",
    headline: "Mastering Security, Governance, and Innovation in Digital Health",
    desc: "Equip yourself with the critical skills to navigate the complex digital health landscape, from privacy law and software evaluation to data integrity and AI innovation.",
    type: "Micro-credential",
    delivery: "Online",
    duration: "4 hrs",
    accent: accent.Health,
    bannerImage: bannerHDPSG,
    hasDetailPage: true,
    isMicroCredential: true,
    subCourseCodes: ["HIG-C1", "HIG-C2", "HIG-C3", "HIG-C4"],
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This comprehensive 4-course Micro-credential is designed to equip healthcare professionals with the critical skills needed to navigate the complex digital health landscape.\n\nFrom privacy law and software evaluation to data integrity and AI innovation, learners will gain actionable insights to lead governance initiatives in modern clinical environments.",
    outcomes: [
      "Classify health data by sensitivity and apply global privacy frameworks",
      "Evaluate healthcare software and optimise clinical workflows",
      "Apply data governance principles to ensure operational integrity",
      "Analyse the impact of emerging technologies like AI and wearables on patient care",
    ],
    audience:
      "This Micro-credential is designed for healthcare administrators, IT professionals, Clinical Informatics specialists, policy analysts, healthcare students seeking specialised certification, and career shifters. No advanced technical background is required.",
    structure:
      "Health Data Mastery is a 4-course Micro-credential delivered in a self-paced online learning environment.\n\nEach course can be enrolled in individually, or completed as a full pathway.",
    howYouLearn:
      "You will learn through self-paced online modules, practical examples, guided activities, and applied case-based scenarios drawn from healthcare settings. Each of the 4 courses is fully online and can be completed flexibly at your own pace.",
  },
  // HIG sub-course 1
  {
    code: "HIG-C1",
    subject: "Health",
    title: "The Privacy Shield",
    headline: "Protecting Patient Data in a Borderless Digital World",
    desc: "Explore the ethical and legal foundations of health data privacy, from privacy versus security to global legislative standards and breach prevention.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Health,
    bannerImage: bannerHIG_C1,
    hasDetailPage: true,
    parentCode: "HDPSG-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/sequenceLauncher/187826/View",
    longDesc:
      "Learners will explore the ethical and legal foundations of health data privacy. The course covers the critical differences between privacy and security, global legislative standards, and strategies for safeguarding data against breaches.",
    outcomes: [
      "Classify data based on sensitivity",
      "Identify global privacy protection steps and legislative standards",
      "Differentiate between privacy and security in a healthcare context",
      "Apply safeguarding strategies to protect against breaches",
    ],
    audience:
      "This course is designed for administrative staff and IT security leads. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "The Privacy Landscape (Ethics, Privacy vs Security, GDPR/HIPAA)" },
      { label: "Module 2", topic: "Safeguarding Data (Classification, Security Protocols, Case Study: Data Breach)" },
    ],
  },
  // HIG sub-course 2
  {
    code: "HIG-C2",
    subject: "Health",
    title: "Navigating the Digital Hospital",
    headline: "Evaluating Technology for Better Clinical Outcomes",
    desc: "Build a toolkit for evaluating Healthcare Information Systems and ensuring digital infrastructure supports, rather than hinders, patient care.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Health,
    bannerImage: bannerHIG_C2,
    hasDetailPage: true,
    parentCode: "HDPSG-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course provides a toolkit for evaluating Healthcare Information Systems (HIS). Learners will study digital infrastructure, clinical workflows, and the interoperability between systems to ensure technology supports, rather than hinders, patient care.",
    outcomes: [
      "Evaluate healthcare software against clear selection criteria",
      "Understand digital workflows in clinical settings",
      "Assess interoperability between healthcare systems",
      "Apply UX principles to healthcare technology evaluation",
    ],
    audience:
      "This course is designed for clinical managers, IT procurement teams, and workflow analysts. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "The Digital Infrastructure (HIS/EHR, Workflows, Interoperability)" },
      { label: "Module 2", topic: "The Evaluation Toolkit (Selection Criteria, UX in Healthcare, Dashboard Activity)" },
    ],
  },
  // HIG sub-course 3
  {
    code: "HIG-C3",
    subject: "Health",
    title: "The Data Rulebook",
    headline: "Ensuring the Accuracy and Lifecycle Integrity of Health Data",
    desc: "Examine the roles, responsibilities, and frameworks required to maintain high-quality health data across the full data lifecycle.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Health,
    bannerImage: bannerHIG_C3,
    hasDetailPage: true,
    parentCode: "HDPSG-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "Focusing on the why and how of information governance, this course details the roles, responsibilities, and frameworks required to maintain high-quality data. Learners will study the data lifecycle from creation to secure destruction.",
    outcomes: [
      "Apply data governance principles to ensure information is accurate and safe",
      "Describe key information governance roles and responsibilities",
      "Assess the health of an organisation's data",
      "Manage the data lifecycle from creation to secure destruction",
    ],
    audience:
      "This course is designed for data stewards, health information managers, and compliance officers. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Governance Frameworks (IG Fundamentals, Roles, Assessing Data Health)" },
      { label: "Module 2", topic: "Data Integrity & Lifecycle (Quality, Data Ops, Governance Culture)" },
    ],
  },
  // HIG sub-course 4
  {
    code: "HIG-C4",
    subject: "Health",
    title: "Healthcare 2.0",
    headline: "Leading Innovation in the Era of AI and Remote Care",
    desc: "Explore the frontier of health technology, from AI and predictive analytics to the governance of remote patient monitoring and telemedicine.",
    type: "Professional",
    delivery: "Online",
    duration: "1 hr",
    accent: accent.Health,
    bannerImage: bannerHIG_C4,
    hasDetailPage: true,
    parentCode: "HDPSG-001",
    price: 100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "Explore the frontier of health technology. This course covers the basics of AI and machine learning, the ethics of predictive analytics, and the governance requirements for remote patient monitoring and telemedicine.",
    outcomes: [
      "Recognise emerging trends in health technology",
      "Analyse the impact of new technology on health data",
      "Evaluate the ethics and bias of predictive analytics in healthcare",
      "Apply governance requirements to remote patient monitoring and telemedicine",
    ],
    audience:
      "This course is designed for healthcare innovators, clinical leads, and health-tech entrepreneurs. No advanced technical background is required.",
    syllabus: [
      { label: "Module 1", topic: "Intelligence in Healthcare (AI/ML Basics, Predictive Analytics, Ethics/Bias)" },
      { label: "Module 2", topic: "The Future of Remote Care (Wearables, Telemedicine, Capstone: Your Future in Health-Tech)" },
    ],
  },
  // Project Management Essentials — Micro-credential parent
  {
    code: "PME-GE-001",
    subject: "Professional Skills",
    title: "Project Management Essentials",
    headline: "Master the essential skills to plan, manage, and deliver successful projects with confidence.",
    desc: "Build practical project management skills you can apply at work, in study, and in everyday life, from planning through to successful completion.",
    type: "Micro-credential",
    delivery: "Online",
    duration: "10 hrs",
    accent: accent.Business,
    bannerImage: bannerPM,
    hasDetailPage: true,
    isMicroCredential: true,
    subCourseCodes: [
      "PME-C1", "PME-C2", "PME-C3", "PME-C4", "PME-C5",
      "PME-C6", "PME-C7", "PME-C8", "PME-C9", "PME-C10",
    ],
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This comprehensive 10-course Micro-credential is designed to introduce learners to the essential concepts, tools, and practical skills used in project management. Learners will explore how projects differ from routine operations and examine the major phases of managing projects, including planning, scheduling, budgeting, communication, risk management, monitoring, and project closure. Through practical examples, interactive activities, and scenario-based learning, learners will develop foundational project management skills that can be applied in professional, academic, and personal contexts.\n\nThis Micro-credential may also support individuals interested in pursuing professional certifications such as the Project Management Professional (PMP) Certification by introducing core project management concepts, terminology, and practices.\n\nLearners who successfully complete all 10 Micro-credential courses and required assessments will receive a Project Management Essentials Micro-credential certificate recognising their completion of the programme and foundational knowledge in project management.",
    outcomes: [
      "Identify the key characteristics of projects and distinguish them from routine operations",
      "Apply project management principles to plan and organise tasks effectively",
      "Analyse common project challenges related to scope, time, cost, quality, communication, and risk",
      "Select appropriate tools and strategies to support project success",
      "Evaluate project outcomes and identify opportunities for improvement",
    ],
    audience:
      "This Micro-credential is designed for university and college students, early-career professionals, administrative and support staff, entrepreneurs and small business owners, individuals interested in developing project management skills, and individuals considering professional project management certification pathways. No advanced technical background is required.",
    structure:
      "Project Management Essentials is a 10-course Micro-credential delivered in a self-paced online learning environment, designed to provide learners with practical project management knowledge and foundational workplace skills.\n\nEach course can be enrolled in individually, or completed as a full pathway.",
    howYouLearn:
      "You will learn through self-paced online modules, guided activities, worked examples, knowledge checks, and reflection tasks. Each of the 10 courses is fully online and can be completed flexibly at your own pace.",
  },
  ...pmeSubCourses,
  // Featured 4: Adaptive Leadership — Micro-credential parent
  {
    code: "ALICP-001",
    subject: "Health",
    title: "Adaptive Leadership",
    desc: "Build adaptive leadership skills to mobilise, motivate, and lead interprofessional healthcare teams through complex change.",
    type: "Micro-credential",
    delivery: "Online",
    duration: "5 hrs",
    accent: accent.Health,
    bannerImage: bannerALICP,
    hasDetailPage: true,
    isMicroCredential: true,
    subCourseCodes: [
      "AL-C1", "AL-C2", "AL-C3", "AL-C4", "AL-C5", "AL-C6",
    ],
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This Micro-credential is designed for today\u2019s dynamic and complex healthcare environment, where professionals, staff, and nurses are called to lead with confidence, collaborate effectively, and respond adaptively to ever-changing circumstances.\n\nAdaptive Leadership and Interprofessional Practice helps learners mobilise, motivate, organise, and focus interprofessional healthcare teams to navigate the complexities of change and deliver effective, person-centred health care.\n\nLearners who successfully complete all six Micro-credential courses and required assessments will receive an Adaptive Leadership Micro-credential certificate recognising their completion of the programme.",
    outcomes: [
      "Compare theories of leadership",
      "Apply interprofessional competencies to support person-centred care in clinical practice",
      "Analyse the practice of leadership for addressing technical and adaptive challenges",
      "Analyse personal and organisational barriers to change",
      "Examine adaptive leadership and its relevance to person-centred health care",
    ],
    audience: alAudience,
    structure:
      "Adaptive Leadership is a 6-course Micro-credential delivered in a self-paced online learning environment, designed to provide healthcare professionals with practical leadership skills for interprofessional collaborative practice.\n\nEach course can be enrolled in individually, or completed as a full pathway.",
    howYouLearn:
      "You will learn through self-paced online modules, real-world healthcare scenarios, guided activities, knowledge checks, and reflection tasks. Each of the six courses is fully online and can be completed flexibly at your own pace.",
  },
  ...alSubCourses,
  // ───────────────────────────────────────────────
  // Upcoming courses (coming soon)
  // ───────────────────────────────────────────────

  // College of Business
  {
    code: "ECON-2010",
    subject: "Business",
    title: "Business Economics",
    desc: "Core economic principles applied to real business decisions.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Business,
    isPlaceholder: true,
  },
  {
    code: "MGMT-3035",
    subject: "Business",
    title: "Business Ethics",
    desc: "Explore ethical decision-making in modern organisations.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Business,
    isPlaceholder: true,
  },

  // College of Health Sciences
  {
    code: "HSOH-2050",
    subject: "Health",
    title: "Epidemiology",
    desc: "Foundations of epidemiology and population health.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Health,
    isPlaceholder: true,
  },
  {
    code: "NURS-4104",
    subject: "Health",
    title: "Adaptive Leadership and Clinical Management",
    desc: "Develop adaptive leadership and clinical management skills.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Health,
    isPlaceholder: true,
  },

  // College of Computing and IT
  {
    code: "DSAI-3203",
    subject: "Computing",
    title: "Fundamentals of Data Science and AI",
    desc: "An introduction to the core concepts and techniques of data science and artificial intelligence.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Computing,
    isPlaceholder: true,
  },
  {
    code: "DACS-2201",
    subject: "Computing",
    title: "Introduction to Cybersecurity",
    desc: "Build foundational knowledge of cybersecurity principles and practice.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Computing,
    isPlaceholder: true,
  },

  // College of General Education
  {
    code: "SCIE-1002",
    subject: "Education",
    title: "Science and Environment",
    desc: "An accessible introduction to science and the environment.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Education,
    isPlaceholder: true,
  },
  {
    code: "GARC-2002",
    subject: "General Education",
    title: "Globalisation and the Environment",
    desc: "Explore the complex links between globalisation and the environment through ecological, social, political, cultural, and economic perspectives.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Education,
    isPlaceholder: true,
    longDesc:
      "It is important that students understand the intricate nexus between globalisation and the environment as many of our contemporary challenges relate to issues stemming from this complex relationship.\n\nThis interdisciplinary course examines multiple perspectives on ecological, social, political, cultural, and economic drivers. Students perform a multi-level analysis of diverse topics such as international cooperation, the global economy, and science and technology in the context of Qatar.\n\nStudents are expected to plan and execute a small project related to one of the primary case studies that will be explored throughout the semester.",
  },

  // ───────────────────────────────────────────────
  // Academic Blended Courses (UDST academics only)
  // ───────────────────────────────────────────────

  // College of Business
  {
    code: "HCMT3002",
    subject: "Business",
    title: "Health Data Mastery",
    desc: "Explore the balance between access to individualised healthcare data and the privacy, security and governance demands of modern health systems.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Business,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Healthcare data is often personal and therefore subject to increasing legislation across the globe. Data must be protected, but it is also essential in the effective treatment of individual patients.\n\nThis course explores the complex balance between access to individualised data and the need for data privacy. In addition, students examine the value of using broader data trends in a society to recognise emerging healthcare and treatment issues.\n\nThis is a complex and fast-moving area which is increasingly at the cutting edge of emerging information technologies.",
    outcomes: [
      "Classify the types of healthcare data according to their sensitivity",
      "Evaluate the software available to healthcare providers",
      "Apply data security protocols in healthcare",
      "Analyse best practices of data governance in healthcare",
      "Analyse trends and innovations in healthcare data management",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "IT-supported workflows in healthcare" },
      { label: "Module 2", topic: "Introduction to healthcare information systems" },
      { label: "Module 3", topic: "Data classification" },
      { label: "Module 4", topic: "Data inventory and data ops" },
      { label: "Module 5", topic: "Data governance assessment" },
      { label: "Module 6", topic: "Fundamentals of health information governance" },
      { label: "Module 7", topic: "Data governance framework" },
      { label: "Module 8", topic: "Roles in information governance" },
      { label: "Module 9", topic: "Data privacy protection" },
      { label: "Module 10", topic: "Securing information systems" },
      { label: "Module 11", topic: "Emerging technologies and trends in data governance" },
    ],
  },

  {
    code: "SSHA1004",
    subject: "Education",
    title: "Ethical Reasoning",
    desc: "Apply ethical theories and moral philosophy to contemporary problems through critical thinking and applied case studies.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Education,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Ethical reasoning is a type of critical thinking that uses ethical principles and frameworks to ensure sound decision-making and effective problem solving.\n\nThis course introduces the theories, methods, and practical problems of ethics and moral philosophy. Topics covered include the nature of ethical reasoning, moral theories of notable philosophers, the concepts of right and wrong, and moral responsibility.\n\nThrough a variety of assignments, quizzes, and hybrid online learning, the course is designed to help students develop their critical thinking capabilities from an ethical perspective and to better understand various moral problems in today's world.",
    outcomes: [
      "Identify and explain basic theories and concepts related to the study of ethics and moral philosophy",
      "Identify key figures in moral philosophy and explain the relevance of their ideas and methods in ethical reasoning",
      "Compare and contrast key philosophical standpoints on morality, ethical reasoning and issues of right and wrong",
      "Demonstrate an understanding of the relevance of moral philosophy and ethical reasoning for contemporary ethical problems facing societies and individuals in everyday life and in the context of modern technology",
      "Apply the concepts of ethical reasoning theories such as Virtue Theory, Stoicism, Deontology, Utilitarianism and Contractarianism to practical situations, scenarios and case studies",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "Introduction to ethics and philosophy" },
      { label: "Module 2", topic: "Ethical theories and dilemmas" },
      { label: "Module 3", topic: "Virtue ethics" },
      { label: "Module 4", topic: "Stoicism" },
      { label: "Module 5", topic: "Dialectical interview" },
      { label: "Module 6", topic: "Social contract" },
      { label: "Module 7", topic: "Deontology" },
      { label: "Module 8", topic: "Applying principles of deontology" },
      { label: "Module 9", topic: "Utilitarianism" },
      { label: "Module 10", topic: "Review" },
      { label: "Module 11", topic: "Film analysis" },
    ],
  },

  // College of Health Sciences
  {
    code: "NUMW2210",
    subject: "Health",
    title: "Perspectives of Complex Maternal Health",
    desc: "Apply midwifery concepts and evidence to provide woman- and family-centred care across complex acute, chronic and emergency maternity scenarios.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Health,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Students apply midwifery concepts, theories and evidence in the provision of woman, person and family-centred care for maternity persons experiencing select complex acute, chronic, and emergency mental and physical health challenges that pre-exist or present for the first time during pregnancy and birth.\n\nStudents learn how to escalate care and to provide interim provisional emergency care while awaiting the arrival of health professionals.",
    outcomes: [
      "Demonstrate a basic understanding of core professional, ethical and legal principles underpinning midwifery care to women experiencing complex acute, chronic and emergency health challenges",
      "Demonstrate a basic understanding of midwifery philosophy, theories and knowledge to guide woman- and person-centred midwifery care",
      "Demonstrate a basic understanding of evidence to guide midwifery care across complex maternity scenarios",
      "Demonstrate basic competence in critical and clinical thinking in the care of women with complex challenges",
      "Demonstrate intermediate competence in developmentally and culturally appropriate communication with women, families and the wider healthcare team",
      "Routinely display personal responsibility for own learning and midwifery practice",
      "Routinely engage in self-reflection and self-evaluation when providing midwifery care",
      "Demonstrate intermediate competence in the use of healthcare and information technologies that support midwifery practice",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "Maternal and neonatal mortality" },
      { label: "Module 2", topic: "Circulatory and haemolytic function" },
      { label: "Module 3", topic: "Cardiovascular conditions and hypertensive disorders in pregnancy" },
      { label: "Module 4", topic: "Autoimmune disorders and metabolic conditions" },
      { label: "Module 5", topic: "Musculoskeletal and gastrointestinal disorders" },
      { label: "Module 6", topic: "Endocrine disorders and gestational diabetes" },
      { label: "Module 7", topic: "Thromboembolic disorders in childbearing" },
      { label: "Module 8", topic: "Renal and hepatic disorders" },
      { label: "Module 9", topic: "Neurological and psychological disorders" },
      { label: "Module 10", topic: "Respiratory conditions, infectious diseases and skin disorders" },
    ],
  },
  {
    code: "HSPA4223",
    subject: "Health",
    title: "Paramedicine Patient Management III",
    desc: "Develop advanced paramedic decision-making across immunology, paediatrics, toxicology, environmental and high-altitude emergencies.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Health,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Paramedics must demonstrate independent critical thinking and decision-making skills during medical emergencies.\n\nThis is the third of three courses which provide students with the knowledge and skills necessary to incorporate advanced clinical decision-making into the provision of holistic care for a wide variety of disorders.\n\nIn this part, students formulate care plans for disorders related to haematology and immunology, communicable diseases, toxic exposures, exposure to adverse environments, and high altitude and diving incidents, as well as emergencies involving paediatric patients.",
    outcomes: [
      "Formulate, implement, evaluate and revise care plans for the management of immunological emergencies",
      "Formulate, implement, evaluate and revise care plans for the management of paediatric emergencies",
      "Formulate, implement, evaluate and revise care plans for the management of communicable diseases",
      "Formulate, implement, evaluate and revise care plans for the management of disorders of the eyes, ears, nose and throat",
      "Formulate, implement, evaluate and revise care plans for the management of toxicological emergencies",
      "Formulate, implement, evaluate and revise care plans for the management of environmental emergencies",
      "Formulate, implement, evaluate and revise care plans for the management of high altitude and diving emergencies",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "Haematology and immune system" },
      { label: "Module 2", topic: "Paediatric emergencies" },
      { label: "Module 3", topic: "Communicable diseases" },
      { label: "Module 4", topic: "EENT disorders" },
      { label: "Module 5", topic: "Toxicology" },
      { label: "Module 6", topic: "Environmental emergencies" },
      { label: "Module 7", topic: "Aviation and diving emergencies" },
    ],
  },
  {
    code: "HSPT2204",
    subject: "Health",
    title: "Non-Sterile Compounding",
    desc: "Build essential pharmacy technician skills in non-sterile compounding through hands-on preparation, calculations and laboratory practice.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Health,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Compounding of pharmaceuticals is an essential skill for a pharmacy technician and technologist. This course focuses on preparation and the essential techniques involved in non-sterile compounding.\n\nStudents follow and process compounded prescriptions with zero tolerance for errors. Course content includes the preparation of ointments, creams, solutions, suspensions and capsules through extemporaneous methods.\n\nStudents are also introduced to the history of compounding, pharmaceutical forms and preparation, packaging, and maintaining the pharmaceutical elegance of all prepared products. The course also offers a review of pharmaceutical calculations related to extemporaneous compounding and percentage of error. Learning takes place through lectures, practical activities and hands-on training in a fully equipped non-sterile compounding laboratory.",
    outcomes: [
      "Apply WHMIS in the workplace",
      "Apply compounding principles in the preparation of extemporaneous compounds",
      "Demonstrate proper technique of measuring, mixing and packaging solid and liquid compounds",
      "Calculate accurately to measure compounding ingredients, including using an aliquot, and determine the percentage of error of measurement",
      "Demonstrate proper use of compounding equipment",
      "Maintain proper documentation of preparing extemporaneous and limited batch compounds",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "Introduction to compounding and WHMIS" },
      { label: "Module 2", topic: "Compounding principles" },
      { label: "Module 3", topic: "Compounding equipment" },
      { label: "Module 4", topic: "Percentage of error" },
      { label: "Module 5", topic: "Compounding ingredients" },
      { label: "Module 6", topic: "Extemporaneous capsules" },
      { label: "Module 7", topic: "Drug dilution and aliquot" },
    ],
  },
  {
    code: "HSRT2300",
    subject: "Health",
    title: "Airway Management",
    desc: "Develop core respiratory therapy airway management skills through equipment principles and applied laboratory practice.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Health,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "Airway management is a crucial skill that enables a respiratory therapist to support patients requiring airway assistance.\n\nIn this course, students explore the use of various airway management techniques, related equipment and associated therapies. Primary emphasis is on the principles of operation of the various types of equipment utilised in airway management within respiratory therapy.\n\nA variety of lectures and practical laboratory exercises are used to gain the necessary knowledge, skills and abilities to work in a clinical environment.",
    outcomes: [
      "Manage the airway using a variety of devices and techniques",
      "Apply manual ventilation via BVM and adjuncts",
      "Apply suction therapy",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "OPA, NPA and LMA" },
      { label: "Module 2", topic: "Manual resuscitators" },
      { label: "Module 3", topic: "Intubation" },
      { label: "Module 4", topic: "Suctioning" },
      { label: "Module 5", topic: "Extubation" },
      { label: "Module 6", topic: "Special airways and equipment" },
      { label: "Module 7", topic: "Difficult airway" },
      { label: "Module 8", topic: "Tracheostomy" },
      { label: "Module 9", topic: "NG tubes and chest drainage units" },
    ],
  },
  {
    code: "CGE-001",
    subject: "Communication",
    title: "Qatar History and Society",
    desc: "Explore Qatar's journey from tribal society to modern nation through socio-political history, cultural transformation, and regional diplomacy.",
    type: "Academic",
    delivery: "Blended",
    duration: "Semester",
    accent: accent.Communication,
    hasDetailPage: true,
    academicOnly: true,
    language: "en",
    longDesc:
      "History shapes beliefs, the understanding of events and their causes, and provides the context for future actions. This course will familiarize students with the major events and influences through different historical eras, with particular emphasis on the emergence and development of the Qatari sheikhdom in the era of Ottoman-British rivalry in the Gulf. In addition, it will highlight the formation of Qatar as an independent state in 1971, the formation of the Gulf Cooperation Council, diplomatic relations between the member states, and how they influence the economic development of Qatar. Through the perspective of socio-political history, this course will examine the modernization of Qatar as a richly diverse, multi-cultural society that took place until the era of Emir Sheikh Tamim bin Hamad Al Thani.",
    outcomes: [
      "Explain the recent history of Qatar in a socio-political context",
      "Describe the major events leading to the formation of Qatar as an independent state",
      "Explain how regional cooperation has impacted Qatar's economic and human development",
      "Describe the dynamics of the development of local communities in the context of rapid modernization",
      "Describe the government structure and national constitution of Qatar",
    ],
    syllabus: [
      { label: "Module 0", topic: "Welcome and Introduction" },
      { label: "Module 1", topic: "The Importance of History, Geography, and Historical Sources in Qatar" },
      { label: "Module 2", topic: "Tribal Migration and the Local Situation in the Arabian Gulf" },
      { label: "Module 3", topic: "The Al-Thani Family and British Protection Agreements (1868)" },
      { label: "Module 4", topic: "Ottoman Control of Al Ahsa and the Ottoman–British Rivalry" },
      { label: "Module 5", topic: "Economic and Social Life in Pre-Oil Qatar" },
      { label: "Module 6", topic: "The Establishment of Contemporary Qatar: Sheikh Jassim Bin Mohammad" },
      { label: "Module 7", topic: "The Establishment of Contemporary Qatar under Sheikh Ali Bin Abdullah and Sheikh Ahmad Bin Ali (1949–1972)" },
      { label: "Module 8", topic: "Building the Modern State of Qatar (1949–1972): Economic and Social Development" },
      { label: "Module 9", topic: "Contemporary Qatar (1972–1995): The Era of Sheikh Khalifa bin Hamad Al Thani" },
      { label: "Module 10", topic: "Qatar's Flourishing During the Era of Sheikh Hamad bin Khalifa Al Thani (1995–2013)" },
      { label: "Module 11", topic: "Qatar's Flourishing During the Era of Sheikh Tamim bin Hamad Al Thani (2013–2021)" },
    ],
  },
];
