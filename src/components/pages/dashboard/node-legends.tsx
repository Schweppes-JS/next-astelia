import { ShieldX } from "lucide-react";

import { Label } from "@/components/ui/label";

export const NodeLegends = () => {
  return (
    <ul className="flex gap-4 px-6">
      <li className="flex items-center gap-2">
        <ShieldX size={40} style={{ color: "hsl(var(--destructive))" }} />
        <Label className="text-destructive">Destructive</Label>
      </li>
      <li className="flex items-center gap-2">
        <ShieldX size={40} style={{ color: "hsl(var(--caution))" }} />
        <Label className="text-caution">Caution</Label>
      </li>
      <li className="flex items-center gap-2">
        <ShieldX size={40} style={{ color: "hsl(var(--secure))" }} />
        <Label className="text-secure">Secure</Label>
      </li>
    </ul>
  );
};
