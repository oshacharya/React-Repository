import React from "react";

function Eventfile() {
  const display = () => {
    alert("Welcome to ReactJS Event");
  };
  const greet = (a) => {
    alert(a);
  };
  return (
    <>
      <button onClick={display}>Click here for Simple Event</button>
      <button onClick={() => greet("Hi !!! This is a parameterized event")}>
        Click here for Parameterized Event
      </button>
    </>
  );
}

export default Eventfile;
