const mockStudent = {
  // =========================
  // STUDENT PROFILE
  // =========================

  id: "student-001",

  name: "Aarav",

  fullName: "Aarav Sharma",

  avatar: null,

  role: "Frontend Developer",

  college: "Engineering Student",

  track: "Web Development",


  // =========================
  // CHALLENGE
  // =========================

  challenge: {
    name: "60-Day Coding Challenge",

    currentDay: 12,

    totalDays: 60,

    startDate: "2026-07-28",

    status: "active",

    daysRemaining: 48,

    completionPercentage: 20,
  },


  // =========================
  // STREAK
  // =========================

  streak: {
    current: 12,

    longest: 12,

    lastCompletedDay: 11,

    status: "active",

    message: "Keep showing up. It adds up.",
  },


  // =========================
  // TODAY'S CHALLENGE
  // =========================

  todayChallenge: {
    day: 12,

    title: "Build a Responsive Student Dashboard",

    description:
      "Create a responsive dashboard that helps a student track their learning progress, daily tasks, and achievements.",

    difficulty: "Intermediate",

    estimatedTime: "60 min",

    category: "Frontend",

    status: "not-started",

    completed: false,

    route: "/day/12",

    skills: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Component Design",
    ],
  },


  // =========================
  // PROGRESS
  // =========================

  progress: {
    completedDays: 12,

    totalDays: 60,

    percentage: 20,

    daysRemaining: 48,

    buildsCompleted: 12,

    githubCommits: 12,

    linkedInPosts: 11,
  },


  // =========================
  // IMPACT / STATS
  // =========================

  stats: {
    builds: 12,

    commits: 12,

    linkedInPosts: 11,

    xp: 840,

    hoursBuilt: 18,

    projectsPublished: 8,
  },


  // =========================
  // ACHIEVEMENTS
  // =========================

  achievements: [
    {
      id: 1,

      title: "First Step",

      description: "Completed your first challenge.",

      icon: "🚀",

      unlocked: true,

      day: 1,
    },

    {
      id: 2,

      title: "Week One",

      description: "Completed 7 consecutive days.",

      icon: "🏆",

      unlocked: true,

      day: 7,
    },

    {
      id: 3,

      title: "10 Day Streak",

      description: "Built for 10 days without breaking your streak.",

      icon: "🔥",

      unlocked: true,

      day: 10,
    },

    {
      id: 4,

      title: "10 Builds",

      description: "Completed 10 challenge projects.",

      icon: "💻",

      unlocked: true,

      day: 10,
    },

    {
      id: 5,

      title: "30 Day Streak",

      description: "Maintain a 30-day building streak.",

      icon: "⚡",

      unlocked: false,

      day: 30,
    },

    {
      id: 6,

      title: "Challenge Finisher",

      description: "Complete all 60 days.",

      icon: "👑",

      unlocked: false,

      day: 60,
    },
  ],


  // =========================
  // RECENT ACTIVITY
  // =========================

  recentActivity: [
    {
      id: 1,

      day: 11,

      title: "Build a GitHub Profile README",

      type: "Challenge completed",

      time: "Yesterday",

      completed: true,
    },

    {
      id: 2,

      day: 10,

      title: "Build a Landing Page",

      type: "Challenge completed",

      time: "2 days ago",

      completed: true,
    },

    {
      id: 3,

      day: 9,

      title: "Create a React Quiz App",

      type: "Challenge completed",

      time: "3 days ago",

      completed: true,
    },
  ],


  // =========================
  // LAST 14 DAYS
  // =========================

  activity: [
  {
    day: 1,
    status: "completed",
    title: "Build your developer profile",
    xp: 50,
  },
  {
    day: 2,
    status: "completed",
    title: "Create your first landing page",
    xp: 50,
  },
  {
    day: 3,
    status: "proof",
    title: "Build a responsive portfolio",
    xp: 75,
  },
  {
    day: 4,
    status: "completed",
    title: "JavaScript fundamentals",
    xp: 50,
  },
  {
    day: 5,
    status: "proof",
    title: "Build a React component",
    xp: 75,
  },
  {
    day: 6,
    status: "completed",
    title: "React state challenge",
    xp: 50,
  },
  {
    day: 7,
    status: "completed",
    title: "Build a mini project",
    xp: 50,
  },
  {
    day: 8,
    status: "completed",
    title: "API integration",
    xp: 50,
  },
  {
    day: 9,
    status: "proof",
    title: "Ship your project",
    xp: 75,
  },
  {
    day: 10,
    status: "completed",
    title: "GitHub workflow",
    xp: 50,
  },
  {
    day: 11,
    status: "completed",
    title: "Improve your project",
    xp: 50,
  },
  {
    day: 12,
    status: "completed",
    title: "Build a student dashboard",
    xp: 50,
  },
],
};

export default mockStudent;