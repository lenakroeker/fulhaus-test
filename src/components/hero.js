import React from "react";
import HeroImg from "../assets/hero.png";

export const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} width="100%" alt="room with yellow chair" />
      Patio Furniture
      <button className=" shop-button">Shop</button>
    </div>
  );
};

export default Hero;
