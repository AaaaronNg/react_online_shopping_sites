import React from "react";
import img from "./slider_img/slider1.jpeg";

const HomeSlider = (props) => {
  const slides = [
    {
      img: `${process.env.PUBLIC_URL}/assets/images/slider2.jpg`,
      lineOne: "Vans",
      lineTwo: "old Skool",
      linkTitle: "shop now",
      linkTo: "/shop",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/slider3.jpeg`,
      lineOne: "Vans",
      lineTwo: "olde Skool",
      linkTitle: "show now",
      linkTo: "/shop",
    },
  ];

  const settings = {
    interval: 3000,
  };

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div class="carousel-item" key={i}>
            <img class="d-block w-100" src={item.img} />
            <div class="carousel-caption">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        ))
      : null;

  return (
    <div class="py-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide py-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner mx-auto" style={{ width: "60%" }}>
          <div class="carousel-item active">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/slider1.jpeg`}
              class="d-block w-100"
            />
          </div>
          {generateSlides()}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
