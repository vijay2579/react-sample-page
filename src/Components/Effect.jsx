import React, { useEffect, useState } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Called");
  }, [counter]);
  return (
    <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
  );
}

export default Effect;
