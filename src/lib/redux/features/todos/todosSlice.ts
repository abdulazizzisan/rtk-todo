import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type Todo = {
  id: string;
  due: string;
  text: string;
  completed: boolean;
};
const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state: Todo[], action: { payload: Todo }) => {
      if (state.find((todo) => todo.text === action.payload.text)) {
        toast.error("todo already exists")
        return state; // Prevent adding a duplicate todo
      }
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const filteredState = state.filter(
        (todo) => todo.id !== action.payload.id,
      );
      localStorage.setItem("todos", JSON.stringify(filteredState));
      return filteredState;
    },
    markCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    loadTodos: (state) => {
      if (typeof window !== "undefined") {
        const todos = localStorage.getItem("todos");
        if (todos) {
          return JSON.parse(todos);
        }
      }
      return state;
    },
  },
});

export const { addTodo, deleteTodo, markCompleted, loadTodos } =
  todosSlice.actions;

export default todosSlice.reducer;

export type { Todo };
