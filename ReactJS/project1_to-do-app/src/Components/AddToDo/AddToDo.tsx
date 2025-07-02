import { useRef } from "react";
import style from "./AddToDo.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/todoSlice";

const AddToDo = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoName = nameRef.current?.value.trim();
    const dueDate = dateRef.current?.value;

    if (!todoName || !dueDate) return;

    const newTodo = {
      id: Date.now(),
      todoName,
      dueDate: new Date(dueDate).toLocaleDateString("en-GB"),
    };

    dispatch(addItem(newTodo));

    // Clear input fields
    if (nameRef.current) nameRef.current.value = "";
    if (dateRef.current) dateRef.current.value = "";
  };

  return (
    <div className={`container text-center ${style.addToDoContainer}`}>
      <form onSubmit={handleAddItem}>
        <div className={`row g-3 ${style.rowContainer}`}>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter your todo here"
              className={style.todoInputText}
              ref={nameRef}
            />
          </div>
          <div className="col-4">
            <input type="date" className={style.todoInputDate} ref={dateRef} />
          </div>
          <div className="col-2 co-auto">
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
