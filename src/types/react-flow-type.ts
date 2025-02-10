import { type Node, type NodeProps } from "@xyflow/react";

export enum NodeStatusEnum {
  "destructive" = "destructive",
  "caution" = "caution",
  "secure" = "secure",
}

export type CustomeNodeType = Node<{ title: string; subtitle: string; status?: NodeStatusEnum }>;

export type CustomeNodeProps = NodeProps<CustomeNodeType>;
