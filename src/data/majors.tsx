const majors = [
  {
    school: "School of Astrology",
    type: "Major",
    name: "Portal Astrology",
    image_link: "majors/portal_astrology.jpg",
    description:
      "Portal astrology focuses on deciphering the early signals of a college admissions decision. From inspecting code to examining checklists, students will learn cutting-edge techniques to unravel what college admissions offices are really hiding.",
    degree_type: "Bachelor of Science (B.S.)",
    program_highlights: [
      "Hands-on portal analysis and experimentation",
      "Fieldwork in various decision platforms",
      "Interdisciplinary approach combining data science and psychology",
      "Ethical implications of admissions predictions"
    ],
    career_opportunities: [
      "Admissions Cryptographer",
      "Ethical Portal Hacker",
      "Astrotechnologist",
      "Checklist Engineer",
      "IDOC Specialist"
    ],
    required_courses: [
      "PTAS 102: Processing Modern Portal Astrology",
      "PTAS 103: Early Hints",
      "PTAS 202: Completing Acceptances",
      "PTAS 300: Choosing Between Resources",
      "PTAS 403: The Forbidden Path",
      "PTAS 409: Dealing with Conflicting Signals"
    ]
  },
  {
    school: "School of College",
    type: "Minor",
    name: "Essay Studies",
    image_link: "majors/essay_studies.jpg",
    description:
      "Essay Studies encourages students to learn about the inner workings of college essays. By combining ideation, originality, and revision, students will be able to write and analyze any college essay prompt.",
    degree_type: "Minor Program",
    program_highlights: [
      "Capstone essay analysis projects",
      "Access to AI-driven essay evaluation tools",
      "Internship opportunities with leading college admissions platforms",
      "Focus on personalized essay feedback systems"
    ],
    career_opportunities: [
      "Essay Editor",
      "Prompt Engineer",
      "Application Coach",
      "Supplemental Essay Strategist",
      "Personal Statement Analyst"
    ],
    required_courses: [
      "ADMIS 130: Application Systems",
      "ADMIS 210: Types of Supplemental Questions",
      "ADMIS 300: The Common App Essay",
      "ADMIS 430: Timed College Essay Writing",
      "ADMIS 450: AI Written Essays"
    ]
  },
  {
    school: "School of College",
    type: "Major",
    name: "Admissions Dynamics",
    image_link: "majors/admissions_dynamics.jpg",
    description:
      "The Admissions Dynamics major focuses on the journey from prospective applicant to enrollee. Students learn the nuances of application review, decision analytics, and the sociology of admissions.",
    degree_type: "Bachelor of Arts (B.A.)",
    program_highlights: [
      "Real-world admissions simulations",
      "Access to data visualization tools for applicant trends",
      "Collaboration with admissions offices nationwide",
      "Specialized coursework in enrollment management"
    ],
    career_opportunities: [
      "Admissions Officer",
      "A2C Content Creator",
      "College Social Media Manager",
      "Applicant Research Analyst",
      "Enrollment Executive"
    ],
    required_courses: [
      "ADMIS 120: Transcript Analysis",
      "ADMIS 160H: Unconventional Extracurriculars",
      "ADMIS 230: Letters of Recommendation and Rejection",
      "ADMIS 280: The Science Behind Olympiads",
      "ADMIS 390: Merits of Scholarships",
      "ADMIS 410: Presenting to Committee",
      "ADMIS 510: Virtual College Admissions Communities"
    ]
  },
  {
    school: "School of College",
    type: "Minor",
    name: "Rankings Sciences",
    image_link: "majors/rankings_sciences.jpg",
    description:
      "Rankings Sciences analyzes the methodology, psychology, and impact of college rankings. Students explore how institutions game the system and how rankings affect public perception.",
    degree_type: "Minor Program",
    program_highlights: [
      "Small, discussion-based classes",
      "Interdisciplinary connections to law, statistics, and marketing",
      "Opportunities for independent research in data manipulation",
      "Exclusive guest lectures by former rankings strategists"
    ],
    career_opportunities: [
      "Chief Data Strategist, U.S. News",
      "Common Data Set Editor, Columbia University",
      "Dean, Temple University Fox School of Business",
      "Senior Administrator, Claremont McKenna College",
      "Provost, Iona University"
    ],
    required_courses: [
      "RANK 100: History of College Rankings",
      "RANK 110: The Methodology Behind It All",
      "RANK 220: Ranking the College Rankings",
      "RANK 260: What Goes Up Must Come Down",
      "RANK 340: Gauging Legitimacy of Data Submissions",
      "RANK 450: Choosing the Top, From T14 to T20"
    ]
  },
  {
    school: "Westcote School of the Arts",
    type: "Major",
    name: "Minecraft Architecture",
    image_link: "majors/minecraft_architecture.jpg",
    description:
      "With the growth of the metaverse, Minecraft Architecture blends design, engineering, and creativity to build immersive virtual environments. Students gain expertise in pixelated design and block-based innovation.",
    degree_type: "Bachelor of Architecture (B.Arch)",
    program_highlights: [
      "Portfolio development with feedback from master builders",
      "Hands-on projects with collaborative team environments",
      "Exposure to virtual design tools and voxel technology",
      "Workshops with leading Minecraft influencers"
    ],
    career_opportunities: [
      "Game Designer",
      "Metaverse Architect",
      "Pixel Artist",
      "VR Experience Designer",
      "Build Team Lead"
    ],
    required_courses: [
      "MCRA 102: Foundations of Block Design",
      "MCRA 149: Building Better Biomes",
      "MCRA 204: Redstone for Automation",
      "MCRA 343: Pixel Art in 3D Space",
      "MCRA 400: Server Development and Management",
      "MCRA 460: Advanced Structure Design"
    ]
  },
  {
    school: "Ponzi School of Scamming",
    type: "Major",
    name: "Modern-Day Income Generation",
    image_link: "majors/modern_income.jpg",
    description:
      "Generating income in the modern day at a rate far exceeding traditional investments. Learn the art of wealth acquisition through unconventional means.",
    degree_type: "Bachelor of Income Tactfulness (B.A.I.T.)",
    program_highlights: [
      "Industry-leading insights on wealth generation",
      "Seminars with experts, including Andrew Tate and Tai Lopez",
      "Immediate implementation of strategies in real-world projects",
      "Mentorship from pioneers in high-yield investing"
    ],
    career_opportunities: [
      "Politician",
      "Blockchain Lead",
      "Head of Pyramidal Enterprises",
      "Chief Executive Officer"
    ],
    required_courses: [
      "BAIT 101: Pyramid Schemes 101",
      "BAIT 201: The Art of Dropshipping",
      "BAIT 301: Copywriting and Persuasion",
      "BAIT 401: Affiliate Marketing Mastery",
      "BAIT 450: Mastering Social Media Scams"
    ]
  },
  {
    school: "School of Engineering",
    type: "Major",
    name: "Social Engineering",
    image_link: "majors/social_engineering.jpg",
    description:
      "Social Engineering blends technical precision with psychological insight to design, influence, and manipulate human behavior in complex systems. Explore the intersection of technology and society to shape the world around you.",
    degree_type: "Bachelor of Science (B.S.)",
    program_highlights: [
      "Combines the analytical rigor of engineering with social sciences",
      "Engage in real-world manipulation simulations",
      "Analyze human behavior using data science and AI",
      "Master persuasive techniques for public influence"
    ],
    career_opportunities: [
      "Marketing Strategist",
      "Political Consultant",
      "Human Resources Specialist",
      "Propaganda Expert"
    ],
    required_courses: [
      "SOEN 101: Fundamentals of Human Influence",
      "SOEN 201: Psychological Manipulation Techniques",
      "SOEN 301: Cybersecurity and Social Penetration",
      "SOEN 401: Ethics in Social Engineering",
      "SOEN 450: Advanced Persuasion Models"
    ]
  },
  {
    "school": "Suits School of Law",
    "type": "Ppe-Professional Track",
    "name": "Pre-Law",
    "image_link": "majors/pre_law.jpg",
    "description":
      "Pre-Law explores the intersection of law, policy, and society, providing a strong foundation in critical thinking, ethical reasoning, and persuasive communication. Develop analytical skills to navigate complex legal systems and influence public discourse effectively.",
    "degree_type": "Non Degree",
    "program_highlights": [
      "Blend legal theory with practical advocacy techniques",
      "Engage in mock trials and case analysis",
      "Analyze societal impact through legal frameworks",
      "Master persuasive communication for legal and policy settings"
    ],
    "career_opportunities": [
      "Attorney",
      "Policy Analyst",
      "Legislative Assistant",
      "Compliance Officer"
    ],
    "required_courses": [
      "LAW 101: Introduction to Legal Reasoning",
      "LAW 201: Ethics and Law in Modern Society",
      "LAW 301: Constitutional Law and Civil Rights",
      "LAW 401: Legal Advocacy and Persuasion",
      "LAW 450: Advanced Legal Analysis"
    ]
  },
  {
    "school": "Suits School of Law",
    "type": "Minor",
    "name": "Better Call Saul Studies",
    "image_link": "minors/better_call_saul_studies.jpg",
    "description": "The Minor in Better Call Saul Studies dives into the world of legal strategy, ethics, and the colorful characters inspired by the iconic television series. Students will examine the fine line between right and wrong in law, exploring case studies from the show and how they relate to real-world legal practices.",
    "degree_type": "Bachelor of Arts (B.A.)",
    "program_highlights": [
      "Analysis of real legal cases alongside *Better Call Saul* episodes",
      "Guest lectures from former lawyers and legal experts",
      "Debates on legal ethics and personal integrity in law",
      "In-depth look at the criminal justice system through the lens of *Better Call Saul*"
    ],
    "career_opportunities": [
      "Criminal Defense Attorney",
      "Corporate Counsel",
      "Legal Consultant",
      "Legal Ethics Expert",
      "Public Defender"
    ],
    "required_courses": [
      "BCS 101: Introduction to Better Call Saul and Legal Ethics",
      "BCS 201: The Art of Legal Strategy in Criminal Defense",
      "BCS 301: Client Relationships and Moral Dilemmas",
      "BCS 401: The Law and The Lawyer: Ethics in Practice",
      "BCS 450: Advanced Topics in Legal Drama and Reality"
    ]
  },  
  {
    "school": "School of Astrology",
    "type": "Minor",
    "name": "Email Astrology",
    "image_link": "minors/email_astrology.jpg",
    "description": "The Minor in Email Astrology delves into the mystical art of analyzing college admissions emails to predict whether a student has been accepted. By studying astrological signs, language cues, and cosmic energy patterns in email communications, students gain the ability to interpret the subtle messages hidden in acceptance or rejection letters.",
    "degree_type": "Minor Program",
    "program_highlights": [
      "Learn to decode email language using astrological symbolism",
      "Workshops on interpreting cosmic patterns in formal communications",
      "Hands-on experience with real college admissions emails",
      "Analysis of astrological charts to predict outcomes"
    ],
    "career_opportunities": [
      "Email Astrologer for Admissions Consulting",
      "Astrological Counselor for College Applicants",
      "Psychic Email Analyzer",
      "College Admission Predictions Expert",
      "Astrological Consultant for Educational Institutions"
    ],
    "required_courses": [
      "EA 101: Introduction to Email Astrology and Cosmic Signs",
      "EA 201: Decoding Language and Astrological Patterns",
      "EA 301: Cosmic Energy in Email Communications",
      "EA 401: Advanced Email Analysis for College Admissions",
      "EA 450: Ethics of Predicting College Admissions Through Astrology"
    ]
  },  
  {
    school: "School of College",
    type: "Major",
    name: "College Admissions Consulting",
    image_link: "majors/admissions_consulting.jpg",
    description:
      "College Admissions Consulting focuses on the strategies and techniques used to navigate the college admissions process. Students learn how to guide applicants through the complexities of applications, interviews, and decision-making.",
    degree_type: "Bachelor of Arts (B.A.)",
    program_highlights: [
      "Hands-on experience with real-world case studies",
      "Internships with leading admissions consulting firms",  
      "Workshops with admissions officers from top universities",
      "Focus on personalized consulting techniques"
    ],
    career_opportunities: [
      "College Admissions Consultant",
      "Application Strategy Specialist",
      "Interview Coach",
      "College Planning Advisor",
      "Educational Counselor"
    ],
    required_courses: [
      "CONS 101: Fundamentals of College Admissions",
      "CONS 201: Application Strategy Development",
      "CONS 301: Interview Preparation Techniques",
      "CONS 401: College Selection and Fit",
      "CONS 450: Ethics in Admissions Consulting"
    ]
  },
  {
    "school": "Suits School of Law",
    "type": "Major",
    "name": "Illegal Studies",
    "image_link": "majors/illegal_studies.jpg",
    "description": "The Major in Illegal Studies is for those who wish to explore the *dark side* of the law, focusing on the art of defending the most notorious criminals and mastering the legal techniques that ensure their freedom. Students will delve into the ethics, strategy, and psychological nuances of representing clients often considered irredeemable, while developing cutting-edge defense tactics to challenge the justice system itself.",
    "degree_type": "Bachelor of Arts (B.A.)",
    "program_highlights": [
      "Intensive case studies on high-profile criminal defense cases",
      "Internships with top defense firms specializing in high-risk clients",
      "Workshops on mastering courtroom manipulation and strategy",
      "Exploration of legal loopholes and defense tactics used to evade justice"
    ],
    "career_opportunities": [
      "Criminal Defense Attorney for the Infamous",
      "Corporate Corruption Lawyer",
      "Defense Attorney for Organized Crime",
      "Legal Consultant for High-Profile Cases",
      "Evasion Expert for Corporate or Governmental Entities"
    ],
    "required_courses": [
      "IS 101: Introduction to Illegal Studies: Defending the Undesirable",
      "IS 201: Legal Manipulation and the Art of the Defense",
      "IS 301: Ethics of Defending the Guilty: A Grey Area",
      "IS 401: Advanced Defense Tactics and Courtroom Strategy",
      "IS 450: The Psychology of the Client and the Court"
    ]
  },
  {
    "school": "School of Modern Culture and Identity",
    "type": "Major",
    "name": "ABG Studies (Asian Baby Girl Studies)",
    "image_link": "majors/abg_studies.jpg",
    "description": "The Major in ABG Studies explores the cultural, social, and fashion trends associated with the Asian Baby Girl (ABG) identity. Students will examine the evolution of ABG as a cultural phenomenon, studying the intersection of style, music, identity, and community in the context of contemporary Asian youth culture. The program also delves into the role of ABGs in social media, popular culture, and the blending of traditional and modern Asian identities.",
    "degree_type": "Bachelor of Arts (B.A.)",
    "program_highlights": [
      "Analysis of ABG aesthetics, fashion, and beauty standards",
      "In-depth study of ABG influence on pop culture and social media",
      "Exploration of the intersection of Asian diaspora experiences and identity",
      "Workshops on styling, makeup techniques, and cultural representation"
    ],
    "career_opportunities": [
      "Cultural Consultant for Fashion and Media",
      "Social Media Influencer specializing in Asian Youth Culture",
      "Trend Analyst for Fashion or Music Industries",
      "Community Manager for Asian Cultural Organizations",
      "Creative Director for Media and Branding in Asian Communities"
    ],
    "required_courses": [
      "ABG 101: Introduction to ABG Culture and Aesthetic",
      "ABG 201: The History and Evolution of the ABG Identity",
      "ABG 301: ABGs in Media: Music, Social Media, and Fashion",
      "ABG 401: The Global Impact of ABG on Asian Diaspora",
      "ABG 450: ABG and the Future: Trends, Identity, and Representation"
    ]
  }  
];

export default majors;