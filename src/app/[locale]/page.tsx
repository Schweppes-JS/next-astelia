import { DashboardDescription } from "@/components/pages/dashboard/description";
import { DashboardGraph } from "@/components/pages/dashboard/graph";

export default async function DashboardPage() {
  return (
    <div className="max-h-full flex flex-1 flex-row gap-5 p-6">
      <DashboardDescription />
      <DashboardGraph />
    </div>
  );
}
