"use client";

import { useTranslations } from "next-intl";
import { ReactFlow } from "@xyflow/react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ContextualRiskTable } from "./contextual-risk-table";
import { ContextualRiskChart } from "./contextual-risk-chart";
import { scenario } from "./scenario-config";
import { NodeLegends } from "./node-legends";

import "@xyflow/react/dist/style.css";

export const DashboardGraph = () => {
  const t = useTranslations("DASHBOARD.GRAPH");

  return (
    <Card className="w-3/4">
      <CardHeader>
        <CardTitle>{t("SCENARIO.TITLE")}</CardTitle>
        <CardDescription style={{ width: "100%", height: "300px" }}>
          <ReactFlow {...scenario} style={{ backgroundColor: "hsl(var(--background))", borderRadius: "var(--radius)" }} fitView></ReactFlow>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1.5">
        <Separator />
      </CardContent>
      <CardContent className="space-y-1.5">
        <NodeLegends />
      </CardContent>
      <CardContent className="space-y-1.5">
        <CardTitle>{t("RISK.TITLE")}</CardTitle>
      </CardContent>
      <CardFooter className="gap-4 items-start">
        <ContextualRiskTable />
        <ContextualRiskChart />
      </CardFooter>
    </Card>
  );
};
