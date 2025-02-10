import { Handle, Position } from "@xyflow/react";
import { User } from "lucide-react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { type CustomeNodeProps } from "@/types/react-flow-type";
import { Label } from "@/components/ui/label";

export const UserNode = ({ data }: CustomeNodeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <div className="p-4 bg-accent-foreground rounded-full shadow-md">
            <User style={{ color: "hsl(var(--muted-foreground))" }} />
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
