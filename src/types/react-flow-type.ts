import { type Node, type NodeProps } from "@xyflow/react";

export type CustomeNodeType = Node<{ title: string; subtitle: string }>;
export type CustomeNodeProps = NodeProps<CustomeNodeType>;
