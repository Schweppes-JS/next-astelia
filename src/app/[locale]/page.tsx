import { DashboardDescription } from "@/components/pages/dashboard/description";
import { DashboardGraph } from "@/components/pages/dashboard/graph";

import { getRiskAssets, getScenario, getVulnerabilities } from "./actions";

export default async function DashboardPage() {
  const [scenario, vulnerabilities, riskAssets] = await Promise.all([getScenario(), getVulnerabilities(), getRiskAssets()]);

  return (
    <div className="max-h-full flex flex-1 flex-row gap-5 p-6">
      <DashboardDescription />
      <DashboardGraph {...{ scenario, vulnerabilities, riskAssets }} />
    </div>
  );
}
