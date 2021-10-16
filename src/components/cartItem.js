import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../action";
import { GrClose } from "react-icons/gr";
import style from "../styleConstants";
import styled from "styled-components";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  console.log(item);
  return (
    <CartItm>
      <CartPic src={item.imageURLs[0]} width="50px" alt={item.itemName} />

      <CartInfo>
        <div>{item.itemName}</div>

        <Brand>{item.vendorName}</Brand>

        <PriceCart>${item.MSRP.toFixed(2)}</PriceCart>
      </CartInfo>
      <Remove onClick={handleRemove}>
        <GrClose />
      </Remove>
    </CartItm>
  );
};

const CartItm = styled.div`
  min-height: 150px;
  margin: 20px;
  border-bottom: 1px solid ${style.black};
  display: flex;
  position: relative;
  @media only screen and (min-width: 600px) {
    height: auto;
    margin: 20px;
    border-bottom: 1px solid ${style.black};
    display: flex;
    position: relative;
  }
`;

const CartPic = styled.img`
  width: 50%;
  height: 60%;

  @media only screen and (min-width: 600px) {
    width: 40%;
  }
`;

const CartInfo = styled.div`
  width: 300px;
  font-size: 18px;
  margin-right: 10px;
  margin-left: 10px;
  @media only screen and (min-width: 600px) {
    grid-area: info;
    width: 300px;
    font-size: 24px;
    margin-right: 20px;
    margin-left: 0;
  }
`;

const Brand = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

const PriceCart = styled.div`
  margin: 10px;
  font-size: 18px;
  @media only screen and (min-width: 600px) {
    position: absolute;
    bottom: 0px;
    font-size: 24px;
  }
`;

const Remove = styled.div`
  cursor: pointer;
`;

export default CartItem;
