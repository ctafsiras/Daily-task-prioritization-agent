"use client";
import { useState } from "react";

export function TaskDashboard() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAIPrioritize = async () => {
    if (!userInput) {
      alert("Please enter some tasks first!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/prioritize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "demo_user",
          raw_tasks: userInput,
        }),
      });

      const data = await response.json();
      console.log("FULL BACKEND RESPONSE:", data);

      // ✅ SAFE & CORRECT RESPONSE HANDLING
      if (Array.isArray(data)) {
        setTasks(data);
      } else if (data.prioritized_tasks) {
        setTasks(data.prioritized_tasks);
      } else if (data.tasks) {
        setTasks(data.tasks);
      } else {
        console.error("Unexpected response format:", data);
        alert("AI response format error. Check backend.");
        setTasks([]);
      }
    } catch (error) {
      console.error("Backend connection failed:", error);
      alert("Backend server is not running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Your AI Task Space
        </h2>

        {/* Input */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <textarea
            className="w-full h-32 p-4 bg-slate-800 rounded-lg text-white"
            placeholder="Example: Meeting at 10am, buy groceries, finish report by 6pm"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleAIPrioritize}
            disabled={loading}
            className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            {loading ? "AI is Thinking..." : "Prioritize My Day ✨"}
          </button>
        </div>

        {/* Result */}
        {tasks.length > 0 && (
          <div className="mt-10 space-y-4">
            <h3 className="text-xl font-semibold border-b border-slate-800 pb-2">
              Optimized Schedule
            </h3>

            {tasks.map((t, index) => (
              <div
                key={index}
                className="flex justify-between p-4 bg-slate-900 rounded-lg border-l-4 border-blue-500"
              >
                <div>
                  <p className="font-medium text-lg">{t.title}</p>
                  <p className="text-sm text-slate-400">
                    Effort: {t.effort || "N/A"} | Deadline:{" "}
                    {t.deadline || "None"}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    t.impact === "high"
                      ? "bg-red-900 text-red-200"
                      : t.impact === "medium"
                      ? "bg-yellow-900 text-yellow-200"
                      : "bg-green-900 text-green-200"
                  }`}
                >
                  {t.impact}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
