import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white text-base">ABTalks Hackathon 2026</p>
          <p className="text-slate-500 text-xs mt-1">Empowering builders worldwide to solve real-world challenges.</p>
        </div>
        <div className="flex space-x-6 text-slate-400">
          <a href="#" className="hover:text-rose-400 transition">Privacy</a>
          <a href="#" className="hover:text-rose-400 transition">Terms</a>
          <a href="#" className="hover:text-rose-400 transition">Code of Conduct</a>
          <a href="#" className="hover:text-rose-400 transition">Discord</a>
        </div>
        <p className="text-slate-600 text-xs">© 2026 ABTalks. All rights reserved.</p>
      </div>
    </footer>
  );
}
