import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>UseState</h2>
      <p>{count}</p>
      <button onClick={handleCount}>＋</button>
      <hr />
      <h2>useContext</h2>
    </div>
  );
}

export default App;
