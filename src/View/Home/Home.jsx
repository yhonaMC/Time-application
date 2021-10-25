import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarBotton from "../../Components/NavbarBotton/NavbarBotton";
import NavbarFinal from "../../Components/NavbarFinal/NavbarFinal";
import Tiempo from "../../Components/Tiempo/Tiempo";
import Perfil from "../Perfil/Perfil";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarBotton />
      <NavbarFinal />
      <Tiempo />
      <Perfil />
    </div>
  );
};

export default Home;
