import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import mockStudent from "../data/mockStudent";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const student = mockStudent;

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed left-1/2 top-5 z-50 w-[92%] -translate-x-1/2 rounded-full border border-white/10 bg-gradient-to-r from-black/20 to-gray-800/20 backdrop-blur-xl">

        <div className="mx-auto flex h-[72px] w-[92%] max-w-7xl items-center justify-between">

          {/* ================= LOGO ================= */}

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 font-bold shadow-[0_0_25px_rgba(124,58,237,.35)]">
              A
            </div>

            <div>
              <h1 className="text-sm font-semibold tracking-wide">
                ABTalks
              </h1>

              <p className="text-[10px] text-gray-500">
                60-Day Challenge
              </p>
            </div>

          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="/dashboard"
              className="text-sm text-white"
            >
              Dashboard
            </a>

            <a
              href="/day/12"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Challenge
            </a>

            <a
              href="#progress"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Progress
            </a>

            <a
              href="#achievements"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Achievements
            </a>

          </nav>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-3">

            {/* Notification */}

            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Notifications"
            >

              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" />

            </button>


            {/* Desktop Profile */}

            <div className="hidden items-center gap-2 border-l border-white/10 pl-3 sm:flex">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-300">
                {student.name.charAt(0)}
              </div>

              <div className="hidden lg:block">

                <p className="text-xs font-medium">
                  {student.name}
                </p>

                <p className="text-[10px] text-gray-500">
                  {student.track}
                </p>

              </div>

            </div>


            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Toggle menu"
            >

              {menuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}

            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (

        <div className="fixed left-4 right-4 top-[105px] z-40 rounded-2xl border border-white/10 bg-[#121217]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">

          <nav className="flex flex-col gap-2">

            <a
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Dashboard
            </a>

            <a
              href="/day/12"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              Today's Challenge
            </a>

            <a
              href="#progress"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              Progress
            </a>

            <a
              href="#achievements"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              Achievements
            </a>

          </nav>

        </div>

      )}


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto w-[92%] max-w-7xl pt-32">


        {/* =====================================================
            HERO / GREETING
        ===================================================== */}

        <section className="relative py-12 md:py-16">

          {/* Purple Glow */}

          <div className="pointer-events-none absolute right-0 top-0 -z-0 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]" />


          <div className="relative z-10">

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-400">
              ABTalks · 60-Day Challenge
            </p>


            <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">

              Good evening,{" "}

              <span className="text-white">
                {student.name}.
              </span>

            </h2>


            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              You're on a great path. Keep your momentum moving
              and ship something you're proud of.
            </p>

          </div>

        </section>


        {/* =====================================================
            QUICK STATS
        ===================================================== */}

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">


          {/* STREAK */}

          <div className="rounded-2xl border border-white/10 bg-[#121217] p-5">

            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              🔥
            </div>

            <p className="text-xs text-gray-500">
              Current streak
            </p>

            <h3 className="mt-1 text-2xl font-semibold">
              {student.streak.current} days
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {student.streak.message}
            </p>

          </div>


          {/* CURRENT DAY */}

          <div className="rounded-2xl border border-white/10 bg-[#121217] p-5">

            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              ⚡
            </div>

            <p className="text-xs text-gray-500">
              Current milestone
            </p>

            <h3 className="mt-1 text-2xl font-semibold">
              Day {student.challenge.currentDay}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {student.challenge.totalDays -
                student.challenge.currentDay}{" "}
              days remaining
            </p>

          </div>


          {/* XP */}

          <div className="rounded-2xl border border-white/10 bg-[#121217] p-5">

            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
              ✦
            </div>

            <p className="text-xs text-gray-500">
              Total XP
            </p>

            <h3 className="mt-1 text-2xl font-semibold">
              {student.stats.xp}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Keep building to earn more
            </p>

          </div>

        </section>


        {/* =====================================================
            TODAY'S CHALLENGE + PROGRESS
        ===================================================== */}

        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_0.8fr]">


          {/* TODAY'S CHALLENGE */}

          <div className="rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Today's Build
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Day {student.todayChallenge.day} of{" "}
                  {student.challenge.totalDays}
                </p>

              </div>


              <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[10px] text-violet-300">
                {student.todayChallenge.difficulty}
              </span>

            </div>


            <h3 className="mt-8 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              {student.todayChallenge.title}
            </h3>


            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
              {student.todayChallenge.description}
            </p>


            {/* SKILLS */}

            <div className="mt-6 flex flex-wrap gap-2">

              {student.todayChallenge.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400"
                >
                  {skill}
                </span>

              ))}

            </div>


            {/* CTA */}

            <a
              href={student.todayChallenge.route}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium shadow-[0_0_35px_rgba(124,58,237,.25)] transition hover:scale-[1.02]"
            >
              View today's challenge

              <span>
                →
              </span>

            </a>

          </div>


          {/* CHALLENGE PROGRESS */}

          <div
            id="progress"
            className="rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8"
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Challenge Progress
            </p>


            <h3 className="mt-3 text-center font-serif text-2xl">
              Day {student.challenge.currentDay} of{" "}
              {student.challenge.totalDays}
            </h3>


            {/* CIRCULAR PROGRESS */}

            <div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#8b5cf6_0deg,#c026d3_72deg,#27232f_72deg,#27232f_360deg)]">

              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#121217]">

                <span className="text-3xl font-semibold">
                  {student.challenge.completionPercentage}%
                </span>

                <span className="mt-1 text-[10px] text-gray-500">
                  complete
                </span>

              </div>

            </div>


            <div className="mt-6 text-center">

              <p className="text-sm font-medium">
                {student.challenge.daysRemaining} days to go
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Keep your streak alive.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            YOUR PROGRESS
        ===================================================== */}

        <section className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8">

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Your Progress
            </p>

            <h3 className="mt-2 font-serif text-2xl">
              You're building proof.
            </h3>

          </div>


          {/* STATS */}

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">


            {/* BUILDS */}

            <div className="bg-[#121217] p-5">

              <p className="text-2xl font-semibold">
                {student.stats.builds}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Builds
              </p>

            </div>


            {/* COMMITS */}

            <div className="bg-[#121217] p-5">

              <p className="text-2xl font-semibold">
                {student.stats.commits}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                GitHub commits
              </p>

            </div>


            {/* LINKEDIN */}

            <div className="bg-[#121217] p-5">

              <p className="text-2xl font-semibold">
                {student.stats.linkedInPosts}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                LinkedIn posts
              </p>

            </div>


            {/* XP */}

            <div className="bg-[#121217] p-5">

              <p className="text-2xl font-semibold">
                {student.stats.xp}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                XP earned
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}

        <section
          id="achievements"
          className="mt-6 pb-16"
        >

          <div className="mb-5">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Achievements
            </p>

            <h3 className="mt-2 font-serif text-2xl">
              Keep going. More are waiting.
            </h3>

          </div>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {student.achievements.map((achievement) => (

              <div
                key={achievement.id}
                className={`rounded-2xl border p-5 ${
                  achievement.unlocked
                    ? "border-violet-500/20 bg-violet-500/[0.06]"
                    : "border-white/10 bg-[#121217] opacity-40"
                }`}
              >

                <div className="text-2xl">
                  {achievement.icon}
                </div>


                <h4 className="mt-4 text-sm font-medium">
                  {achievement.title}
                </h4>


                <p className="mt-1 text-[11px] leading-5 text-gray-500">
                  {achievement.description}
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}