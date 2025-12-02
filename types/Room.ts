import { JSX } from "react";

export type RoomId = "backside-staircase" | "lift" | "exhibition-area" | "washroom" | "model-sampling-lab" | "staircase" | "office" | "computer-lab" | "seminar-hall" | "staff-lounge" | "back-exit";

export interface Room {
  id: RoomId;
  name: string;
  floor: string;
  type: string;
  fill: string;
  stroke: string;
  doors?: any[];
  element: JSX.Element;
}
