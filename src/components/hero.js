import React from "react";
import HeroImg from "../assets/hero.png";
import style from "../styleConstants";
import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroBan>
      <img src={HeroImg} width="100%" alt="room with yellow chair" />
      Patio Furniture
      <ShopBtn>Shop</ShopBtn>
    </HeroBan>
  );
};
const HeroBan = styled.div`
  background: ${style.green};
  color: ${style.white};
  text-align: center;
  font-weight: 400;
  font-size: 45px;
  margin: 0;
  padding-bottom: 20px;
  margin-top: 70px;
  @media only screen and (min-width: 600px) {
    margin-top: 0;
    font-size: 96px;
    height: 140vh;
    margin: 0 80px;
  }
`;

const ShopBtn = styled.button`
  margin: 20px auto;
  &:hover {
    background: ${style.white};
    color: ${style.green};
    transition: ${style.ease};
  }
`;

export default Hero;
