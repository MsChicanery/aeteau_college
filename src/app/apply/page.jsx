'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Fully‑working, client‑side React component for the Aeteau College
 * multi‑step application. Includes real‑time validation for Email, GPA,
 * and SAT and blocks progression/submission until all required fields
 * are valid.
 */
export default function Apply() {
  /* ----------------------------- state ----------------------------- */
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gpa: "",
    sat: "",
    activities: [],
    essay: "",
    portalAstrology: "",
    enemiesQuestion: "",
    sillyProof: "",
    ponziPitch: "",
    dormPreference: "",
    creativity: "",
    quirkyAnswer: "",
    dreamJob: "",
    superpower: "",
    favoriteColor: "",
    admissionQuestions: "",
    musicGenre: "",
  });
  const [errors, setErrors] = useState({});

  /* ------------------------- question schema ------------------------ */
  const questions = [
    {
      title: "Basic Information",
      fields: [
        { key: "name", label: "Full Name", type: "text", required: true },
        { key: "email", label: "Email Address", type: "email", required: true },
      ],
    },
    {
      title: "Academic Background",
      fields: [
        {
          key: "gpa",
          label: "GPA (0.0 – 4.0)",
          type: "number",
          min: 0,
          max: 4,
          step: 0.01,
          required: true,
        },
        {
          key: "sat",
          label: "SAT Score (400 – 1600)",
          type: "number",
          min: 400,
          max: 1600,
          required: false,
        },
      ],
    },
    {
      title: "Extracurricular Activities",
      fields: [
        {
          key: "activities",
          label: "Select all that apply",
          type: "checkbox",
          options: [
            "Student Government",
            "Sports Team",
            "Drama Club",
            "Debate Team",
            "Volunteer Work",
            "Part‑time Job",
            "Music/Band",
            "Art Club",
            "Science Olympiad",
            "Chess Club",
            "Robotics",
            "Coding Club",
            "Astrological Society",
            "Minecraft Build Team",
            "Ponzi Scheme Simulation Club",
          ],
        },
      ],
    },
    {
      title: "Personal Essay",
      fields: [
        {
          key: "essay",
          label: "Tell us about a time you overcame a challenge",
          type: "textarea",
          required: true,
          minLength: 500, // 500 characters
        },
      ],
    },
    {
      title: "Portal Astrology & Divination",
      fields: [
        {
          key: "portalAstrology",
          label:
            "If you could predict your admissions decision using any mystical method, which would you choose?",
          type: "select",
          options: [
            "Portal Astrology",
            "Email Astrology",
            "Tea Leaves",
            "Crystal Ball",
            "Data Science",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Enemies",
      fields: [
        {
          key: "enemiesQuestion",
          label: "Who is your greatest enemy and why? (optional)",
          type: "text",
          required: false,
        },
      ],
    },
    {
      title: "Silly Question",
      fields: [
        {
          key: "sillyProof",
          label:
            "How silly are you? Show your work and proof.",
          type: "textarea",
          required: false,
        },
      ],
    },
    {
      title: "Ponzi School of Scamming",
      fields: [
        {
          key: "ponziPitch",
          label: "Pitch a (fictional) product for the Modern‑Day Income Generation major.",
          type: "text",
          required: false,
        },
      ],
    },
    {
      title: "Campus Life & Dorms",
      fields: [
        {
          key: "dormPreference",
          label: "Which dorm amenity is most important to you?",
          type: "select",
          options: [
            "Lava‑resistant walls",
            "Unlimited WiFi",
            "24/7 Café",
            "Soundproof rooms",
            "Secret passageways",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Creativity Corner",
      fields: [
        {
          key: "creativity",
          label: "Describe your most creative project or idea",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      title: "The Fun Stuff",
      fields: [
        {
          key: "dreamJob",
          label: "What's your dream job?",
          type: "select",
          options: [
            "Astronaut",
            "Professional Athlete",
            "Artist",
            "Scientist",
            "Teacher",
            "Entrepreneur",
            "Doctor",
            "Engineer",
            "Writer",
            "Chef",
            "Portal Astrologer",
            "Ponzi Scheme CEO",
            "Other",
          ],
        },
        {
          key: "superpower",
          label: "If you could have any superpower, what would it be?",
          type: "select",
          options: [
            "Flying",
            "Invisibility",
            "Time Travel",
            "Mind Reading",
            "Super Strength",
            "Teleportation",
            "Shape Shifting",
            "Healing Powers",
            "X‑Ray Vision",
            "Predicting College Decisions",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Almost Done!",
      fields: [
        {
          key: "quirkyAnswer",
          label: "Tell us something completely random about yourself",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      title: "Final Touches",
      fields: [
        {
          key: "favoriteColor",
          label: "Favorite Color",
          type: "select",
          options: [
            "Red",
            "Blue",
            "Green",
            "Purple",
            "Orange",
            "Yellow",
            "Pink",
            "Black",
            "White",
            "Aeteau Gold",
            "Other",
          ],
        },
        {
          key: "admissionQuestions",
          label: "Do any of the following apply to you?",
          type: "select",
          options: ["I completed a ninja course in 4 minutes or less", "I am an A2C Mod", "A family member of mine went here", "None"],
        },
        {
          key: "musicGenre",
          label: "Favorite Music Genre",
          type: "select",
          options: [
            "Pop",
            "Rock",
            "Hip‑Hop",
            "Classical",
            "Jazz",
            "Country",
            "Electronic",
            "Folk",
            "Sea Shanties",
            "Other",
          ],
        },
      ],
    },
  ];

  /* --------------------------- validation --------------------------- */
  const validators = {
    email: (val) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? "" : "Invalid email format.",
    gpa: (val) => {
      const num = parseFloat(val);
      if (Number.isNaN(num)) return "GPA must be a number.";
      if (num < 0 || num > 4) return "GPA must be between 0.0 and 4.0.";
      return "";
    },
    sat: (val) => {
      if (val === "" || val === null) return ""; // optional
      const num = parseInt(val, 10);
      if (Number.isNaN(num)) return "SAT must be a number.";
      if (num < 400 || num > 1600) return "SAT must be between 400 and 1600.";
      return "";
    },
  };

  /* ------------------------ handlers / helpers ---------------------- */
  const handleInputChange = (key, value) => {
    // store value
    setFormData((prev) => ({ ...prev, [key]: value }));

    // run validation if validator exists
    if (validators[key]) {
      const errorMsg = validators[key](value);
      setErrors((prev) => ({ ...prev, [key]: errorMsg }));
    }
  };

  const handleCheckboxChange = (key, option) => {
    setFormData((prev) => {
      const next = prev[key].includes(option)
        ? prev[key].filter((o) => o !== option)
        : [...prev[key], option];
      return { ...prev, [key]: next };
    });
  };

  const fieldIsValid = (field) => {
    // required/length checks (client‑side only)
    const value = formData[field.key];
    if (errors[field.key]) return false; // has validation error

    if (field.required) {
      if (field.type === "checkbox") return true; // optional selection count
      if (!value || value.toString().trim() === "") return false;
    }
    if (field.minLength) return value && value.length >= field.minLength;
    return true;
  };

  const canProceed = () =>
    questions[currentStep].fields.every((field) => fieldIsValid(field));

  /* --------------------------- scoring ------------------------------ */
  const calculateScore = () => {
    let score = 0;

    // academics 40%
    score += (parseFloat(formData.gpa || 0) / 4) * 25;
    if (formData.sat) {
      score += ((parseInt(formData.sat, 10) - 400) / 1200) * 15;
    } else {
      score += 10; // partial credit for not taking SAT
    }

    // activities 20%
    score += Math.min(formData.activities.length * 2.5, 20);

    // essay 10%
    score += Math.min(formData.essay.split(/\s+/).length / 10, 10);

    // creativity 10%
    score += Math.min(formData.creativity.length / 20, 10);

    // fun 10%
    let fun = 0;
    if (
      [
        "Astronaut",
        "Artist",
        "Entrepreneur",
        "Writer",
        "Portal Astrologer",
        "Ponzi Scheme CEO",
        "Other",
      ].includes(formData.dreamJob)
    )
      fun += 2;
    if (
      [
        "Time Travel",
        "Shape Shifting",
        "Healing Powers",
        "Predicting College Decisions",
        "Other",
      ].includes(formData.superpower)
    )
      fun += 2;
    if (formData.dormPreference === "Secret passageways") fun += 2;
    if (formData.portalAstrology === "Portal Astrology") fun += 2;
    if (formData.enemiesQuestion?.length > 10) fun += 2;
    if (formData.ponziPitch?.length > 10) fun += 2;
    if (formData.sillyProof?.length > 10) fun += 2;
    fun += Math.min(formData.quirkyAnswer.length / 30, 2);

    score += Math.min(fun, 10);

    const scoreAdjustments = new Map([
  ["I completed a ninja course in 4 minutes or less", 10],
  ["I am an A2C Mod", 10],
  ["A family member of mine went here", -100],
]);

const adjustment = scoreAdjustments.get(formData.admissionQuestions);
if (adjustment) {
  score += adjustment;
}


    return Math.max(1, Math.min(100, Math.round(score)));
  };

  /* ---------------------------- submit ------------------------------ */
  const handleSubmit = async () => {
    if (!canProceed()) return; // extra safety

    const score = calculateScore();

    // lookup IP (best‑effort, non‑blocking)
    let ip = "Unknown";
    try {
      const r = await fetch("https://api.ipify.org?format=json");
      if (r.ok) ip = (await r.json()).ip ?? ip;
    } catch (err) {
      console.error("IP lookup failed", err);
    }

    // discord webhook (if configured)
    if (process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "Italian Wiggle",
            avatar_url:
              "https://cdn.discordapp.com/attachments/1387795710476550315/1388256830647697650/kIxwYOc.png",
            content: `**Italiana Wigglea Wanta Reporta A Newa Applicationa!**\n**Nome:** ${formData.name}\n**Da E‑mail‑a:** ${formData.email}\n**Da IP‑a:** ${ip}\n**Da Score‑a:** ${score}`,
          }),
        });
      } catch (err) {
        console.error("Webhook failed", err);
      }
    }

    // redirect to decision
    window.location.assign(`/apply/decision/${score}`);
  };

  /* --------------------------- renderer ----------------------------- */
  const renderFieldControl = (field) => {
    const value = formData[field.key];

    if (["text", "email", "number"].includes(field.type)) {
      return (
        <input
          type={field.type}
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={field.label}
          {...(field.type === "number" && {
            min: field.min,
            max: field.max,
            step: field.step,
          })}
        />
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
          placeholder={field.label}
        />
      );
    }

    if (field.type === "select") {
      return (
        <select
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select an option…</option>
          {field.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === "checkbox") {
      return (
        <div className="grid grid-cols-2 gap-2">
          {field.options.map((o) => (
            <label key={o} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData[field.key].includes(o)}
                onChange={() => handleCheckboxChange(field.key, o)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">{o}</span>
            </label>
          ))}
        </div>
      );
    }

    return null;
  };

  /* ----------------------------- jsx ------------------------------- */
  return (
    <div className="container mx-auto p-4 max-w-2xl min-h-screen">
      {/* Spacer for navbars */}
      <div className="h-12" />

      <Card className="shadow-xl border-0">
        {/* header */}
        <CardHeader className="bg-gradient-to-r from-lime-300 to-lime-700 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center">
            Aeteau College Application
          </CardTitle>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i <= currentStep ? "bg-white" : "bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardHeader>

        {/* body */}
        <CardContent className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {questions[currentStep].title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Step {currentStep + 1} of {questions.length}
            </p>
          </div>

          {/* fields */}
          <div className="space-y-6">
            {questions[currentStep].fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                  {field.minLength && (
                    <span className="text-sm text-gray-500 ml-2">
                      (min {field.minLength} characters)
                    </span>
                  )}
                </label>
                {renderFieldControl(field)}
                {errors[field.key] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.key]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* nav buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
            >
              Previous
            </button>

            {currentStep === questions.length - 1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
              >
                Submit Application! 🎓
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentStep((p) => p + 1)}
                disabled={!canProceed()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-indigo-700 transition-colors"
              >
                Next
              </button>
            )}
          </div>

          {!canProceed() && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Please fix the highlighted errors to continue.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
