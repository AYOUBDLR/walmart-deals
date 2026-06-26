/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function App() {
  // Track open FAQ accordion index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const steps = [
    { num: "01", text: "Tap \"CLAIM NOW\" below" },
    { num: "02", text: "Verify your email & details" },
    { num: "03", text: "Complete 4-5 sponsor deals" },
    { num: "04", text: "Receive your $750 gift card!" }
  ];

  const faqs: FaqItem[] = [
    {
      question: "Why do I need to complete the deals?",
      answer: "Sponsors fund these gift card programs. By trying their new products, premium services, or downloading partner applications, they sponsor the cost of your $750 Walmart Gift Card."
    },
    {
      question: "How long does it take?",
      answer: "The verification questionnaire takes less than 2 minutes. Sponsor deals can be completed online at your own pace from your phone or desktop."
    },
    {
      question: "Do I need to pay?",
      answer: "Many sponsor programs offer free trials or fully covered sign-ups, though some optional services may include nominal costs or subscriptions."
    },
    {
      question: "When do I receive my reward?",
      answer: "Once your 4-5 chosen sponsor deals are fully completed and verified by our system, your $750 Walmart Gift Card details will be instantly dispatched to your verified email address."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const redirectUrl = "https://trksy.org/aff_c?offer_id=1911&aff_id=144361";

  return (
    <div className="min-h-screen bg-[#ebf3f9] text-[#0f172a] font-sans flex flex-col items-center py-6 px-4 overflow-y-auto select-none">
      
      {/* Walmart Header Brand Area */}
      <header className="w-full max-w-[430px] flex justify-center items-center py-4 mb-3">
        <a 
          href={redirectUrl}
          className="flex flex-col items-center gap-1 focus:outline-none"
        >
          {/* Walmart Spark Logo on Top */}
          <svg className="w-11 h-11 text-[#ffb81c]" viewBox="0 0 100 100" fill="currentColor">
            <rect x="45.5" y="10" width="9" height="24" rx="4.5" />
            <rect x="45.5" y="66" width="9" height="24" rx="4.5" />
            <rect x="45.5" y="10" width="9" height="24" rx="4.5" transform="rotate(60 50 50)" />
            <rect x="45.5" y="10" width="9" height="24" rx="4.5" transform="rotate(120 50 50)" />
            <rect x="45.5" y="10" width="9" height="24" rx="4.5" transform="rotate(240 50 50)" />
            <rect x="45.5" y="10" width="9" height="24" rx="4.5" transform="rotate(300 50 50)" />
          </svg>
          {/* Walmart Blue Text Wordmark Centered on Bottom */}
          <span className="text-[#0071dc] font-display text-[30px] font-extrabold tracking-tight leading-none">
            Walmart
          </span>
        </a>
      </header>

      {/* Main Campaign Container */}
      <div className="w-full max-w-[430px] flex flex-col gap-6">
        
        {/* Step-by-Step Main Card */}
        <main className="w-full bg-[#f5f9fc] rounded-[36px] shadow-[0_20px_50px_rgba(0,113,220,0.06)] border border-white/80 p-6 flex flex-col gap-6 relative overflow-hidden">
          
          {/* Users Claimed Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase">
                600+ USERS CLAIMED SO FAR
              </span>
            </div>
          </div>

          {/* Big Bold Coupon Heading */}
          <div className="text-center px-2">
            <h1 className="text-[34px] font-extrabold font-display text-[#091e42] leading-[1.12] tracking-tight">
              Get up to a <br />
              <span className="text-[#0071dc] italic font-black text-5xl block my-1.5">
                $750
              </span>
              Gift Card
            </h1>
          </div>

          {/* Numbered Steps List as Premium White Cards with Pill Corners exactly like screenshot */}
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="flex items-center gap-4 bg-white rounded-2xl p-4.5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100/60"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-950 text-white font-display text-sm font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <span className="text-sm font-bold text-[#1e293b] leading-tight">
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTA Button (Standard anchor link wrapping stylized CTA block) */}
          <div className="flex flex-col gap-3.5 pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={redirectUrl}
              id="claim-now-btn"
              className="w-full bg-[#10b981] hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold tracking-wide py-4.5 px-8 rounded-full shadow-xl shadow-emerald-500/20 transition-colors text-center uppercase text-base flex items-center justify-center gap-2 font-display cursor-pointer"
            >
              CLAIM NOW
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <div className="text-center">
              <span className="text-[10.5px] text-slate-400 font-bold tracking-wide">
                Sponsored deals completion required for eligibility.
              </span>
            </div>
          </div>

          {/* Legal Disclaimer at very bottom of card */}
          <div className="pt-4 border-t border-slate-200/50 text-center">
            <p className="text-[9px] text-slate-400 font-extrabold leading-relaxed uppercase tracking-wider">
              No purchase necessary. Must be 18+. US residents only.
            </p>
          </div>
        </main>

        {/* Quick Questions Section (Exactly like ticketmaster FAQ) */}
        <section className="flex flex-col gap-3 pb-8">
          <h2 className="text-center font-display text-xl font-extrabold text-[#0071dc] py-1 select-none">
            Quick Questions
          </h2>

          <div className="flex flex-col gap-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.015)]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4.5 flex justify-between items-center text-left cursor-pointer focus:outline-none transition-colors"
                  >
                    <span className="text-sm font-bold text-[#1e293b] leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-4 text-[#0071dc]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[3]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
