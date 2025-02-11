import { type PropsWithChildren } from "react";
import { Handle } from "@xyflow/react";
import { Server } from "lucide-react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { type CustomeNodeProps } from "@/types/react-flow-type";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { NodeStatus } from "./node-status";

type NodeWrapperPropsType = { className?: string } & CustomeNodeProps & PropsWithChildren;

export const NodeWrapper = ({ data, className, children, sourcePosition, targetPosition }: NodeWrapperPropsType) => (
  <Popover>
    <PopoverTrigger asChild>
      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <div className={cn("p-4 bg-chart-1 rounded-full shadow-md", className)}>
          <NodeStatus status={data.status} />
          {children ?? <Server style={{ color: "hsl(var(--chart-3))" }} />}
          {targetPosition && <Handle type="target" position={targetPosition} />}
          {sourcePosition && <Handle type="source" position={sourcePosition} />}
        </div>
        <Label className="cursor-pointer">{data.title}</Label>
      </div>
    </PopoverTrigger>
    <PopoverContent className="flex justify-center w-40">
      <Label>{data.subtitle}</Label>
    </PopoverContent>
  </Popover>
);
