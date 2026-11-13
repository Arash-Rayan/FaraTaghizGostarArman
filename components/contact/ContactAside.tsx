import type { CSSProperties } from "react";
import { Mail, Phone } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { company } from "@/data/site";
import { toTelHref } from "@/lib/phone";

const accents = [
  { from: "#8b5cf6", to: "#6366f1", glow: "rgba(139, 92, 246, 0.35)" },
  { from: "#0ea5e9", to: "#22d3ee", glow: "rgba(14, 165, 233, 0.35)" },
  { from: "#d946ef", to: "#8b5cf6", glow: "rgba(217, 70, 239, 0.35)" },
];

const styles = {
  aside: { padding: 28, borderRadius: 24 },
  eyebrow: {
    margin: 0,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    color: "rgba(165, 243, 252, 0.85)",
  },
  title: { margin: "8px 0 0", fontSize: 22, fontWeight: 800, color: "#fff" },
  lead: {
    margin: "8px 0 0",
    fontSize: 14,
    lineHeight: 1.9,
    color: "#94a3b8",
  },
  list: {
    listStyle: "none",
    margin: "24px 0 0",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    padding: 18,
    borderRadius: 18,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
    border: "1px solid rgba(160, 185, 230, 0.12)",
  },
  body: { minWidth: 0, flex: 1 },
  name: { margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" },
  chips: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 },
  chip: {
    padding: "3px 10px",
    borderRadius: 999,
    fontSize: 11.5,
    lineHeight: "20px",
    color: "#ddd6fe",
    background: "rgba(139, 92, 246, 0.14)",
    border: "1px solid rgba(167, 139, 250, 0.22)",
    whiteSpace: "nowrap",
  },
  phone: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginTop: 14,
    padding: "7px 14px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    color: "#e2e8f0",
    textDecoration: "none",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
  },
  footer: {
    marginTop: 22,
    paddingTop: 18,
    borderTop: "1px solid rgba(255, 255, 255, 0.07)",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    color: "#94a3b8",
  },
} satisfies Record<string, CSSProperties>;

function avatarStyle(index: number): CSSProperties {
  const accent = accents[index % accents.length];
  return {
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: 14,
    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
    boxShadow: `0 10px 24px ${accent.glow}`,
  };
}

function skillsOf(role: string) {
  return role
    .split(/،|\s+و\s+/)
    .map((skill) => skill.trim())
    .filter(Boolean);
}

export function ContactAside() {
  return (
    <GlassCard as="aside" className="h-fit" style={styles.aside}>
      <p style={styles.eyebrow}>ارتباط مستقیم</p>
      <h2 style={styles.title}>تیم فنی FTGA</h2>
      <p style={styles.lead}>
        برای مشاوره تخصصی، مستقیماً با کارشناس مربوط تماس بگیرید.
      </p>

      <ul style={styles.list}>
        {company.contacts.map((person, index) => (
          <li key={person.phone} className="contact-card" style={styles.card}>
            <span style={avatarStyle(index)} aria-hidden />
            <div style={styles.body}>
              <p style={styles.name}>{person.name}</p>
              {person.role && (
                <div style={styles.chips}>
                  {skillsOf(person.role).map((skill) => (
                    <span key={skill} style={styles.chip}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={toTelHref(person.phone)}
                className="contact-phone"
                style={styles.phone}
              >
                <Phone size={15} color="#a78bfa" />
                <span dir="ltr">{person.phone}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {company.email && (
        <p style={styles.footer}>
          <Mail size={16} color="#a78bfa" />
          <a
            href={`mailto:${company.email}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {company.email}
          </a>
        </p>
      )}
    </GlassCard>
  );
}
