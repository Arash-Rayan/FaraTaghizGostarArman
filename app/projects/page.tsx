import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "پروژه‌ها",
  description: `پروژه‌ها و دستاوردهای ${company.nameFa} در یک نگاه`,
};

export default function ProjectsPage() {
  return (
    <Container className="py-14">
      <PageIntro
        eyebrow="پروژه‌ها"
        title="حوزه‌های تخصصی، پروژه‌های اجراشده و راه‌حل‌ها"
        description="همهٔ کارهای FTGA در یک جا: از طراحی تجهیزات آزمایشگاهی و تابلو برق تا اتوماسیون، ابزار دقیق، PLC، درایو و پروژه‌های واقعی در صنایع مختلف."
      />
      <ProjectGrid />
      <div className="mt-12 flex justify-center">
        <Button href="/contact">ارتباط با ما</Button>
      </div>
    </Container>
  );
}
