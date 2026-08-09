import { motion } from "framer-motion";
import StepCard from "./Steps.jsx";
import steps from "./Steps.js";

export default function HowItWorks() {
  return (
    <section className="py-36 relative overflow-hidden">

      {/* Purple Glow */}

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[160px]" />

      <div className="container-custom relative">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="max-w-3xl mx-auto text-center"
        >

          <p className="uppercase tracking-[0.45em] text-violet-400 text-sm">

            HOW IT WORKS

          </p>

          <h2 className="mt-8 font-serif text-5xl lg:text-7xl text-white leading-tight">

            Four simple steps.

            <br />

            Sixty days of growth.

          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8">

            Consistency beats intensity.

            Every day you build, share and improve.

            That's how developers become impossible to ignore.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="hidden lg:block mt-24 relative">

          <div className="absolute left-0 right-0 top-12 h-[2px] bg-gradient-to-r from-violet-600/20 via-violet-500 to-violet-600/20" />

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map(step => (
            <StepCard key={step.id} {...step} />
          ))}

        </div>

      </div>

    </section>
  );
}