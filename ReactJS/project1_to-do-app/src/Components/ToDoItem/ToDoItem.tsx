import { MdDelete } from "react-icons/md";
import style from "./ToDoItem.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../../Store/ToDoContext";

type ToDoListProps = {
  text: string;
  date: string;
};

const ToDoItem = ({ text, date }: ToDoListProps) => {
  const { deleteItem } = useContext(TodoItemsContext);

  const handleDeleteItem = () => {
    deleteItem(text);
  };

  return (
    <div className={`container text-center ${style.todoItemContainer}`}>
      <div className={`row align-items-center ${style.todoItemRow}`}>
        <div className={`col text-start ${style.todoName}`}>{text}</div>
        <div className={`col-auto text-center ${style.todoDate}`}>{date}</div>
        <div className={`col-auto ${style.buttonContainer}`}>
          <button
            type="button"
            className={`${style.btn} btn btn-danger  ${style.button}`}
            onClick={handleDeleteItem}
          >
            <MdDelete className={style.icon} />
          </button>
          {/* <input type="checkbox"/> */}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
