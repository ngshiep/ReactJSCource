import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Posts from "./modules/posts";
import ModifyPost from "./modules/posts/pages/ModifyPost";
import AddPost from "./modules/posts/pages/AddPost";
// import User from "./modules/user/User";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<ModifyPost />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
