import { DELETE_POST_SUCCESS, FETCH_POST_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = [];

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return action.payload;
    case DELETE_POST_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      let copyPOSTs = [...state];
      console.log(
        "🚀 ~ file: reducer.js:16 ~ rootReducer ~ copyPOSTs:",
        copyPOSTs
      );
      copyPOSTs = copyPOSTs.filter((POST) => POST.id !== action.payload.POSTId);
      return copyPOSTs;
    default:
      return state;
  }
};
export default rootReducer;
