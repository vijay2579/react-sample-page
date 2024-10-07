import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
      >
        Decrement Counter
      </button>
    </>
  );
}

export default Counter;
