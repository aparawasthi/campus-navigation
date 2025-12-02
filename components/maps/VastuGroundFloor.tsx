"use client";

import { useEffect, useRef } from "react";
import type { Room, RoomId } from "@/types/Room";
import { ROUTING_GRAPH } from "@/data/routingGraph";
import { ROOMS } from "@/data/rooms";
import { cn } from "@/lib/utils";
import { HALLWAY_NODES } from "@/data/hallwayNodes";
import { getDoorNodes } from "@/utils/getDoorNodes";

interface CampusMapProps {
  selectedRoomId?: RoomId | null;
  isNavigating?: boolean;
  path: string[] | null;
  onRoomSelect?: (room: Room) => void;
}
// const DOOR_NODES = [
//   { id: "door-node-1", x: 342, y: 1292 },
//   { id: "door-node-2", x: 518, y: 1057 },
//   { id: "door-node-3", x: 518, y: 786 },
//   { id: "door-node-4", x: 582, y: 405 },
//   { id: "door-node-5", x: 733, y: 766 },
//   { id: "door-node-6", x: 647, y: 393 },
//   { id: "door-node-7", x: 649, y: 329 },
//   { id: "door-node-8", x: 508, y: 329 },
//   { id: "door-node-9", x: 649, y: 244 },
//   { id: "door-node-10", x: 508, y: 207 },
//   { id: "door-node-11", x: 891, y: 790 },
//   { id: "door-node-12", x: 843, y: 994 },
//   { id: "door-node-13", x: 775, y: 1196 },
//   { id: "door-node-14", x: 757, y: 1260 },
// ];

const DOOR_NODES = getDoorNodes();

function RoutePolyline({ path }: { path: string[] }) {
  const { nodes } = ROUTING_GRAPH;

  const pts = path
    .map((id) => {
      const n = nodes.find((p) => p.id === id);
      return n ? `${n.x},${n.y}` : null;
    })
    .filter(Boolean)
    .join(" ");

  return (
    <polyline
      points={pts}
      stroke="red"
      strokeWidth={8}
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeDasharray="12 14"
      style={{
        animation: "dashmove 1s linear infinite",
      }}
    />
  );
}

export default function CampusMap({
  selectedRoomId,
  isNavigating = false,
  path,
  onRoomSelect,
}: CampusMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // useEffect(() => {
  //   const init = async () => {
  //     if (!svgRef.current) return;
  //     const svgPanZoom = (await import("svg-pan-zoom")).default;

  //     svgPanZoom(svgRef.current, {
  //       zoomEnabled: true,
  //       controlIconsEnabled: true,
  //       minZoom: 0.75,
  //       maxZoom: 1.5,
  //     });
  //   };

  //   // init();
  // }, [onRoomSelect]);

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        id="campus-map"
        viewBox="0 0 1298 1595"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-full aspect-[1298/1595]")}
      >
        <g id="vastu-map">
          <path
            id="vastu-building-ground-floor"
            d="M575.5 1309.5L583.5 1280.5L593.5 1287.5V1524.5H683L805.5 1401L825 1424L930 1324.5L894 1282.5H965H1068.5H1213V1249V1159V903.5V374H1057H932.5L816.5 370.5H667.5H623V350H640V275.5H593.5V271.5H646V300.5H730.5L729 201.5H646V221H640V165H601.5V171H593.5V155H640V141H646V171H675.5V101H386.5V176H347V297.5H520V316H515V350H543.5V374H444H341.5H242H119.5V833.5V1077H286.5V1092.5H222.5V1121.5L227 1149.5L235 1178L246.5 1202.5L257.5 1227L271 1250L297 1287.5L286.5 1297L280.5 1287.5L264.5 1268.5V1259.5L257.5 1250L244.5 1227L231.5 1198.5L222.5 1174.5L215 1149.5L210.5 1121.5V1092.5H177.5H95V350H502.5V316H322.5V155H371.5V89H689V191H744V311.5H652V350H932.5H1234.5L1239 1305H970.5L953.5 1324.5L930 1348.5L907.5 1369.5L883 1394L854 1424L825 1451.5L805.5 1431.5L794 1443L774 1462.5L753.5 1482L728.5 1507.5L706.5 1529.5L688.5 1546.5H653.5H621H593.5H568.5V1514V1482V1443H560.5H547.5L529.5 1439.5H515V1431.5H504L486 1428L466 1421L448.5 1416L432 1408L416 1401L403 1394L391 1388L377 1379L364 1369.5L348.5 1357.5L336 1345L348.5 1337L356.5 1345L364 1353.5L374.5 1362L385.5 1369.5L395.5 1377L409 1385L424 1394L439 1401L455 1408L469 1411.5L486 1416L518 1424H551.5H575.5V1408V1385V1362V1332.5V1309.5Z"
            fill="#999696"
            stroke="black"
          />
          <text
            id="Entrance"
            transform="translate(237 1351.65) rotate(-38.0006)"
            fill="black"
            xmlSpace="preserve"
          >
            <tspan x="0" y="26.7273">
              Entrance
            </tspan>
          </text>
          {ROOMS.map((room) => (
            <g
              key={room.id}
              id={room.id}
              className={cn(
                "room",
                selectedRoomId === room.id && "selected-room",
                isNavigating && "navigation-mode"
              )}
              onClick={() => onRoomSelect?.(room)}
            >
              {room.element}
            </g>
          ))}
          {path && path.length > 0 && <RoutePolyline path={path} />}
          {/* {HALLWAY_NODES.map((node: any) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="10"
              fill="blue"
              stroke="black"
              strokeWidth="0"
            >
              <title>{node.id}</title>
            </circle>
          ))}
          {DOOR_NODES.map((node: any) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="10"
              fill="red"
              stroke="black"
              strokeWidth="0"
            >
              <title>{node.id}</title>
            </circle>
          ))} */}
        </g>
      </svg>
    </div>
  );
}
