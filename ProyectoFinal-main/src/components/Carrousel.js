import React from 'react'

export const Carrousel = () => {
  /*Logica*/
  return (
    <div id="carrusel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carrusel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carrusel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png" height="600px" width="100%" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.pinimg.com/originals/e4/7b/05/e47b05b6a0e42dc501284f3749c3355a.jpg" height="600px" width="100%" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://as01.epimg.net/meristation/imagenes/2021/07/13/videos/1626171942_464755_1626172087_noticia_normal.jpg" height="600px" width="100%" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Carrousel;