import React from "react";
import "./App.css";
import Context from "./hooks/Context";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import State from "./hooks/State";
import Memo from "./hooks/Memo";
import Callback from "./hooks/Callback";

function App() {
  return (
    <div className="App">
      <h2>UseState</h2>
      <State />

      <h2>useContext</h2>
      <Context />

      <hr />

      <h2>useRef</h2>
      <Ref />
      <hr />

      <h2>useReducer</h2>
      <Reducer />

      <h2>useMemo</h2>
      <Memo />

      <h2>useCallback</h2>
      <Callback />
    </div>
  );
}

export default App;
