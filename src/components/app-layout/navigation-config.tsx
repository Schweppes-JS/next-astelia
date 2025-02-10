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
      titleKey: "LAYOUT.HEADLINE.COMPANY_NAME",
      Icon: Rocket,
      url: "/",
    },
  ],
  content: [
    { titleKey: "LAYOUT.NAVIGATION.DASHBOARD", url: "/", Icon: LayoutDashboard },
    { titleKey: "LAYOUT.NAVIGATION.THREAT_SCENARIOUS", url: "/threat-scenarious", Icon: TriangleAlert },
    { titleKey: "LAYOUT.NAVIGATION.INVENTORY", url: "/inventory", Icon: Cuboid },
    { titleKey: "LAYOUT.NAVIGATION.ISSUES", url: "/issues", Icon: Shrink },
    { titleKey: "LAYOUT.NAVIGATION.INTEGRATIONS", url: "/integrations", Icon: Unplug },
    { titleKey: "LAYOUT.NAVIGATION.POLICIES", url: "/policies", Icon: FileText },
    { titleKey: "LAYOUT.NAVIGATION.REPORTS", url: "/reports", Icon: ChartNoAxesGantt },
  ],
  footer: [
    { titleKey: "LAYOUT.NAVIGATION.SETTINGS", url: "/setting", Icon: Settings, src: undefined },
    { titleKey: "LAYOUT.NAVIGATION.NOTIFICATIONS", url: "/notifications", Icon: MessageSquareDot, src: undefined },
    { titleKey: "LAYOUT.NAVIGATION.LOGOUT", url: "/login", Icon: LogOut, src: "https://avatars.githubusercontent.com/u/68691816?v=4" },
  ],
} as const;
