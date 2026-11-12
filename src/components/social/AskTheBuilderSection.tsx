"use client";

import React, { useState } from "react";
import { INITIAL_APPROVED_QUESTIONS } from "@/data/socialContentData";
import { AskBuilderQuestion } from "@/types/socialTypes";

export const AskTheBuilderSection: React.FC = () => {
  const [questions, setQuestions] = useState<AskBuilderQuestion[]>(
    INITIAL_APPROVED_QUESTIONS
  );
  const [expandedId, setExpandedId] = useState<string | null>("q-01");

  // Form State
  const [askerName, setAskerName] = useState("");
  const [city, setCity] = useState("");
  const [constructionTopic, setConstructionTopic] = useState("Grey Structure & Steel");
  const [questionText, setQuestionText] = useState("");
  const [botTrapWebsite, setBotTrapWebsite] = useState("");
  const [formLoadTimestamp] = useState(Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitSuccess(null);

    if (!questionText.trim() || questionText.trim().length < 10) {
      setErrorMessage("Please enter a detailed question (minimum 10 characters).");
      return;
    }
    if (!askerName.trim()) {
      setErrorMessage("Please provide your name or initial.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/ask-builder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questionText,
          askerName,
          city: city || "Pakistan",
          constructionTopic,
          botTrapWebsite,
          formLoadTimestamp,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(
          `Thank you, ${askerName}! Your question (${data.questionId}) has been queued for engineering moderation. Verified questions are answered directly by Furqan Butt in upcoming site reels.`
        );
        setQuestionText("");
        setAskerName("");
        setCity("");
      } else {
        setErrorMessage(
          data.message || (data.errors && data.errors[0]) || "Could not submit question."
        );
      }
    } catch {
      setErrorMessage("A connection error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Question Submission Form */}
      <div className="lg:col-span-5 rounded-2xl bg-brand-charcoal/90 border border-brand-border/80 p-6 sm:p-7 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold font-semibold">
            Direct Technical Inquiry
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-ivory mb-2">
          Ask The Builder
        </h3>
        <p className="text-xs text-brand-muted leading-relaxed mb-5">
          Have a question about soil capacity, rebar gauges, contractor quotes, or 14-day curing? Submit below. All queries are moderated by our engineering desk before publishing.
        </p>

        {submitSuccess ? (
          <div className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-left animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-sm mb-2">
              <span>✓</span>
              <span>Queued for Moderation</span>
            </div>
            <p className="text-xs text-brand-ivory/90 leading-relaxed mb-4">
              {submitSuccess}
            </p>
            <button
              onClick={() => setSubmitSuccess(null)}
              className="text-xs text-brand-gold hover:underline font-medium"
            >
              Ask another question →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitQuestion} className="space-y-4">
            {/* Honeypot Bot Trap */}
            <input
              type="text"
              name="botTrapWebsite"
              value={botTrapWebsite}
              onChange={(e) => setBotTrapWebsite(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-[11px] font-medium text-brand-muted mb-1">
                Your Name <span className="text-brand-gold">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Asad Khan"
                value={askerName}
                onChange={(e) => setAskerName(e.target.value)}
                required
                className="w-full bg-brand-dark border border-brand-border rounded-xl p-2.5 text-xs text-brand-ivory focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-brand-muted mb-1">
                  City / Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Islamabad or UK"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-border rounded-xl p-2.5 text-xs text-brand-ivory focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-brand-muted mb-1">
                  Topic
                </label>
                <select
                  value={constructionTopic}
                  onChange={(e) => setConstructionTopic(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-border rounded-xl p-2.5 text-xs text-brand-ivory focus:outline-none focus:border-brand-gold"
                >
                  <option value="Grey Structure & Steel">Grey Structure & Steel</option>
                  <option value="Concrete Curing & Hydration">Concrete Curing & Hydration</option>
                  <option value="Contractor Rates & Fraud">Contractor Rates & Fraud</option>
                  <option value="Overseas Client Management">Overseas Client Management</option>
                  <option value="Finishing & Material Grades">Finishing & Material Grades</option>
                  <option value="Other Technical Question">Other Technical Question</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-brand-muted mb-1">
                Your Construction Question <span className="text-brand-gold">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Ask about rebar testing, laser alignment, footing depths, or contractor contract clauses..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
                className="w-full bg-brand-dark border border-brand-border rounded-xl p-2.5 text-xs text-brand-ivory focus:outline-none focus:border-brand-gold resize-none"
              />
            </div>

            <p className="text-[10px] text-brand-muted">
              🔒 Submissions undergo anti-spam and technical moderation. Never submit confidential financial details.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Submitting for Moderation..." : "Submit Question to Furqan Butt"}
            </button>
          </form>
        )}
      </div>

      {/* Right: Published Approved Builder Q&As */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-brand-border/60">
          <h3 className="text-base sm:text-lg font-serif font-bold text-brand-ivory">
            Verified Builder Q&A Archive
          </h3>
          <span className="text-xs text-brand-gold font-mono">
            {questions.length} Answers Published
          </span>
        </div>

        <div className="space-y-3">
          {questions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div
                key={q.id}
                className="rounded-xl bg-brand-charcoal/70 border border-brand-border/60 overflow-hidden transition-all hover:border-brand-border"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-surface text-brand-gold">
                        {q.constructionTopic}
                      </span>
                      <span className="text-[11px] text-brand-muted">
                        Asked by {q.askerName} ({q.city})
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-ivory leading-snug">
                      {q.question}
                    </h4>
                  </div>
                  <span className="text-brand-gold text-lg transition-transform font-mono">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded && q.answer && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-brand-border/40 bg-brand-dark/40 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-serif font-bold text-brand-gold mb-2">
                      <span>🎙️</span>
                      <span>Answered by {q.answeredBy || "Furqan Butt"}:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-ivory/90 leading-relaxed mb-3">
                      {q.answer}
                    </p>
                    {q.helpfulNotes && (
                      <div className="p-2.5 rounded-lg bg-brand-surface/60 border border-brand-border/60 text-[11px] text-brand-muted">
                        <strong className="text-brand-gold-light">Builder Tip:</strong> {q.helpfulNotes}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
