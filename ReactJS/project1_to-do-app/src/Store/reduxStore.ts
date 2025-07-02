import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const todoStore = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default todoStore;
export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;
