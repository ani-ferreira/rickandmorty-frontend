import { Link, Outlet } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <div
        className="d-flex justify-content-between margin p-5"
        style={{ backgroundColor: "yellowgreen" }}
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
            Rick and Morty
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
