"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

import { useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/lib/redux/features/todos/todosSlice";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [popover, setPopover] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input element when component mounts
    inputRef.current?.focus();
  }, []);

  const handleCalendarSelect = (date: Date | undefined) => {
    setDate(date);
    setPopover(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    dispatch(
      addTodo({
        id: uuid(),
        text: todoText,
        completed: false,
        due: new Date(date ? date : new Date()).toISOString(),
      }),
    );

    setTodoText("");
    router.push("/");
  };

  return (
    <div className="bg-background text-foreground mx-auto h-full w-full p-4 sm:p-6 md:p-8">
      <form
        className="mx-auto flex max-w-md flex-col items-center space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-5 w-full text-center text-xl font-bold sm:text-2xl">
          Add a New Todo
        </h1>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Enter your todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="w-full"
        />
        <div className="w-full">
          <Popover open={popover} onOpenChange={setPopover}>
            <PopoverTrigger asChild>
              <Button className="w-full">
                <span className="text-muted-foreground">Due: </span>
                {date ? format(date, "PPP") : <span>Select Due Date</span>}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleCalendarSelect}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button
          className="w-full px-8 sm:w-auto"
          type="submit"
          disabled={!todoText.trim()}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
