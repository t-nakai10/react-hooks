import React, { useContext } from "react";
import TestInfoContext from "../";

const Context = () => {
  const testInfo = useContext(TestInfoContext);

  return (
    <div>
      <p>{testInfo.name}</p>
      <p>{testInfo.age}</p>
    </div>
  );
};

export default Context;
