import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NodeStatusEnum, Position, type ScenarioType } from "@/types/react-flow-type";
import { NodeFlow } from "@/components/pages/dashboard/node-flow";
import { mockReactFlow } from "@/lib/react-flow-polyfill";

const scenario: ScenarioType = {
  nodes: [
    {
      data: { title: "Internet", subtitle: "30.24.182.134", status: NodeStatusEnum.Caution },
      sourcePosition: Position.Right,
      position: { x: 50, y: 50 },
      type: "malwareNode",
      id: "1",
    },
    {
      data: { title: "User", subtitle: "123.108.50.107" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: 100, y: 50 },
      type: "userNode",
      id: "2",
    },
  ],
  edges: [{ id: "e1-2", source: "1", target: "2" }],
};

const fetchData = jest.fn().mockResolvedValue(scenario);

beforeEach(() => mockReactFlow());

describe("NodeFlow", () => {
  it("should renders custom nodes", async () => {
    const scenarioMock = (await fetchData()) as ScenarioType;
    render(<NodeFlow {...scenarioMock} />);
    expect(screen.getByTestId("rf__node-1")).toBeInTheDocument();
    expect(screen.getByTestId("rf__node-2")).toBeInTheDocument();
  });
});
