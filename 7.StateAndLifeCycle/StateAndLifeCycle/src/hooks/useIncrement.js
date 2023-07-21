import { useState } from "react";

const useIncrement = (initVale) => {
  const [count, setCount] = useState(initVale);
  const increase = () => {
    setCount(count + 1);
  };

  return [count, increase];
};

export default useIncrement;
