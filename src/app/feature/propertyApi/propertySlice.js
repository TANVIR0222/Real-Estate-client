import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    category: '',
    type: '',
    city: '',
    Province: '',
    country: '',
    listingPhotoPath: '',
    title: '',
    descriptions: '',
    price: '',
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addProperty: (state,action) => {
        state.id = action.payload;
        state.category = action.payload;
        state.id = action.payload;
        state.id = action.payload;
        console.log(state.category);
        
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProperty } = propertySlice.actions;

export default propertySlice.reducer;
