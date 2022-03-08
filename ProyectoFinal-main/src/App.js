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

function App() {
  /*Logica*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route exact path="profile/:username" element={<Profile />} />
        <Route exact path="anime/:animename" element={<Anime />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
