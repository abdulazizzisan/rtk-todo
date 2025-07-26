import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid"

type Todo = {
  id: string;
  due: string;
  text: string;
  completed: boolean;
};
const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid(), due: new Date("2025-06-30").toISOString(), text: "Sample Todo with past date", completed: false },
    { id: uuid(), due: new Date("2026-06-30").toISOString(), text: "Sample Todo with future date", completed: false },
  ] as Todo[],
  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    markCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    loadTodos: (state) => {
      const todos = localStorage.getItem("todos");
      if (todos) {
        return JSON.parse(todos);
      }
      return state;
    },
  },
});

export const { addTodo, deleteTodo, markCompleted, loadTodos } = todosSlice.actions;

export default todosSlice.reducer;

export type { Todo };