import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    videos: [],
    category : "All",
    suggestions : [],
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
    setSuggestions: (state, action) =>{
      state.suggestions = action.payload;
    },
  },
});

export const { toggleSidebar, setVideos, setCategory, setSuggestions } = appSlice.actions;
export default appSlice.reducer;
