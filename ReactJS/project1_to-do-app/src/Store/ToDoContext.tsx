import { createContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";

type TodoItem = {
  todoName: string;
  dueDate: string;
};

type TodoState = TodoItem[];

type TodoAction =
  | { type: "NEW_ITEM"; payload: TodoItem }
  | { type: "DELETE_ITEM"; payload: { todoName: string } };

type TodoContextType = {
  todoItems: TodoItem[];
  addNewItem: (todoName: string, dueDate: string) => void;
  deleteItem: (todoName: string) => void;
};

export const TodoItemsContext = createContext<TodoContextType>({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "NEW_ITEM":
      return [...state, action.payload];

    case "DELETE_ITEM":
      return state.filter((item) => item.todoName !== action.payload.todoName);

    default:
      return state;
  }
};

const getInitialTodoItems = (): TodoState => {
  const stored = localStorage.getItem("todoItems");
  return stored ? JSON.parse(stored) : [];
};

type ProviderProps = {
  children: ReactNode;
};

const ToDoItemsContextProvider = ({ children }: ProviderProps) => {
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    getInitialTodoItems()
  );

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const addNewItem = (todoName: string, dueDate: string) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { todoName, dueDate },
    });
  };

  const deleteItem = (todoName: string) => {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: { todoName },
    });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default ToDoItemsContextProvider;

// const ToDoItemsContextProvider = ({ children }) => {
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

//   const addNewItem = (todoName, dueDate) => {
//     const newItemAction = {
//       type: "NEW_ITEM",
//       payload: {
//         todoName,
//         dueDate,
//       },
//     };
//     dispatchTodoItems(newItemAction);
//   };

//   const deleteItem = (key) => {
//     const deleteItemAction = {
//       type: "DELETE_ITEM",
//       payload: {
//         todoName,
//       },
//     };
//     dispatchTodoItems(deleteItemAction);
//   };

//   return (
//     <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
//       {children}
//     </TodoItemsContext.Provider>
//   );
// };

// export default ToDoItemsContextProvider;

// const todoItemsReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         todoName: action.payload.todoName,
//         dueDate: action.payload.dueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name !== action.payload.name;
//     );
//   }
//   return newTodoItems;
// };
