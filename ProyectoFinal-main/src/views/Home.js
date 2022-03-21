import React from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import "../styles/Home.sass"
const Home = () => {
  /*Logica*/
  return (
    <div>
      <MainNavbar />
      <hr></hr>
      <h1>Popular en MALABARJU</h1>
      <div id="masVistos">
      {/* <div classNameName="card-group">
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://mundootaku.online/wp-content/uploads/2021/04/Primeras-impresiones-86-ochenta-y-seis.png" alt="Card image cap" />
              <div classNameName="card-body">
                <h5 classNameName="card-title">86</h5>
              </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2021/02/17/noticias/1613549549_775831_1613549616_noticia_normal.jpg" alt="Card image cap" />
              <div classNameName="card-body">
                <h5 classNameName="card-title">Fairy tail</h5>
              </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://areajugones.sport.es/wp-content/uploads/2021/03/imagen-2021-03-22-085554.jpg" alt="Card image cap" />
              <div classNameName="card-body">
                <h5 classNameName="card-title">Mushoku Tensei</h5>
              </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2020/05/29/noticias/1590777254_943497_1590777292_noticia_normal.jpg" alt="Card image cap" />
              <div classNameName="card-body">
                <h5 classNameName="card-title">Shingeki no Kyojin</h5>
              </div>
          </div>
        </div> */}
        <div className="wrap">
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1948/120625.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1987/117507.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1530/117776.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
          <div className="card">
            <div className="card-pic-wrap">
              <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg"  />
            </div>
          </div>
        </div>
      </div>
      {/* <hr></hr>
      <h1>Tendencias ahora </h1>
      <div id="masVistos">
        <div classNameName="card-group">
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://mundootaku.online/wp-content/uploads/2021/04/Primeras-impresiones-86-ochenta-y-seis.png" alt="Card image cap" />
            <div classNameName="card-body">
              <h5 classNameName="card-title">86</h5>
            </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2021/02/17/noticias/1613549549_775831_1613549616_noticia_normal.jpg" alt="Card image cap" />
            <div classNameName="card-body">
              <h5 classNameName="card-title">Fairy tail</h5>
            </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://areajugones.sport.es/wp-content/uploads/2021/03/imagen-2021-03-22-085554.jpg" alt="Card image cap" />
            <div classNameName="card-body">
              <h5 classNameName="card-title">Mushoku Tensei</h5>
            </div>
          </div>
          <div classNameName="card">
            <img classNameName="card-img-top" src="https://as01.epimg.net/meristation/imagenes/2020/05/29/noticias/1590777254_943497_1590777292_noticia_normal.jpg" alt="Card image cap" />
            <div classNameName="card-body">
              <h5 classNameName="card-title">Shingeki no Kyojin</h5>
            </div>
          </div>
        </div>
      </div>
      <hr></hr> */}
      <Footer />
    </div>
  );
};

export default Home;
