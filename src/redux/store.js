import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./features/userListSlice";
import userReducer from "./features/userSlice"
const rootReducer = {
  user: userReducer,
  userList : userListSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store;