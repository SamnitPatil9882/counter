import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import { counterReducer } from "./pages/counter/reducers";


// const root = combineReducers()
export const store = createStore(counterReducer)
export type RootState = ReturnType<typeof store.getState>