import { useEdgesState, useNodesState, ReactFlow, addEdge, type Connection } from "@xyflow/react";
import { type FC, useCallback } from "react";

import { MachineNode, MalwareNode, UserNode } from "@/components/nodes/custom-nodes";
import { type ScenarioType } from "@/types/react-flow-type";

import "@xyflow/react/dist/style.css";

export const NodeFlow: FC<ScenarioType> = (props) => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);
  const [nodes, , onNodesChange] = useNodesState(props.nodes);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), [setEdges]);

  return (
    <ReactFlow
      nodeTypes={{ machineNode: MachineNode, malwareNode: MalwareNode, userNode: UserNode }}
      style={{ backgroundColor: "hsl(var(--background))", borderRadius: "var(--radius)" }}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodes={nodes}
      edges={edges}
      fitView
    ></ReactFlow>
  );
};
