import "./NavBar.css";
import logo from "./img/logoZyS.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light top-nav">
      <img
        className=" navbar-brand"
        src={logo}
        alt="logo"
        style={{ width: "70px" }}
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <p className="nav-link" href="#">
              Inicio 
            </p>
          </li>
          <li className="nav-item dropdown">
            <p
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Productos
            </p>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p className="dropdown-item" href="#">
                Botas
              </p>
              <p className="dropdown-item" href="#">
                Sandalias
              </p>
              <p className="dropdown-item" href="#">
                Zapatillas
              </p>
            </div>
          </li>
          <li className="nav-item">
            <p className="nav-link" href="#">
              Contacto
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" href="#">
              <CartWidget />
            </p>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar producto"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
