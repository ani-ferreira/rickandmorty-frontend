import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFav } from "../Store/favsActions";

const FavCharacter = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteFav(id));

    navigate("/");
  };

  let id = props.mongoid;

  return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleDelete(id)}
          >
            Eliminar de favoritos
          </button>
        </div>
      </div>
    </div>
  );
};
export default FavCharacter;
