import { CheckCircle2, Flame, ArrowRight, Sparkles } from "lucide-react";

export default function ChallengeComplete({
  challenge,
  xpEarned = 100,
  streak = 13,
}) {
  return (
    <section className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8 md:p-10">

      {/* ================= SUCCESS HEADER ================= */}

      <div className="flex flex-col items-center text-center">

        {/* Success Icon */}

        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 shadow-[0_0_40px_rgba(52,211,153,.12)]">

          <CheckCircle2 size={30} />

        </div>


        {/* Label */}

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Challenge complete
        </p>


        {/* Title */}

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          You shipped it.
        </h2>


        <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
          Day {challenge?.day || 12} is complete. Your proof has been
          recorded and your progress has been updated.
        </p>

      </div>


      {/* ================= REWARD ================= */}

      <div className="mt-10 grid gap-3 sm:grid-cols-2">

        {/* XP */}

        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">

              <Sparkles size={19} />

            </div>

            <div>

              <p className="text-[10px] uppercase tracking-wider text-gray-500">
                XP earned
              </p>

              <p className="mt-1 text-xl font-semibold text-white">
                +{xpEarned} XP
              </p>

            </div>

          </div>

        </div>


        {/* STREAK */}

        <div className="rounded-2xl border border-orange-400/20 bg-orange-400/[0.05] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">

              <Flame
                size={19}
                fill="currentColor"
              />

            </div>

            <div>

              <p className="text-[10px] uppercase tracking-wider text-gray-500">
                Current streak
              </p>

              <p className="mt-1 text-xl font-semibold text-white">
                {streak} days
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= COMPLETED PROOF ================= */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
          Proof submitted
        </p>


        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={17}
              className="text-emerald-400"
            />

            <span className="text-sm text-gray-300">
              GitHub Repository
            </span>

            <span className="ml-auto text-[10px] text-emerald-400">
              Verified
            </span>

          </div>


          <div className="flex items-center gap-3">

            <CheckCircle2
              size={17}
              className="text-emerald-400"
            />

            <span className="text-sm text-gray-300">
              Live Deployment
            </span>

            <span className="ml-auto text-[10px] text-emerald-400">
              Verified
            </span>

          </div>


          <div className="flex items-center gap-3">

            <CheckCircle2
              size={17}
              className="text-emerald-400"
            />

            <span className="text-sm text-gray-300">
              LinkedIn Proof
            </span>

            <span className="ml-auto text-[10px] text-emerald-400">
              Verified
            </span>

          </div>

        </div>

      </div>


      {/* ================= NEXT ACTION ================= */}

      <div className="mt-8 flex justify-center">

        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Back to Dashboard

          <ArrowRight size={16} />

        </a>

      </div>

    </section>
  );
}