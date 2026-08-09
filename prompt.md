# ⚡ Vibe Coded with AI: ChatGPT & Antigravity Prompts

This project (**ABTalks 60-Day Challenge & Hackathon Platform**) was 100% **Vibe Coded** using AI prompts, leveraging ChatGPT and Google DeepMind's Antigravity AI assistant.

[![ChatGPT Shared Conversation](https://img.shields.io/badge/ChatGPT-Shared%20Chat-10a37f?style=for-the-badge&logo=openai&logoColor=white)](https://chatgpt.com/share/6a783c54-8d2c-83e8-a32d-ab348f94c8c7)
[![Vibe Coded Platform](https://img.shields.io/badge/Vibe%20Coded-with%20AI-purple?style=for-the-badge&logo=sparkles&logoColor=white)](https://abtalks-hackathon-web-redesign-4f5a.vercel.app)

---

## 🔗 Shared Chat Transcript
- 💬 **ChatGPT Shared Conversation**: [https://chatgpt.com/share/6a783c54-8d2c-83e8-a32d-ab348f94c8c7](https://chatgpt.com/share/6a783c54-8d2c-83e8-a32d-ab348f94c8c7)

---

## 🎯 What is Vibe Coding?
**Vibe Coding** is the modern approach of building complete full-stack applications through natural language prompts, architectural vision, and iterative AI pair programming. The entire UI/UX design, React component hierarchy, AI mentor integration, and Vercel deployment rules were built via AI prompting.

---

## 🎨 Prompt 1: UI/UX & Design System Architecture

```text
Act as a Principal Product Designer & Frontend Architect. 
Design a modern, high-converting, and visually stunning web application for the ABTalks 60-Day Hackathon Challenge.

Requirements:
1. Theme & Visual Style:
   - Deep dark mode background (#09090B and #121217).
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

---

## 🚀 Highlights of Vibe Coding
- ✨ **Prompt-Driven UI**: Glassmorphic dark theme engineered through prompts.
- ⚡ **Zero-Config SPA Routing**: Automated Vercel rewrites & `_redirects` configuration.
- 🧠 **Context-Aware AI Mentor**: Custom system prompts mapped to student mindset stages.
