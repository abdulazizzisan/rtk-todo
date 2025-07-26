import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todosSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
};

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` & `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
