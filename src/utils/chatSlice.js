import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    //actions
    setMessasge: (state,action) => {
      state.message.splice(40,1)
      state.message.push(action.payload)
    },
  },
});

export const { setMessasge } = chatSlice.actions;
export default chatSlice.reducer;
