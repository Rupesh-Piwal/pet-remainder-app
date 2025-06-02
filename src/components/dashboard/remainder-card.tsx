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
    <Card className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl group">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg mb-3">
              {title}
            </h4>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span>For {pet}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>At {time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Repeat className="h-4 w-4" />
                <span>{frequency}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
