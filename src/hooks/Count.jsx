import React, { memo } from "react";

const Count = ({ name, count }) => {
  console.log(`${name}: ${count}`);
  return <div>{count}</div>;
};

// メモ化, 変化があったときのみ再レンダリング.
export default memo(Count);
