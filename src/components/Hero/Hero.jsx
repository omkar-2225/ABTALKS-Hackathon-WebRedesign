import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[160px]" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="container-custom">

        <div className="grid min-h-screen items-center gap-16 pt-36 pb-20 lg:grid-cols-2">

          {/* Left */}
          <HeroContent />

          {/* Right Mockup Placeholder */}
          <div className="relative flex items-center justify-center">

            <div className="relative w-full max-w-md">

              {/* Main Card */}
              <div className="rounded-[32px] border border-white/10 bg-[#12121A]/90 backdrop-blur-xl p-8 shadow-2xl">

                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Day 12
                  </h3>

                  <span className="rounded-full bg-violet-600/20 px-3 py-1 text-sm text-violet-300">
                    🔥 Streak
                  </span>
                </div>

                <div className="rounded-2xl bg-[#1B1B24] p-5">
                  <p className="text-gray-400 text-sm">
                    Today's Challenge
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Build a Responsive Dashboard
                  </h4>

                  <div className="mt-5 space-y-3">
                    <div className="h-3 rounded-full bg-white/10" />
                    <div className="h-3 rounded-full bg-white/10 w-3/4" />
                    <div className="h-3 rounded-full bg-violet-500 w-1/2" />
                  </div>

                  <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold">
                    Continue Challenge
                  </button>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-12 -left-3 rounded-2xl border border-white/10 bg-[#181820] p-4 shadow-xl">
                <p className="text-xs text-gray-400">Current XP</p>
                <h2 className="text-2xl font-bold text-white">1,240</h2>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-0 rounded-2xl border border-white/10 bg-[#181820] p-4 shadow-xl">
                <p className="text-xs text-gray-400">Rank</p>
                <h2 className="text-xl font-bold text-violet-400">#24</h2>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}