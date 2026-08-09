import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ChallengePreviewCard from "./ChallengePreviewCard";

export default function ChallengePreview() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">

      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-700/10 blur-[140px]" />

      <div className="container-custom relative z-10">

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex-1"
          >

            <p className="text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
              A DAY IN THE CHALLENGE
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              One day.
              <br />
              One build.
              <br />
              One step forward.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Every day gives you something real to build. Follow the task,
              use the resources, ship your work and keep your streak alive.
            </p>

            {/* Mini stats */}

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">

              <div>
                <p className="text-2xl font-semibold text-white">
                  60
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Challenge days
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  1
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Build every day
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  ∞
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Ways to grow
                </p>
              </div>

            </div>

            {/* CTA */}

            <button className="group mt-10 flex items-center gap-3 text-sm font-semibold text-white">

              See how Day 1 works

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />

            </button>

          </motion.div>

          {/* RIGHT SIDE */}

          <div className="w-full flex-1">
            <ChallengePreviewCard />
          </div>

        </div>

      </div>

    </section>
  );
}