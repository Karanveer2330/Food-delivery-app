import React from "react";
import Cards from "./Cards";
import First from "./First";
import Info from "./Info.js";
import Last from "./Last.js";
// @import "../node_modules\bootstrap\scss\bootstrap.scss";
import "./Home.css";
function Home(props) {
  // const myCarouselElement = document.querySelector('#myCarousel')

  // const carousel = new bootstrap.Carousel(myCarouselElement, {
  //   interval: 2000,
  //   touch: false
  // })
  return (
    // <center>

    <>
    <div className="caro">

    <div id="carouselExampleCaptions" class="carousel slide carousel-fade ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="shutterstock_649541308_20191010160155.png" style={{height:500,width:'fill'}}  class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 className="no" style={{color:'rgb(255, 77, 0)'}}>Indian Food</h2>
        <h4>Punjabi,Gujrati,Marathi,Rajasthani,Kashmiri Khana</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img  src="RegionalChinese_HERO_033122_31320.webp" style={{height:500,width:'fill'}}  class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'rgb(255, 77, 0)'}}>Chinese Food</h2>
        <h4>Some representative placeholder content for the second slide.</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Korean-Food-scaled.webp" style={{height:500,width:'fill'}} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'rgb(255, 77, 0)'}}>Korean Food</h2>
        <h4>Some representative placeholder content for the third slide.</h4>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

<div className="box">
      <div>
   <Info/>
      </div>
      <div id="gh">
        <Cards />
      </div>
      <div> 
        <First/>
      </div>
</div>
      <div>
        <Last logged={props.logged} />
      </div>
    </>
  );
}

export default Home;
