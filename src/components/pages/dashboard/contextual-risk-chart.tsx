"use client";

import { Label, Legend, Pie, PieChart } from "recharts";
import { type FC, useMemo } from "react";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type VulnerabilityType } from "@/types/common-types";

import { mapChartConfig, mapChartData, getTotalVulnerabilities } from "./risk-chart-helpers";
import { CustomRiskChartLegend } from "./custom-risk-chart-legend";

export const ContextualRiskChart: FC<{ data: Array<VulnerabilityType> }> = ({ data }) => {
  const info = useMemo(() => {
    return { totalVulnerabilities: getTotalVulnerabilities(data), chartConfig: mapChartConfig(data), chartData: mapChartData(data) };
  }, [data]);

  return (
    <Card className="flex flex-col w-1/3 min-w-[350px] self-start">
      <CardHeader className="pb-0 pt-2">
        <h4 className="text-muted-foreground">Contextual Risk</h4>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={info.chartConfig}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={info.chartData} dataKey="vulnerabilities" nameKey="status" innerRadius={50} strokeWidth={2}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan data-testid="risk-total" x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {info.totalVulnerabilities.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <Legend
              wrapperStyle={{ height: "130px" }}
              content={<CustomRiskChartLegend />}
              verticalAlign="middle"
              layout="vertical"
              height={36}
              align="left"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
