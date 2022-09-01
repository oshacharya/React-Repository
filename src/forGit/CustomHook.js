import React, { useState, useEffect } from "react";

const CustomHook = () => {
  const useCustom = (props) => {
    useEffect(() => {
      document.title = props;
    });
  };

  const [count, setCount] = useState(0);
  useCustom(count);
  return (
    <>
      <h1>Custom Hook</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};
export default CustomHook;
