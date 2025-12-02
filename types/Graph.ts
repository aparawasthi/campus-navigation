export interface NavNode {
    id: string;
    x: number;
    y: number;
}

export interface NavEdge {
    from: string;
    to: string;
    cost: number;
}

export interface RoutingGraph {
    nodes: NavNode[];
    edges: NavEdge[];
}
