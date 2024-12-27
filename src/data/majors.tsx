const majors = [
  {
    "school": "School of Astrology",
    "type": "Major",
    "name": "Portal Astrology",
    "image_link": "https://example.com/images/biology.jpg", // Change image
    "description": "Portal astrology focuses on deciphering the early signals of a college admissions decision. From inspecting code to examining checklists, students will learn cutting-edge techniques to unravel what college admissions offices are really hiding.",
    "degree_type": "Bachelor of Science (B.S.)",
    "program_highlights": [
      "Hands-on laboratory experience",
      "Opportunities for undergraduate research",
      "Fieldwork in a diverse array of platforms",
      "Interdisciplinary approach integrating digital forensics and pyschology" // Need smth better for this lol
    ],
    "career_opportunities": [
      "Admissions Cryptographer",
      "Ethical Portal Hacker",
      "Astrotechnologist",
      "Checklist Engineer",
      "IDOC Specialist"
    ],
    "required_courses": [ // Change to courses in major or smth like that vs general required
      "PTAS 102: Processing Modern Portal Astrology",
      "PTAS 103: Early Hints",
      "PTAS 202: Completing Acceptances",
      "PTAS 300: Choosing Between Resources",
      "PTAS 403: The Forbidden Path",
      "PTAS 409: Dealing with Conflicting Signals"
    ]
  },
  {
    "school": "School of College",
    "type": "Minor",
    "name": "Essay Studies",
    "image_link": "https://example.com/images/mechanical_engineering.jpg", // Change image
    "description": "Essay Studies encourages students to learn about the inner workings of college essays. By combining ideation, originality, and revision, students will be able to write and analyze any college essay prompt.",
    "degree_type": "Minor Program",
    "program_highlights": [
      "Capstone design projects",
      "State-of-the-art AI checkers",
      "Internship opportunities with leading college admissions companies",
      "Focus on reusable essay solutions"
    ],
    "career_opportunities": [ // Need more of these
      "Essay Editor",
      "Prompt Engineer",
      "???",
      "???",
      "???"
    ],
    "required_courses": [
      "ADMIS 130: Application Systems",
      "ADMIS 210: Types of Supplemental Questions",
      "ADMIS 300: The Common App Essay",
      "ADMIS 430: Timed College Essay Writing",
      "ADMIS 450: AI Written Essays",
    ]
  },
  {
    "school": "School of College",
    "type": "Major",
    "name": "Admissions", // Needs better name
    "image_link": "majors/default.png", // Change image
    "description": "The Admissions major focuses on the journey from prospective applicant to enrollee. Students learn what goes into the process, from initial applicant outreach to the final decision review process.",
    "degree_type": "Bachelor of Arts (B.A.)",
    "program_highlights": [
      "Real-world case studies and simulations",
      "Access to admissions analytics tools",
      "Collaboration with local admissions offices",
      "Specialized courses in college admissions marketing"
    ],
    "career_opportunities": [
      "Admissions Officer",
      "A2C Content Creator",
      "College Social Media Manager",
      "Applicant Research Analyst",
      "Enrollment Executive"
    ],
    "required_courses": [
      "ADMIS 120: Transcript Analysis",
      "ADMIS 160H: Unconventional Extracurriculars",
      "ADMIS 230: Letters of Recommendation and Rejection",
      "ADMIS 280: The Science Behind Olympiads",
      "ADMIS 390: Merits of Scholarships",
      "ADMIS 410: Presenting to Committee",
      "ADMIS 510: Virtual College Admissions Communities",
    ]
  },
  {
    "school": "School of College",
    "type": "Minor",
    "name": "Rankings Sciences",
    "image_link": "majors/default.png", // Change image
    "description": "Philosophy explores fundamental questions about existence, knowledge, values, reason, and ethics. This minor encourages critical thinking and logical analysis.",
    "degree_type": "Minor Program",
    "program_highlights": [
      "Small, discussion-based classes",
      "Interdisciplinary connections to law, statistics, and science",
      "Opportunities for independent study and research",
      "???" // Need last one here
    ],
    "career_opportunities": [
      "Chief Data Strategist, U.S. News",
      "Common Data Set Editor, Columbia University",
      "Dean, Temple University Fox School of Business",
      "Senior Administrator, Claremont McKenna College",
      "Provost, Iona University"
    ],
    "required_courses": [
      "RANK 100: History of College Rankings",
      "RANK 110: The Methodology Behind It All",
      "RANK 220: Ranking the College Rankings",
      "RANK 260: What Goes Up Must Come Down",
      "RANK 340: Gauging Legitimacy of Data Submissions",
      "RANK 450: Choosing the Top, From T14 to T20"
    ]
  },
  {
    "school": "Westcote School of the Arts",
    "type": "Major",
    "name": "Roblox Architecture",
    "image_link": "majors/default.png", // Change image
    "description": "With the growth of the virtual world, Roblox Architecture combines art and technology to create visual content. Students develop skills in spatial design, material representation, and global media.",
    "degree_type": "Bachelor of Architecture (B.Arch)",
    "program_highlights": [
      "Portfolio development with industry feedback",
      "Access to cutting-edge design software",
      "Collaborative projects with real-world clients",
      "Workshops with leading design professionals"
    ],
    "career_opportunities": [ // Change these
      "Graphic Designer",
      "UX/UI Designer",
      "Art Director",
      "Motion Graphics Artist",
      "Brand Identity Designer"
    ],
    "required_courses": [ // Need more
      "RBLX 102: What Makes a Block?",
      "RBLX 149: Design to Redefine",
      "RBLX 204: Virtual Physics",
      "RBLX 343: Raising Robux",
      "???",
      "???",
      "???"
    ]
  },
  {
    "school": "Ponzi School of Scamming",
    "type": "Major",
    "name": "Modern-Day Income Generation",
    "image_link": "majors/default.png",
    "description": "Generating income in the modern day at a much better rate than investment portfolios, a 9-5, or traditional savings accounts.",
    "degree_type": "Bachelor of Income Tactfullness (B.A.I.T.)",
    "program_highlights": [
      "Industry-leading insights on wealth generation",
      "Seminars with industry ecperts, including Andrew Tate, Hailey Welch and Tai Lopez",
      "Information that can be implemented in projects on day 1",
      "Award-winning instructors"
    ],
    "career_opportunities": [
      "Politician",
      "Blockchain Lead",
      "Head of Pyramidal Enterprises",
      "Chief Executive Officer"
    ],
    "required_courses": [
      "Economics 101",
      "Ancient Egyptian Architecture",
      "Horse and Sparrow Economics",
      "Statistics 102",
      "Public Speaking",
      "Dropshipping",
      "Copywriting",
      "Affiliate Marketing"
    ]
  },
    {
    "school": "School of Engineering",
    "type": "Major",
    "name": "Social Engineering",
    "image_link": "majors/default.png",
    "description": "Social Engineering is a cross-disciplinary program that combines the technical precision of engineering with the insights of sociology and psychology to design, organize, and influence human behavior in complex social systems. Students will explore the intersection of technology, human interaction, and societal structures, using advanced analytical tools and a deep understanding of human nature to solve modern problems.",
    "degree_type": "Bachelor of Science (B.S.)",
    "program_highlights": [
      "Combines the mathematical rigor of an engineering course with the soft skills of sociology",
      "Engage in real-world projects to create and solve problems in marketing, cybersecurity, public policy, and organizational design.",
      "Analyze and model human behavior using cutting-edge data science and AI techniques",
      "Applicable both in the workplace and in your personal life"
    ],
    "career_opportunities": [
      "Marketing Strategist",
      "Politician",
      "Human Resources Specialist",
      "Propaganda Expert"
    ],
    "required_courses": [
      "Human Dynamics",
      "Psychology 101",
      "Multivariable Calculus",
      "Statistics 102",
      "Behavioral Economics",
      "Cybersecurity 101",
      "Gender Studies",
      "Romantic Chemistry"
    ]
  }
];

export default majors;
