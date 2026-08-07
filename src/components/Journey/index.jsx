import React from 'react';

export default function Journey() {
  const steps = [
    { title: '1. Registration & Team Formation', desc: 'Sign up solo or with a team of up to 4 members. Connect on Discord.' },
    { title: '2. Track & Challenge Selection', desc: 'Choose your desired track and access problem statements & datasets.' },
    { title: '3. 48-Hour Hackathon Sprint', desc: 'Build your prototype with live mentorship sessions and workshops.' },
    { title: '4. Demo & Winner Announcement', desc: 'Pitch your solution live to top industry judges and win cash prizes.' },
  ];

  return (
    <section id="journey" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Hackathon Journey</h2>
          <p className="text-slate-400 mt-2">Four steps from idea to winning project presentation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/50 transition">
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
