import { type ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { status: "critical", vulnerabilities: 2, fill: "hsl(var(--destructive))" },
  { status: "High", vulnerabilities: 0, fill: "hsl(var(--destructive))" },
  { status: "medium", vulnerabilities: 0, fill: "hsl(var(--caution))" },
  { status: "low", vulnerabilities: 0, fill: "hsl(var(--secure))" },
];

export const chartConfig = {
  vulnerabilities: { label: "Vulnerabilities" },
  critical: { label: "Critical", color: "hsl(var(--destructive))" },
  high: { label: "High", color: "hsl(var(--destructive))" },
  medium: { label: "Medium", color: "hsl(var(--caution))" },
  low: { label: "Low", color: "hsl(var(--secure))" },
} satisfies ChartConfig;
