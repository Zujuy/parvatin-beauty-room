import React from "react";
import { withRouter } from 'react-router-dom';
import { CarouselStyled } from '../../style/components'

function Carousel() {
  return (
    <CarouselStyled>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="carrousel1.jpg" class="d-block w-100" alt="piel hermosa" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="carrousel2.jpg" class="d-block w-100" alt="healty" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="carrousel3.jpg" class="d-block w-100" alt="Massage" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>

            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </CarouselStyled>
  )
}
export default withRouter(Carousel)