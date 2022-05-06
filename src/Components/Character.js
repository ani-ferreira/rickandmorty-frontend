import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          <Link
            to={`personaje/${props.id}`}
            className="btn btn-outline-secondary"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Character;
