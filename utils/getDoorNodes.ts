import type { NavNode } from "@/types/Graph";
import { ROOMS } from "@/data/rooms";

export function getDoorNodes(): NavNode[] {
  const doorNodes: NavNode[] = [];

  ROOMS.forEach((room) => {
    if (Array.isArray(room.doors)) {
      room.doors.forEach((door) => {
        doorNodes.push({
          id: door.id,
          x: door.x,
          y: door.y,
        });
      });
    }
  });

  return doorNodes;
}
