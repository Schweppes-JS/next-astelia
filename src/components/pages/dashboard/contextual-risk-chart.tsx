"use client";

import { Label, Legend, Pie, PieChart } from "recharts";
import { useMemo } from "react";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { chartConfig, chartData } from "./risk-chart-config";
import { CustomRiskChartLegend } from "./custom-risk-chart-legend";

export const ContextualRiskChart = () => {
  const totalVulnerabilities = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.vulnerabilities, 0);
  }, []);

  return (
    <Card className="flex flex-col w-1/3 min-w-[350px] self-start">
      <CardHeader className="pb-0 pt-2">
        <h4 className="text-muted-foreground">Contextual Risk</h4>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="vulnerabilities" nameKey="status" innerRadius={50} strokeWidth={2}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalVulnerabilities.toLocaleString()}
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
