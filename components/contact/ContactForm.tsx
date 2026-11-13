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

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setError("ارسال فرم هنوز پیکربندی نشده است. لطفاً تماس تلفنی بگیرید.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `درخواست جدید از سایت FTGA: ${form.service}`,
          from_name: "سایت FTGA",
          "نام و نام خانوادگی": form.name,
          "نام شرکت": form.companyName || "-",
          "شماره تماس": form.phone,
          موضوع: form.service,
          "شرح نیاز": form.message,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("send failed");
      setSent(true);
    } catch {
      setError("ارسال انجام نشد. لطفاً دوباره تلاش کنید یا تماس تلفنی بگیرید.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="glass-card rounded-[24px] p-6 lg:p-8">
      {sent ? (
        <div className="py-10 text-center">
          <h2 className="text-2xl font-bold text-white">درخواست شما ثبت شد</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            از پیام شما متشکریم. کارشناسان FTGA به‌زودی با شما تماس می‌گیرند.
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
          {error && (
            <p
              role="alert"
              className="sm:col-span-2 text-sm"
              style={{ color: "#fca5a5" }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="purple-btn sm:col-span-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ opacity: sending ? 0.7 : 1 }}
          >
            {sending ? "در حال ارسال..." : "ارسال درخواست"}
          </button>
        </div>
      )}
    </form>
  );
}
