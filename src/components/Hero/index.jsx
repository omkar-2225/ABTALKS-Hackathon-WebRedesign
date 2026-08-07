import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
          Registration Now Open • Fall 2026 Edition
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Shape the Future of Tech at <span className="bg-gradient-to-r from-rose-500 via-amber-400 to-rose-400 bg-clip-text text-transparent">ABTalks Hackathon</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Join over 1,200+ innovative developers, designers, and creators for 48 hours of building, learning, and competing for $50,000+ in prizes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white shadow-xl shadow-rose-950/50 transition">
            Join the Challenge
          </button>
          <button className="px-8 py-4 rounded-xl text-base font-bold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition">
            Explore Tracks
          </button>
        </div>
      </div>
    </section>
  );
}
