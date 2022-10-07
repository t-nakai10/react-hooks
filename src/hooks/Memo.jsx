import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 1 でも 2 でもここの重い処理が走る.
  // useMemo(()=>{処理},[タイミング])を使用してカウント２が変更されたときのみ処理を走らせる.
  // カウント２はメモリに保存されるためカウント１を押した場合でも処理が早い.
  const square = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return count2 * count2;
  }, [count2]);

  return (
    <div>
      <div>カウント1: {count1}</div>
      <div>カウント2: {count2}</div>
      <div>結果: {square}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
    </div>
  );
};

export default Memo;
