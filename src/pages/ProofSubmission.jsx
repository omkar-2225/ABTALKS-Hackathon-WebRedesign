import { useState } from "react";
import { CheckCircle2, ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProofSubmission() {
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!githubUrl || !liveUrl || !linkedinUrl) {
      setError("Please provide all three proof links.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="proof"
      className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8 md:p-10"
    >

      {/* ================= HEADER ================= */}

      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Proof of work
        </p>

        <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
          Show that you shipped it.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
          Submit your work so your progress becomes part of your
          challenge history.
        </p>

      </div>


      {/* ================= FORM ================= */}

      {!submitted ? (

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
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
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/project"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.03]"
              />

            </div>

          </div>


          {/* ================= LIVE URL ================= */}

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
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://your-project.vercel.app"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.03]"
              />

            </div>

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
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.03]"
              />

            </div>

          </div>


          {/* ================= ERROR ================= */}

          {error && (

            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] px-4 py-3 text-xs text-red-400">
              {error}
            </div>

          )}


          {/* ================= SUBMIT ================= */}

          <div className="flex justify-end pt-3">

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition hover:scale-[1.02] active:scale-[0.98]"
            >

              Submit Proof

              <Send size={16} />

            </button>

          </div>

        </form>

      ) : (

        /* ================= SUCCESS ================= */

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">

              <CheckCircle2 size={21} />

            </div>

            <div>

              <h3 className="text-sm font-semibold text-white">
                Proof submitted successfully
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Your challenge proof has been recorded.
                Great work shipping today.
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}