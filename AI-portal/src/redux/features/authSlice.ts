import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SignUpFormData } from "../../types/Auth/authTypes";

interface AuthState {
  signUpData: SignUpFormData | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  signUpData: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignUpData: (state, action: PayloadAction<SignUpFormData>) => {
      state.signUpData = action.payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setSignUpData, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
