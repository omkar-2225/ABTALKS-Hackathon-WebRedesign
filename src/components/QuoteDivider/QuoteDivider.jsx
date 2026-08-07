import { motion } from "framer-motion";

export default function QuoteDivider() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10"
      >
        {/* Top Divider */}

        <div className="flex items-center gap-6 mb-15">

          <div className="flex-1 h-px bg-white/10" />

          <span className="uppercase tracking-[0.4em] text-violet-400 text-xs whitespace-nowrap">
            EVERY COMMIT TELLS A STORY
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

        {/* Quote */}

        <div className="flex flex-col items-center justify-center text-center">

          <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
            Build • Learn • Share
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400 text-lg leading-7">

            Every challenge completed is another proof that you're becoming
            the developer you aspire to be.

            Small, consistent actions create extraordinary results.

          </p>

        </div>

        {/* Bottom Divider */}

        <div className="flex items-center gap-6 mt-12">

          <div className="flex-1 h-px bg-white/10" />

          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase whitespace-nowrap">
            KEEP BUILDING
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

      </motion.div>

    </section>
  );
}