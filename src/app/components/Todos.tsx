"use client";
import React from "react";
import Todo from "./Todo";
import { useAppSelector } from "@/lib/hooks";

const Todos = ({ completed }: { completed: boolean }) => {
  const todos = useAppSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (completed) {
      return todo.completed;
    }
    return !todo.completed;
  });

  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-center p-4">
      <h1 className="mb-5 text-2xl font-bold">
        {completed ? "Completed" : "Your"} Todos
      </h1>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p className="text-muted-foreground text-lg font-light">
          No todos {completed ? "completed" : "found"}
        </p>
      )}
    </div>
  );
};

export default Todos;
