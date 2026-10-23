import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/data/site";
import { cn } from "@/lib/cn";

export function ServiceList() {
  return (
    <div className="mt-12 space-y-6">
      {services.map((service, index) => (
        <GlassCard
          key={service.id}
          as="article"
          className="grid overflow-hidden rounded-[28px] lg:grid-cols-2"
        >
          <CoverFrame
            height={280}
            className={cn(
              "w-full bg-[#0a1424] lg:h-full",
              index % 2 === 1 && "lg:order-2",
            )}
            minHeight={280}
          >
            <CoverImage
              src={service.image}
              alt={service.title}
              objectPosition={service.imagePos}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </CoverFrame>
          <div className="p-7 lg:p-10">
            <span className="text-sm text-violet-300">{service.number}</span>
            <h2 className="mt-2 text-2xl font-bold text-white">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-400">
              {service.text}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              {service.details.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
