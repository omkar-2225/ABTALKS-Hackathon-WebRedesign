import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = 'px-4 py-2 rounded-xl text-sm font-semibold transition duration-200';
  const variants = {
    primary: 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/40',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800',
    outline: 'border border-rose-500/40 text-rose-400 hover:bg-rose-500/10',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, type = 'rose', className = '' }) {
  const types = {
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${types[type]} ${className}`}>
      {children}
    </span>
  );
}
