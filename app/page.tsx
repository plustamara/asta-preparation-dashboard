import TaskBoard from "../components/TaskBoard";

export default function Home() {
  return (
    <>
      <header className="border-b border-[#313642] bg-[#12151c]">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <h1 className="text-lg font-extrabold text-white sm:text-xl">
            Asta&rsquo;s Preparation Dashboard
          </h1>
          <p className="text-sm text-slate-300">
            Combat readiness &amp; task tracker
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Asta&rsquo;s training plan
          </h2>
          <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
            Asta is preparing for Lucifero. This dashboard shows his three
            training tasks so he can see what to practise next and how much of
            the plan is complete.
          </p>
        </section>

        <section
          aria-labelledby="threat-heading"
          className="rounded-xl border-2 border-rose-600/70 bg-[#1c1a24] p-5 sm:p-6"
        >
          <span className="rounded border border-rose-400 bg-rose-700/80 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-100">
            High threat level
          </span>
          <h3
            id="threat-heading"
            className="mt-3 text-lg font-extrabold text-white sm:text-xl"
          >
            Lucifero threat brief
          </h3>
          <p className="mt-2 max-w-xl text-sm text-slate-200 sm:text-base">
            Lucifero is a powerful devil who uses gravity magic. His
            overwhelming strength makes him a serious threat.
          </p>
        </section>

        <TaskBoard />
      </main>
    </>
  );
}