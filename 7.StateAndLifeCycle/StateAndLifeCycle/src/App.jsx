import './App.css'
import AuthenticationComponent from './components/AuthenticationComponent'
import Button from './components/Button'
import ChangeColorComponent from './components/ChangeColorComponent'
import ConditionalRenderingComponent from './components/ConditionalRenderingComponent'
import MainComponent from './components/MainComponent'

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

      <ConditionalRenderingComponent></ConditionalRenderingComponent>
    </>
  )
}

export default App
