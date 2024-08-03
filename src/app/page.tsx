"use client";

import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Edge,
  Node,
} from "@xyflow/react";

import useStore from "./store";
import CustomNode from "./components/CustomNode";
import { useEffect } from "react";

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    data: { id: "1", label: "Start", type: "START" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    type: "customNode",
    data: { id: "1", label: "Process", type: "PROCESS" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "customNode",
    data: { id: "1", label: "Output", type: "END" },
    position: { x: 250, y: 250 },
  },
] as Node[];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
] as Edge[];

export default function Home() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    setEdges,
  } = useStore(useShallow(selector));

  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <main>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={rfStyle}
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </main>
  );
}
