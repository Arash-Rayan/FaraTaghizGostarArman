import { aboutIntroParagraphs, company } from "@/data/site";

export function AboutIntro() {
  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 text-sm leading-8 text-slate-300">
        {aboutIntroParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <aside className="h-fit rounded-[24px] border border-white/8 bg-[#0b1528]/80 p-6">
        <h2 className="text-sm font-semibold text-white">در یک نگاه</h2>
        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="text-slate-500">نام شرکت</dt>
            <dd className="mt-1 text-slate-200">
              {company.nameFa} ({company.nameEn})
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">حوزه تخصصی</dt>
            <dd className="mt-1 text-slate-200">{company.tagline}</dd>
          </div>
          <div>
            <dt className="text-slate-500">مسیر خدمات</dt>
            <dd className="mt-1 text-slate-200">
              مشاوره ← طراحی ← ساخت ← نصب ← برنامه‌نویسی ← راه‌اندازی
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">ارتباط مستقیم</dt>
            <dd className="mt-2 space-y-2 text-slate-200">
              {company.contacts.map((person) => (
                <div key={person.phone}>
                  {person.name}
                  <span className="mt-0.5 block text-slate-400" dir="ltr">
                    {person.phone}
                  </span>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
