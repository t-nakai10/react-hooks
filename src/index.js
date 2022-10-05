import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const testInfo = {
  name: "test",
  age: 30,
};
// createContext() の引数に渡したい値を入れる.
const TestInfoContext = createContext(testInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // createContext の Provider で囲い value を設定.
  <TestInfoContext.Provider value={testInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TestInfoContext.Provider>
);

// さらにexport する.
export default TestInfoContext;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
