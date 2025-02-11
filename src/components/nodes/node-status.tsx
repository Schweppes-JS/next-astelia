import { ShieldX, Users } from "lucide-react";

import { NodeStatusEnum } from "@/types/react-flow-type";

type NodeStatusPropsType = { status?: NodeStatusEnum };

export const NodeStatus = ({ status }: NodeStatusPropsType) => {
  switch (status) {
    case NodeStatusEnum.Secure:
      return (
        <div className="bg-secure w-5 h-5 absolute top-0 right-0 rounded-full flex justify-center items-center">
          <ShieldX className="" size={11} style={{ color: "hsl(var(--background))" }} />
        </div>
      );
    case NodeStatusEnum.Caution:
      return (
        <div className="bg-caution w-5 h-5 absolute top-0 right-0 rounded-full flex justify-center items-center">
          <Users className="" size={11} style={{ color: "hsl(var(--background))" }} />
        </div>
      );
    case NodeStatusEnum.Destructive:
      return (
        <div className="bg-destructive w-5 h-5 absolute top-0 right-0 rounded-full flex justify-center items-center">
          <ShieldX size={11} style={{ color: "hsl(var(--background))" }} />
        </div>
      );
    default:
      return null;
  }
};
