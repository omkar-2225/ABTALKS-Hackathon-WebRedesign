import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ABTalks Hackathon gave us the platform to transform our prototype into a VC-backed startup within 3 months.",
      author: "Elena Rostova",
      role: "2025 AI Track Winner",
    },
    {
      quote: "The mentorship and live judge feedback were unmatched. Highly recommended for every developer!",
      author: "David K.",
      role: "Web3 Track Finalist",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Alumni Say</h2>
          <p className="text-slate-400 mt-2">Hear from past winners and mentors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 italic text-slate-300">
              <p>"{t.quote}"</p>
              <div className="mt-6 not-italic">
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-rose-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
