import { useRef } from "react";

const InputFocus = () => {
  let inputRef = useRef();

  function handleClick() {
    if (!inputRef.current.value) {
      alert("Enter the text");
    } else {
      console.log(inputRef.current.value);
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default InputFocus;
