import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Sample Todo from rtk", completed: false },
    { id: 2, text: "Another Todo", completed: false },
  ] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
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
  },
});

export const { addTodo, deleteTodo, markCompleted } = todosSlice.actions;

export default todosSlice.reducer;
