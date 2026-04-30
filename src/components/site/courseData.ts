import { Course } from "./CourseCard";
import bannerTL21C from "@/assets/course-tl21c.jpg";
import bannerHDPSG from "@/assets/course-hdpsg.png";
import bannerALICP from "@/assets/course-alicp.png";
import bannerPM from "@/assets/course-pm.jpg";
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

export const sampleCourses: Course[] = [
  // Featured 1: Teaching and Learning for the 21st Century
  {
    code: "TL21C-001",
    subject: "Education",
    title: "Teaching and Learning for the 21st Century",
    desc: "Rethink your teaching practice with evidence-based pedagogy, purposeful technology integration, and the evolving role of AI in education.",
    type: "Professional",
    delivery: "Online",
    duration: "5 hrs",
    accent: accent.Education,
    bannerImage: bannerTL21C,
    hasDetailPage: true,
    price: 450,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course is designed to help you rethink, refine and reimagine your approach to teaching in a rapidly evolving world.\n\nIt enables educators to develop the knowledge and skills to design purposeful, technology-enhanced learning experiences grounded in 21st century teaching principles and informed by the evolving role of artificial intelligence in education, in order to improve student learning and create sustainable educational impact.",
    outcomes: [
      "Explain how artificial intelligence is influencing teaching, learning, and assessment",
      "Apply 21st century learning frameworks to inform effective teaching practice",
      "Design learning experiences grounded in evidence-based pedagogical principles",
      "Integrate technology purposefully to enhance teaching and learning outcomes",
      "Translate educational theory into effective, student-centred classroom practice",
      "Create sustainable learning environments that promote long-term student impact and engagement",
    ],
    audience:
      "This course is designed for educators, instructional designers, and academic leaders who want to strengthen their teaching practice and confidently integrate modern pedagogical approaches and AI-informed strategies into their classrooms.",
    structure:
      "This fully asynchronous online course is organised into focused units that introduce 21st century teaching principles step by step, from foundational frameworks through to applied classroom practice and the role of AI in education.\n\nEach unit combines essential theory with practical examples drawn from real teaching contexts, helping educators connect concepts to their day-to-day practice.",
    howYouLearn:
      "You will learn through self-paced online modules, guided activities, reflective tasks, and applied scenarios drawn from contemporary classrooms. The course is designed for flexible study and can be completed entirely online.",
    syllabus: [
      { label: "Module 1 · 1 hr", topic: "21st century learning frameworks and the changing role of the educator" },
      { label: "Module 2 · 1 hr", topic: "Evidence-based pedagogy and student-centred design" },
      { label: "Module 3 · 1 hr", topic: "Purposeful technology integration in teaching and learning" },
      { label: "Module 4 · 1 hr", topic: "Artificial intelligence in teaching, learning and assessment" },
      { label: "Module 5 · 1 hr", topic: "Sustainable learning environments and long-term impact" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/lessons/187819/units/3744272",
  },
  // Featured 2: Health Data Mastery
  {
    code: "HDPSG-001",
    subject: "Health",
    title: "Health Data Mastery: Privacy, Security, and Governance",
    desc: "Go behind the scenes of the modern digital hospital and build the practical toolkit to protect, manage, and govern healthcare data.",
    type: "Professional",
    delivery: "Online",
    duration: "4 hrs",
    accent: accent.Health,
    bannerImage: bannerHDPSG,
    hasDetailPage: true,
    price: 1100,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "Healthcare data is now more valuable than financial data. As medical records move from paper files to the cloud, the need for skilled professionals who can protect, manage, and govern this information has never been greater.\n\nIn this 4-course specialisation, adapted from university-level curricula, you will go behind the scenes of the modern digital hospital. You will learn the complex balance between making data accessible for life-saving treatment and keeping it strictly private under global legislation.\n\nWhether you are a healthcare worker, a clinic owner, or a professional looking to switch careers into health-tech, this course provides the practical toolkit you need to thrive at the cutting edge of health information technology.",
    outcomes: [
      "Identify and categorise health information based on sensitivity and legal requirements",
      "Apply foundational security protocols to protect against data breaches and cyber threats",
      "Use a professional framework to choose and assess Healthcare Information Systems (HIS)",
      "Implement best practices for data quality and organisational accountability",
      "Recognise how AI and wearables are transforming the future of patient care",
    ],
    audience:
      "This course is designed for healthcare workers, clinic owners, administrators, and professionals looking to switch careers into health-tech who want a practical foundation in health data privacy, security, and governance.",
    structure:
      "This fully online specialisation is organised into four focused courses that introduce the principles of healthcare data management step by step. Learners move through classification, security, system selection, governance, and emerging trends in digital healthcare.\n\nEach unit combines essential theory with practical healthcare contexts, helping learners connect core concepts to real-world data challenges across hospitals, clinics, and digital health environments.",
    howYouLearn:
      "You will learn through online modules, practical examples, guided activities, and applied case-based scenarios drawn from healthcare settings. The course is fully online and designed for flexible, self-paced study.",
    syllabus: [
      { label: "Course 1 · 1 hr", topic: "Health information classification and legal foundations" },
      { label: "Course 2 · 1 hr", topic: "Security protocols and protecting against cyber threats" },
      { label: "Course 3 · 1 hr", topic: "Choosing and assessing Healthcare Information Systems (HIS)" },
      { label: "Course 4 · 1 hr", topic: "Data governance, quality, and the future of patient care with AI and wearables" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/home/187826",
  },
  // Project Management Essentials (General Education)
  {
    code: "PME-GE-001",
    subject: "Professional Skills",
    title: "Project Management Essentials",
    desc: "Build practical project management skills you can apply at work, in study, and in everyday life, from planning through to successful completion.",
    type: "Professional",
    delivery: "Online",
    duration: "5–6 hrs",
    accent: accent.Business,
    bannerImage: bannerPM,
    hasDetailPage: true,
    price: 450,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course introduces learners to the essential concepts and practical skills of project management in everyday contexts. It explores how projects differ from routine activities and guides learners through the key stages of managing a project, from planning to completion.\n\nLearners will develop the ability to organise tasks, manage time and resources, solve problems, and achieve goals effectively. The course is designed to be accessible to all learners, regardless of their background, and highlights how project management skills can be applied in work, study, and personal life.",
    outcomes: [
      "Identify the key characteristics of a project and distinguish it from routine tasks",
      "Apply basic project management steps to plan and complete a task or goal",
      "Analyse common challenges in projects such as time, resources, and risks",
      "Select appropriate tools and strategies to organise and manage tasks",
      "Evaluate the success of a project and suggest ways to improve outcomes",
    ],
    audience:
      "This course is designed for learners from any background who want to build practical project management skills they can apply in work, study, and personal life.",
    structure:
      "This fully online course is organised into focused units that introduce project management step by step, from understanding what makes a project to planning, managing, and reviewing it.\n\nEach unit combines clear explanations with relatable examples and practical activities, making the content accessible to learners with no prior experience.",
    howYouLearn:
      "You will learn through self-paced online modules, guided activities, and practical examples drawn from everyday work, study, and personal contexts. The course is fully online and can be completed flexibly at your own pace.",
    syllabus: [
      { label: "Module 1 · 1 hr", topic: "What is a project? Key characteristics and everyday examples" },
      { label: "Module 2 · 1 hr", topic: "Planning a project: goals, tasks, and timelines" },
      { label: "Module 3 · 1 hr", topic: "Managing time, resources, and risks" },
      { label: "Module 4 · 1 hr", topic: "Tools and strategies to organise and track work" },
      { label: "Module 5 · 1–2 hrs", topic: "Reviewing outcomes and improving future projects" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/home/187828",
  },
  // Featured 4: Adaptive Leadership and Interprofessional Collaborative Practice
  {
    code: "ALICP-001",
    subject: "Health",
    title: "Adaptive Leadership and Interprofessional Collaborative Practice",
    desc: "Build leadership skills for interprofessional healthcare teams and support person-centred care in complex clinical settings.",
    type: "Professional",
    delivery: "Online",
    duration: "5 hrs",
    accent: accent.Health,
    bannerImage: bannerALICP,
    hasDetailPage: true,
    price: 950,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course aims to assist learners to learn the art of adaptive leadership for clinical leadership and practice within interprofessional teams to enhance person-centred health care.\n\nThere is a focus on interprofessional competencies and the principles, tools, and techniques of adaptive leadership to mobilise, motivate, organise, and focus interprofessional healthcare teams to navigate the complexities of change for effective health care.\n\nOffered through eUDST, the University of Doha for Science & Technology's online learning platform, this course supports professionals who want to strengthen their leadership capability and contribute more effectively within collaborative healthcare environments.",
    outcomes: [
      "Compare theories of leadership",
      "Apply interprofessional competencies to support person-centred care in clinical practice",
      "Analyse the practice of leadership for addressing technical and adaptive challenges",
      "Analyse personal and organisational barriers to change",
      "Examine adaptive leadership and its relevance to person-centred health care",
    ],
    audience:
      "This course is designed for healthcare professionals and practitioners who want to strengthen their leadership skills and work more effectively within interprofessional teams.",
    structure:
      "This fully online course is organised into a series of interactive units that guide learners through the principles and practice of adaptive leadership in interprofessional healthcare settings.\n\nEach unit includes short modules, practical examples, and applied learning activities that connect leadership theory to real clinical practice. The course is designed for flexible, self-paced study, allowing learners to progress through the content in a clear and structured way while building knowledge step by step.",
    howYouLearn:
      "You will learn through interactive online modules, real-world healthcare scenarios, reflective activities, and practical examples. The course encourages active engagement with leadership concepts and helps you apply them to collaborative healthcare practice and person-centred care.",
    syllabus: [
      { label: "Module 1 · 1 hr", topic: "Foundational theories of leadership in healthcare" },
      { label: "Module 2 · 1 hr", topic: "Interprofessional competencies and person-centred care" },
      { label: "Module 3 · 1 hr", topic: "Technical and adaptive challenges in clinical settings" },
      { label: "Module 4 · 1 hr", topic: "Personal and organisational barriers to change" },
      { label: "Module 5 · 1 hr", topic: "Adaptive leadership in interprofessional practice" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/lessons/187827/lessons/3747206",
  },
  // Other detailed courses
  {
    code: "DSC-CCIT-001",
    subject: "Computing",
    title: "Discrete Structures for Computing",
    desc: "Build the mathematical foundations behind computing, from logic and proofs to graphs, trees and discrete probability.",
    type: "Academic",
    delivery: "Blended",
    duration: "45 hrs",
    accent: accent.Computing,
    bannerImage: bannerDSC,
    hasDetailPage: true,
    price: 1850,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "This course introduces the fundamental discrete structures required for computing. Learners are encouraged to analyse problems related to discrete structures and find correct solutions backed by clear and precise proof.\n\nTopics include logic and proving methods; sets, functions, sequences and summations; numeral systems; logic gates and simple combinational circuits; induction; counting tools and discrete probability; relations, graphs and trees.",
    outcomes: [
      "Apply logic to prove simple theorems",
      "Describe basic structures for mathematics such as sets, functions, sequences, and sums",
      "Practice Boolean algebra in the context of simple combinational circuits",
      "Deduce properties using mathematical induction",
      "Calculate discrete probability using counting techniques",
      "Define useful structures for computing such as relations, graphs, and trees",
    ],
    audience:
      "This course is designed for computing students and aspiring software professionals who want a strong mathematical foundation for further study in computer science, software engineering, and information technology.",
    structure:
      "Delivered through blended learning, the course combines structured online modules with applied learning activities. Learners progress through a clear sequence of topics, building from logic and proof techniques to advanced discrete structures used across computing.",
    howYouLearn:
      "You will learn through online lessons, worked examples, problem sets, and applied exercises. Blended delivery supports independent study while providing structured opportunities to apply concepts to computing problems.",
    syllabus: [
      { label: "Module 1 · 7 hrs", topic: "Logic, propositions and methods of proof" },
      { label: "Module 2 · 7 hrs", topic: "Sets, functions, sequences and summations" },
      { label: "Module 3 · 7 hrs", topic: "Numeral systems, Boolean algebra and combinational circuits" },
      { label: "Module 4 · 7 hrs", topic: "Mathematical induction and recursive reasoning" },
      { label: "Module 5 · 8 hrs", topic: "Counting techniques and discrete probability" },
      { label: "Module 6 · 9 hrs", topic: "Relations, graphs and trees" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/lessons/133782/units/3013381",
  },
  {
    code: "ELE-CGE-001",
    subject: "Business",
    title: "Experiential Learning and Entrepreneurship",
    desc: "Build the academic, collaborative and entrepreneurial skills needed to thrive at university and in your future career.",
    type: "Academic",
    delivery: "Blended",
    duration: "45 hrs",
    accent: accent.Business,
    bannerImage: bannerELE,
    hasDetailPage: true,
    price: 1850,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "In today's fast-paced and ever-changing global landscape, the ability to innovate, work effectively in teams, and lead with vision is more crucial than ever.\n\nThis introductory hybrid course provides learners with a broad understanding of the critical skills needed to succeed in both their academic and future professional careers. Through a blend of theoretical knowledge and practical application, learners are introduced to a range of strategies for academic success, innovation, and entrepreneurship.",
    outcomes: [
      "Demonstrate effective learning strategies for a university environment",
      "Develop critical thinking and problem-solving skills to address diverse situations and challenges",
      "Show effective group dynamics and strategies in group project work at the university level",
      "Demonstrate an understanding of an entrepreneurial mindset and innovative thinking skill",
    ],
    audience:
      "This course is designed for new and aspiring university learners, as well as early-career professionals who want to strengthen their academic skills, collaborative practice, and entrepreneurial thinking.",
    structure:
      "Delivered through blended learning, the course combines structured online modules with collaborative activities and applied tasks. Learners move through a clear sequence of topics covering academic success, teamwork, problem solving, and entrepreneurship.",
    howYouLearn:
      "You will learn through online modules, group-based activities, applied case studies, and reflective exercises. Blended delivery supports both independent study and collaborative practice.",
    syllabus: [
      { label: "Module 1 · 9 hrs", topic: "Foundations for university success and effective learning strategies" },
      { label: "Module 2 · 9 hrs", topic: "Critical thinking and problem solving in real-world contexts" },
      { label: "Module 3 · 9 hrs", topic: "Group dynamics, collaboration and team-based projects" },
      { label: "Module 4 · 9 hrs", topic: "Innovation, creativity and the entrepreneurial mindset" },
      { label: "Module 5 · 9 hrs", topic: "Applied entrepreneurship and project showcase" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/lessons/133782/units/3013381",
  },
  {
    code: "PGD-INIC-001",
    subject: "Health",
    title: "Post-Graduate Diploma in Interprofessional Neonatal Intensive Care (PGD INIC)",
    desc: "Advance your NICU practice with a stackable, interprofessional pathway covering leadership, applied therapeutics and immersive clinical practicum.",
    type: "Micro-credential",
    delivery: "Blended",
    duration: "18 months",
    accent: accent.Health,
    bannerImage: bannerPGD,
    hasDetailPage: true,
    price: 14500,
    currency: "QAR",
    language: "en",
    startDate: "Enrol anytime",
    longDesc:
      "Delivered in partnership with Sidra Medicine, the Post-Graduate Diploma in Interprofessional Neonatal Intensive Care is a unique educational pathway to upskill healthcare professionals in the Neonatal Intensive Care Unit (NICU).\n\nThis Micro-Credential Series is designed for NICU nurses seeking to advance their clinical expertise, leadership capacity, and evidence-based practice across the continuum of neonatal care. The pathway integrates critical competencies in leadership, research appraisal, and advanced therapeutics for both preterm and term infants, culminating in immersive clinical practice within high-acuity neonatal environments.",
    outcomes: [
      "Lead and manage change in complex neonatal intensive care environments",
      "Critically appraise research and apply evidence-based practice in NICU care",
      "Apply advanced therapeutic interventions for critically ill preterm infants",
      "Apply advanced therapeutic interventions for critically ill term infants",
      "Demonstrate advanced clinical decision-making in interprofessional NICU teams",
      "Integrate leadership, research and clinical expertise through immersive practicum",
    ],
    audience:
      "This pathway is designed for NICU nurses and interprofessional healthcare team members seeking to advance their clinical expertise, leadership capability, and evidence-based practice across the full continuum of neonatal intensive care.",
    structure:
      "The PGD INIC programme consists of four stackable Micro-Credentials, delivered through blended learning over 18 months.\n\nMC 1: Critical Competencies for Managing and Leading Change, supporting NICU nurses to enhance leadership and evidence-based decision-making.\n\nMC 2: Applied Therapeutics for Critically Ill Preterm Infants, deepening clinical expertise in care of preterm infants.\n\nMC 3: Applied Therapeutics for Critically Ill Term Infants, deepening clinical expertise in care of term infants.\n\nMC 4: Advanced Practices for the Critically Ill Infants, an immersive, hands-on clinical practicum integrating advanced clinical skills, real-time decision-making and collaborative interprofessional practice.",
    howYouLearn:
      "You will learn through blended delivery combining online theory, applied case-based learning, and immersive clinical practicum within high-acuity neonatal environments. The programme emphasises interprofessional collaboration and real-time decision-making in complex NICU contexts.",
    syllabus: [
      { label: "MC 1", topic: "Critical Competencies for Managing and Leading Change" },
      { label: "MC 2", topic: "Applied Therapeutics for Critically Ill Preterm Infants" },
      { label: "MC 3", topic: "Applied Therapeutics for Critically Ill Term Infants" },
      { label: "MC 4", topic: "Advanced Practices for the Critically Ill Infants, Clinical Practicum" },
    ],
    launchUrl: "https://d2l.udst.edu.qa/d2l/le/lessons/144413/units/3115857",
  },

  // ───────────────────────────────────────────────
  // Upcoming courses (coming soon)
  // ───────────────────────────────────────────────

  // College of Business
  {
    code: "ECON-2010",
    subject: "Business",
    title: "Business Economics",
    desc: "Core economic principles applied to real business decisions, with instructor Jaywant Michael.",
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
    desc: "Explore ethical decision-making in modern organisations, with instructor David Booker.",
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
    desc: "Foundations of epidemiology and population health, with Dr Musa Harona Moda.",
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
    desc: "Develop adaptive leadership and clinical management skills, with Dr Ayat.",
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
    title: "Fundamentals of AI",
    desc: "An introduction to the core concepts and techniques of artificial intelligence, with Dr Bekir.",
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
    desc: "Build foundational knowledge of cybersecurity principles and practice, with Dr Abdullatif.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Computing,
    isPlaceholder: true,
  },

  // College of Engineering
  {
    code: "AEMA-4100",
    subject: "Engineering",
    title: "Project Management and Leadership",
    desc: "Project management and leadership for engineering contexts, with Luay Hussein.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Engineering,
    isPlaceholder: true,
  },
  {
    code: "AEEP-4100",
    subject: "Engineering",
    title: "Project Management",
    desc: "Project management foundations for engineering professionals, with Dr Ahmad Awad.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Engineering,
    isPlaceholder: true,
  },

  // College of General Education
  {
    code: "SCIE-1002",
    subject: "Education",
    title: "General Science",
    desc: "An accessible introduction to general science, with instructor Majid Ibraheem.",
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
    desc: "Explore the complex links between globalisation and the environment through ecological, social, political, cultural, and economic perspectives, with instructor Mariam Alisi.",
    type: "Academic",
    delivery: "Blended",
    duration: "Coming soon",
    accent: accent.Education,
    isPlaceholder: true,
    longDesc:
      "It is important that students understand the intricate nexus between globalisation and the environment as many of our contemporary challenges relate to issues stemming from this complex relationship.\n\nThis interdisciplinary course examines multiple perspectives on ecological, social, political, cultural, and economic drivers. Students perform a multi-level analysis of diverse topics such as international cooperation, the global economy, and science and technology in the context of Qatar.\n\nStudents are expected to plan and execute a small project related to one of the primary case studies that will be explored throughout the semester.",
  },
];
