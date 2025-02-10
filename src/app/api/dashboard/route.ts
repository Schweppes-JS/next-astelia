export const dynamic = "force-static";

const scenario = {
  nodes: [
    { id: "1", data: { label: "Node 1" }, position: { x: 100, y: 100 } },
    { id: "2", data: { label: "Node 2" }, position: { x: 300, y: 100 } },
    { id: "3", data: { label: "Node 3" }, position: { x: 500, y: 100 } },
    { id: "4", data: { label: "Node 4" }, position: { x: 700, y: 50 } },
    { id: "5", data: { label: "Node 5" }, position: { x: 700, y: 150 } },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e3-5", source: "3", target: "5" },
  ],
};

export type ScenarioType = typeof scenario;
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json({ data: scenario });
}
