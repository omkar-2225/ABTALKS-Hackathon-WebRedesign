import { motion } from "framer-motion";
import { ArrowRight, Flame, GitBranch, Trophy, Users } from "lucide-react";

const milestones = [
  {
    day: "DAY 1",
    title: "Just Starting",
    description: "Your GitHub is waiting for its first commit.",
    stat: "0 commits",
  },
  {
    day: "DAY 15",
    title: "Finding Your Rhythm",
    description: "Your daily builds are becoming a habit.",
    stat: "15 commits",
  },
  {
    day: "DAY 30",
    title: "Halfway There",
    description: "Your profile is starting to tell a story.",
    stat: "30 commits",
  },
  {
    day: "DAY 60",
    title: "Built in Public",
    description: "A visible record of what you can actually build.",
    stat: "60 commits",
  },
];

const activity = [
  {
    icon: GitBranch,
    title: "Aarav completed Day 18",
    description: "Built a React dashboard",
    time: "2 min ago",
  },
  {
    icon: Flame,
    title: "Priya protected a 21-day streak",
    description: "Another day. Another commit.",
    time: "8 min ago",
  },
  {
    icon: Trophy,
    title: "Rohan reached Day 30",
    description: "Halfway to the finish line",
    time: "14 min ago",
  },
  {
    icon: GitBranch,
    title: "Sneha shipped an AI project",
    description: "Built her first RAG application",
    time: "21 min ago",
  },
];

export default function JourneyCommunity() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">

      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
            YOUR JOURNEY
          </p>

          <h2 className="mt-7 font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Your progress
            <br />
            becomes visible.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Start with one small build. Keep showing up. After 60 days,
            you'll have something much bigger than a streak — you'll have
            proof of what you can do.
          </p>
        </motion.div>

        {/* Journey timeline */}

        <div className="mt-20">

          <div className="hidden lg:block">
            <div className="relative">

              {/* Connecting line */}

              <div className="absolute left-[8%] right-[8%] top-7 h-px bg-gradient-to-r from-violet-500/10 via-violet-500 to-violet-500/10" />

              <div className="grid grid-cols-4 gap-6">

                {milestones.map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="relative text-center"
                  >

                    {/* Timeline dot */}

                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/40 bg-[#09090b]">

                      <div className="h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

                    </div>

                    <p className="mt-7 text-xs font-medium tracking-[0.3em] text-violet-400">
                      {item.day}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                    <p className="mt-5 text-sm font-medium text-gray-300">
                      {item.stat}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>
          </div>

          {/* Mobile timeline */}

          <div className="lg:hidden">

            <div className="relative ml-4 border-l border-violet-500/20 pl-8">

              {milestones.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative pb-12 last:pb-0"
                >

                  {/* Dot */}

                  <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-violet-500/40 bg-[#09090b]">

                    <div className="h-2 w-2 rounded-full bg-violet-500" />

                  </div>

                  <p className="text-xs tracking-[0.3em] text-violet-400">
                    {item.day}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-gray-300">
                    {item.stat}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        {/* Community */}

        <div className="mt-32 border-t border-white/10 pt-20">

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">

            {/* Community heading */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Users size={22} className="text-violet-400" />
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
                BUILD TOGETHER
              </p>

              <h3 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                You're not
                <br />
                building alone.
              </h3>

              <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
                Every student is on their own journey, but everyone is
                building toward the same thing — becoming better developers.
              </p>

              <button className="group mt-8 flex items-center gap-3 text-sm font-semibold text-white">

                Explore the community

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </button>

            </motion.div>

            {/* Activity feed */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full flex-1"
            >

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7">

                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Live activity
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Builders making progress right now
                    </p>
                  </div>

                  <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    Live

                  </span>

                </div>

                <div className="space-y-2">

                  {activity.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                        }}
                        className="flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/[0.04]"
                      >

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">

                          <Icon
                            size={18}
                            className="text-violet-400"
                          />

                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="truncate text-sm font-medium text-white">
                            {item.title}
                          </p>

                          <p className="mt-1 truncate text-xs text-gray-500">
                            {item.description}
                          </p>

                        </div>

                        <span className="shrink-0 text-[11px] text-gray-600">
                          {item.time}
                        </span>

                      </motion.div>
                    );
                  })}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}