import {
  ChartNoAxesGantt,
  MessageSquareDot,
  LayoutDashboard,
  TriangleAlert,
  FileText,
  Settings,
  Shrink,
  Cuboid,
  Unplug,
  Rocket,
  LogOut,
} from "lucide-react";

export const navigationConfig = {
  header: [
    {
      src: "https://media.licdn.com/dms/image/v2/C4E0BAQEHs1C2gRRukA/company-logo_200_200/company-logo_200_200/0/1630652289773/stealth_startup_tlv_logo?e=2147483647&v=beta&t=goldEnKkZ03QaU2vOzyBTkydCgtBFnzW6NYBI2fp11I",
      title: "Astelia",
      Icon: Rocket,
      url: "/",
    },
  ],
  content: [
    { title: "Dashboard", url: "/", Icon: LayoutDashboard },
    { title: "Threat Scenarious", url: "/threat-scenarious", Icon: TriangleAlert },
    { title: "Inventory", url: "/inventory", Icon: Cuboid },
    { title: "Issues", url: "/issues", Icon: Shrink },
    { title: "Integrations", url: "/integrations", Icon: Unplug },
    { title: "Policies", url: "/policies", Icon: FileText },
    { title: "Reports", url: "/reports", Icon: ChartNoAxesGantt },
  ],
  footer: [
    { title: "Setting", url: "/setting", Icon: Settings },
    { title: "Notifications", url: "/notifications", Icon: MessageSquareDot },
    { title: "Logout", url: "/login", Icon: LogOut, src: "https://avatars.githubusercontent.com/u/68691816?v=4" },
  ],
};
