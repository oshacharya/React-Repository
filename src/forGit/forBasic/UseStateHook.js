import { useState } from "react";

function Hooks() {
  const [data, setData] = useState("");
  return (
    <>
      <h1>React in {data}</h1>
      <button onClick={() => setData("Red")}>Red</button>
      <button onClick={() => setData("Blue")}>Blue</button>
      <button onClick={() => setData("Green")}>Green</button>
      <button onClick={() => setData("Orange")}>Orange</button>
    </>
  );
}

export default Hooks;
