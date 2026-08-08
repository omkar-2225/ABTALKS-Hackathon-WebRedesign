import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "60 days of building",
  "Real projects for your portfolio",
  "Public proof of your progress",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">

      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[160px]" />

      {/* Giant 60 */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">

        <span className="font-serif text-[180px] font-bold leading-none text-white/[0.025] sm:text-[280px] lg:text-[400px]">
          60
        </span>

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">

        {/* Eyebrow */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.4em] font-medium uppercase text-violet-400"
        >
          YOUR NEXT 60 DAYS
        </motion.p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl font-serif text-3xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Don't wait to
          <br />
          become a developer.
          <br />
          <span className="text-violet-400">
            Start building.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
        >
          You don't need to know everything before Day 1.
          Pick a track, build something every day, and let
          60 days of consistent work show you how far you've come.
        </motion.p>

        {/* Benefits */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-9 flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3"
        >

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 text-sm text-gray-400"
            >

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10">
                <Check
                  size={12}
                  className="text-violet-400"
                />
              </span>

              {benefit}

            </div>
          ))}

        </motion.div>

        {/* CTA Button */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-11"
        >

          <button
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-violet-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 sm:px-9 sm:py-5 sm:text-base"
          >

            Start My 60-Day Challenge

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />

          </button>

          <p className="mt-5 text-xs text-gray-600">
            Free to start • One day at a time
          </p>

        </motion.div>

      </div>

    </section>
  );
}