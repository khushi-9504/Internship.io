import "./App.css";
import AddToDo from "../Components/AddToDo/AddToDo";
import AppName from "../Components/AppName/AppName";
import ToDoList from "../Components/ToDoList/ToDoList";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import style from "./App.module.css";
import { Provider } from "react-redux";
import todoStore from "../Store/reduxStore";

function App() {
  return (
    <Provider store={todoStore}>
      <div className={`${style.mainContainer}`}>
        <section className={`${style.todoContainer}`}>
          <AppName />
          <AddToDo />
          <ErrorMessage />
          <ToDoList />
        </section>
      </div>
    </Provider>
  );
}

export default App;
