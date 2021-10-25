import React from "react";
import "./navbarBotton.css";

const NavbarBotton = () => {
  return (
    <div>
      <div className="cont-botton">
        <nav className="navbar-botton">
          <button className="button-navbar">
            <img
              src="https://res.cloudinary.com/yhonamc/image/upload/v1635004161/current-location_gxojlr.png"
              alt=""
              className="icon"
            />
          </button>
          <input type="text" className="busqueda" />
          <button className="button-navbar">
            <img
              src="https://res.cloudinary.com/yhonamc/image/upload/v1635004232/search_k2okxr.png"
              alt=""
              className="icon"
            />
          </button>
          <select name="" id="" className="opciones">
            <option value="">°F,mph</option>
          </select>
          <select name="" id="" className="opciones">
            <option value="">Español</option>
          </select>
        </nav>
      </div>
    </div>
  );
};

export default NavbarBotton;
