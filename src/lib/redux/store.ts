import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todosSlice";
import todoApi from "./features/todos/todoApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
  setupListeners(store.dispatch);
  return store;
};


// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` & `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
