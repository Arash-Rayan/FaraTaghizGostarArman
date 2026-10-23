import type { Metadata } from "next";
import { ServiceList } from "@/components/services/ServiceList";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageIntro } from "@/components/ui/PageIntro";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "خدمات",
  description: `خدمات ${company.nameFa}: طراحی تابلو برق، اتوماسیون، ابزار دقیق و برنامه‌نویسی فرآیند`,
};

export default function ServicesPage() {
  return (
    <Container className="py-14">
      <PageIntro
        eyebrow="خدمات"
        title="از طراحی تابلو تا برنامه‌نویسی فرآیند"
        description={`${company.nameFa} خدمات تخصصی طراحی تابلوهای برق صنعتی، اتوماسیون، ابزار دقیق و برنامه‌نویسی پروسه را به‌صورت یکپارچه ارائه می‌دهد.`}
      />
      <ServiceList />
      <CtaBanner
        className="mt-12"
        title="برای پروژه بعدی آماده هستید؟"
        description="مشخصات خط تولید یا تابلو مورد نیاز را ارسال کنید تا پیشنهاد فنی و قیمت را برای شما آماده کنیم."
        href="/contact"
        actionLabel="دریافت قیمت"
      />
    </Container>
  );
}
