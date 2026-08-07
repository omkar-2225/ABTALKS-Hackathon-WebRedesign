import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Total Prize Pool', value: '$50,000+' },
    { label: 'Participants', value: '1,200+' },
    { label: 'Specialized Tracks', value: '4 Tracks' },
    { label: 'Hours of Hacking', value: '48 Hours' },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-sm font-medium text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
