"use client";

import { useState, useMemo, Suspense } from "react";
import CampusMap from "@/components/maps/VastuGroundFloor";
import Search from "@/components/Search";
import type { Room } from "@/types/Room";
import { ROOMS } from "@/data/rooms";
import { cn } from "@/lib/utils";
import { ROUTING_GRAPH } from "@/data/routingGraph";
import { dijkstra } from "@/utils/pathfinding";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { ArrowLeft, MapPin, Clock, Footprints } from "lucide-react";

function getPathDistance(path: string[]) {
  let dist = 0;

  for (let i = 0; i < path.length - 1; i++) {
    const a = ROUTING_GRAPH.nodes.find((n) => n.id === path[i]);
    const b = ROUTING_GRAPH.nodes.find((n) => n.id === path[i + 1]);

    if (!a || !b) continue;

    const dx = a.x - b.x;
    const dy = a.y - b.y;

    dist += Math.sqrt(dx * dx + dy * dy);
  }

  return dist;
}

function getShortestPath(roomA: string, roomB: string) {
  const rA = ROOMS.find((r) => r.id === roomA);
  const rB = ROOMS.find((r) => r.id === roomB);

  if (!rA?.doors?.length || !rB?.doors?.length) return [];

  const start = rA.doors[0].id;

  let bestPath: string[] = [];
  let bestDistance = Infinity;

  for (const doorB of rB.doors) {
    const endDoor = doorB.id;

    const path = dijkstra(start, endDoor, ROUTING_GRAPH.edges);
    if (path.length === 0) continue;

    const distance = getPathDistance(path);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestPath = path;
    }
  }
  return bestPath;
}

export default function Home() {
  return (
    <Suspense>
      <MapPage />
    </Suspense>
  );
}

