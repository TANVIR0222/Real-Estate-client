import { createSlice } from "@reduxjs/toolkit";

const loadUserFormLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) return { user: null };

    return { user: JSON.parse(serializedState) };
  } catch (error) {
    return { user: null };
  }
};

const initialState = loadUserFormLocalStorage();

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      console.log(state.user);
      
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    // setListing:(state,action) =>{
    //   state.listing = action.payload.listing
    //   console.log(state.listing);
      
    // }
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout , setListing} = authSlice.actions;

export default authSlice.reducer;
