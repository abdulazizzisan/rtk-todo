"use client";
import { Button } from "@/components/ui/button";
import { Check, Trash } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Todo } from "@/lib/redux/features/todos/todosSlice";

const Todo = ({ todo }: { todo: Todo }) => {
  return (
    <div className="mb-2 flex w-full flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg bg-card p-3 sm:p-4 text-card-foreground shadow">
      <div className="mb-2 sm:mb-0 sm:mr-4 flex-1">
        <h2 className="text-lg sm:text-base md:text-lg font-semibold break-words">
          {todo.text}
        </h2>
      </div>
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:space-x-2">
        <span className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-0 sm:mr-4">
          Due:{" "}
          <span
            className={cn({
              "text-destructive": new Date(todo.due) < new Date(),
            })}
          >
            {format(todo.due, "PP")}
          </span>
        </span>
        <div className="flex space-x-2 w-full sm:w-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                <Check className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Complete</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Todo;
