import { Position, type ReactFlowProps } from "@xyflow/react";

import { type CustomeNodeType } from "@/types/react-flow-type";
import { MachineNode } from "@/components/nodes/machine-node";
import { MalwareNode } from "@/components/nodes/malware-node";
import { UserNode } from "@/components/nodes/user-node";

export const scenario: ReactFlowProps<CustomeNodeType> = {
  nodeTypes: { machineNode: MachineNode, malwareNode: MalwareNode, userNode: UserNode },
  nodes: [
    {
      data: { title: "Internet", subtitle: "30.24.182.134" },
      sourcePosition: Position.Right,
      position: { x: 100, y: 100 },
      type: "malwareNode",
      id: "1",
    },
    {
      data: { title: "PC", subtitle: "123.108.50.107" },
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
      position: { x: 300, y: 100 },
      type: "userNode",
      id: "2",
    },
    {
      data: { title: "PC", subtitle: "123.181.176.61" },
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
      position: { x: 500, y: 100 },
      type: "machineNode",
      id: "3",
    },
    {
      data: { title: "PC", subtitle: "119.11.178.239" },
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
      position: { x: 700, y: 50 },
      type: "machineNode",
      id: "4",
    },
    {
      data: { title: "PC", subtitle: "41.55.224.75" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: 700, y: 150 },
      type: "machineNode",
      id: "5",
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e3-5", source: "3", target: "5" },
  ],
};
