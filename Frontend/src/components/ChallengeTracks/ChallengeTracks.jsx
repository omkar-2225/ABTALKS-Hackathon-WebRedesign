import { motion } from "framer-motion";
import TrackCard from "./TrackCard";
import tracks from "./tracksData";

export default function ChallengeTracks() {
  return (
    <section className="py-36">

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="max-w-3xl"
        >

          <p className="uppercase tracking-[0.45em] text-violet-400 text-sm">

            CHOOSE YOUR CHALLENGE

          </p>

          <h2 className="mt-8 font-serif text-5xl text-white leading-tight lg:text-7xl">

            One challenge.

            <br />

            Many paths.

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400 max-w-2xl">

            Whether you're starting from scratch or leveling up your skills,
            every challenge is designed to help you build real projects and
            create a portfolio that recruiters can actually see.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tracks.map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}

        </div>

      </div>

    </section>
  );
}