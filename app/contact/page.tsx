import type { Metadata } from "next";
import { ContactAside } from "@/components/contact/ContactAside";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "درخواست قیمت و مشاوره فنی برای تابلو برق، اتوماسیون و محصولات صنعتی",
};

export default function ContactPage() {
  return (
    <Container className="py-14">
      <PageIntro
        eyebrow="تماس با ما"
        title="درخواست قیمت و مشاوره فنی"
        description="برای طراحی تابلو، اتوماسیون، ابزار دقیق یا استعلام PLC و HMI فرم را پر کنید. این نسخه فرانت‌اند است و پیام‌ها در همین صفحه تأیید می‌شوند."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactAside />
        <ContactForm />
      </div>
    </Container>
  );
}
