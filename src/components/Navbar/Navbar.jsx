import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#" },
  { name: "Tracks", href: "#" },
  { name: "Community", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">

          <div className="flex items-center justify-between py-6">

            {/* Logo */}

            <div className="flex items-center gap-3 cursor-pointer">

              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 flex items-center justify-center font-bold text-xl shadow-[0_0_40px_rgba(124,58,237,.5)]">

                A

              </div>

              <div>

                <h2 className="text-white text-lg font-semibold tracking-wide">

                  ABTalks

                </h2>

                <p className="text-gray-400 text-xs">

                  60-Day Challenge

                </p>

              </div>

            </div>

            {/* Desktop */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item.name}
                </a>
              ))}

            </nav>

            {/* Desktop Button */}

            <div className="hidden lg:flex items-center gap-5">

              <button className="text-gray-300 hover:text-white transition">

                Login

              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-medium shadow-[0_0_40px_rgba(124,58,237,.35)]"
              >
                Start Journey

                <ArrowRight size={18} />

              </motion.button>

            </div>

            {/* Mobile */}

            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .3 }}
            className="fixed top-20 left-5 right-5 rounded-3xl bg-[#12121A] border border-white/10 backdrop-blur-xl z-40 lg:hidden p-6"
          >

            <div className="flex flex-col gap-6">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-gray-300 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>

              ))}

              <button className="mt-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-white font-semibold">

                Start Journey

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}