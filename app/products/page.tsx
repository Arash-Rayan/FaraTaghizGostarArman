import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "محصولات",
  description: `تابلو برق، PLC، HMI و تجهیزات اتوماسیون ${company.nameFa}`,
};

export default function ProductsPage() {
  return (
    <Container className="py-14">
      <PageIntro
        eyebrow="محصولات"
        title="تابلو، PLC، HMI و تجهیزات اتوماسیون"
        description="تجهیزات و راه‌حل‌هایی که در پروژه‌های واقعی فرا تجهیز گستر آرمان طراحی، تأمین و راه‌اندازی می‌شوند. برای استعلام برند و مدل، از فرم تماس استفاده کنید."
      />
      <ProductCatalog />
    </Container>
  );
}
