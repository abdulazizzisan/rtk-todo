"use client";
import React from 'react';
import Todo from './Todo';
import { useAppSelector } from '@/lib/hooks';

const Todos = () => {
    const todos = useAppSelector((state) => state.todos);
    return (
        <div className='bg-background text-foreground p-4 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold mb-5'>Your Todos</h1>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;