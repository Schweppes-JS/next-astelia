import { Server, User, VenetianMask } from "lucide-react";

import { type CustomeNodeProps } from "@/types/react-flow-type";

import { NodeWrapper } from "./node-wrapper";

export const MachineNode = (props: CustomeNodeProps) => (
  <NodeWrapper className="bg-chart-2" {...props}>
    <Server style={{ color: "hsl(var(--chart-3))" }} />
  </NodeWrapper>
);

export const MalwareNode = (props: CustomeNodeProps) => (
  <NodeWrapper className="bg-chart-1" {...props}>
    <VenetianMask style={{ color: "hsl(var(--destructive))" }} />
  </NodeWrapper>
);

export const UserNode = (props: CustomeNodeProps) => (
  <NodeWrapper className="bg-accent-foreground" {...props}>
    <User style={{ color: "hsl(var(--muted-foreground))" }} />
  </NodeWrapper>
);
