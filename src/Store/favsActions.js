import { deleteFavById, getFavs, newFav } from "../Services/getFavs";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setFavs = createAsyncThunk("favs/getPosts", getFavs);

const addFavs = createAsyncThunk("favs/addFavs", newFav);

const deleteFav = createAsyncThunk("favs/deleteFav", deleteFavById);

export { setFavs, addFavs, deleteFav };
