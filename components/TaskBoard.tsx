"use client";

import { useState } from "react";
import { tasks } from "../data/tasks";
import { cinzel } from "../app/fonts";

export default function TaskBoard() {
  const [completed, setCompleted] = useState<string[]>([]);

  function toggle(id: string) {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((taskId) => taskId !== id)
        : [...current, id]
    );
  }

  const count = completed.length;
  const total = tasks.length;
  const percent = Math.round((count / total) * 100);

  return (
    <>
      <section aria-labelledby="tasks-heading" className="space-y-4">
        <div>
          <h3
            id="tasks-heading"
            className="text-xl font-extrabold text-white sm:text-2xl"
          >
            Training tasks
          </h3>
          <p className="text-sm text-slate-300">
            Mark each task complete when you finish it. You can undo it at any
            time.
          </p>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => {
            const done = completed.includes(task.id);
            return (
              <li
                key={task.id}
                className={`rounded-xl border-2 p-5 sm:p-6 ${
                  done
                    ? "border-emerald-500/80 bg-[#132219]"
                    : "border-[#333846] bg-[#171a22]"
                }`}
              >
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded border-2 px-3 py-1 text-xs font-black uppercase tracking-widest ${
                          task.priority === "High"
                            ? "border-rose-500 bg-rose-600/30 text-rose-100"
                            : "border-sky-400 bg-sky-950/70 text-sky-100"
                        }`}
                      >
                        {task.priority} priority
                      </span>
                      <span
                        className={`${cinzel.className} rounded-md border-2 px-3 py-1 text-sm uppercase tracking-wider ${
                          done
                            ? "border-emerald-400 bg-emerald-950/90 text-emerald-300"
                            : "border-amber-400/60 bg-[#232733] text-amber-200"
                        }`}
                      >
                        Status: {done ? "✓ Complete" : "Incomplete"}
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-white sm:text-xl">
                      {task.title}
                    </h4>
                    <p className="text-sm text-slate-200 sm:text-base">
                      {task.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggle(task.id)}
                    className={`min-h-12 w-full rounded-lg border-2 px-6 py-2.5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-rose-400 sm:w-auto sm:text-base ${
                      done
                        ? "border-emerald-300 bg-emerald-600 hover:bg-emerald-500"
                        : "border-zinc-500 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  >
                    {done ? "Undo" : "Mark complete"}
                    <span className="sr-only"> for {task.title}</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        aria-labelledby="progress-heading"
        className="space-y-5 rounded-xl border-2 border-[#353a47] bg-[#161922] p-5 sm:p-7"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3
              id="progress-heading"
              className="text-xl font-extrabold text-white sm:text-2xl"
            >
              Plan progress
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              This percentage shows{" "}
              <strong className="text-white">preparation-plan completion</strong>
              . It does not predict whether Asta will win.
            </p>
          </div>
          <div
            aria-live="polite"
            className="flex shrink-0 gap-6 rounded-lg border border-zinc-700 bg-black/40 p-3 sm:px-4"
          >
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Completed
              </span>
              <span className="text-2xl font-black text-white sm:text-3xl">
                {count} / {total}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Progress
              </span>
              <span className="text-2xl font-black text-rose-400 sm:text-3xl">
                {percent}%
              </span>
            </div>
          </div>
        </div>

        <div
          role="progressbar"
          aria-label="Preparation plan completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          className="h-4 w-full overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-950 p-0.5"
        >
          <div
            className={`h-full rounded-full transition-all duration-300 motion-reduce:transition-none ${
              percent === 100 ? "bg-emerald-400" : "bg-rose-500"
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-sm text-slate-300">
          Progress is calculated from the task states and resets to 0 / 3 when
          you refresh the page.
        </p>
      </section>
    </>
  );
}