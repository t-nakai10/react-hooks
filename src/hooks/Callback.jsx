import React, { useCallback, useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";

const Callback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const addCount1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, [count1]);
  const addCount2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [count2]);
  return (
    <div>
      <Count name="count1" count={count1} />
      <CountButton handleClick={addCount1}>add count1</CountButton>
      <Count name="count2" count={count2} />
      <CountButton handleClick={addCount2}>add count2</CountButton>
    </div>
  );
};

export default Callback;
