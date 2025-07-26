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
    <div className="bg-card text-card-foreground mb-2 flex w-1/2 items-center justify-between rounded-lg p-4 shadow">
      <div className="mr-7 flex-1">
        <h2 className="text-lg font-semibold">{todo.text}</h2>
      </div>
      <div className="space-x-2">
        <span className="text-muted-foreground mr-4 text-sm">
          Due:{" "}
          <span
            className={cn({
              "text-destructive": new Date(todo.due) < new Date(),
            })}
          >
            {format(todo.due, "PP")}
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
