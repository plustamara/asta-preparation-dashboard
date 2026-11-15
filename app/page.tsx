"use client";

import { useState } from "react";

const tasks = ["Sword control", "Physical endurance", "Team coordination"];

export default function Home() {
  const [completed, setCompleted] = useState<string[]>([]);

  function toggle(task: string) {
    setCompleted((current) =>
      current.includes(task)
        ? current.filter((t) => t !== task)
        : [...current, task]
    );
  }

  const count = completed.length;
  const percent = Math.round((count / tasks.length) * 100);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">POC: training progress</h1>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task} className="flex items-center gap-4">
            <span>
              {task}: {completed.includes(task) ? "Complete" : "Incomplete"}
            </span>
            <button
              type="button"
              onClick={() => toggle(task)}
              className="border px-3 py-1"
            >
              {completed.includes(task) ? "Undo" : "Mark complete"}
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        {count} / {tasks.length} ({percent}%)
      </p>
    </main>
  );
}