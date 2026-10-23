import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/site";

export function ProjectGrid() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <GlassCard
          key={project.id}
          as="article"
          className="overflow-hidden rounded-[24px]"
        >
          <CoverFrame height={208} className="bg-[#0a1424]">
            <CoverImage
              src={project.image}
              alt={project.title}
              objectPosition={project.imagePos ?? "center"}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-transparent to-black/10" />
          </CoverFrame>
          <div className="p-5">
            <div className="text-xs text-cyan-200/90">{project.industry}</div>
            <h2 className="mt-2 text-lg font-semibold text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {project.text}
            </p>
            {project.highlights && project.highlights.length > 0 ? (
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-slate-300">
                {project.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
