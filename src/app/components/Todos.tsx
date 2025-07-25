import React from 'react';
import Todo from './Todo';

const Todos = () => {
    return (
        <div className='bg-background text-foreground p-4 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold mb-5'>Your Todos</h1>
            <Todo>Call Girlfriend & Work out everyday Call Girlfriend & Work out everyday Call Girlfriend & Work out everyday</Todo>
            <Todo>Buy Groceries</Todo>
            <Todo>Finish Project</Todo>

        </div>
    );
};

export default Todos;