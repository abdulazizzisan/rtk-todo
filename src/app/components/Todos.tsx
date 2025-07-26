"use client";
import React from "react";
import Todo from "./Todo";
import { useAppSelector } from "@/lib/hooks";

const Todos = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-center p-4">
      <h1 className="mb-5 text-2xl font-bold">Your Todos</h1>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default Todos;
