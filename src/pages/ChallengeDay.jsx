import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { challengeData } from '../data/challenge';

export default function ChallengeDay() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20">
            Live Event Mode
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4">{challengeData.title}</h1>
          <p className="text-slate-400 mt-2">{challengeData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Event Schedule</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Keynote & Opening Ceremony</span>
                <span className="text-rose-400 font-mono">09:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Hacking Begins</span>
                <span className="text-rose-400 font-mono">10:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Mentor Checkpoint 1</span>
                <span className="text-rose-400 font-mono">03:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Midnight Pitch Practice</span>
                <span className="text-rose-400 font-mono">12:00 AM</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Live Submission Portal</h3>
              <p className="text-slate-400 text-sm mb-6">
                Submit your GitHub Repository URL, Demo Video, and Pitch Deck before the deadline.
              </p>
            </div>
            <button className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white shadow-lg shadow-rose-950/50 transition">
              Submit Project Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
