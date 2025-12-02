import { Room } from "@/types/Room";
import Image from "next/image";
import { ArrowLeft, MapPin, Clock, Footprints } from "lucide-react";

export default function Header({ room, isNavigating, onClearSelection }: { room: Room | null; isNavigating: boolean; onClearSelection: () => void }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      {/* {isNavigating && room ? (
        <div className="flex items-center gap-4">
          <button
            onClick={onClearSelection}
            className="p-2 hover:bg-blue-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="mb-2">Navigating to {room.name}</h1>
            <div className="flex items-center gap-4 text-blue-100 text-sm">
              <span className="flex items-center gap-1">
                <Footprints className="w-4 h-4" />
                {totalDistance}m 
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />~{estimatedTime} min
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {room.floor}
              </span>
            </div>
          </div>
        </div>
      ) : ( */}
        <div className="flex items-center justify-between mx-auto px-4 py-6 md:px-12">
          <div>
            <Image
              className="max-w-[100px] mb-2"
              src={"https://www.dituniversity.edu.in/uploads/logo/6350d4ffdd3471666241791.svg"}
              width={226}
              height={170}
              alt="DIT University Campus Navigation"
            />
            <p className="text-blue-100">Find your way around campus easily</p>
          </div>
          <nav className="hidden md:flex items-center gap-8 ">
            <a href="https://www.dituniversity.edu.in/" className="text-white text-base">
              About Us
            </a>
            <a href="#" className="text-white text-base">
              Contact Us
            </a>
          </nav>
        </div>
      {/* )} */}
    </div>
  );
}
