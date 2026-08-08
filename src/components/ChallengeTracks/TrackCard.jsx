import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TrackCard({
  icon: Icon,
  title,
  duration,
  level,
  description,
  color,
}) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-violet-500/50 transition-all"
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center`}
      >
        <Icon className="text-white" size={28} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
          {level}
        </span>
      </div>

      <p className="mt-4 text-gray-400 leading-7">{description}</p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-gray-500">{duration}</span>

        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-violet-400 group-hover:gap-3 transition-all">
          Explore <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}