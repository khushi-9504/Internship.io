import { useContext } from "react";
import { TodoItemsContext } from "../../Store/ToDoContext";
import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h2 className={style.errorHead}>No todo items in the List</h2>
    )
  );
};

export default ErrorMessage;
