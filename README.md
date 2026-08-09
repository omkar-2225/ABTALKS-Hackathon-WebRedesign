# 🚀 ABTalks Hackathon Web Redesign

> A mobile-first redesign of **ABTalks**, a 60-day coding challenge platform designed to help college students build consistently, showcase their work, and turn daily progress into visible proof.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://abtalks-hackathon-web-redesign-4f5a.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🌐 Project Links

* **Live Demo:** https://abtalks-hackathon-web-redesign-4f5a.vercel.app
* **GitHub Repository:** https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign

---

## 🗺️ Route Map

The three required hackathon routes:

```text
/
/dashboard
/day/12
```

| Route        | Screen            |
| ------------ | ----------------- |
| `/`          | Landing Page      |
| `/dashboard` | Student Dashboard |
| `/day/12`    | Challenge Day     |

---

# 🎯 About the Project

ABTalks is a **60-day coding challenge** where college students build something every day and create a public record of their learning journey.

Students:

1. Choose a coding track
2. Complete one challenge every day
3. Submit proof of work through GitHub
4. Share their progress on LinkedIn
5. Build a portfolio through consistent practice

The goal of this redesign was to rethink the experience around the actual student using the platform.

The problem statement highlights an important context:

> Students often use ABTalks on their phones, late at night after college.

So this redesign focuses on making the experience **simple, motivating, mobile-first, and action-oriented**.

---

# ✨ Core Experiences

## 🏠 1. Landing Page — `/`

The first experience for a student who has never heard of ABTalks.

The page quickly communicates:

* What ABTalks is
* Why the 60-day challenge matters
* How the journey works
* How students build visible proof of work
* Why they should start

### Focus

**Understand → Commit → Start**

---

## 📊 2. Student Dashboard — `/dashboard`

The student's home screen during their 60-day journey.

The dashboard answers the most important question:

> **"What should I do today?"**

### Includes

* Current challenge day
* Current streak
* Overall challenge progress
* Today's challenge
* Coding track
* Achievements
* Milestones
* Clear next action

The dashboard is intentionally designed as a **daily action hub**, rather than a traditional analytics-heavy dashboard.

---

## ⚡ 3. Challenge Day — `/day/12`

The complete experience for an individual challenge day.

Students can:

* Read the day's task
* Understand what needs to be built
* Review challenge requirements
* Work through the challenge
* Add GitHub proof
* Add LinkedIn proof
* Complete the day's submission

### Challenge Flow

```text
Understand the Task
        ↓
      Build
        ↓
 Submit GitHub Proof
        ↓
 Submit LinkedIn Proof
        ↓
   Complete the Day
```

---

# 💡 Thoughtful UX

## 🌙 Designed for the "After College" Moment

The problem statement specifically highlights that students often use ABTalks:

> **On their phones, late at night after college.**

The redesign responds directly to this context.

Instead of overwhelming students with information, the interface focuses on:

* Short, scannable content
* Clear next actions
* Visible progress
* Strong visual hierarchy
* Low-friction interactions
* Mobile-friendly controls
* Motivation without unnecessary pressure

### Design Principle

> **Make the next day easier to start.**

A 60-day commitment can feel intimidating.

The interface breaks it into a simple daily loop:

```text
60 Days
   ↓
Today's Day
   ↓
Today's Challenge
   ↓
Build
   ↓
Show Your Work
   ↓
Make Progress
```

---

# 📱 Mobile-First Design

The primary target viewport for the hackathon is:

```text
390px
```

The interface was designed mobile-first and then adapted for larger screens.

### Mobile priorities

* Comfortable touch targets
* Readable typography
* Minimal information overload
* Clear primary CTA
* Compact content blocks
* Easy challenge navigation
* No unnecessary horizontal scrolling
* Important information available at a glance

---

# 🔥 Progress & Motivation

ABTalks is built around **consistency rather than perfection**.

The interface makes progress visible through:

### 🔥 Streak

Shows consecutive completed challenge days.

### 📈 Challenge Progress

Shows where the student currently stands in the 60-day journey.

### 🏆 Milestones

```text
Day 1   → First Step 🚀
Day 7   → Week One 🏆
Day 30  → 30 Day Streak ⚡
Day 60  → Challenge Finisher 👑
```

The goal is to make progress feel tangible while keeping the interface simple.

---

# 🧩 Real-World Edge Cases

The redesign considers common student states.

