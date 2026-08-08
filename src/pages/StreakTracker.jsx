import { Flame, Check } from "lucide-react";

export default function StreakTracker({ streak, activity = [] }) {
  const totalDays = 60;

  const days = Array.from({ length: totalDays }, (_, index) => {
    const dayNumber = index + 1;

    const existingDay = activity.find(
      (item) => item.day === dayNumber
    );

    return {
      day: dayNumber,
      status: existingDay?.status || "upcoming",
      title: existingDay?.title || "Challenge not started",
      xp: existingDay?.xp || 0,
    };
  });

  const completedDays = days.filter(
    (day) => day.status === "completed"
  ).length;

  const proofDays = days.filter(
    (day) => day.status === "proof"
  ).length;

  const missedDays = days.filter(
    (day) => day.status === "missed"
  ).length;

  const getDayStyle = (status) => {
    switch (status) {
      case "proof":
        return "bg-fuchsia-500 border-fuchsia-400/40 shadow-[0_0_12px_rgba(217,70,239,.2)]";

      case "completed":
        return "bg-violet-500 border-violet-400/30";

      case "started":
        return "bg-violet-500/40 border-violet-400/20";

      case "missed":
        return "bg-red-500/30 border-red-400/20";

      default:
        return "bg-white/[0.04] border-white/5";
    }
  };

  return (
    <section className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        <div>

          <div className="flex items-center gap-2">

            <Flame
              size={16}
              className="text-orange-400"
              fill="currentColor"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Consistency
            </p>

          </div>

          <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
            Your building history.
          </h3>

          <p className="mt-2 max-w-lg text-xs leading-5 text-gray-500">
            Every square represents a day you showed up,
            built something, and moved forward.
          </p>

        </div>


        {/* STREAK */}

        <div className="flex items-center gap-3 rounded-2xl border border-orange-400/10 bg-orange-400/[0.05] px-4 py-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10">

            <Flame
              size={20}
              className="text-orange-400"
              fill="currentColor"
            />

          </div>

          <div>

            <p className="text-lg font-semibold">
              {streak.current}
            </p>

            <p className="text-[10px] text-gray-500">
              day streak
            </p>

          </div>

        </div>

      </div>


      {/* ================= STATS ================= */}

      <div className="mt-7 grid grid-cols-3 gap-2 sm:max-w-md sm:gap-3">

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">

          <p className="text-lg font-semibold">
            {completedDays}
          </p>

          <p className="text-[10px] text-gray-500">
            Completed
          </p>

        </div>


        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">

          <p className="text-lg font-semibold">
            {proofDays}
          </p>

          <p className="text-[10px] text-gray-500">
            Proof submitted
          </p>

        </div>


        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">

          <p className="text-lg font-semibold">
            {missedDays}
          </p>

          <p className="text-[10px] text-gray-500">
            Missed
          </p>

        </div>

      </div>

      {/* ================= HEATMAP ================= */}

    <div className="mt-8">

      <div className="flex items-center justify-between mb-4">

        <p className="text-xs text-gray-500">
        60-day activity
        </p>

        <p className="text-[10px] text-gray-600">
            Day 1 → Day 60
        </p>

    </div>


    {/* Desktop / Mobile responsive grid */}

    <div className="grid grid-cols-10 gap-2 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-20 xl:grid-cols-30">

    {days.map((day) => (

      <div
        key={day.day}
        className={`group relative aspect-square w-full cursor-pointer rounded-md border transition-all duration-200 hover:scale-110 ${getDayStyle(
          day.status
        )}`}
      >

        {/* Tooltip */}

        <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-[#18181F] p-3 text-left shadow-2xl group-hover:block">

          <p className="text-xs font-semibold text-white">
            Day {day.day}
          </p>

          <p className="mt-1 text-[10px] leading-4 text-gray-400">
            {day.title}
          </p>

          {day.xp > 0 && (
            <p className="mt-1 text-[10px] text-violet-400">
              +{day.xp} XP
            </p>
          )}

        </div>

      </div>

    ))}

  </div>

</div>


      {/* ================= LEGEND ================= */}

      <div className="mt-6 flex flex-wrap items-center gap-4">

        <p className="text-[10px] text-gray-500">
          Less
        </p>

        <div className="flex items-center gap-1.5">

          <span className="h-3 w-3 rounded-[3px] border border-white/5 bg-white/[0.04]" />

          <span className="h-3 w-3 rounded-[3px] border border-violet-400/20 bg-violet-500/40" />

          <span className="h-3 w-3 rounded-[3px] border border-violet-400/30 bg-violet-500" />

          <span className="h-3 w-3 rounded-[3px] border border-fuchsia-400/40 bg-fuchsia-500" />

        </div>

        <p className="text-[10px] text-gray-500">
          More
        </p>

        <div className="ml-2 flex items-center gap-1.5">

          <span className="h-3 w-3 rounded-[3px] border border-red-400/20 bg-red-500/30" />

          <span className="text-[10px] text-gray-500">
            Missed
          </span>

        </div>

      </div>


      {/* ================= MESSAGE ================= */}

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-violet-500/10 bg-violet-500/[0.04] p-4">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10">

          <Check
            size={15}
            className="text-violet-300"
          />

        </div>

        <div>

          <p className="text-xs font-medium text-gray-300">
            {streak.message}
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Complete today's challenge to keep your chain alive.
          </p>

        </div>

      </div>

    </section>
  );
}