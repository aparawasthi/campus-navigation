import type { RoutingGraph } from "@/types/Graph";
import { HALLWAY_NODES } from "@/data/hallwayNodes";
import { getDoorNodes } from "@/utils/getDoorNodes";

import { connectHallways } from "@/utils/connectHallways";
import { connectDoors } from "@/utils/connectDoors";

const DOOR_NODES = getDoorNodes();

export const ROUTING_GRAPH: RoutingGraph = {
  nodes: [...HALLWAY_NODES, ...DOOR_NODES],
  edges: [...connectHallways(HALLWAY_NODES), ...connectDoors(DOOR_NODES, HALLWAY_NODES)],
};
