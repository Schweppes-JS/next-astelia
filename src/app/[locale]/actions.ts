"use server";

import { type ScenarioType, NodeStatusEnum, Position } from "@/types/react-flow-type";
import { type Asset, StatusEnum, type VulnerabilityType } from "@/types/common-types";

const scenario: ScenarioType = {
  nodes: [
    {
      data: { title: "Internet", subtitle: "30.24.182.134", status: NodeStatusEnum.Caution },
      sourcePosition: Position.Right,
      position: { x: 100, y: 100 },
      type: "malwareNode",
      id: "1",
    },
    {
      data: { title: "User", subtitle: "123.108.50.107" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: 300, y: 100 },
      type: "userNode",
      id: "2",
    },
    {
      data: { title: "PC", subtitle: "123.181.176.61" },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: 500, y: 100 },
      type: "machineNode",
      id: "3",
    },
    {
      data: { title: "PC", subtitle: "119.11.178.239", status: NodeStatusEnum.Destructive },
      targetPosition: Position.Left,
      position: { x: 700, y: 50 },
      type: "machineNode",
      id: "4",
    },
    {
      data: { title: "PC", subtitle: "41.55.224.75", status: NodeStatusEnum.Destructive },
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

export async function getScenario() {
  return scenario;
}

const vulnerabilities: Array<VulnerabilityType> = [
  { status: StatusEnum.Critical, vulnerabilities: 2 },
  { status: StatusEnum.High, vulnerabilities: 0 },
  { status: StatusEnum.Medium, vulnerabilities: 0 },
  { status: StatusEnum.Low, vulnerabilities: 0 },
];

export async function getVulnerabilities() {
  return vulnerabilities;
}

const riskAssets: Array<Asset> = [
  { machine: "Central Server", ip: "30.24.182.134", status: StatusEnum.Critical },
  { machine: "Remote Server", ip: "123.108.50.107", status: StatusEnum.Critical },
  { machine: "Local Server", ip: "119.11.178.239", status: StatusEnum.High },
  { machine: "Far Off", ip: "123.108.50.107", status: StatusEnum.High },
];

export async function getRiskAssets() {
  return riskAssets;
}
