import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  root.render(
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', width:'100vw' }}>
      <h1 >Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};

setInterval(tick, 1000);
