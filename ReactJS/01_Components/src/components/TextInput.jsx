import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter text to add in list"
        onChange={(e) => handleChange(e)}
        value={text}
      />
      <button onClick={handleClick}>Add</button>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
};

export default TextInput;
