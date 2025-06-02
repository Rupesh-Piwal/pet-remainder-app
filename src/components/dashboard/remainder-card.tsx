import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Clock, MoreHorizontal, Repeat } from "lucide-react";

interface cardTypes {
  title: string;
  pet: string;
  time: number;
  frequency: string;
}

const ReminderCard = ({ title, pet, time, frequency }: cardTypes) => {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl group mb-6">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl">
              {title}
            </h4>
            <div className="flex flex-row gap-2 text-sm text-slate-600 ">
              <div className="flex items-center gap-2">
                <span>{pet}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Time: {time}:00</span>
              </div>
              <div className="flex items-center gap-1">
                <Repeat className="h-4 w-4 text-green-500" />
                <span>Frequency: {frequency}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          >
            <MoreHorizontal className="h-5 w-5 text-slate-500" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
