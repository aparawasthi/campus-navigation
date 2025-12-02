import type { NavEdge } from "@/types/Graph";

interface GraphMap {
  [key: string]: { [key: string]: number };
}

export function buildGraphMap(edges: NavEdge[]): GraphMap {
  const map: GraphMap = {};
  edges.forEach((e) => {
    if (!map[e.from]) map[e.from] = {};
    map[e.from][e.to] = e.cost;
  });
  return map;
}

export function dijkstra(start: string, end: string, edges: NavEdge[]) {
  const graph = buildGraphMap(edges);

  const dist: Record<string, number> = {};
  const prev: Record<string, string | null> = {};
  const nodes = new Set(Object.keys(graph));

  nodes.forEach((n) => {
    dist[n] = Infinity;
    prev[n] = null;
  });

  dist[start] = 0;

  while (nodes.size) {
    const current = [...nodes].reduce((min, n) => (dist[n] < dist[min] ? n : min));

    nodes.delete(current);

    if (current === end) break;

    for (const neighbor in graph[current]) {
      const alt = dist[current] + graph[current][neighbor];
      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        prev[neighbor] = current;
      }
    }
  }

  // Build back the shortest path
  const path = [];
  let u: string | null = end;

  while (u) {
    path.unshift(u);
    u = prev[u];
  }
  return path;
}
