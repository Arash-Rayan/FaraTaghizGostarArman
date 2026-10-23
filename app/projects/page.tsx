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
        title="معرفی پروژه‌ها و دستاوردها در یک نگاه"
        description="از تجهیزات آزمایشگاهی و اتوماسیون RO تا ربات یاسکاوا، تابلوهای صنعتی، پایش انرژی و پروژه‌های فولاد مبارکه."
      />
      <ProjectGrid />
      <div className="mt-12 flex justify-center">
        <Button href="/contact">مشاوره پروژه</Button>
      </div>
    </Container>
  );
}
