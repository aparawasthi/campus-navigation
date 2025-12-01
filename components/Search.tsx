"use client";

import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value, onChange }: SearchProps) {


  // const handleSelect = (room: Room) => {
  //   console.log({ room });
  //   setQuery("");
  //   setIsActive(false);
  //   onSelect(room);
  // }

  return (
    <div className="relative w-full">
      <input
        id="room-search"
        value={value}
        onChange={onChange}
        placeholder="Search for rooms, labs, halls..."
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-transparent"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      {/* {isActive && (
        <div className="absolute top-full left-0 z-50 w-full border rounded bg-white mt-2 p-2 max-h-48 overflow-y-auto shadow">
          {filtered.map((room) => (
            <div
              key={room.id}
              className="p-2 hover:bg-gray-100 cursor-pointer text-left"
              onClick={() => handleSelect(room)}
            >
              {room.name}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
