import React from 'react';
import { tracksData } from '../../data/tracks';

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Innovation Tracks</h2>
          <p className="text-slate-400 mt-2">Pick a track that aligns with your passion and skill set.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracksData.map((track) => (
            <div key={track.id} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Prize: {track.prize}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">{track.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{track.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">ID: {track.id}</span>
                <button className="text-xs font-bold text-rose-400 hover:text-rose-300">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
