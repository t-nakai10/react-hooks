import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default State;
