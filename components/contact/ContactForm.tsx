"use client";

import { FormEvent, useState } from "react";
import { contactSubjects } from "@/data/site";

interface ContactFormState {
  name: string;
  companyName: string;
  phone: string;
  service: (typeof contactSubjects)[number];
  message: string;
}

const initialState: ContactFormState = {
  name: "",
  companyName: "",
  phone: "",
  service: contactSubjects[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [sent, setSent] = useState(false);

  function update<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Ready for future API route: POST /api/contact
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="glass-card rounded-[24px] p-6 lg:p-8">
      {sent ? (
        <div className="py-10 text-center">
          <h2 className="text-2xl font-bold text-white">درخواست شما ثبت شد</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            از پیام شما متشکریم. پس از اتصال بک‌اند، همین فرم به ایمیل یا پنل
            مدیریت ارسال خواهد شد.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setForm(initialState);
            }}
            className="mt-6 text-sm text-violet-300"
          >
            ارسال درخواست جدید
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-slate-300">
            نام و نام خانوادگی
            <input
              required
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
          </label>
          <label className="text-sm text-slate-300">
            نام شرکت
            <input
              value={form.companyName}
              onChange={(event) => update("companyName", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
          </label>
          <label className="text-sm text-slate-300">
            شماره تماس
            <input
              required
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
          </label>
          <label className="text-sm text-slate-300">
            موضوع
            <select
              value={form.service}
              onChange={(event) =>
                update(
                  "service",
                  event.target.value as ContactFormState["service"],
                )
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#121c33] px-4 py-3 text-white outline-none"
            >
              {contactSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>
          <label className="sm:col-span-2 text-sm text-slate-300">
            شرح نیاز
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            />
          </label>
          <button
            type="submit"
            className="purple-btn sm:col-span-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            ارسال درخواست
          </button>
        </div>
      )}
    </form>
  );
}
