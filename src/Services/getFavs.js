import axios from "axios";

//get all
export const getFavs = async () => {
  try {
    const result = await axios.get("http://localhost:4000/favourites");

    return result.data.posts;
  } catch (error) {
    if (error) {
      console.log(error.res.status);
    }
  }
};

//upload fav
export const newFav = async (data) => {
  try {
    const req = await axios.post("http://localhost:4000/favourites/add", data);
    return req.data;
  } catch (error) {
    if (error) {
      console.log(error.res.status);
    }
  }
};

//delete fav
export const deleteFavById = async (_id) => {
  try {
    const req = await axios.delete(
      `http://localhost:4000/favourites/delete/${_id}`
    );
    return req.data;
  } catch (error) {
    if (error) {
      console.log(error.res.status);
    }
  }
};
