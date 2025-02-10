import { Handle, Position } from "@xyflow/react";
import { Server } from "lucide-react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { type CustomeNodeProps } from "@/types/react-flow-type";
import { Label } from "@/components/ui/label";

import { NodeStatus } from "./node-status";

export const MachineNode = ({ data }: CustomeNodeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <div className="p-4 bg-chart-2 rounded-full shadow-md">
            <NodeStatus status={data.status} />
            <Server style={{ color: "hsl(var(--chart-3))" }} />
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
          </div>
          <Label className="cursor-pointer">{data.title}</Label>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex justify-center w-40">
        <Label>{data.subtitle}</Label>
      </PopoverContent>
    </Popover>
  );
};
