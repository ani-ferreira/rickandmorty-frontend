import { createSlice } from "@reduxjs/toolkit";
import { setFavs, addFavs, deleteFav } from "./favsActions";

const initialState = {
  favs: [],
  favChar: { name: "", image: "", gender: "" },
  error: null,
};

const favsSlice = createSlice({
  name: "favcharacters",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      //get all favs
      .addCase(setFavs.fulfilled, (state, action) => ({
        ...state,
        error: null,
        favs: action.payload,
      }))
      //add fav
      .addCase(addFavs.fulfilled, (state, action) => ({
        ...state,
        error: null,
        favChar: action.payload,
      }))
      //delete fav
      .addCase(deleteFav.fulfilled, (state, action) => {
        const updatedFavs = state.favs.filter((c) => {
          return c.id !== action.payload.id;
        });

        return {
          ...state,
          favs: updatedFavs,
          error: null,
        };
      });
  },
});

export default favsSlice.reducer;
