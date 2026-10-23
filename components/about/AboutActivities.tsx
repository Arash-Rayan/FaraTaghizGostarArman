import { activityAreas } from "@/data/site";

export function AboutActivities() {
  return (
    <section className="mt-14">
      <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-cyan-200/90">
        زمینه‌های فعالیت شرکت
      </p>
      <h2 className="max-w-2xl text-2xl font-extrabold leading-snug text-white sm:text-3xl">
        از تجهیزات آزمایشگاهی تا شبکه صنعتی؛ پوشش کامل مسیر مهندسی تا راه‌اندازی
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400">
        فعالیت‌های شرکت بر اساس پروژه‌های واقعی صنعتی تعریف شده است. در ادامه،
        حوزه‌های اصلی کار تیم فنی به‌صورت تفصیلی آمده است.
      </p>

      <div className="mt-8 space-y-4">
        {activityAreas.map((area) => (
          <article
            key={area.id}
            className="rounded-[24px] border border-white/8 bg-[#0b1528]/75 p-6 lg:p-8"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-violet-300">
                {area.number}
              </span>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {area.title}
              </h3>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-400">
              {area.description}
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {area.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2.5 text-sm leading-7 text-slate-300"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
