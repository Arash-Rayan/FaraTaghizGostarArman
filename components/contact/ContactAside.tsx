import { Mail, MapPin, Phone, User } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { company } from "@/data/site";

export function ContactAside() {
  return (
    <GlassCard as="aside" className="h-fit rounded-[24px] p-6">
      <div className="space-y-5 text-sm text-slate-300">
        <p className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 text-violet-300" />
          {company.address}
        </p>
        {company.contacts.map((person) => (
          <p key={person.phone} className="flex items-center gap-3">
            <User size={18} className="text-violet-300" />
            <span>
              {person.name}
              <span className="mt-1 block text-slate-400" dir="ltr">
                {person.phone}
              </span>
            </span>
          </p>
        ))}
        <p className="flex items-center gap-3">
          <Phone size={18} className="text-violet-300" />
          <span dir="ltr">
            {company.phone} | {company.mobile}
          </span>
        </p>
        <p className="flex items-center gap-3">
          <Mail size={18} className="text-violet-300" />
          {company.email}
        </p>
      </div>
    </GlassCard>
  );
}
