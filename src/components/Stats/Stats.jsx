import { motion } from "framer-motion";
import StatCard from "./StatCard";
import statsData from "./statsData";

export default function Stats() {
  return (
    <section className="py-36">

      <div className="container-custom">

        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex-1"
          >

            <p className="uppercase tracking-[0.45em] text-violet-400 text-sm">

              WHY ABTALKS

            </p>

            <h2 className="mt-8 font-serif text-5xl leading-tight text-white lg:text-6xl">
                Not another coding platform.
                <br />
                <h3 className="text-[#7c3aed]">A daily proof of your growth.</h3>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-9 text-gray-400">

              Real developers aren't built overnight.

              They're built through consistency.

              Every project you finish becomes another proof that you're
              becoming someone recruiters can trust.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex-1 grid gap-6 sm:grid-cols-2"
          >

            {statsData.map((item) => (
              <StatCard
                key={item.id}
                value={item.value}
                title={item.title}
                desc={item.desc}
              />
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}