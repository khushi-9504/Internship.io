import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Params from "./Components/Params";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
