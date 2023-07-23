import "./App.css";
import AuthenticationComponent from "./components/AuthenticationComponent";
import Button from "./components/Button";
import Calculator from "./components/Calculator";
import CarSelectionComponent from "./components/CarSelectionComponent";
import ChangeColorComponent from "./components/ChangeColorComponent";
import ConditionalRenderingComponent from "./components/ConditionalRenderingComponent";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import LoginComponent from "./components/LoginComponent";
import MainComponent from "./components/MainComponent";
import StudentManagerComponent from "./components/StudentManagerComponent";
import TimerComponent from "./components/TimerComponent";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* Đếm số lần click vào Button tăng/giảm (State + event) LESSON PROGRESS */}
      {/* <Button></Button> */}

      {/* Đổi màu nền component sau khi xuất hiện */}
      {/* <ChangeColorComponent></ChangeColorComponent> */}

      {/* Hiện thông báo trước khi Component ẩn */}
      {/* <MainComponent></MainComponent> */}

      {/* Kiểm tra User Login/Logout */}
      {/* <AuthenticationComponent></AuthenticationComponent> */}

      {/* <ConditionalRenderingComponent></ConditionalRenderingComponent> */}

      {/* <Calculator></Calculator> */}

      {/* <LoginComponent></LoginComponent> */}

      {/* <TodoList></TodoList> */}

      {/* <StudentManagerComponent></StudentManagerComponent> */}

      <CarSelectionComponent></CarSelectionComponent>

      {/* <TimerComponent></TimerComponent> */}

      {/* <Counter1></Counter1>
      <Counter2></Counter2> */}
    </>
  );
}

export default App;
