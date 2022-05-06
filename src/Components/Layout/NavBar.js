import { Link, Outlet } from "react-router-dom";
import logo from "../../Assets/img.jpg";

const NavBar = (props) => {
  return (
    <>
      <div
        className="d-flex justify-content-between margin p-5"
        style={{ backgroundColor: "black" }}
      >
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <img src={logo} alt="rickandmorty" className="logo" />
          </Link>
        </div>

        <div className="btn btn-secondary align-self-center">
          <Link to="misfavoritos" className="text-decoration-none text-white">
            Favoritos
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
