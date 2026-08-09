# ABTalks Hackathon Platform

Welcome to the **ABTalks Hackathon** repository! This monorepo structure contains both the frontend UI and backend services for the ABTalks Hackathon web application.

---

## 📁 Repository Structure

```text
ABTalks-Hackathon/
├── frontend/             # React (Vite) + TailwindCSS client application
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── assets/       # Media, images, icons, logo
│   │   ├── components/   # Modular UI components (Navbar, Hero, Stats, Tracks, etc.)
│   │   ├── pages/        # Main pages (Landing, Dashboard, ChallengeDay)
│   │   ├── data/         # Mock data & datasets (tracks, students, challenges)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Helper functions & utilities
│   │   ├── App.jsx       # Root React component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles & Tailwind directives
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/              # Node.js + Express API server (optional / API layer)
│   ├── server.js         # Express server entry point
│   ├── routes/           # Express API route handlers
│   ├── models/           # Database / Data models
│   └── package.json
│
├── README.md             # Project documentation
└── .gitignore            # Git ignore configuration
```

---

## 🚀 Getting Started

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
Runs the Express server on [http://localhost:5000](http://localhost:5000).

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express, CORS, Dotenv
