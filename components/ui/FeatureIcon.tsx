import {
  Box,
  CircuitBoard,
  Code2,
  Gauge,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import type { FeatureIconName, ValueItem } from "@/types/site";

const featureIcons = {
  panel: CircuitBoard,
  automation: Settings2,
  instrument: Gauge,
  code: Code2,
  box: Box,
} as const;

const valueIcons = {
  target: Target,
  wrench: Wrench,
  shield: ShieldCheck,
  users: Users,
} as const;

interface FeatureIconProps {
  name: FeatureIconName;
  size?: number;
}

export function FeatureIcon({ name, size = 22 }: FeatureIconProps) {
  const Icon = featureIcons[name] ?? Box;
  return <Icon size={size} strokeWidth={1.6} />;
}

interface ValueIconProps {
  name: ValueItem["icon"];
  size?: number;
  className?: string;
}

export function ValueIcon({ name, size = 22, className }: ValueIconProps) {
  const Icon = valueIcons[name];
  return <Icon size={size} className={className} />;
}
