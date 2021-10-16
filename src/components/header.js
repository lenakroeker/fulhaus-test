import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../styleConstants";
import styled from "styled-components";

import CartItem from "./cartItem";

export const Header = () => {
  const cartState = useSelector((state) => state.cartState);
  const cartArray = Object.values(cartState);
  console.log(cartArray);
  //dropdown
  const [dropOpen, setDropOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    cartArray.forEach((item) => {
      cartTotal += item.MSRP;
    });
    setTotal(cartTotal);
    return () => {};
  }, [cartArray]);

  const dropHandle = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <>
      <Head>
        <Logo> Fülhaus Shop</Logo>
        <CartBtn onClick={() => dropHandle()}>Cart</CartBtn>
      </Head>

      {/* cart stuff */}
      <div className={dropOpen ? "cart" : "cart2"}>
        <CartContent>
          {cartArray && cartArray.length > 0 ? (
            cartArray.map((item) => {
              return <CartItem item={item} />;
            })
          ) : (
            <Empty>Your Cart is Empty :(</Empty>
          )}
        </CartContent>
        <CartSum>
          {cartArray && cartArray.length > 0 ? (
            <Total>
              Total:<TotalNum>${total.toFixed(2)}</TotalNum>
            </Total>
          ) : (
            <></>
          )}
          <CheckoutBtn>Checkout</CheckoutBtn>
        </CartSum>
      </div>
    </>
  );
};

const Head = styled.div`
  background: ${style.white};
  color: ${style.black};
  height: 70px;
  display: flex;
  width: 100vw;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.151);
  position: fixed;
  z-index: 100;
  @media only screen and (min-width: 600px) {
    height: 80px;
    position: relative;
  }
`;

const Logo = styled.div`
  padding: 20px 0 0 20px;
  background: ${style.white};
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
  transition: ${style.ease};
  text-shadow: 1px 1px 1px #03030300;
  &:hover {
    color: ${style.green};
    transition: ${style.ease};
    text-shadow: 1px 1px 1px #03030356;
  }
  @media only screen and (min-width: 600px) {
    padding: 15px 0 0 40px;
    font-size: 36px;
  }
`;

const CartBtn = styled.button`
  position: absolute;
  right: 23px;
  top: 11px;
`;

const CartContent = styled.div`
  height: 65vh;
  overflow-y: scroll;
  @media only screen and (min-width: 600px) {
    height: 55vh;
  }
`;

const Empty = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 30px 0;
`;

const CartSum = styled.div`
  bottom: 30px;
  position: absolute;
  width: 80%;
  @media only screen and (min-width: 600px) {
    width: 90%;
  }
`;

const Total = styled.div`
  font-size: 36px;
`;

const TotalNum = styled.div`
  display: inline;
  position: absolute;
  right: 0px;
`;

const CheckoutBtn = styled.button`
  width: 100%;
`;

export default Header;
