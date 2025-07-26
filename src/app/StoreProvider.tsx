"use client";
import { AppStore, makeStore } from "@/lib/redux/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    //create the store if doesn't exist
    storeRef.current = makeStore();

    // if you want to load initial data, you can dispatch the loading function here.
    // storeRef.current.dispatch(initialDataLoadingReducer(action))
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
