import {
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function ChallengeRequirements({ challenge }) {
  return (
    <section className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8 md:p-10">

      {/* =====================================================
          REQUIREMENTS HEADER
      ===================================================== */}

      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Requirements
        </p>

        <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
          What you need to build.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
          Complete each requirement before submitting your challenge.
        </p>

      </div>


      {/* =====================================================
          REQUIREMENT LIST
      ===================================================== */}

      <div className="mt-7 space-y-3">

        {challenge.requirements?.map((requirement, index) => (

          <div
            key={index}
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.03]"
          >

            {/* Number */}

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-[10px] font-semibold text-gray-500 transition group-hover:bg-violet-500/10 group-hover:text-violet-300">
              {String(index + 1).padStart(2, "0")}
            </div>


            {/* Requirement Content */}

            <div className="flex flex-1 items-start gap-3">

              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-violet-400"
              />

              <p className="text-sm leading-6 text-gray-300">
                {requirement}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <div className="mt-12 border-t border-white/10 pt-8">

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          Deliverables
        </p>

        <h3 className="mt-2 font-serif text-xl sm:text-2xl">
          Show what you shipped.
        </h3>


        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
          Your work becomes part of your public proof of progress.
        </p>


        {/* =================================================
            DELIVERABLE CARDS
        ================================================= */}

        <div className="mt-6 grid gap-3 md:grid-cols-3">


          {/* ================= GITHUB ================= */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.03]">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition duration-300 group-hover:bg-white/10 group-hover:text-white">

                <FaGithub size={20} />

              </div>

              <ExternalLink
                size={15}
                className="text-gray-600 transition group-hover:text-gray-400"
              />

            </div>


            <h4 className="mt-5 text-sm font-medium">
              GitHub Repository
            </h4>


            <p className="mt-2 text-xs leading-5 text-gray-500">
              Share the repository containing your completed project.
            </p>

          </div>


          {/* ================= LIVE DEPLOYMENT ================= */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.03]">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition duration-300 group-hover:bg-violet-500/15">

                <ExternalLink size={19} />

              </div>

              <ExternalLink
                size={15}
                className="text-gray-600 transition group-hover:text-gray-400"
              />

            </div>


            <h4 className="mt-5 text-sm font-medium">
              Live Deployment
            </h4>


            <p className="mt-2 text-xs leading-5 text-gray-500">
              Add the live URL so others can see your project in action.
            </p>

          </div>


          {/* ================= LINKEDIN ================= */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.03]">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition duration-300 group-hover:bg-blue-500/15">

                <FaLinkedin size={20} />

              </div>

              <ExternalLink
                size={15}
                className="text-gray-600 transition group-hover:text-gray-400"
              />

            </div>


            <h4 className="mt-5 text-sm font-medium">
              LinkedIn Proof
            </h4>


            <p className="mt-2 text-xs leading-5 text-gray-500">
              Share your progress publicly and document what you built.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}