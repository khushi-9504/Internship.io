import React, { useRef } from "react";

const UncontrolledForm = () => {
  let name = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.current.value === "") {
      alert("Please enter your name");
    }
    console.log("Name: ", name.current.value);
  }

  return (
    <>
      <div className="container">
        <input type="text" name="name" placeholder="Enter name" ref={name} />
        <input type="date" name="bdate" />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default UncontrolledForm;
