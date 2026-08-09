# 🚀 ABTalks Hackathon Web Redesign

An AI-powered 60-Day Challenge & Hackathon Platform built for **ABTalks**. Features an interactive student dashboard, daily challenge tracking, proof of submission flow, and an intelligent **AI Mentor Chatbot** powered by Groq's `llama-3.3-70b-versatile` model.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://abtalks-hackathon-web-redesign-4f5a.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🌐 Quick Links

- 🔗 **Live Web Application**: [https://abtalks-hackathon-web-redesign-4f5a.vercel.app](https://abtalks-hackathon-web-redesign-4f5a.vercel.app)
- 🐙 **GitHub Repository**: [https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign](https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign)

---

## ✨ Key Features

### 🤖 1. AI-Powered Mentor Chatbot
- **Real-Time Guidance**: Integrated with Groq AI (`llama-3.3-70b-versatile`) to answer student queries, review code, and provide technical guidance.
- **Student Psychology Context**: Adapts responses based on student progress (First day motivation, Mid-journey persistence, and Final week push).
- **Persistent Floating UI**: Accessible from any page across the web application.

### 📊 2. Student Dashboard & 60-Day Streak Tracker
- **Activity Heatmap**: Visual 60-day contribution grid displaying daily challenge completion status.
- **Streak & XP Counter**: Tracks active daily streak, total earned XP, completed days, and submitted proofs.
- **Interactive Progress Cards**: Quick stats for active tracks, achievements, and daily milestones.

### 🎯 3. Specialized Challenge Tracks
- Multi-domain learning paths: **Web Development**, **AI / Machine Learning**, **Mobile App Development**, **UI/UX Design**, and **DevOps & Cloud**.
- Detailed track cards with required skills, estimated completion time, and prerequisite details.

### 🚀 4. Daily Challenge Execution & Proof Submission
- **Step-by-Step Briefs**: Detailed instructions, learning objectives, and resource links for every challenge day.
- **Proof of Submission**: Simple form allowing students to submit their GitHub repository links, live deployment URLs, and project screenshots.

### 🎨 5. Modern Aesthetic Design
- Premium **Dark Mode UI** with glowing accent gradients and sleek glassmorphism.
- Smooth transitions and interactive micro-animations powered by **Framer Motion**.
- Fully responsive across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite 6
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Integration**: Groq API (`llama-3.3-70b-versatile`)
- **Utilities**: CORS, Dotenv

### Infrastructure & Deployment
- **Client Hosting**: Vercel (configured with single-page application rewrites)
- **Version Control**: Git & GitHub

---

## 📁 Repository Structure

```text
ABTALKS_HACKATHON/
├── Frontend/                    # React (Vite) Client Application
│   ├── public/                  # Static assets & SPA routing rules (_redirects)
│   ├── src/
│   │   ├── assets/              # Logos, media, graphics
│   │   ├── components/          # Modular components (Navbar, Hero, Stats, ChatBot, etc.)
│   │   ├── data/                # Mock student datasets & track data
│   │   ├── hooks/               # Custom React hooks
│   │   ├── pages/               # Application pages (Landing, Dashboard, ChallengeDay, Login)
│   │   ├── utils/               # Helper utility functions
│   │   ├── App.jsx              # Main App router
│   │   └── main.jsx             # React entry point
│   ├── vercel.json              # Frontend deployment config
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── package.json             # Frontend dependencies
│
├── backend/                     # Node.js + Express Backend Server
│   ├── chat.js                  # Groq AI chatbot handler & prompt engineering logic
│   ├── server.js                # Express API server entry point
│   ├── routes/                  # API endpoints
│   ├── models/                  # Data structures
│   └── package.json             # Backend dependencies
│
├── vercel.json                  # Root Vercel monorepo deployment configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

---

## ⚡ Local Setup & Installation

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)
- **Groq API Key** (for AI Chatbot functionality)

---

### 1. Clone the Repository
```bash
git clone https://github.com/omkar-2225/ABTALKS-Hackathon-WebRedesign.git
cd ABTALKS-Hackathon-WebRedesign
```

---

### 2. Backend Setup
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   GROQ_API_KEY=your_groq_api_key_here
   ```
4. Start the backend server:
   ```bash
   npm start
   # or for auto-reload:
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`.

---

### 3. Frontend Setup
1. Open a new terminal and navigate to the `Frontend/` directory:
   ```bash
   cd Frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 🔌 API Endpoints

### POST `/api/chat`
Handles AI Chatbot conversations with student context.

**Request Body**:
```json
{
  "message": "How do I optimize my React state for Day 12 challenge?",
  "studentName": "Omkar",
  "currentDay": 12,
  "streak": 12,
  "track": "Web Development"
}
```

**Response**:
```json
{
  "reply": "Hey Omkar! Great job staying consistent on Day 12! For state optimization..."
}
```

---

## 📄 License

This project is created for the **ABTalks Hackathon**. All rights reserved.
