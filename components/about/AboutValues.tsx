import { ValueIcon } from "@/components/ui/FeatureIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { aboutValues } from "@/data/site";

export function AboutValues() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {aboutValues.map((item) => (
        <GlassCard
          key={item.title}
          as="article"
          className="rounded-[22px] p-5"
        >
          <ValueIcon name={item.icon} className="mb-4 text-violet-300" />
          <h2 className="font-semibold text-white">{item.title}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
        </GlassCard>
      ))}
    </div>
  );
}
