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
import {
  deleteTodo,
  markCompleted,
  type Todo,
} from "@/lib/redux/features/todos/todosSlice";
import { useAppDispatch } from "@/lib/hooks";

const Todo = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-card text-card-foreground mb-2 flex w-full flex-col items-start justify-between rounded-lg p-3 shadow sm:flex-row sm:items-center sm:p-4">
      <div className="mb-2 flex-1 sm:mr-4 sm:mb-0">
        <h2
          className={cn({
            "text-lg font-semibold break-words sm:text-base md:text-lg": true,
            "line-through": todo.completed,
          })}
        >
          {todo.text}
        </h2>
      </div>
      <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center sm:space-x-2">
        <span className="text-muted-foreground mb-2 text-xs sm:mr-4 sm:mb-0 sm:text-sm">
          Due:{" "}
          <span
            className={cn({
              "text-destructive": new Date(todo.due) < new Date(),
            })}
          >
            {format(todo.due, "PP")}
          </span>
        </span>
        <div className="flex w-full space-x-2 sm:w-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="hover:cursor-pointer"
                size="sm"
                variant="destructive"
                onClick={() => {
                  dispatch(deleteTodo({ id: todo.id }));
                }}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
          {todo.completed === false && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="hover:cursor-pointer"
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    dispatch(markCompleted(todo.id));
                  }}
                >
                  <Check className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Complete</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
