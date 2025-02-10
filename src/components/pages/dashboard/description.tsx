import { useTranslations } from "next-intl";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RemediationPlanTable } from "./remediation-plan-table";

export const DashboardDescription = () => {
  const t = useTranslations("DASHBOARD.DESCRIPTION");

  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle>{t("OVERVIEW.TITLE")}</CardTitle>
        <CardDescription>{t("OVERVIEW.CONTENT")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardContent className="space-y-1.5">
        <CardTitle>{t("ATTACK_PATH.TITLE")}</CardTitle>
        <CardDescription>{t("ATTACK_PATH.CONTENT")}</CardDescription>
      </CardContent>
      <CardContent>
        <Separator />
      </CardContent>
      <CardContent className="space-y-1.5">
        <CardTitle>{t("REMEDIATION_PLANS.TITLE")}</CardTitle>
        <CardDescription>
          <RemediationPlanTable />
        </CardDescription>
      </CardContent>
    </Card>
  );
};
