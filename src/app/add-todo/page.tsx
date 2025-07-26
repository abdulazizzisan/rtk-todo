"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/lib/redux/features/todos/todosSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    
    dispatch(addTodo({ 
      id: uuid(), 
      text: todoText, 
      completed: false, 
      due: new Date()
    }));
    
    setTodoText("");
    router.push("/");
  };
  
  return (
    <div className="mx-auto w-full p-4 sm:p-6 md:p-8 h-full bg-background text-foreground">
      <form
        className="flex flex-col items-center space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-5 w-full text-center">Add a New Todo</h1>
        <Input 
          type="text" 
          placeholder="Enter your todo" 
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="w-full"
        />
        <Button 
          className="w-full sm:w-auto px-8" 
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
