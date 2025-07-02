import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import style from "./ToDoList.module.css";
import type { RootState } from "../../Store/reduxStore";

const ToDoList = () => {
  const todoItems = useSelector((state: RootState) => state.todos.todoItems);

  return (
    <div className={`container text-center ${style.todoItemsContainer}`}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.todoName}
          date={item.dueDate}
        />
      ))}
    </div>
  );
};

export default ToDoList;
