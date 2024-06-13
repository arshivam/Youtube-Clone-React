import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    videos: [],
    category : "All",
  },
  reducers: {
    //actions
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setVideos: (state, action) =>{
      state.videos = action.payload;
    },
    setCategory: (state, action) =>{
      state.category = action.payload;
    },
  },
});

export const { toggleSidebar, setVideos, setCategory } = appSlice.actions;
export default appSlice.reducer;
