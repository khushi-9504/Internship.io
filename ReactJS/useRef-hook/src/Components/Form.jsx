import { useRef } from "react";

const Form = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let passRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Name is: ${nameRef.current.value}`);
    console.log(`Email is: ${emailRef.current.value}`);
    console.log(`Password is: ${passRef.current.value}`);
  }

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          ref={emailRef}
        />

        <input
          type="password"
          name="password"
          placeholder="************"
          ref={passRef}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
