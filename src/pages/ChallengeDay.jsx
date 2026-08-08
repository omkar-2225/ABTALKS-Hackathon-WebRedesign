import { ArrowLeft, Clock, Flame } from "lucide-react";
import mockStudent from "../data/mockStudent";
import ChallengeBrief from "../pages/ChallengeBrief";
import ChallengeRequirements from "./ChallengeRequirements";

export default function Challenge() {
  const student = mockStudent;
  const challenge = student.todayChallenge;

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      {/* ================= HEADER ================= */}

      <header className="fixed left-1/2 top-5 z-50 w-[92%] -translate-x-1/2 rounded-full border border-white/10 bg-gradient-to-r from-black/20 to-gray-800/20 backdrop-blur-xl">

        <div className="mx-auto flex h-[72px] w-[92%] max-w-7xl items-center justify-between">

          {/* Back */}

          <a
            href="/dashboard"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Dashboard
          </a>


          {/* Logo */}

          <div className="hidden items-center gap-2 sm:flex">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 text-sm font-bold">
              A
            </div>

            <span className="text-sm font-semibold">
              ABTalks
            </span>

          </div>


          {/* Streak */}

          <div className="flex items-center gap-2 rounded-full border border-orange-400/10 bg-orange-400/[0.05] px-3 py-2">

            <Flame
              size={15}
              className="text-orange-400"
              fill="currentColor"
            />

            <span className="text-xs text-gray-300">
              {student.streak.current} day streak
            </span>

          </div>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="mx-auto mt-15 w-[92%] max-w-5xl py-12 sm:py-16">

        {/* ================= CHALLENGE META ================= */}

        <div className="flex flex-wrap items-center gap-3">

          <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
            Day {challenge.day}
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-gray-400">

            <Clock size={12} />

            ~60 min

          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-gray-400">
            {challenge.difficulty}
          </span>

        </div>


        {/* ================= TITLE ================= */}

        <div className="mt-8 max-w-4xl">

          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {challenge.title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            {challenge.description}
          </p>

        </div>


        {/* ================= SKILLS ================= */}

        <div className="mt-7 flex flex-wrap gap-2">

          {challenge.skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400"
            >
              {skill}
            </span>

          ))}

        </div>


        {/* ================= START CARD ================= */}

        <section className="mt-12 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                Today's mission
              </p>

              <h2 className="mt-2 font-serif text-2xl">
                Ready to build?
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                Read the brief, complete the requirements, and
                submit your proof when you're done.
              </p>

            </div>


            <a
              href="#brief"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium shadow-[0_0_35px_rgba(124,58,237,.25)] transition hover:scale-[1.02]"
            >
              Start challenge
            </a>

          </div>

        </section>


        {/* ================= BRIEF PLACEHOLDER ================= */}

        <ChallengeBrief challenge={challenge} />

          {/* requirements */}
        <ChallengeRequirements challenge={challenge} />

      </main>

    </div>
  );
}