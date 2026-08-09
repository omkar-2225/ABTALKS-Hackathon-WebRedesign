# 💬 ChatGPT Prompts: ABTalks UI Design & Platform Architecture

This document contains the ChatGPT prompts and specifications used in designing and developing the **ABTalks 60-Day Hackathon Platform**.

---

## 🎨 Prompt 1: UI/UX & Design System Architecture

```text
Act as a Principal Product Designer & Frontend Architect. 
Design a modern, high-converting, and visually stunning web application for the ABTalks 60-Day Hackathon Challenge.

Requirements:
1. Theme & Visual Style:
   - Dark mode background (#09090B and #121217).
   - Glassmorphism cards with subtle glowing border accents (violet, orange, fuchsia).
   - Micro-animations using Framer Motion for scroll, hover, and component mounting.

2. Component & Page Hierarchy:
   - Landing Page (/): Hero section with CTA buttons, animated statistics counters, interactive challenge track cards, step-by-step 'How It Works' guide, community journey preview, and footer.
   - Student Dashboard (/dashboard): 60-day contribution heatmap grid, daily streak counter, XP statistics, active track progress.
   - Challenge Day View (/day/:dayNumber): Challenge brief, task objectives checklist, resource links, and proof submission form (GitHub link, live demo URL, screenshots).

3. Technology Stack:
   - React 19, Vite 6, Tailwind CSS v4, Framer Motion, Lucide React, React Router DOM v7.
```

---

## 🤖 Prompt 2: AI Mentor System & Student Psychology Prompting

```text
Act as an AI Mentor & Prompt Engineer. 
Design a system prompt for an AI assistant integrated into the ABTalks Hackathon platform.

Requirements:
1. Persona:
   - Empathetic, encouraging, and technical mentor named 'ABTalks AI Mentor'.
   - Provides clear, actionable code suggestions and constructive debugging feedback.

2. Student Psychology Adaptation:
   - First Day (Day 1): High excitement mixed with doubt. Provide warm onboarding and clear Day 1 objectives.
   - Middle Journey (Days 6-29): Motivation dip. Provide quick wins, reinforce consistency, and break down tasks into small steps.
   - Final Sprint (Days 50-60): High pressure & finish line focus. Guide project polishing, deployment, and final presentation.

3. API Integration:
   - Node/Express endpoint (/api/chat) using Groq API (llama-3.3-70b-versatile model).
```

---

## 🛠️ Prompt 3: SPA Routing & Vercel Deployment Rules

```text
Provide Vercel deployment configuration and Single Page Application (SPA) rewrite rules for a Vite + React Router project structured in a subfolder (/Frontend).

Requirements:
- Prevent 404 errors when users refresh deep routes like /day/12 or /dashboard.
- Add vercel.json rewrite rules mapping all routes (/(.*)) to /index.html.
- Add _redirects file in Frontend/public/ for static host fallbacks.
```
