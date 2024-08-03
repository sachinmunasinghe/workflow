import { Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export type CustomNodeProps = {
  data: {
    id: string;
    label: string;
    type: "START" | "END" | "PROCESS" | "IF" | "WHILE" | "INPUT" | "OUTPUT";
  };
};

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={"border-blue-900 border-2"}>
      <div>{data.label}</div>

      {data.type === "START" && (
        <Handle type="source" position={Position.Bottom} />
      )}

      {data.type === "END" && (
        <>
          <Handle type="target" position={Position.Top} />
        </>
      )}

      {data.type === "PROCESS" && (
        <>
          <Handle type="target" position={Position.Top} />
          <Handle type="source" position={Position.Bottom} />
        </>
      )}
    </div>
  );
};

export default CustomNode;
