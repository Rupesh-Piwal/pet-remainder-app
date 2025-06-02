import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-red-200 m-auto rounded px-4 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            daily reminders
          </h1>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-4 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-xs">⚡</span>
            </div>
            <span className="text-sm text-gray-600">your streaks</span>
          </div>
        </div>
        <Button variant="ghost" className="text-blue-500 text-sm font-medium">
          view all
        </Button>
      </div>
    </div>
  );
};

export default Header;
