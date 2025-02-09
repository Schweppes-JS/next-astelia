import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export const DashboardGraph = () => {
  const t = useTranslations("DASHBOARD.GRAPH");

  return (
    <Card className="w-3/4">
      <CardHeader>
        <CardTitle>{t("SCENARIO.TITLE")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5">
        <CardTitle>{t("RISK.TITLE")}</CardTitle>
      </CardContent>
    </Card>
  );
};
