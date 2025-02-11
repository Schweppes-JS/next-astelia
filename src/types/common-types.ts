export type VulnerabilityType = { status: StatusEnum; vulnerabilities: number };

export enum StatusEnum {
  Critical = "critical",
  Medium = "medium",
  High = "high",
  Low = "low",
}

export type Asset = { machine: string; ip: string; status: string };
