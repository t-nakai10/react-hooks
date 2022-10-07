import React, { useReducer, useState } from "react";

// state が持つオブジェクトを定義しておく.
const initialState = {
  savings: 10000,
  histories: [{ operation: "", amount: 0 }],
};

const reducer = (state, action) => {
  // 基本的に action.type
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        savings: state.savings + action.payload,
        histories: [
          ...state.histories,
          { operation: "預け入れ", amount: action.payload },
        ],
      };
    case "WITHDRAW":
      return {
        ...state,
        savings: state.savings - action.payload,
        histories: [
          ...state.histories,
          { operation: "引き出し", amount: action.payload },
        ],
      };
    default:
      return state;
  }
};

const Reducer = () => {
  // useReducer(state を更新するための関数, 初期値).
  // dispatch は reducer を呼び出すために必要.
  // 前の state に基づいて次の state を決めるときに必要.
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(0);

  // それぞれ預け入れ引き出し時に発火, 引数はinputに入力された金額.
  const onDeposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
    setAmount(0);
  };
  const onWithdraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
    setAmount(0);
  };
  return (
    <div>
      <h3>残高 : {state.savings.toLocaleString()}</h3>
      <div>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          type="number"
        />
      </div>
      <div>
        <button onClick={() => onDeposit(amount)}>預け入れ</button>
        <button onClick={() => onWithdraw(amount)}>引き出し</button>
      </div>
      <div>
        <p>履歴</p>
        {state.histories.map((history, index) => {
          return (
            <p key={index}>
              {history.operation}: {history.amount}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Reducer;
