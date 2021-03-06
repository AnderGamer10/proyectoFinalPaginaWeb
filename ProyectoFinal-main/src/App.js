//React
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Catalogue from "./views/Catalogue";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Anime from "./views/Anime";
//Styles
import "./App.sass";
import NotFoundPage from "./views/NotFoundPage";
import Login from "./views/Login";
import Register from "./views/Register";
import { useEffect, useState } from "react";

function App() {
  /*Logica*/
  const [data, setData] = useState();
  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://localhost:5001/api/AnimeDatas";
      const respuesta = await fetch(url).then((res) => res.json());
      setData(respuesta);
      console.log(respuesta);
    };
    obtenerDatos();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route exact path="profile/:username" element={<Profile />} />
        <Route exact path="anime/:animename" element={<Anime />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
