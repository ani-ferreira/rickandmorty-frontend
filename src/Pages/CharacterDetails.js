import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavs } from "../Store/favsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CharacterDetails = () => {
  const params = useParams();
  const character = params.id;
  const dispatch = useDispatch();

  const [characterData, setCharacterData] = useState(params.id);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data));
  }, [character]);

  const newFav = {
    name: characterData.name,
    gender: characterData.gender,
    image: characterData.image,
  };

  const handlePost = () => {
    dispatch(addFavs(newFav));
    toast.success("Favorito guardado!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <div className="container my-5 mx-10" style={{ textAlign: "center" }}>
      <ul className="list-group">
        <li className="list-group-item">
          <img src={characterData.image} alt={characterData.name} />
        </li>

        <li className="list-group-item">Nombre: {characterData.name}</li>
        <li className="list-group-item">Especie: {characterData.species}</li>
        <li className="list-group-item">Género: {characterData.gender}</li>
        <li className="list-group-item">
          Fecha de creación: {characterData.created}
        </li>
        <li className="list-group-item">
          Episodios: {characterData.episode?.length}
        </li>
        <li className="list-group-item">
          Ubicación: {characterData.location?.name}
        </li>

        <li className="list-group-item">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handlePost}
          >
            Agregar a favoritos
          </button>
        </li>
      </ul>
      <ToastContainer />
    </div>
  );
};

export default CharacterDetails;
