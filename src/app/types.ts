import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';

export type WorkflowState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange<Node>;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
};

// // Extend Node type with your custom data
// export interface CustomNodeData extends CustomNodeProps { }

// // Define the type for nodes with the custom data
// export type CustomNode = Node<CustomNodeData>;