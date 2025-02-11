import { type ContentType, type Props } from "recharts/types/component/DefaultLegendContent";
import { type ReactNode } from "react";

export const CustomRiskChartLegend = ({ payload }: Parameters<Extract<ContentType, (props: Props) => ReactNode>>[0]) => {
  return (
    <ul className="list-none flex flex-col gap-4">
      {payload?.map((entry) => (
        <li key={`legend-${entry.value}`} className="flex items-center space-x-2">
          <div style={{ backgroundColor: entry.color }} className="w-2 h-2 rounded-full" />
          <span className="text-sm text-foreground">
            {entry.payload?.value} <span className="capitalize">{entry.value}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};
