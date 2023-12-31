import { useEffect, useState } from "react";

export default function ChangeColorComponent() {
  const [ color, setColor ] = useState( "black" );

  useEffect(() => {
    setTimeout(() => {
      setColor( "pink" );
    }, 5000);
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: "auto",
        }}
      />
    </div>
  );
}
