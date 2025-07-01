import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import AppName from "./Components/AppName/AppName";
import ToDoList from "./Components/ToDoList/ToDoList";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import ToDoItemsContextProvider from "./Store/ToDoContext";
import style from "./App.module.css";

function App() {
  return (
    <ToDoItemsContextProvider>
      <div className={`${style.mainContainer}`}>
        <section className={`${style.todoContainer}`}>
          <AppName />
          <AddToDo />
          <ErrorMessage />
          <ToDoList />
        </section>
      </div>
    </ToDoItemsContextProvider>
  );
}

export default App;
