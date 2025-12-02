import type { NavNode, NavEdge } from "@/types/Graph";

export function connectDoors(doors: NavNode[], hallways: NavNode[]): NavEdge[] {
  const edges: NavEdge[] = [];

  doors.forEach((door) => {
    let closest = hallways[0];
    let bestDist = Infinity;

    hallways.forEach((hall) => {
      const dist = Math.hypot(door.x - hall.x, door.y - hall.y);
      if (dist < bestDist) {
        closest = hall;
        bestDist = dist;
      }
    });

    edges.push({ from: door.id, to: closest.id, cost: bestDist });
    edges.push({ from: closest.id, to: door.id, cost: bestDist });
  });

  return edges;
}
