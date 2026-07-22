import { Code2, Smartphone, BrainCircuit, BarChart3, Cloud, ShieldCheck } from "lucide-react";
import type { Service } from "@/lib/data";

const icons: Record<Service["icon"], typeof Code2> = {
  code: Code2,
  smartphone: Smartphone,
  brain: BrainCircuit,
  chart: BarChart3,
  cloud: Cloud,
  shield: ShieldCheck,
};

export function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const Icon = icons[icon];
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15 group-hover:text-primary-hover">
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </div>
  );
}
