import { motion } from "framer-motion";

export default function StatCard({ value, title, desc }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        border: "1px solid #7c3aed",
        boxShadow: "0 0 15px #7c3aed"
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
    >
      <h2 className="text-4xl font-bold text-white">{value}</h2>

      <h3 className="mt-3 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-400">
        {desc}
      </p>
    </motion.div>
  );
}