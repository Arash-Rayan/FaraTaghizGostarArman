import type { Metadata } from "next";
import { ContactAside } from "@/components/contact/ContactAside";
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
        description="برای طراحی تابلو، اتوماسیون، ابزار دقیق، استعلام PLC و HMI یا راهکارهای هوشمند، مستقیماً با کارشناس مربوط تماس بگیرید یا به ایمیل ما پیام دهید."
      />

      <div style={{ marginTop: 40, maxWidth: 720 }}>
        <ContactAside />
      </div>
    </Container>
  );
}
