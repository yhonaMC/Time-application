import React from "react";
import "./tiempo.css";

const Tiempo = () => {
  return (
    <div className="cont">
      <div className="cont-tiempo">
        <div className="img">
          <img
            src="https://res.cloudinary.com/yhonamc/image/upload/v1635017345/rain_t0rtv9.png"
            alt=""
            className="size"
          />
          <h1>59˚ Lluvia.</h1>
        </div>
        <div>
          <span className="datos">Feels Like: 62˚ </span>
          <span className="datos">Low: 51˚</span>
          <span className="datos">High: 62˚</span>
        </div>
        <h2 className="tiempo">Lluvia durante todo el dia</h2>
      </div>
    </div>
  );
};

export default Tiempo;
