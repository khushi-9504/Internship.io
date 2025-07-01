import { useContext, useRef, type FormEvent } from "react";
import style from "./AddToDo.module.css";
import { TodoItemsContext } from "../../Store/ToDoContext";

const AddToDo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  let textRef = useRef<HTMLInputElement>(null);
  let dateRef = useRef<HTMLInputElement>(null);

  const handleNewItem = (e: FormEvent) => {
    e.preventDefault();

    const todo = textRef.current?.value;
    const date = dateRef.current?.value;

    if (todo && date) {
      addNewItem(todo, date);
      // textRef.current!.value = '';
      // dateRef.current!.value = '';

      if (textRef.current && dateRef.current) {
        textRef.current.value = "";
        dateRef.current.value = "";
      }
    } else {
      alert("Please provide task and duedate");
    }
  };

  return (
    <div className={`container text-center ${style.addToDoContainer}`}>
      <form onSubmit={handleNewItem}>
        <div className={`row g-3 ${style.rowContainer}`}>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter your todo here"
              className={style.todoInputText}
              ref={textRef}
            />
          </div>
          <div className="col-4">
            <input type="date" className={style.todoInputDate} ref={dateRef} />
          </div>
          <div className="col-2 ">
            <button type="submit" className={style.todoAddButton}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
