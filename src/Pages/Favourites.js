import { useEffect } from "react";
import FavCharacter from "../Components/FavCharacter";
import { useSelector, useDispatch } from "react-redux";
import { setFavs } from "../Store/favsActions";
import Loader from "../Components/Layout/LoaderImg";

const Favourites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavs());
  }, [dispatch]);

  const favourites = useSelector((state) => state.favsReducer.favs);

  return (
    <>
      <h1 className="p-5">Mis personajes favoritos</h1>
      <div className="container mt-5">
        <div className="row">
          {favourites.length === 0 && <h4>Todavía no hay favoritos.</h4>}
          {!favourites && <Loader />}
          {favourites.map((fav) => (
            <FavCharacter
              key={fav.name}
              name={fav.name}
              image={fav.image}
              mongoid={fav._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;
