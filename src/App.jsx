import React, { useState } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ChallengeDay from './pages/ChallengeDay';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="relative">
      {/* Quick Navigation Bar for Development */}
      <div className="fixed bottom-4 right-4 z-50 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 text-xs font-mono shadow-2xl">
        <span className="text-slate-400">View:</span>
        <button
          onClick={() => setCurrentPage('landing')}
          className={`px-2.5 py-1 rounded-full transition ${currentPage === 'landing' ? 'bg-rose-600 text-white' : 'text-slate-300 hover:text-white'}`}
        >
          Landing
        </button>
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`px-2.5 py-1 rounded-full transition ${currentPage === 'dashboard' ? 'bg-rose-600 text-white' : 'text-slate-300 hover:text-white'}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('challenge')}
          className={`px-2.5 py-1 rounded-full transition ${currentPage === 'challenge' ? 'bg-rose-600 text-white' : 'text-slate-300 hover:text-white'}`}
        >
          ChallengeDay
        </button>
      </div>

      {currentPage === 'landing' && <Landing />}
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'challenge' && <ChallengeDay />}
    </div>
  );
}
