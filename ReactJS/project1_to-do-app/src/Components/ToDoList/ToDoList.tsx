import { useContext } from "react"
import ToDoItem from "../ToDoItem/ToDoItem"
import style from "./ToDoList.module.css"
import { TodoItemsContext } from "../../Store/ToDoContext"

const ToDoList = () => {
  // const todoItems = [{
  //   id: 1,
  //   text: "Buy milk",
  //   date: "01-07-2025",
  //   completed: false
  // },
  // {
  //   id: 2,
  //   text: "Complete the project",
  //   date: "01-07-2025",
  //   completed: false
  // },
  // {
  //   id: 3,
  //   text:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
  //   date: "01-07-2025",
    
  // }]

  const {todoItems}= useContext(TodoItemsContext);

  return (
    <div className={`container text-center ${style.todoItemsContainer}`}>
      {todoItems.map((item, index)=> (
        <ToDoItem key={index} text={item.todoName} date={item.dueDate}/>
      ))}
    </div>
  )
}

export default ToDoList
