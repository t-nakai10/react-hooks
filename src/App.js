import { useContext, useReducer, useRef, useState } from "react";
import TestInfoContext from ".";
import "./App.css";
import Reducer from "./hooks/Reducer";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const testInfo = useContext(TestInfoContext);

  // useRef() 対象の要素を参照できる.
  const ref = useRef();
  const handleRef = () => {
    console.log(ref.current.value);
  };

  return (
    <div className="App">
      <h2>UseState</h2>
      <p>{count}</p>
      <button onClick={handleCount}>＋</button>
      <hr />

      <h2>useContext</h2>
      <p>{testInfo.name}</p>
      <p>{testInfo.age}</p>
      <hr />

      <h2>useRef</h2>
      <input ref={ref} onChange={handleRef} />
      {/* ボタンを押したときも. */}
      <button onClick={handleRef}>Ref</button>
      <hr />

      <h2>useReducer</h2>
      <Reducer />
    </div>
  );
}

export default App;
