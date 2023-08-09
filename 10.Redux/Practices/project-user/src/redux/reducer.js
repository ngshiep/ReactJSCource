import { DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = [];

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload;
    case DELETE_USER_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      let copyUsers = [...state];
      console.log(
        "🚀 ~ file: reducer.js:16 ~ rootReducer ~ copyUsers:",
        copyUsers
      );
      copyUsers = copyUsers.filter((user) => user.id !== action.payload.userId);
      return copyUsers;
    default:
      return state;
  }
};
export default rootReducer;
