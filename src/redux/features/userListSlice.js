import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { isValidToken } from "../../utils/jwt";
import { useCallback } from "react";
import { toast } from "react-toastify";
const initialState = {
  userList: [],
  isLoading : false,
  status : null
}


const userListInit = createAsyncThunk(
  "userList/init",
  async (page, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && await isValidToken(accessToken)) {
        const response = await fetch(`http://localhost:3001/api/user/list-user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": window.localStorage.getItem("accessToken")
          },
        }); 
        const data = await response.json();
        dispatch(
          INITIALIZE_USER_LIST({
            userList: data.data,
          })
        );

      } else {
        dispatch(
          INITIALIZE_USER_LIST({
            userList: [],
          })
        );
        return rejectWithValue("Something went wrong");
      }
    } catch (err) {
      dispatch(
        INITIALIZE_USER_LIST({
          userList: [],
        })
      );
    }
  }
);


// UserFunctions -----------------------------------------------------------------

export const UserFunctions = () => {
  const dispatch = useDispatch();
  const { isLoading, status, userList } = useSelector(
    (state) => state.userList
  );

  const initializeUserList = useCallback(() => {
    dispatch(userListInit());
  }, [dispatch]);

  return {
    initializeUserList,
    isLoading,
    userList,
  };
};


const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    INITIALIZE_USER_LIST: (state, action) => {
      state.userList = action.payload.userList;
    }
  },
  extraReducers: {
    
    [userListInit.pending]: (state, action) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userListInit.fulfilled]: (state, action) => {
      state.status = "SUCCESS";
      state.isLoading = false;
    },
    [userListInit.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      toast.error(action?.payload);
    }
  }

})

export {
  userListInit
}

export const {
  INITIALIZE_USER_LIST
} = userListSlice.actions;

export default userListSlice.reducer;
