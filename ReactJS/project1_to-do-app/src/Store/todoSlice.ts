import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TodoItem = {
  id: number;
  todoName: string;
  dueDate: string;
};

interface TodoState {
  todoItems: TodoItem[];
}

const initialState: TodoState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TodoItem>) => {
      const { id, todoName, dueDate } = action.payload;

      const formattedDueDate = new Date(dueDate).toISOString().split("T")[0];

      state.todoItems.push({
        id,
        todoName,
        dueDate: formattedDueDate,
      });
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== action.payload
      );
    },
    editItem: (state, action: PayloadAction<TodoItem>) => {
      const index = state.todoItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todoItems[index] = action.payload;
      }
    },
  },
});

export const { addItem, deleteItem, editItem } = todoSlice.actions;
export default todoSlice.reducer;