### 🌱 First Day

A student starting with:

```text
Day: 1
Streak: 0
```

is treated as a new beginning rather than an empty or broken state.

### 🔄 Missed Day

The experience focuses on recovery rather than guilt.

> **Your streak may pause. Your progress doesn't have to.**

### 👤 Empty Profile

Students without complete profile information are guided toward the next useful action instead of being shown meaningless empty statistics.

---

# 🎯 Hackathon Requirement Mapping

| Problem Statement Requirement   | Implementation                         |
| ------------------------------- | -------------------------------------- |
| Landing Page                    | `/`                                    |
| Student Dashboard               | `/dashboard`                           |
| Challenge Day                   | `/day/12`                              |
| Mobile-first                    | Designed around 390px                  |
| Current streak                  | Student Dashboard                      |
| Today's task                    | Dashboard + Challenge Day              |
| Overall completion              | Student Dashboard                      |
| Student standing / achievements | Dashboard                              |
| Read day's task                 | Challenge Day                          |
| Understand what to build        | Challenge Day                          |
| GitHub proof                    | Challenge Day                          |
| LinkedIn proof                  | Challenge Day                          |
| First-day state                 | Supported                              |
| Missed-day state                | Supported                              |
| Empty-profile state             | Supported                              |
| Thoughtful UX                   | After-college, low-friction experience |
| Authentication                  | Intentionally out of scope             |
| Production database             | Intentionally out of scope             |

---

# 📸 Screenshots

> Add screenshots of the three primary screens here.

### Landing Page

![ABTalks Landing Page](./docs/screenshots/landing.png)

### Student Dashboard

![ABTalks Student Dashboard](./docs/screenshots/dashboard.png)

### Challenge Day

![ABTalks Challenge Day](./docs/screenshots/day-12.png)

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* JavaScript
* React Router
* Tailwind CSS
* Lucide React
* Framer Motion

## Deployment

* Vercel

## Data

The hackathon frontend uses **mocked/local data**, as permitted by the problem statement.

Authentication and a production database are intentionally not required for this submission.

---

# 📁 Project Structure

```text
ABTALKS-Hackathon-WebRedesign/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── ...
│   │
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
│
└── README.md
```

---

# ⚙️ Run Locally

## 1. Clone the repository

```bash
git clone https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign.git
```

```bash
cd ABTALKS-Hackathon-WebRedesign
```

---

## 2. Run the Frontend

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🤖 AI Mentor — Optional Enhancement

The project also contains an AI Mentor experience designed to help students with:

* Challenge guidance
* Technical explanations
* Motivation
* Accountability
* Platform questions

The AI Mentor backend is maintained separately from the core hackathon frontend.

The **three required hackathon routes work independently using mocked/local data**.

The backend can be deployed and connected as a future enhancement.

---

# 🔮 Future Improvements

The current implementation intentionally stays within the hackathon scope.

Future possibilities include:

* Real authentication
* Persistent student profiles
* Production database
* Real GitHub integration
* LinkedIn integration
* Automated proof verification
* Persistent streak tracking
* Personalized challenge recommendations
* AI-powered learning assistance
* Recruiter-facing portfolio discovery
* Challenge recovery workflows

---

# 🚫 Out of Scope

The hackathon explicitly does not require:

* Authentication
* Real user accounts
* Production database
* Recruiter dashboard
* Admin panel
* Matching ABTalks' existing technology stack

The project therefore focuses on delivering a **high-quality experience across the three required screens**.

---

# 🧠 Design Philosophy

The redesign follows one simple principle:

> **Make the next day easier to start.**

Instead of making the student think about all 60 days at once, the interface focuses on today's progress.

```text
60-Day Goal
     ↓
Today's Challenge
     ↓
One Small Step
     ↓
Proof of Work
     ↓
Progress
```

Every completed day becomes another piece of the student's public learning story.

---

# 👨‍💻 Hackathon Submission

**ABTalks Hackathon — Redesign ABTalks**

### Submission Links

**Live Website:**
https://abtalks-hackathon-web-redesign-4f5a.vercel.app

**GitHub Repository:**
https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign

### Required Route Map

```text
/
/dashboard
/day/12
```

---

## ❤️ Built for Students Who Keep Showing Up

ABTalks is not just about completing 60 challenges.

It's about becoming the kind of student who **keeps showing up**.

> **Build every day. Show your work. Keep going.**
