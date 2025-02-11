"use client";

import { useTranslations } from "next-intl";
import { type FC } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type Asset, type VulnerabilityType } from "@/types/common-types";
import { type ScenarioType } from "@/types/react-flow-type";
import { Separator } from "@/components/ui/separator";

import { ContextualRiskTable } from "./contextual-risk-table";
import { ContextualRiskChart } from "./contextual-risk-chart";
import { NodeLegends } from "./node-legends";
import { NodeFlow } from "./node-flow";

export const DashboardGraph: FC<{ scenario: ScenarioType; vulnerabilities: Array<VulnerabilityType>; riskAssets: Array<Asset> }> = ({
  vulnerabilities,
  riskAssets,
  scenario,
}) => {
  const t = useTranslations("DASHBOARD.GRAPH");

  return (
    <Card className="w-3/4">
      <CardHeader>
        <CardTitle>{t("SCENARIO.TITLE")}</CardTitle>
        <CardDescription style={{ width: "100%", height: "300px" }}>
          <NodeFlow {...scenario} />
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
        <ContextualRiskTable data={riskAssets} />
        <ContextualRiskChart data={vulnerabilities} />
      </CardFooter>
    </Card>
  );
};
