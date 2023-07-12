import { useEffect } from "react";

export default function HelloComponent() {
  useEffect(() => {
    return () => {
      alert('The component is going to be unmounted');
    }
  }, []) 
  return <h1>Hello Word!!!</h1>;
}
