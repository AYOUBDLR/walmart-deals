/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ShieldCheck, Check, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function App() {
  const [claimStep, setClaimStep] = useState<number>(0); // 0 = main landing, 1 = Q1, 2 = Q2, 3 = Email, 4 = Success
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [ageAnswer, setAgeAnswer] = useState<string>('');
  const [frequencyAnswer, setFrequencyAnswer] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showDemoToast, setShowDemoToast] = useState<boolean>(false);

  const handleNextStep = () => {
    setClaimStep((prev) => prev + 1);
  };

  const handleAgeSelect = (answer: string) => {
    setAgeAnswer(answer);
    setTimeout(() => {
      handleNextStep();
    }, 300);
  };

  const handleFrequencySelect = (answer: string) => {
    setFrequencyAnswer(answer);
    setTimeout(() => {
      handleNextStep();
    }, 300);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email address is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      handleNextStep();
    }, 1200);
  };

  // Steps matching the user's requirements exactly
  const steps = [
    { num: "01", text: "Answer a few quick questions" },
    { num: "02", text: "Enter your email address" },
    { num: "03", text: "Complete 4-5 sponsor deals" },
    { num: "04", text: "Receive your $750 gift card!" }
  ];

  return (
    <div className="min-h-screen bg-[#ebf3f9] text-[#0f172a] font-sans flex flex-col justify-center items-center p-4 overflow-hidden relative">
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/40 to-transparent pointer-events-none" />

      {/* Main Card Container - strictly designed to match the Ticketmaster style & layout */}
      <main className="w-full max-w-[420px] h-[92vh] max-h-[780px] bg-[#f5f9fc] rounded-[36px] shadow-2xl shadow-blue-900/10 border border-white/80 p-6 flex flex-col justify-between overflow-hidden relative">
        
        {/* Top Header Section: Walmart Logo */}
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-1.5 select-none">
            {/* Walmart Brand Wordmark */}
            <span className="text-[#0071dc] font-display text-[26px] font-bold tracking-tight lowercase">
              walmart
            </span>
            {/* Walmart Spark Icon SVG */}
            <svg className="w-7 h-7 text-[#ffc220] fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M12 2v6.5m0 7V22m-8.5-6.5l5.63-3.25m5.74-3.3l5.63-3.25m-11.37-.05l5.63 3.25M14.87 15.3l5.63 3.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {claimStep === 0 && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-between h-full"
            >
              {/* Pill Badge at the top of the card content */}
              <div className="text-center pt-2">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-slate-700 tracking-wide uppercase">
                    600+ USERS CLAIMED SO FAR
                  </span>
                </div>
              </div>

              {/* Large Headline & Subtitle */}
              <div className="text-center my-auto py-2">
                <h1 className="text-3xl font-extrabold font-display text-[#091e42] leading-[1.15] tracking-tight">
                  Get up to a <br />
                  <span className="text-[#0071dc] italic font-black text-4xl block my-1">
                    $750
                  </span>
                  Walmart Gift Card
                </h1>
                <p className="text-xs text-slate-500 font-medium max-w-[280px] mx-auto mt-2 leading-relaxed">
                  Follow these simple steps to claim your $750 Walmart gift card
                </p>
              </div>

              {/* Numbered Steps - styled exactly like the uploaded reference image */}
              <div className="flex flex-col gap-3 my-auto max-w-[320px] mx-auto w-full px-2">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-center gap-4 py-1">
                    <span className="text-base font-bold text-[#0071dc] font-mono tracking-wider w-6">
                      {step.num}
                    </span>
                    <span className="text-sm font-semibold text-[#1e293b] tracking-tight">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button & Help Subtitle */}
              <div className="pt-4 flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNextStep}
                  id="claim-now-btn"
                  className="w-full bg-[#10b981] hover:bg-emerald-600 text-white font-bold tracking-wide py-4 px-8 rounded-full shadow-lg shadow-emerald-500/20 cursor-pointer transition-colors text-center uppercase text-[15px] flex items-center justify-center gap-2 font-display"
                >
                  CLAIM NOW
                  <ArrowRight className="w-4.5 h-4.5" />
                </motion.button>
                <div className="text-center">
                  <span className="text-[10px] text-[#0071dc] font-semibold hover:underline cursor-pointer">
                    Sponsored deals completion required for eligibility.
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {claimStep === 1 && (
            <motion.div
              key="q1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between h-full py-4"
            >
              <div className="text-center pt-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Question 1 of 2
                </span>
                <h2 className="text-2xl font-bold font-display text-[#091e42] mt-5 mb-2 leading-tight">
                  Are you 18 years of age or older?
                </h2>
                <p className="text-xs text-slate-500">
                  This offer is strictly limited to US residents age 18 and older.
                </p>
              </div>

              <div className="flex flex-col gap-3 my-auto max-w-[320px] mx-auto w-full">
                <button
                  onClick={() => handleAgeSelect('Yes')}
                  className="w-full py-4 px-6 bg-white border border-slate-200 hover:border-[#0071dc] hover:bg-blue-50/30 transition rounded-2xl text-left font-semibold text-slate-800 flex items-center justify-between group cursor-pointer"
                >
                  <span>Yes, I am 18 or older</span>
                  <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-[#0071dc] flex items-center justify-center group-hover:bg-blue-50 transition">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0071dc] scale-0 group-hover:scale-100 transition" />
                  </div>
                </button>
                <button
                  onClick={() => handleAgeSelect('No')}
                  className="w-full py-4 px-6 bg-white border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition rounded-2xl text-left font-semibold text-slate-800 flex items-center justify-between group cursor-pointer"
                >
                  <span>No, I am under 18</span>
                  <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-red-500 flex items-center justify-center group-hover:bg-red-50 transition">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 scale-0 group-hover:scale-100 transition" />
                  </div>
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-400 font-medium">
                🔒 Secured and verified eligibility verification
              </div>
            </motion.div>
          )}

          {claimStep === 2 && (
            <motion.div
              key="q2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between h-full py-4"
            >
              <div className="text-center pt-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Question 2 of 2
                </span>
                <h2 className="text-2xl font-bold font-display text-[#091e42] mt-5 mb-2 leading-tight">
                  How often do you shop at Walmart?
                </h2>
                <p className="text-xs text-slate-500">
                  Your shopping frequency matches your deals eligibility.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 my-auto max-w-[320px] mx-auto w-full">
                {['Multiple times a week', 'Once a week', 'A few times a month', 'Rarely or Never'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleFrequencySelect(opt)}
                    className="w-full py-3.5 px-5 bg-white border border-slate-200 hover:border-[#0071dc] hover:bg-blue-50/30 transition rounded-2xl text-left text-sm font-semibold text-slate-800 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt}</span>
                    <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-[#0071dc] flex items-center justify-center group-hover:bg-blue-50 transition">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0071dc] scale-0 group-hover:scale-100 transition" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center text-[10px] text-slate-400 font-medium">
                Answered 1/2 profile checks
              </div>
            </motion.div>
          )}

          {claimStep === 3 && (
            <motion.div
              key="q3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between h-full py-4"
            >
              <div className="text-center pt-2">
                <span className="text-[10px] font-bold text-[#0071dc] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Final Step
                </span>
                <h2 className="text-2xl font-bold font-display text-[#091e42] mt-5 mb-2 leading-tight">
                  Enter Your Email
                </h2>
                <p className="text-xs text-slate-500">
                  Required to verify your account & deliver your $750 reward details.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 my-auto max-w-[320px] mx-auto w-full">
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                    <input
                      id="email-input"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0071dc] focus:ring-1 focus:ring-[#0071dc]/20 transition"
                      required
                    />
                  </div>
                  {emailError && (
                    <span className="text-[11px] text-red-500 font-semibold pl-1">
                      {emailError}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10b981] hover:bg-emerald-600 disabled:bg-emerald-400/50 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wide py-4 px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify & Continue
                      <ArrowRight className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Your information is protected by 256-bit SSL encryption.</span>
              </div>
            </motion.div>
          )}

          {claimStep === 4 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex-1 flex flex-col justify-between h-full py-4 text-center"
            >
              <div className="my-auto flex flex-col items-center gap-4 px-2 max-w-[320px] mx-auto w-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-1"
                >
                  <Check className="w-8 h-8 text-[#10b981] stroke-[3]" />
                </motion.div>

                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Matches Found!
                </span>

                <h2 className="text-2xl font-bold font-display text-[#091e42]">Congratulations!</h2>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your eligibility is fully verified. To secure and receive your <strong>$750 Walmart Gift Card</strong>, please complete 4-5 of our sponsor deals.
                </p>

                <div className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-left flex flex-col gap-2.5 mt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                    <span>Eligibility Status: <strong className="text-emerald-600">Approved</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                    <span>Reward Value: <strong className="text-emerald-600">$750.00</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                    <span>Delivery Email: <strong className="text-slate-800">{email}</strong></span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {showDemoToast ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-[#0071dc]/5 border border-[#0071dc]/10 text-[#0071dc] rounded-xl text-xs font-semibold leading-relaxed"
                  >
                    🚀 Demo Mode: Redirection simulated! In a live campaign, this button directs to secure sponsor offers.
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setShowDemoToast(true)}
                    className="w-full bg-[#10b981] hover:bg-emerald-600 text-white font-bold uppercase tracking-wide py-4 px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-colors cursor-pointer text-sm font-display"
                  >
                    Start Deals Now
                  </button>
                )}
                <button 
                  onClick={() => {
                    setClaimStep(0);
                    setShowDemoToast(false);
                    setEmail('');
                    setAgeAnswer('');
                    setFrequencyAnswer('');
                  }}
                  className="text-xs text-slate-400 hover:text-slate-500 transition underline mt-1.5 block mx-auto cursor-pointer font-medium"
                >
                  Back to main offer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legal Disclaimer at very bottom of card */}
        <div className="pt-3 border-t border-slate-100 text-center">
          <p className="text-[9px] text-slate-400 font-semibold leading-relaxed">
            No purchase necessary. Must be 18+. US residents only.
          </p>
        </div>
      </main>
    </div>
  );
}
