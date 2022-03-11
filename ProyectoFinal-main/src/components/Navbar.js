import React from "react";
import "../styles/Navbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import users from "../data/usuarios.json";
const Navbar = () => {
  /*Logica*/
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <img alt="" id="menuicon" src={menuicon} />
        </label>
        <label className="logo">Nombre</label>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/catalogue">Catologo</Link>
          </li>
          <li>
            {users[0].user === "Adrian" ? (
              <Link to={`/profile/${users[0].user}`}>Perfil</Link>
            ) : (
              <Link to="/login">Iniciar Sesión</Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
