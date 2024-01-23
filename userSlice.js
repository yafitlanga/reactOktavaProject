import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  logedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setLoggedUser: (state, action) => {
      state.logedUser = action.payload;
    },
  },
});
export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;
