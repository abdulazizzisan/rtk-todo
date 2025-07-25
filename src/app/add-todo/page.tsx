"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

const AddTodo = () => {
  const router = useRouter();
  return (
    <div className="bg-background text-foreground mx-auto w-1/3 p-4 h-full">
      <form
        className="flex flex-col items-center space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <h1 className="mb-5 ml-2 text-2xl font-bold">Add a New Todo</h1>
        <Input type="text" placeholder="Todo" />
        <Button className="w-min" type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
