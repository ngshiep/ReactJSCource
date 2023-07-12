import { useState } from "react";

export default function ConditionalRenderingComponent() {
  const [showDesc, setShowDesc] = useState(false);

  const handleDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "green",
          fontSize: "32px",
          fontWeight: "600",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Conditional Rendering
      </div>
      <button onClick={handleDesc}>Xem giới thiệu</button>
      
      {showDesc && (
        <div
          style={{
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Tạo được dự án ReactJS Thao tác với state thông qua event Thực hành
          conditional rendering Tạo được dự án ReactJS Thao tác với state thông
          qua event Thực hành conditional rendering Tạo được dự án ReactJS Thao
          tác với state thông qua event Thực hành conditional rendering Tạo được
          dự án ReactJS Thao tác với state thông qua event Thực hành conditional
          rendering
        </div>
      )}
    </>
  );
}
