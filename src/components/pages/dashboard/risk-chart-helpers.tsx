import { StatusEnum, type VulnerabilityType } from "@/types/common-types";
import { type ChartConfig } from "@/components/ui/chart";

const colorMap = {
  [StatusEnum.Critical]: "hsl(var(--destructive))",
  [StatusEnum.High]: "hsl(var(--destructive))",
  [StatusEnum.Medium]: "hsl(var(--caution))",
  [StatusEnum.Low]: "hsl(var(--secure))",
};

export const mapChartData = (data: Array<VulnerabilityType>) => data.map((info) => ({ ...info, fill: colorMap[info.status] }));

export const mapChartConfig = (data: Array<VulnerabilityType>) =>
  data.reduce((acc, curr) => {
    return { ...acc, [curr.status]: { label: curr.status.toUpperCase(), color: colorMap[curr.status] } };
  }, {} satisfies ChartConfig);

export const getTotalVulnerabilities = (data: Array<VulnerabilityType>) => data.reduce((acc, curr) => acc + curr.vulnerabilities, 0);
