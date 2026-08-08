import { ArrowUpRight, ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const footerLinks = {
  Challenge: [
    "Tracks",
    "How It Works",
    "Challenge Preview",
  ],
  Journey: [
    "Dashboard",
    "Community",
    "Achievements",
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#07070A]">

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">

        {/* =========================
            TOP SECTION
        ========================== */}

        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">

          {/* =========================
              BRAND
          ========================== */}

          <div className="max-w-sm">

            {/* Logo */}

            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              AB<span className="text-violet-400">Talks</span>
            </a>

            {/* Description */}

            <p className="mt-5 text-sm leading-7 text-gray-500">
              A 60-day coding challenge for students who want to
              build consistently, share publicly, and become better
              developers.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">

              {/* GitHub */}

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaGithub size={17} />
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

            </div>

          </div>


          {/* =========================
              FOOTER LINKS
          ========================== */}

          <div className="grid grid-cols-2 gap-12 sm:gap-20">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>

                {/* Heading */}

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  {title}
                </p>

                {/* Links */}

                <div className="mt-6 space-y-4">

                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="group flex items-center gap-1 text-sm text-gray-500 transition duration-300 hover:text-white"
                    >

                      {link}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />

                    </a>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="my-12 h-px bg-white/10" />


        {/* =========================
            BOTTOM SECTION
        ========================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}

          <div>

            <p className="text-sm text-gray-500">
              © 2026 ABTalks
            </p>

            <p className="mt-1 text-xs text-gray-700">
              Built for students who build.
            </p>

          </div>


          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-400 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white sm:self-auto"
          >

            Back to top

            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />

          </button>

        </div>

      </div>

    </footer>
  );
}