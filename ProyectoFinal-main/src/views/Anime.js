//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";

//Styles
import "../styles/Anime.sass";
import img from "../img/ShingekinoKyojin.jpg";
//Data
import data from "../data/data.json";

const Anime = () => {
  /*Logica*/
  //Cogemos los parametros
  const { animename } = useParams();
  //Creamos un estdo en el cual va a estar el json
  const [anime, setAnime] = useState([]);

  //Solo al cargar obtiene los datos del json y los filtra(sin api)
  useEffect(() => {
    const obtenerDatos = () => {
      /*const data = await fetch(Link API `/${animename}`);
      const animeData = await data.json();
      setAnime(animeData);*/
      const animefilter = data.filter((dat) => dat.name === animename);
      setAnime(animefilter);
    };

    obtenerDatos();
  }, [animename]);
  return (
    <div>
      <Navbar />
      <br />
      {anime.map((ani) => (
        <div key={ani.name} id="content">
          {console.log(ani.name)}
          <img alt="" src={img} />
          <h2>Anime name: {ani.name}</h2>
          <p>Anime Description: {ani.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Anime;
