import { useState } from "react";
import { ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProofSubmission({ challenge, onComplete }) {
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ================= URL HELPERS =================

  const isValidUrl = (value) => {
    try {
      const url = new URL(value);

      return (
        url.protocol === "http:" ||
        url.protocol === "https:"
      );
    } catch {
      return false;
    }
  };

  const isGithubUrl = (value) => {
    if (!isValidUrl(value)) return false;

    try {
      const url = new URL(value);

      return (
        url.hostname === "github.com" ||
        url.hostname === "www.github.com"
      );
    } catch {
      return false;
    }
  };

  const isLinkedinUrl = (value) => {
    if (!isValidUrl(value)) return false;

    try {
      const url = new URL(value);

      return (
        url.hostname === "linkedin.com" ||
        url.hostname === "www.linkedin.com"
      );
    } catch {
      return false;
    }
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // GitHub

    if (!githubUrl.trim()) {
      newErrors.github =
        "GitHub repository URL is required.";
    } else if (!isGithubUrl(githubUrl)) {
      newErrors.github =
        "Please enter a valid GitHub repository URL.";
    }

    // Live deployment

    if (!liveUrl.trim()) {
      newErrors.live =
        "Live deployment URL is required.";
    } else if (!isValidUrl(liveUrl)) {
      newErrors.live =
        "Please enter a valid deployment URL.";
    }

    // LinkedIn

    if (!linkedinUrl.trim()) {
      newErrors.linkedin =
        "LinkedIn post URL is required.";
    } else if (!isLinkedinUrl(linkedinUrl)) {
      newErrors.linkedin =
        "Please enter a valid LinkedIn URL.";
    }

    setErrors(newErrors);

    // Don't submit if validation failed

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Everything passed

    if (onComplete) {
      onComplete({
        githubUrl,
        liveUrl,
        linkedinUrl,
      });
    }

    setSubmitted(true);
  };

  return (
    <section className="mt-14 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:mt-16 sm:p-8">

      {/* ================= HEADER ================= */}

      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Proof of work
        </p>

        <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
          Show that you shipped it.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
          Your proof makes today's work visible. Add the links
          to your project and share what you built.
        </p>

      </div>


      {/* ================= SUBMITTED STATE ================= */}

      {submitted ? (

        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6">

          <div className="flex items-start gap-4">

            {/* Success Icon */}

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">

              ✓

            </div>


            {/* Success Message */}

            <div>

              <h3 className="font-medium text-white">
                Proof submitted successfully
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Your Day {challenge?.day || 12} proof has
                been recorded. Your progress is now part of
                your challenge history.
              </p>

            </div>

          </div>

        </div>

      ) : (

        /* ================= FORM ================= */

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* ================= GITHUB ================= */}

          <div>

            <label
              htmlFor="github"
              className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
            >

              <FaGithub size={16} />

              GitHub Repository

            </label>


            <div className="relative">

              <FaGithub
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                id="github"
                type="url"
                value={githubUrl}
                onChange={(e) => {

                  setGithubUrl(e.target.value);

                  if (errors.github) {
                    setErrors((prev) => ({
                      ...prev,
                      github: "",
                    }));
                  }

                }}
                placeholder="https://github.com/username/project"
                className={`w-full rounded-2xl border bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 ${
                  errors.github
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-violet-500/50"
                }`}
              />

            </div>


            {errors.github && (

              <p className="mt-2 text-xs text-red-400">
                {errors.github}
              </p>

            )}

          </div>


          {/* ================= LIVE DEPLOYMENT ================= */}

          <div>

            <label
              htmlFor="live"
              className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
            >

              <ExternalLink size={16} />

              Live Deployment

            </label>


            <div className="relative">

              <ExternalLink
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                id="live"
                type="url"
                value={liveUrl}
                onChange={(e) => {

                  setLiveUrl(e.target.value);

                  if (errors.live) {
                    setErrors((prev) => ({
                      ...prev,
                      live: "",
                    }));
                  }

                }}
                placeholder="https://your-project.vercel.app"
                className={`w-full rounded-2xl border bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 ${
                  errors.live
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-violet-500/50"
                }`}
              />

            </div>


            {errors.live && (

              <p className="mt-2 text-xs text-red-400">
                {errors.live}
              </p>

            )}

          </div>


          {/* ================= LINKEDIN ================= */}

          <div>

            <label
              htmlFor="linkedin"
              className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
            >

              <FaLinkedin
                size={16}
                className="text-blue-400"
              />

              LinkedIn Post

            </label>


            <div className="relative">

              <FaLinkedin
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400/60"
              />

              <input
                id="linkedin"
                type="url"
                value={linkedinUrl}
                onChange={(e) => {

                  setLinkedinUrl(e.target.value);

                  if (errors.linkedin) {
                    setErrors((prev) => ({
                      ...prev,
                      linkedin: "",
                    }));
                  }

                }}
                placeholder="https://www.linkedin.com/posts/..."
                className={`w-full rounded-2xl border bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 ${
                  errors.linkedin
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-violet-500/50"
                }`}
              />

            </div>


            {errors.linkedin && (

              <p className="mt-2 text-xs text-red-400">
                {errors.linkedin}
              </p>

            )}

          </div>


          {/* ================= SUBMIT ================= */}

          <div className="flex justify-end pt-2">

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition hover:scale-[1.02] active:scale-[0.98]"
            >

              Submit Proof

              <Send size={16} />

            </button>

          </div>

        </form>

      )}

    </section>
  );
}