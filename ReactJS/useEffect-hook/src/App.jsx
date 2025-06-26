import { useEffect, useState } from "react";
import "./App.css";
import Quotes from "./Components/Quotes";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes));

    return () => {
      console.log("Quotes component removed");
    };
  }, []);

  return (
    <>
      <h1>Quotes List</h1>
      <Quotes quotes={quotes} />
    </>
  );
}

export default App;
