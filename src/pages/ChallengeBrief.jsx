import { Target, CheckCircle2 } from "lucide-react";

export default function ChallengeBrief({ challenge }) {
  return (
    <section
      id="brief"
      className="mt-6 rounded-3xl border border-white/10 bg-[#121217] p-6 sm:p-8 md:p-10"
    >
      {/* Header */}

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
          <Target size={21} />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            Challenge brief
          </p>

          <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
            What you're building
          </h2>
        </div>

      </div>


      {/* Goal */}

      <div className="mt-8">

        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          The goal
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
          {challenge.brief ||
            "Build something meaningful, practical, and complete. Focus on shipping a working solution rather than just writing code."}
        </p>

      </div>


      {/* What you need to build */}

      <div className="mt-10">

        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          What you need to build
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">

          {(challenge.requirements || [
            "Build a responsive interface",
            "Use reusable components",
            "Keep the UI clean and accessible",
            "Make the experience work on mobile",
          ]).map((requirement, index) => (

            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-violet-500/20 hover:bg-violet-500/[0.03]"
            >

              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-violet-400"
              />

              <p className="text-sm leading-6 text-gray-300">
                {requirement}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* Skills */}

      <div className="mt-10 border-t border-white/10 pt-7">

        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          Skills you'll practice
        </p>

        <div className="mt-4 flex flex-wrap gap-2">

          {challenge.skills?.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}