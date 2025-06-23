import Counter from "./components/Counter";
import States from "./components/States";
import UserList from "./components/UserList";
import LoginLogout from "./components/LoginLogout";
import TextInput from "./components/TextInput";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  return (
    <>
      <h1>UserList</h1>
      <UserList />
      <States />
      <Counter />
      <LoginLogout />
      <TextInput />
      <UncontrolledForm />
    </>
  );
}

export default App;
