import { useEffect } from "react";
import FavCharacter from "../Components/FavCharacter";
import { useSelector, useDispatch } from "react-redux";
import { setFavs, deleteFav } from "../Store/favsActions";
import Loader from "../Components/Layout/LoaderImg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavs());
  }, [dispatch]);

  const favourites = useSelector((state) => state.favsReducer.favs);

  const handleDelete = async (id) => {
    await dispatch(deleteFav(id));
    dispatch(setFavs());
    toast.warning("Favorito eliminado!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <>
      <h2 className="p-5">Mis personajes favoritos</h2>
      <div className="container my-5">
        <div className="row">
          {favourites.length === 0 && <h4>Todavía no hay favoritos.</h4>}
          {!favourites && <Loader />}
          {favourites.map((fav) => (
            <FavCharacter
              key={fav.name}
              name={fav.name}
              image={fav.image}
              mongoid={fav._id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Favourites;
