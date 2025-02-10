import { type ColumnDef } from "@tanstack/react-table";
import { Server } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export type Asset = { machine: string; ip: string; status: string };

export const data: Asset[] = [
  { machine: "Central Server", ip: "30.24.182.134", status: "Critical" },
  { machine: "Remote Server", ip: "123.108.50.107", status: "Critical" },
  { machine: "Local Server", ip: "119.11.178.239", status: "High" },
  { machine: "Far Off", ip: "123.108.50.107", status: "High" },
];

export const columns: ColumnDef<Asset>[] = [
  {
    cell: ({ row }) => (
      <div className="flex gap-2">
        <div className="w-12 h-12 p-1 flex items-center justify-center bg-chart-2 rounded-full shadow-md">
          <Server style={{ color: "hsl(var(--chart-3))" }} />
        </div>
        <p className="flex flex-col text-foreground justify-center">
          <span>{row.original.machine}</span>
          <span className="text-[8px]">{row.original.ip}</span>
        </p>
      </div>
    ),
    accessorKey: "machine",
    header: "Asset",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-right">Contextual Risk</p>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Badge className="rounded-full p-3 " variant="destructive">
          {row.original.status}
        </Badge>
      </div>
    ),
  },
];
