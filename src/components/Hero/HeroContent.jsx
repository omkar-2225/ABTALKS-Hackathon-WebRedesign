import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <p className="uppercase tracking-[0.3em] text-sm text-violet-400 font-medium mb-6">
        Build • Learn • Share
      </p>

      <h1 className="text-white font-serif leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-8xl">
        Become the
        <br />
        developer
        <br />
        recruiters notice.
      </h1>

      <p className="mt-8 max-w-xl text-gray-400 text-lg leading-8">
        Join the <span className="text-white font-semibold">60-Day Coding Challenge</span>.
        Build one project every day, grow your GitHub, share your progress on LinkedIn,
        and create a portfolio that proves your skills.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-white font-semibold shadow-[0_0_50px_rgba(124,58,237,.35)] flex items-center justify-center gap-2"
        >
          Start My Journey
          <ArrowRight size={18} />
        </motion.button>

        <button className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-white hover:bg-white/10 transition">
          Explore Tracks
        </button>
      </div>

      <div className="mt-12 flex flex-wrap gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">20K+</h2>
          <p className="text-gray-400">Students</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">1.8M</h2>
          <p className="text-gray-400">GitHub Commits</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">60</h2>
          <p className="text-gray-400">Challenge Days</p>
        </div>
      </div>
    </motion.div>
  );
}