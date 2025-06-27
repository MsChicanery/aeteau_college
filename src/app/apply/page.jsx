'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Apply() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gpa: '',
    sat: '',
    activities: [],
    essay: '',
    creativity: '',
    quirkyAnswer: '',
    dreamJob: '',
    superpower: '',
    pizzaTopping: '',
    timeTravel: '',
    zombieApocalypse: '',
    favoriteColor: '',
    coffeeTea: '',
    musicGenre: ''
  });

  const questions = [
    {
      title: "Basic Information",
      fields: [
        { key: 'name', label: 'Full Name', type: 'text', required: true },
        { key: 'email', label: 'Email Address', type: 'email', required: true }
      ]
    },
    {
      title: "Academic Background",
      fields: [
        { key: 'gpa', label: 'GPA (0.0 - 4.0)', type: 'number', min: 0, max: 4, step: 0.1, required: true },
        { key: 'sat', label: 'SAT Score (400-1600)', type: 'number', min: 400, max: 1600, required: false }
      ]
    },
    {
      title: "Extracurricular Activities",
      fields: [
        { 
          key: 'activities', 
          label: 'Select all that apply', 
          type: 'checkbox',
          options: [
            'Student Government', 'Sports Team', 'Drama Club', 'Debate Team', 
            'Volunteer Work', 'Part-time Job', 'Music/Band', 'Art Club',
            'Science Olympiad', 'Chess Club', 'Robotics', 'Coding Club'
          ]
        }
      ]
    },
    {
      title: "Personal Essay",
      fields: [
        { 
          key: 'essay', 
          label: 'Tell us about a time you overcame a challenge (min 50 words)', 
          type: 'textarea', 
          required: true,
          minLength: 50
        }
      ]
    },
    {
      title: "Creativity Corner",
      fields: [
        { 
          key: 'creativity', 
          label: 'Describe your most creative project or idea', 
          type: 'textarea', 
          required: true 
        }
      ]
    },
    {
      title: "The Fun Stuff - Part 1",
      fields: [
        { 
          key: 'dreamJob', 
          label: "What's your dream job?", 
          type: 'select',
          options: [
            'Astronaut', 'Professional Athlete', 'Artist', 'Scientist', 'Teacher', 
            'Entrepreneur', 'Doctor', 'Engineer', 'Writer', 'Chef', 'Other'
          ]
        },
        { 
          key: 'superpower', 
          label: 'If you could have any superpower, what would it be?', 
          type: 'select',
          options: [
            'Flying', 'Invisibility', 'Time Travel', 'Mind Reading', 'Super Strength',
            'Teleportation', 'Shape Shifting', 'Healing Powers', 'X-Ray Vision', 'Other'
          ]
        }
      ]
    },
    {
      title: "The Fun Stuff - Part 2",
      fields: [
        { 
          key: 'pizzaTopping', 
          label: 'Best pizza topping?', 
          type: 'select',
          options: [
            'Pepperoni', 'Mushrooms', 'Pineapple', 'Sausage', 'Vegetables',
            'Plain Cheese', 'Everything', 'Anchovies', 'BBQ Chicken', 'Other'
          ]
        },
        { 
          key: 'timeTravel', 
          label: 'If you could time travel, where would you go?', 
          type: 'select',
          options: [
            'Ancient Egypt', 'Medieval Times', 'Renaissance', 'Wild West',
            '1960s', 'Future (2100)', 'Dinosaur Era', 'Ancient Greece', 'Other'
          ]
        }
      ]
    },
    {
      title: "Almost Done!",
      fields: [
        { 
          key: 'zombieApocalypse', 
          label: 'Zombie apocalypse survival strategy?', 
          type: 'select',
          options: [
            'Hide in a bunker', 'Join a survivor group', 'Become zombie leader',
            'Find a cure', 'Live on a boat', 'Mountain fortress', 'Other'
          ]
        },
        { 
          key: 'quirkyAnswer', 
          label: 'Tell us something completely random about yourself', 
          type: 'textarea', 
          required: true 
        }
      ]
    },
    {
      title: "Final Touches",
      fields: [
        { 
          key: 'favoriteColor', 
          label: 'Favorite Color', 
          type: 'select',
          options: ['Red', 'Blue', 'Green', 'Purple', 'Orange', 'Yellow', 'Pink', 'Black', 'White', 'Other']
        },
        { 
          key: 'coffeeTea', 
          label: 'Coffee or Tea?', 
          type: 'select',
          options: ['Coffee', 'Tea', 'Neither', 'Both']
        },
        { 
          key: 'musicGenre', 
          label: 'Favorite Music Genre', 
          type: 'select',
          options: ['Pop', 'Rock', 'Hip-Hop', 'Classical', 'Jazz', 'Country', 'Electronic', 'Folk', 'Other']
        }
      ]
    }
  ];

  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCheckboxChange = (key, option) => {
    setFormData(prev => ({
      ...prev,
      [key]: prev[key].includes(option) 
        ? prev[key].filter(item => item !== option)
        : [...prev[key], option]
    }));
  };

  const calculateScore = () => {
    let score = 0;
    // Academic scoring (40% of total)
    const gpaScore = (parseFloat(formData.gpa) / 4.0) * 25;
    score += gpaScore;

    if (formData.sat) {
      const satScore = ((parseFloat(formData.sat) - 400) / 1200) * 15;
      score += satScore;
    } else {
      score += 10; // Partial credit for not taking SAT
    }

    // Extracurricular activities (20% of total)
    const activityScore = Math.min(formData.activities.length * 2.5, 20);
    score += activityScore;

    // Essay quality (15% of total)
    const essayWords = formData.essay.split(' ').length;
    const essayScore = Math.min((essayWords / 10) * 1.5, 15);
    score += essayScore;

    // Creativity (10% of total)
    const creativityScore = Math.min(formData.creativity.length / 20, 10);
    score += creativityScore;

    // Fun factor scoring (15% of total)
    let funScore = 0;

    const creativeDreamJobs = ['Astronaut', 'Artist', 'Entrepreneur', 'Writer', 'Other'];
    if (creativeDreamJobs.includes(formData.dreamJob)) funScore += 2;

    const originalSuperpowers = ['Time Travel', 'Shape Shifting', 'Healing Powers', 'Other'];
    if (originalSuperpowers.includes(formData.superpower)) funScore += 2;

    if (formData.pizzaTopping === 'Pineapple') funScore += 3;
    else if (formData.pizzaTopping === 'Anchovies') funScore += 2;
    else if (formData.pizzaTopping === 'Other') funScore += 2;
    else funScore += 1;

    const sophisticatedEras = ['Renaissance', 'Ancient Greece', 'Ancient Egypt'];
    if (sophisticatedEras.includes(formData.timeTravel)) funScore += 2;
    else funScore += 1;

    const creativeStrategies = ['Become zombie leader', 'Find a cure', 'Mountain fortress'];
    if (creativeStrategies.includes(formData.zombieApocalypse)) funScore += 2;
    else funScore += 1;

    funScore += Math.min(formData.quirkyAnswer.length / 30, 3);

    score += Math.min(funScore, 15);

    score = Math.max(1, Math.min(100, Math.round(score)));

    return score;
  };

  const handleSubmit = async () => {
    const score = calculateScore();

    // Fetch client IP address
    let ip = 'Unknown';
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      if (ipRes.ok) {
        const ipJson = await ipRes.json();
        ip = ipJson.ip || 'Unknown';
      }
    } catch (err) {
      console.error('IP lookup failed:', err);
    }

    // Send data to Discord webhook
    try {
      await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1387795741933834391/el83j3I5l_Y_XPL8mZg1C7mM-M0VwRM9OsCgjGimvhO4tweokKU7_5ZXZsleyPMNr9e4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          embeds: [
            {
              title: 'New Application Submitted',
              fields: [
                { name: 'Name', value: formData.name || 'N/A', inline: true },
                { name: 'Email', value: formData.email || 'N/A', inline: true },
                { name: 'IP', value: ip, inline: true },
                { name: 'Score', value: `${score}`, inline: true }
              ],
              timestamp: new Date().toISOString()
            }
          ]
        })
      });
    } catch (err) {
      console.error('Discord webhook failed:', err);
    }

    // Redirect to decision page
    window.location.href = `/apply/decision/${score}`;
  };

  const canProceed = () => {
    const currentQuestion = questions[currentStep];
    return currentQuestion.fields.every(field => {
      if (!field.required) return true;

      const value = formData[field.key];
      if (field.type === 'checkbox') return true; // Checkboxes are optional
      if (field.minLength) return value && value.length >= field.minLength;
      return value && value.toString().trim() !== '';
    });
  };

  const renderField = (field) => {
    const value = formData[field.key];

    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            type={field.type}
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={field.label}
            min={field.min}
            max={field.max}
            step={field.step}
            required={field.required}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
            placeholder={field.label}
            required={field.required}
          />
        );

      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required={field.required}
          >
            <option value="">Select an option...</option>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="grid grid-cols-2 gap-2">
            {field.options.map(option => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData[field.key].includes(option)}
                  onChange={() => handleCheckboxChange(field.key, option)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl min-h-screen">
      <br />
      <br />
      <br />
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-lime-300 to-lime-700 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center">
            Aeteau College Application
          </CardTitle>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-white' : 'bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {questions[currentStep].title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Step {currentStep + 1} of {questions.length}
            </p>
          </div>

          <div className="space-y-6">
            {questions[currentStep].fields.map(field => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                  {field.minLength && (
                    <span className="text-sm text-gray-500 ml-2">
                      (min {field.minLength} characters)
                    </span>
                  )}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
            >
              Previous
            </button>

            {currentStep === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
              >
                Submit Application! 🎓
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-indigo-700 transition-all"
              >
                Next
              </button>
            )}
          </div>

          {!canProceed() && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Please fill in all required fields to continue
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
