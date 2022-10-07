import React, { useRef } from "react";

const Ref = () => {
  // useRef() 対象の要素を参照できる.
  const ref = useRef();
  const handleRef = () => {
    console.log(ref.current.value);
  };

  return (
    <div>
      <input ref={ref} onChange={handleRef} />
      {/* ボタンを押したときも. */}
      <button onClick={handleRef}>Ref</button>
    </div>
  );
};

export default Ref;
