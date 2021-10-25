import React from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/action/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const cerrarSesion = () => {
    dispatch(logOut());
  };
  return (
    <>
      <nav className="navbar">
        <div className="cont-logo">
          <img
            src="https://res.cloudinary.com/yhonamc/image/upload/v1635007949/darkskylogo_grrcjv.png"
            alt=""
            className="logo"
          />
          <span className="text-navbar">Weather-App</span>
        </div>
        <span className="text-navbar">Aplicacion</span>
        <span className="text-navbar">Mapas</span>
        <span className="text-navbar">Api Dark sky </span>
        <span className="text-navbar">Ayudar</span>
        <button className="btn-cerrar" onClick={cerrarSesion}>
          Cerrar sesion
        </button>
      </nav>
    </>
  );
};

export default Navbar;
