import { useState } from "react";
import { ArrowRight, Lock, Mail, Sparkles,ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    // Mock login — authentication is intentionally out of scope.
    setTimeout(() => {
      localStorage.setItem("abtalksUser", email);

      navigate("/dashboard");
    }, 700);
  };

  return (
    <main className="min-h-screen bg-[#08080C] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

      </div>


      {/* ================= HEADER ================= */}

      <header className="relative z-10 flex items-center justify-between px-3 py-3 sm:px-8">

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 text-sm font-bold shadow-[0_0_25px_rgba(124,58,237,.3)]">
            A
          </div>

          <div>
            <p className="font-display text-lg font-semibold">
              ABTalks
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
              60-Day Challenge
            </p>
          </div>

        </Link>


        <Link
          to="/"
          className="flex gap-2 items-center text-lg text-gray-500 transition hover:text-white"
        >
          <ArrowLeft size={20}/> Home
        </Link>

      </header>


      {/* ================= LOGIN AREA ================= */}

      <section className="relative z-10 flex min-h-[calc(100vh-82px)] items-center justify-center px-5">

        <div className="w-full max-w-md">

          {/* ================= INTRO ================= */}

          <div className="mb-6 text-center">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">

              <Sparkles size={21} />

            </div>


            <p className="text-lg font-semibold uppercase tracking-[0.25em] text-violet-400">
              Welcome back
            </p>

            <h1 className="mt font-serif text-3xl leading-tight sm:text-3xl">
              Continue your journey.
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Sign in to continue your 60-day challenge and keep building.
            </p>

          </div>


          {/* ================= CARD ================= */}

          <div className="rounded-[28px] border border-white/10 bg-[#111116]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* ================= EMAIL ================= */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.03]"
                  />

                </div>

              </div>


              {/* ================= PASSWORD ================= */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-gray-300"
                  >
                    Password
                  </label>

                  <span className="text-[10px] text-gray-600">
                    Demo login
                  </span>

                </div>


                <div className="relative">

                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.03]"
                  />

                </div>

              </div>


              {/* ================= ERROR ================= */}

              {error && (

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">

                  <p className="text-xs text-red-400">
                    {error}
                  </p>

                </div>

              )}


              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-semibold shadow-[0_0_35px_rgba(124,58,237,.25)] transition hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(124,58,237,.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? "Entering..." : "Continue"}

                {!loading && (
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                )}

              </button>

            </form>


            {/* ================= MOCK NOTICE ================= */}

            <div className="mt-6 border-t border-white/10 pt-5">

              <p className="text-center text-[11px] leading-5 text-gray-600">
                This is a demo experience for the ABTalks challenge.
                No real authentication is required.
              </p>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <p className="mt-7 text-center text-xs text-gray-600">

            New to ABTalks?

            <Link
              to="/"
              className="ml-1 text-violet-400 transition hover:text-violet-300"
            >
              Start your 60-day journey
            </Link>

          </p>

        </div>

      </section>

    </main>
  );
}