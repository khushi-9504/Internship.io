import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import style from "./ToDoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "../../Store/todoSlice";
import { useState } from "react";

type ToDoListProps = {
  id: number;
  text: string;
  date: string;
};

const ToDoItem = ({ id, text, date }: ToDoListProps) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedDate, setEditedDate] = useState(
    new Date(date).toLocaleDateString("en-GB")
  );

  const handleDeleteItem = () => {
    dispatch(deleteItem(id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const formatDisplayDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSaveClick = () => {
    dispatch(
      editItem({
        id,
        todoName: editedText,
        dueDate: editedDate,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className={`container text-center ${style.todoItemContainer}`}>
      <div className={`row align-items-center ${style.todoItemRow}`}>
        <div className="col-auto">
          <input
            type="checkbox"
            defaultChecked={false}
            className="markAsRead"
          />
        </div>

        <div className="col text-start">
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="form-control"
            />
          ) : (
            <span className={style.todoName}>{text}</span>
          )}
        </div>

        <div className="col-auto text-center">
          {isEditing ? (
            <input
              type="date"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              className="form-control"
            />
          ) : (
            <span className={style.todoDate}>{formatDisplayDate(date)}</span>
          )}
        </div>

        <div className={`col-auto ${style.buttonContainer}`}>
          {isEditing ? (
            <button
              type="button"
              className={`btn btn-success ${style.button}`}
              onClick={handleSaveClick}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className={`btn btn-primary ${style.button}`}
              onClick={handleEditClick}
            >
              <FaEdit className={style.icon} />
            </button>
          )}

          <button
            type="button"
            className={`btn btn-danger ${style.button}`}
            onClick={handleDeleteItem}
          >
            <MdDelete className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
