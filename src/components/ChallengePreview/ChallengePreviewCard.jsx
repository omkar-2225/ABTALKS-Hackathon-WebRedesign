import { motion } from "framer-motion";
import {
  Check,
  FileText,
  PlayCircle,
  BookOpen,
  Flame,
  ArrowUpRight,
} from "lucide-react";

const requirements = [
  "Responsive layout",
  "Reusable components",
  "Interactive UI",
];

const resources = [
  {
    icon: FileText,
    label: "Requirements",
  },
  {
    icon: PlayCircle,
    label: "Walkthrough",
  },
  {
    icon: BookOpen,
    label: "Documentation",
  },
];

export default function ChallengePreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[32px] bg-violet-600/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111116] p-6 shadow-2xl sm:p-8">

        {/* Top */}

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              Challenge
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Day 12
            </h3>
          </div>

          <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            Intermediate
          </div>

        </div>

        {/* Title */}

        <div className="mt-8">

          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Build a Responsive Dashboard
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Turn a design into a responsive dashboard using React and
            Tailwind CSS. Focus on structure, reusable components and
            thoughtful interactions.
          </p>

        </div>

        {/* Goal */}

        <div className="mt-8 border-t border-white/10 pt-7">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Today's goal
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            Build something that works beautifully on both desktop and
            mobile.
          </p>

        </div>

        {/* Requirements */}

        <div className="mt-7">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Requirements
          </p>

          <div className="mt-4 space-y-3">

            {requirements.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/15">
                  <Check size={12} className="text-violet-400" />
                </span>

                {item}
              </div>
            ))}

          </div>

        </div>

        {/* Resources */}

        <div className="mt-7">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Resources
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">

            {resources.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-3 text-xs text-gray-400"
              >
                <Icon size={15} />

                <span>{label}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-sm text-gray-400">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10">
              <Flame size={16} className="text-orange-400" />
            </span>

            <span>
              <strong className="text-white">12</strong> day streak
            </span>

          </div>

          <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">

            View Challenge

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </button>

        </div>

      </div>
    </motion.div>
  );
}