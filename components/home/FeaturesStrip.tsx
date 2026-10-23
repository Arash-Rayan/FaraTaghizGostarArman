import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { features } from "@/data/site";
import { cn } from "@/lib/cn";

export function FeaturesStrip() {
  return (
    <section className="border-y border-white/5 bg-[#0b1528]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "px-6 py-8",
              index < features.length - 1 && "lg:border-e lg:border-white/8",
            )}
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-200">
              <FeatureIcon name={item.icon} />
            </div>
            <h3 className="text-[14.5px] font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-[13px] leading-7 text-slate-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
