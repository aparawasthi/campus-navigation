import type { NavEdge, NavNode } from "@/types/Graph";

export function connectHallways(nodes: NavNode[]): NavEdge[] {
  const edges: NavEdge[] = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];

      // Euclidean distance
      const dist = Math.hypot(a.x - b.x, a.y - b.y);

      // threshold for "walkable"
      if (dist < 180) {
        edges.push({ from: a.id, to: b.id, cost: dist });
        edges.push({ from: b.id, to: a.id, cost: dist });
      }
    }
  }

  return edges;
}
