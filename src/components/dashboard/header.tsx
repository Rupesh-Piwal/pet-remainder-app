import { Zap } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="m-auto rounded px-6 py-6 shadow-sm backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-purple-200/20 to-indigo-300/15 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            daily reminders
          </h1>
          <div className="flex items-center gap-2">
            <Zap />

            <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">
              your streaks
            </span>
          </div>
        </div>

        <button className="text-[#019D6B] px-6 py-2.5 rounded transition-all duration-300 transform hover:scale-105 font-semibold text-sm border-none cursor-pointer">
          view all
        </button>
      </div>
    </div>
  );
};

export default Header;
