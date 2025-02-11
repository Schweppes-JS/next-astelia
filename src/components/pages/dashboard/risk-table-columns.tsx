import { type ColumnDef } from "@tanstack/react-table";
import { Server } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { type Asset } from "@/types/common-types";

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
        <Badge className="rounded-full p-3 capitalize" variant="destructive">
          {row.original.status}
        </Badge>
      </div>
    ),
  },
];
