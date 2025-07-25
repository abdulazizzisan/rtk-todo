"use client";
import { Button } from "@/components/ui/button";
import { Check, Trash } from "lucide-react";
import React, { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Todo = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState(new Date("2026-08-30"));

  return (
    <div className="bg-card text-card-foreground mb-2 flex w-1/2 items-center justify-between rounded-lg p-4 shadow">
      <div className="mr-7 flex-1">
        <h2 className="text-lg font-semibold">{children}</h2>
      </div>
      <div className="space-x-2">
        <span className="text-muted-foreground mr-4 text-sm">
          Due:{" "}
          <span
            className={cn({
              "text-destructive": date < new Date(),
            })}
          >
            {format(date, "PP")}
          </span>
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">
              <Trash />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Check />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Complete</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Todo;
