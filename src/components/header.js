import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
      <div className="header">
        <div className="logo"> Fülhaus Shop</div>
        <button className="cart-button" onClick={() => dropHandle()}>
          Cart
        </button>
      </div>

      {/* cart stuff */}
      <div className={dropOpen ? "cart" : "cart2"}>
        <div className="cart-content">
          {cartArray && cartArray.length > 0 ? (
            cartArray.map((item) => {
              return <CartItem item={item} />;
            })
          ) : (
            <div className="empty">Your Cart is Empty :(</div>
          )}
        </div>
        <div className="cart-sum">
          {cartArray && cartArray.length > 0 ? (
            <div className="total">
              Total:<div className="total-num">${total.toFixed(2)}</div>
            </div>
          ) : (
            <></>
          )}
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Header;
