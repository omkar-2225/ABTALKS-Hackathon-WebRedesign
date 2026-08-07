import { motion } from "framer-motion";

export default function StepCard({
  icon: Icon,
  title,
  description,
  id,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .3,
      }}
      className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 group"
    >
      <div className="absolute right-6 top-6 text-3xl font-light text-purple-500">
        {id}
      </div>

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">

        <Icon size={30} className="text-white"/>

      </div>

      <h3 className="mt-8 text-2xl text-white font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-8">
        {description}
      </p>
    </motion.div>
  );
}