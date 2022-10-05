import { useContext, useState } from "react";
import TestInfoContext from ".";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const testInfo = useContext(TestInfoContext);

  return (
    <div className="App">
      <h2>UseState</h2>
      <p>{count}</p>
      <button onClick={handleCount}>＋</button>
      <hr />
      <h2>useContext</h2>
      <p>{testInfo.name}</p>
      <p>{testInfo.age}</p>
    </div>
  );
}

export default App;
