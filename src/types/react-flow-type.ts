import { type ReactFlowProps, type Node, type NodeProps } from "@xyflow/react";

export enum NodeStatusEnum {
  Destructive = "destructive",
  Caution = "caution",
  Secure = "secure",
}

export enum Position {
  Bottom = "bottom",
  Right = "right",
  Left = "left",
  Top = "top",
}

export type CustomeNodeType = Node<{ title: string; subtitle: string; status?: NodeStatusEnum }>;

export type CustomeNodeProps = NodeProps<CustomeNodeType>;

export type ScenarioType = {
  nodes: NonNullable<ReactFlowProps<CustomeNodeType>["nodes"]>;
  edges: NonNullable<ReactFlowProps<CustomeNodeType>["edges"]>;
};
