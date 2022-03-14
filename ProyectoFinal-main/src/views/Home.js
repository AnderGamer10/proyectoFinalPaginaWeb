import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carrousel";
import "../styles/Home.sass"
const Home = () => {
  /*Logica*/
  return (
    <div>
      <Navbar />
      <Carousel />
      <hr></hr>
      <h1>Popular en MALABARJU</h1>
      <div id="masVistos">
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src="https://mundootaku.online/wp-content/uploads/2021/04/Primeras-impresiones-86-ochenta-y-seis.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">86</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2021/02/17/noticias/1613549549_775831_1613549616_noticia_normal.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Fairy tail</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://areajugones.sport.es/wp-content/uploads/2021/03/imagen-2021-03-22-085554.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Mushoku Tensei</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2020/05/29/noticias/1590777254_943497_1590777292_noticia_normal.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Shingeki no Kyojin</h5>
              </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h1>Tendencias ahora </h1>
      <div id="masVistos">
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src="https://mundootaku.online/wp-content/uploads/2021/04/Primeras-impresiones-86-ochenta-y-seis.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">86</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2021/02/17/noticias/1613549549_775831_1613549616_noticia_normal.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Fairy tail</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://areajugones.sport.es/wp-content/uploads/2021/03/imagen-2021-03-22-085554.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Mushoku Tensei</h5>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2020/05/29/noticias/1590777254_943497_1590777292_noticia_normal.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Shingeki no Kyojin</h5>
              </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Home;
