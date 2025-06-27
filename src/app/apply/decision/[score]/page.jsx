'use client';
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Fish, Sparkles, Award, Clock, X } from "lucide-react";

// 👉 Replace with your actual Discord webhook URL or expose it via NEXT_PUBLIC_ env var.
const WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "SAMPLE";

export default function DecisionPortal() {
  const params = useParams();
  const scoreParam = params?.score;
  const numericScore = typeof scoreParam === "string" ? parseInt(scoreParam, 10) : Number(scoreParam);
  const isValidScore = Number.isFinite(numericScore) && numericScore >= 1 && numericScore <= 100;

  const [score, setScore] = useState(null);
  const [decision, setDecision] = useState(null);
  const [tuitionWaiver, setTuitionWaiver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const timers = useRef([]);

  const random100 = () => Math.floor(Math.random() * 100) + 1;

  const processApplication = useCallback((applicationScore) => {
    setIsProcessing(true);
    timers.current.push(
      window.setTimeout(() => {
        let waiver = false;
        let finalDecision = null;

        if (random100() <= applicationScore) {
          finalDecision = "accepted";
          if (random100() <= applicationScore) waiver = true;
        } else {
          finalDecision = random100() <= applicationScore ? "waitlisted" : "denied";
        }

        setDecision(finalDecision);
        setTuitionWaiver(waiver);
        setIsProcessing(false);
        timers.current.push(window.setTimeout(() => setShowLetter(true), 500));
      }, 2000)
    );
  }, []);

  // Kick off the processing when we have a valid score.
  useEffect(() => {
    if (isValidScore) {
      setScore(numericScore);
      processApplication(numericScore);
    }
  }, [isValidScore, numericScore, processApplication]);

  // Cleanup pending timers on unmount.
  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // 📡 Send score, decision, and client IP to Discord once we have a decision.
  useEffect(() => {
    if (!decision || score === null || !WEBHOOK_URL) return;

    const sendWebhook = async () => {
      try {
        // Get client IP address
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        // Post to Discord
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: `Mamma mia! A new-a application, she’sa processed:\nDa score: ${score}\nDa decisione: ${decision}\nDa IP-a: ${ip}`
          }),
        });
      } catch (error) {
        // Fail silently and log to console – keeps UI unaffected
        console.error("Error sending Discord webhook:", error);
      }
    };

    sendWebhook();
  }, [decision, score]);

  const decisionTheme = {
    accepted: {
      gradient: "from-emerald-500 to-green-600",
      icon: <Award className="w-12 h-12" />,
    },
    waitlisted: {
      gradient: "from-amber-500 to-yellow-600",
      icon: <Clock className="w-12 h-12" />,
    },
    denied: {
      gradient: "from-red-500 to-rose-600",
      icon: <X className="w-12 h-12" />,
    },
    default: {
      gradient: "from-gray-500 to-gray-600",
      icon: <Fish className="w-12 h-12" />,
    },
  };

  function DecisionLetter() {
    if (!decision) return null;

    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const common = {
      wrapper: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
      card: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
      header: `bg-gradient-to-r ${decisionTheme[decision].gradient} text-white p-8 rounded-t-2xl`,
    };

    const copy = {
      accepted: {
        title: "CONGRATULATIONS!",
        subtitle: "You have been ACCEPTED to Aeteau College",
        body: (
          <>
            <p className="mb-4">It is with tremendous pleasure that we welcome you to the Aeteau College community! Your exceptional application has earned you a place among our most distinguished incoming students.</p>
            {tuitionWaiver && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-blue-800">🎉 FULL TUITION WAIVER AWARDED!</h4>
                </div>
                <p className="text-blue-700">Your outstanding merit has earned you a complete tuition waiver for your first academic year—a recognition of your exceptional potential!</p>
              </div>
            )}
            <p className="mb-4">You join a legacy of scholars who have shaped our world through innovation, creativity, and dedication. Our vibrant campus community awaits your unique contributions.</p>
            <p className="mb-4">Welcome to Aeteau College!</p>
          </>
        ),
      },
      waitlisted: {
        title: "Application Under Review",
        subtitle: "You have been WAITLISTED for Aeteau College",
        body: (
          <>
            <p className="mb-4">Your application demonstrates significant merit and has earned you a place on our selective waitlist for the upcoming academic year.</p>
            <p className="mb-4">This year's applicant pool has been exceptionally competitive. While we cannot offer immediate admission, you remain under active consideration as our enrolled class composition is finalized.</p>
            <p className="mb-4">We will notify waitlisted candidates promptly if admission becomes available. Continue pursuing excellence, and keep us informed of any significant achievements.</p>
          </>
        ),
      },
      denied: {
        title: "Application Decision",
        subtitle: "Admission Decision for Aeteau College",
        body: (
          <>
            <p className="mb-4">After careful consideration of your application among our highly competitive applicant pool, we regret that we cannot offer you admission to Aeteau College at this time.</p>
            <p className="mb-4">This decision reflects the exceptional caliber of this year's candidates rather than any shortcoming in your achievements. Many remarkable students have found tremendous success at other outstanding institutions.</p>
            <p className="mb-4">We encourage you to pursue your academic passions wherever your journey leads, and we wish you extraordinary success in all your future endeavors.</p>
          </>
        ),
      },
    }[decision];

    return (
      <div className={common.wrapper}>
        <div className={common.card}>
          <div className={common.header}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">{decisionTheme[decision].icon}</div>
                <div>
                  <h2 className="text-2xl font-bold">{copy.title}</h2>
                  <p className="text-white/90">{copy.subtitle}</p>
                </div>
              </div>
              <button onClick={() => setShowLetter(false)} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-8">
            <div className="text-right text-gray-500 mb-6 text-sm">{today}</div>
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <Fish className="w-8 h-8 text-[#c2ac2a]" />
                <div>
                  <h3 className="text-xl font-bold text-[#8e7b1a]">Aeteau College</h3>
                  <p className="text-gray-600 text-sm">Office of Admissions</p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="mb-4 font-medium">Dear Future Scholar,</p>
                {copy.body}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="mb-1">With warm regards,</p>
                  <p className="font-semibold">Dr. Chloe T</p>
                  <p className="text-sm text-gray-600">Director of Admissions</p>
                  <p className="text-sm text-gray-600">Aeteau College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isValidScore) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <Fish className="w-16 h-16 mx-auto mb-4 text-[#c2ac2a]" />
          <h1 className="text-2xl font-bold mb-2">Invalid Application URL</h1>
          <p className="text-gray-300">Please use the format: /apply/decision/[score]</p>
          <p className="mt-2 text-sm text-gray-400">Score must be between 1‑100</p>
        </div>
      </div>
    );
  }

  const theme = decision ? decisionTheme[decision] : decisionTheme.default;

  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-700 to-slate-900 relative overflow-hidden">
      <main className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {isProcessing && (
          <div className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-[#c2ac2a] border-t-transparent rounded-full animate-spin" />
                  <div className="absolute inset-2 bg-gradient-to-r from-[#c2ac2a] to-[#8e7b1a] rounded-full opacity-20 animate-pulse" />
                </div>
              </div>
              <br></br>
              <h3 className="text-4xl font-bold text-white mb-4">Processing Your Application</h3>
              <p className="text-white/70 text-xl">Our admissions committee is reviewing your submission…</p>
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-[#c2ac2a] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#c2ac2a] rounded-full transform animate-bounce [animation-delay:100ms]" />
                <div className="w-2 h-2 bg-[#c2ac2a] rounded-full transform animate-bounce [animation-delay:200ms]" />
              </div>
            </div>
          </div>
        )}

        {decision && !isProcessing && (
          <div className="text-center">
            <div className={`bg-gradient-to-r ${theme.gradient} rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition duration-300`}>
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                {theme.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 capitalize">{decision === "accepted" ? "ACCEPTED!" : decision === "waitlisted" ? "WAITLISTED" : "DECISION MADE"}</h3>
              {tuitionWaiver && (
                <div className="bg-white/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold">FULL TUITION WAIVER AWARDED!</span>
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              )}
              <button onClick={() => setShowLetter(true)} className="bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transform hover:scale-105 transition">
                View Official Letter
              </button>
            </div>
          </div>
        )}
      </main>
      {showLetter && <DecisionLetter />}
    </div>
  );
}
