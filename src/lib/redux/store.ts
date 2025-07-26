import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add your slice reducers here
    },
  });
};

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` & `AppDispatch` types from the store itself 
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']