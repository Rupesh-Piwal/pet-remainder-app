import React from "react";
import { Button } from "../ui/button";

type titleProps = {
  title: string;
};

const SectionHeader = ({ title }: titleProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <span className="text-slate-600 dark:text-slate-400 font-medium">
          {title}
        </span>
      </div>
      <Button variant="ghost" size="icon" className="rounded-full"></Button>
    </div>
  );
};

export default SectionHeader;
