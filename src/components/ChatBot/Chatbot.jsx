import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Bot,
  Lightbulb,
  MessageCircle,
  Minus,
  Sparkles,
  X,
} from "lucide-react";

import mockStudent from "../../data/mockStudent";

const QUICK_PROMPTS = [
  {
    label: "Today's challenge",
    icon: Sparkles,
    message: "What should I focus on in today's challenge?",
  },
  {
    label: "Explain this",
    icon: Lightbulb,
    message: "Can you explain today's challenge in simple terms?",
  },
  {
    label: "I'm stuck",
    icon: Bot,
    message: "I'm stuck. Help me figure out what to do next.",
  },
];

const FALLBACK_RESPONSES = [
  "Break the problem into smaller pieces and solve one part at a time. You don't need to figure everything out at once. 🚀",

  "You're probably closer than you think. Try explaining the problem in your own words first, then identify the smallest next step.",

  "Don't aim for perfect code on the first attempt. Build something small, test it, and improve it incrementally.",

  "Take a short break if you're feeling overwhelmed. Come back with one tiny goal and keep moving forward. 💜",

  "Stuck on something? Tell me exactly where you're blocked and we'll break it down together.",

  "Your goal isn't perfect code. Your goal is to keep learning, building, and shipping. 🔥",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: `Hey! 👋 I'm your ABTalks buddy.${mockStudent.name}, You're on Day ${mockStudent.challenge.currentDay} of your ${mockStudent.track} journey with a ${mockStudent.streak.current}-day streak. What do you need help with?`,
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // =========================
  // FALLBACK
  // =========================

  const getFallbackResponse = () => {
    const randomIndex = Math.floor(
      Math.random() * FALLBACK_RESPONSES.length
    );

    return FALLBACK_RESPONSES[randomIndex];
  };

  // =========================
  // SEND MESSAGE
  // =========================

  const handleSendMessage = async (textOrEvent) => {
    // Allows both:
    // handleSendMessage(event)
    // handleSendMessage("some text")

    if (
      textOrEvent &&
      typeof textOrEvent.preventDefault === "function"
    ) {
      textOrEvent.preventDefault();
    }

    const textToSend =
      typeof textOrEvent === "string"
        ? textOrEvent.trim()
        : inputValue.trim();

    if (!textToSend || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const student = mockStudent;

      const currentDay =
        student?.progress?.currentDay ||
        student?.currentDay ||
        student?.todayChallenge?.day ||
        1;

      const streak =
        student?.streak?.current ||
        student?.streak ||
        0;

      const track =
        student?.track ||
        student?.selectedTrack ||
        "Full Stack";

      const studentContext = {
        name: student?.name || "Student",
        currentDay,
        streak,
        track,

        achievements:
          student?.achievements || [],

        completedDays:
          student?.activityLog ||
          student?.completedDays ||
          [],

        challenge:
          student?.todayChallenge || null,
      };

      // =========================
      // CALL YOUR API
      // =========================

      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: textToSend,
          student: studentContext,
        }),
      });

      // =========================
      // API ERROR
      // =========================

      if (!response.ok) {
        let errorMessage = "Chat API request failed.";

        try {
          const errorData = await response.json();

          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // Ignore JSON parsing errors
        }

        throw new Error(errorMessage);
      }

      // =========================
      // API RESPONSE
      // =========================

      const data = await response.json();

      const botText =
        data?.message ||
        data?.text ||
        data?.response;

      if (!botText) {
        throw new Error("Empty response from chat API.");
      }

      const botMessage = {
        id: Date.now() + 1,
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      const fallback = getFallbackResponse();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: fallback,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // FORM
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSendMessage();
  };

  // =========================
  // CLOSED STATE
  // =========================

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        aria-label="Open ABTalks Buddy"
        className="
          fixed
          bottom-6
          right-6
          z-50

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          border
          border-white/15

          bg-gradient-to-br
          from-violet-500
          to-fuchsia-600

          text-white

          shadow-[0_0_35px_rgba(139,92,246,0.35)]

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-110
          hover:shadow-[0_0_55px_rgba(139,92,246,0.5)]
        "
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  // =========================
  // MINIMIZED
  // =========================

  if (isMinimized) {
    return (
      <div
        className="
          fixed
          bottom-6
          right-6
          z-50

          flex
          items-center
          gap-3

          rounded-2xl

          border
          border-white/10

          bg-[#101014]/80

          px-4
          py-3

          shadow-2xl

          backdrop-blur-2xl
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl

            bg-gradient-to-br
            from-violet-500
            to-fuchsia-500

            text-white
          "
        >
          <Bot size={18} />
        </div>

        <div>
          <p className="text-xs font-semibold text-white">
            ABTalks Buddy
          </p>

          <p className="text-[10px] text-gray-500">
            Ready when you are
          </p>
        </div>

        <button
          onClick={() => setIsMinimized(false)}
          className="
            ml-2
            text-gray-500
            transition
            hover:text-white
          "
        >
          <MessageCircle size={17} />
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="
            text-gray-500
            transition
            hover:text-white
          "
        >
          <X size={17} />
        </button>
      </div>
    );
  }

  // =========================
  // CHAT WINDOW
  // =========================

  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-50

        w-[calc(100vw-2rem)]
        max-w-[390px]

        overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-[#0b0b0f]/85

        shadow-[0_25px_100px_rgba(0,0,0,0.65)]

        backdrop-blur-2xl
      "
    >
      {/* ================= HEADER ================= */}

      <div
        className="
          relative
          border-b
          border-white/10

          bg-gradient-to-br
          from-violet-500/[0.10]
          via-transparent
          to-fuchsia-500/[0.08]

          px-5
          py-4
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">

            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-2xl

                border
                border-violet-400/20

                bg-gradient-to-br
                from-violet-500/20
                to-fuchsia-500/20

                text-violet-300
              "
            >
              <Bot size={19} />

              <span
                className="
                  absolute
                  bottom-0.5
                  right-0.5
                  h-2
                  w-2
                  rounded-full
                  border-2
                  border-[#0b0b0f]
                  bg-emerald-400
                "
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-semibold text-white">
                  ABTalks Buddy
                </h3>

                <Sparkles
                  size={12}
                  className="text-violet-400"
                />
              </div>

              <p className="mt-0.5 text-sm text-gray-500">
                Your AI learning companion
              </p>
            </div>

          </div>

          <div className="flex items-center gap-1">

            <button
              onClick={() => setIsMinimized(true)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-xl

                text-gray-500

                transition

                hover:bg-white/5
                hover:text-white
              "
            >
              <Minus size={16} />
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-xl

                text-gray-500

                transition

                hover:bg-white/5
                hover:text-white
              "
            >
              <X size={16} />
            </button>

          </div>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}

      <div
        className="
          h-[390px]
          overflow-y-auto

          px-4
          py-5

          scrollbar-thin
          scrollbar-thumb-white/10
        "
      >
        <div className="space-y-4">

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div
                  className="
                    mr-2
                    mt-1
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-violet-400/10

                    bg-violet-500/10

                    text-violet-300
                  "
                >
                  <Bot size={13} />
                </div>
              )}

              <div
                className={`
                  max-w-[78%]
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  leading-relaxed

                  ${
                    message.sender === "user"
                      ? `
                        rounded-br-md
                        bg-gradient-to-br
                        from-violet-500
                        to-fuchsia-600
                        text-white
                        shadow-[0_5px_20px_rgba(139,92,246,0.15)]
                      `
                      : `
                        rounded-bl-md
                        border
                        border-white/10
                        bg-white/[0.045]
                        text-gray-200
                      `
                  }
                `}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Loading */}

          {isLoading && (
            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/10
                  text-violet-300
                "
              >
                <Bot size={13} />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-1

                  rounded-2xl
                  rounded-bl-md

                  border
                  border-white/10

                  bg-white/[0.045]

                  px-4
                  py-3
                "
              >
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />

                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:200ms]" />

                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:400ms]" />
              </div>

            </div>
          )}

          <div ref={messagesEndRef} />

        </div>
      </div>

      {/* ================= QUICK PROMPTS ================= */}

      {messages.length === 1 && !isLoading && (
        <div className="border-t border-white/5 px-4 py-3">

          <p className="mb-2 text-[10px] uppercase tracking-wider text-gray-600">
            Quick start
          </p>

          <div className="flex flex-wrap gap-2">

            {QUICK_PROMPTS.map((prompt) => {
              const Icon = prompt.icon;

              return (
                <button
                  key={prompt.label}
                  onClick={() =>
                    handleSendMessage(prompt.message)
                  }
                  className="
                    flex
                    items-center
                    gap-1.5

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.03]

                    px-3
                    py-2

                    text-[11px]
                    text-gray-400

                    transition

                    hover:border-violet-400/20
                    hover:bg-violet-500/10
                    hover:text-violet-200
                  "
                >
                  <Icon size={12} />

                  {prompt.label}
                </button>
              );
            })}

          </div>
        </div>
      )}

      {/* ================= INPUT ================= */}

      <div
        className="
          border-t
          border-white/10

          bg-gradient-to-b
          from-white/[0.025]
          to-transparent

          p-4
        "
      >
        <form
          onSubmit={handleSubmit}
          className="
            flex
            items-center
            gap-2

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            p-1.5

            backdrop-blur-xl

            transition

            focus-within:border-violet-500/40
            focus-within:shadow-[0_0_25px_rgba(139,92,246,0.08)]
          "
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask your buddy..."
            disabled={isLoading}
            className="
              min-w-0
              flex-1

              bg-transparent

              px-3
              py-2

              text-sm
              text-white

              outline-none

              placeholder:text-gray-600

              disabled:opacity-50
            "
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center

              rounded-xl

              bg-gradient-to-br
              from-violet-500
              to-fuchsia-600

              text-white

              shadow-[0_0_20px_rgba(139,92,246,0.2)]

              transition

              hover:scale-105

              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:scale-100
            "
          >
            <ArrowUp size={17} />
          </button>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Built for ABTalks students
        </p>
      </div>
    </div>
  );
}