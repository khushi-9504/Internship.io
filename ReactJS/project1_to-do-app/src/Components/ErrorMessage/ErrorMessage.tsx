import style from "./ErrorMessage.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/reduxStore";

const ErrorMessage = () => {
  const todoItems = useSelector((state: RootState) => state.todos.todoItems);
  return (
    todoItems.length === 0 && (
      <h2 className={style.errorHead}>No todo items in the List</h2>
    )
  );
};

export default ErrorMessage;
