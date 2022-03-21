import React from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import "../styles/Home.sass"
import { Carousel } from 'primereact/carousel';
const Home = () => {
  /*Logica*/
  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  return (
    <div>
      <MainNavbar />
      <hr></hr>
      <h1>Popular en MALABARJU</h1>
      
      {/* <Carousel value={products} itemTemplate={itemTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel> */}
 
      {/* <div id="masVistos">
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
      </div> */}
      <hr></hr>
      <h1>Tendencias ahora </h1>
      <div id="masVistos">
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
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Home;