function MapPage() {
  const searchParams = useSearchParams();
  const entrance = searchParams.get("entrance");
  const [query, setQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [path, setPath] = useState<string[] | null>(null);

  const filteredRooms = useMemo(() => {
    if (!query) return ROOMS;
    return ROOMS.filter((room) => room.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const handleSelect = (room: Room) => {
    setSelectedRoom(room);
    setQuery("");
    const el = document.getElementById(room.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const clearSelection = () => {
    setSelectedRoom(null);
    setPath(null);
    setIsNavigating(false);
  };

  const handleStartNavigation = () => {
    if (selectedRoom) {
      const newPath = getShortestPath(entrance || "exhibition-area", selectedRoom.id);
      if (newPath.length === 0) return;
      setIsNavigating(true);
      setPath(newPath);
    }
  };

  return (
    <>
      <Header isNavigating={isNavigating} room={selectedRoom} onClearSelection={clearSelection} />
      {isNavigating && selectedRoom ? (
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 p-4 md:p-12">
          {/* Turn-by-Turn Directions */}
          <div className="lg:col-span-2 space-y-4">
            {/* Current Step Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-6">
              <div className="flex-1">
                <h1 className="mb-2">Navigating to {selectedRoom.name}</h1>
                <div className="flex items-center gap-4 text-blue-100 text-sm">
                  <span className="flex items-center gap-1">
                    <Footprints className="w-4 h-4" />
                    {/* {totalDistance}m */}
                  </span>
                  <span className="flex items-center gap-1">
                    {/* <Clock className="w-4 h-4" />~{estimatedTime} min */}
                  </span>
                  <span className="flex items-center g  ap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedRoom.floor}
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm">
                  {currentStep + 1}
                </div>
                <span className="text-sm text-blue-100">
                  Step {currentStep + 1} of {directions.length}
                </span>
              </div> */}
              {/* <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  {getStepIcon(directions[currentStep].icon)}
                </div>
                <div className="flex-1">
                  <p className="text-lg mb-2">{directions[currentStep].instruction}</p>
                  {directions[currentStep].distance !== "0m" && (
                    <p className="text-sm text-blue-100">{directions[currentStep].distance}</p>
                  )}
                </div>
              </div> */}

              {/* Navigation Controls */}
              <div className="flex gap-2 mt-4">
                {/* <button
                  onClick={handlePreviousStep}
                  disabled={currentStep === 0}
                  className="flex-1 py-2 px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button> */}
                {/* <button
                  onClick={handleNextStep}
                  disabled={currentStep === directions.length - 1}
                  className="flex-1 py-2 px-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {currentStep === directions.length - 1 ? "Arrived" : "Next"}
                  {currentStep < directions.length - 1 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button> */}
                <button
                  onClick={clearSelection}
                  className="flex-1 py-2 px-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  End Navigation
                </button>
              </div>
            </div>

            {/* All Steps List */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-gray-900">All Directions</h3>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
                {directions.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-gray-200 transition-all ${
                      index === currentStep
                        ? "bg-blue-50 border-l-4 border-blue-600"
                        : index < currentStep
                        ? "bg-gray-50 opacity-60"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          index < currentStep
                            ? "bg-green-100 text-green-600"
                            : index === currentStep
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {index < currentStep ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span className="text-sm">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm ${
                            index === currentStep ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {step.instruction}
                        </p>
                        {step.distance !== "0m" && (
                          <p className="text-xs text-gray-500 mt-1">{step.distance}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900">Campus Floor Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Ground Floor - Vastu Building</p>
                </div>
                {selectedRoom && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    Showing: {selectedRoom.name}
                  </div>
                )}
              </div>

              <div className="p-6 overflow-auto bg-gray-50">
                <div className="inline-block min-w-full">
                  <div
                    className="relative transition-all duration-300"
                    // style={{ filter: highlightedRoom ? "brightness(0.7)" : "none" }}
                  >
                    <CampusMap
                      selectedRoomId={selectedRoom?.id}
                      isNavigating={isNavigating}
                      path={path}
                      onRoomSelect={handleSelect}
                    />
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600 mb-3">Legend:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ROOMS.map((room) => (
                    <div className="flex items-center gap-2" key={room.id}>
                      <div
                        className={cn("w-4 h-4 border rounded")}
                        style={{
                          backgroundColor: room.fill,
                          borderColor: room.stroke,
                        }}
                      ></div>
                      <span className="text-xs text-gray-700">{room.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Seminar Hall", "Computer Lab", "Office", "Washroom"].map((name) => {
            const room = rooms.find((r) => r.name === name);
            return room ? (
              <button
                key={room.id}
                onClick={() => handleRoomSelect(room)}
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50
        transition-colors text-sm text-gray-900 text-center"
              >
                {name}
              </button>
            ) : null;
          })}
        </div> */}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 p-4 md:p-12">
          <div className="lg:col-span-2 space-y-4">
            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-gray-900 mb-4">Search Location</h3>
              <Search value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            {/* Room List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-gray-900">Available Locations</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {filteredRooms.length} location{filteredRooms.length !== 1 ? "s" : ""} found
                </p>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {filteredRooms.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {filteredRooms.map((room) => (
                      <button
                        key={room.id}
                        onClick={() => handleSelect(room)}
                        className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${
                          selectedRoom?.id === room.id
                            ? "bg-blue-50 border-l-4 border-blue-600"
                            : ""
                        }`}
                      >
                        <h4 className="text-gray-900 mb-1">{room.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          {/* <span className="px-2 py-1 bg-gray-100 rounded text-xs">Hall</span>
                      <span>•</span> */}
                          <span>Ground Floor</span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <p>No locations found</p>
                    <p className="text-sm mt-1">Try a different search term</p>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Room Info */}
            {selectedRoom && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-gray-900">Location Details</h3>
                  <button onClick={clearSelection} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="text-gray-900">{selectedRoom.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="text-gray-900">{selectedRoom.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Floor</p>
                    <p className="text-gray-900">{selectedRoom.floor}</p>
                  </div>
                  {/* <div>
                  <p className="text-sm text-gray-600">Description</p>
                  <p className="text-gray-900">Description</p>
                </div> */}
                  <button
                    onClick={handleStartNavigation}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900">Campus Floor Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Ground Floor - Vastu Building</p>
                </div>
                {selectedRoom && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    Showing: {selectedRoom.name}
                  </div>
                )}
              </div>

              <div className="p-6 overflow-auto bg-gray-50">
                <div className="inline-block min-w-full">
                  <div
                    className="relative transition-all duration-300"
                    // style={{ filter: highlightedRoom ? "brightness(0.7)" : "none" }}
                  >
                    <CampusMap
                      selectedRoomId={selectedRoom?.id}
                      path={path}
                      onRoomSelect={handleSelect}
                    />
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600 mb-3">Legend:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ROOMS.map((room) => (
                    <div className="flex items-center gap-2" key={room.id}>
                      <div
                        className={cn("w-4 h-4 border rounded")}
                        style={{
                          backgroundColor: room.fill,
                          borderColor: room.stroke,
                        }}
                      ></div>
                      <span className="text-xs text-gray-700">{room.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Seminar Hall", "Computer Lab", "Office", "Washroom"].map((name) => {
            const room = rooms.find((r) => r.name === name);
            return room ? (
              <button
                key={room.id}
                onClick={() => handleRoomSelect(room)}
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50
        transition-colors text-sm text-gray-900 text-center"
              >
                {name}
              </button>
            ) : null;
          })}
        </div> */}
          </div>
        </div>
      )}
    </>
  );
}
