import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { studentsData } from '../data/students';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <h1 className="text-3xl font-bold text-white mb-2">Participant Dashboard</h1>
        <p className="text-slate-400 mb-8">Manage your hackathon submission, team members, and track status.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <h3 className="text-sm font-medium text-slate-400">Team Status</h3>
            <p className="text-2xl font-bold text-rose-500 mt-1">Confirmed (4/4 Members)</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <h3 className="text-sm font-medium text-slate-400">Submission Milestone</h3>
            <p className="text-2xl font-bold text-emerald-400 mt-1">Phase 2: Prototype</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <h3 className="text-sm font-medium text-slate-400">Time Remaining</h3>
            <p className="text-2xl font-bold text-amber-400 mt-1">18h 42m 10s</p>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Team Registrations</h2>
          <div className="divide-y divide-slate-800">
            {studentsData.map((student) => (
              <div key={student.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-white">{student.name}</p>
                    <p className="text-xs text-slate-400">{student.university} • {student.track}</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
