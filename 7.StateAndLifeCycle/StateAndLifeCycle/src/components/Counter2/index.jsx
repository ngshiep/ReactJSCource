import React from "react";
import useIncrement from "../../hooks/useIncrement";

export default function Counter2() {
  const [counter, increase] = useIncrement(1);
  return (
    <div>
      <div>
        <span>Count: {counter}</span>
      </div>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}
