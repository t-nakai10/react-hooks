import React from "react";

const Count = ({ name, count }) => {
  console.log(count);
  return <div>{count}</div>;
};

// メモ化, 変化があったときのみ再レンダリング.
export default React.memo(Count);
