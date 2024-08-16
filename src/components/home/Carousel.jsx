import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1683121324022-d039da524194?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
      <div
        style={{ maxHeight: "36rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="piza"
        />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
