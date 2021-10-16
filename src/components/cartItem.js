import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../action";
import { GrClose } from "react-icons/gr";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  console.log(item);
  return (
    <div className="cart-item">
      <img
        className="cart-pic"
        src={item.imageURLs[0]}
        width="50px"
        alt={item.itemName}
      />

      <div className="cart-info">
        <div>{item.itemName}</div>

        <div className="brand">{item.vendorName}</div>

        <div className="price-cart">${item.MSRP.toFixed(2)}</div>
      </div>
      <div className="remove" onClick={handleRemove}>
        <GrClose />
      </div>
    </div>
  );
};

export default CartItem;
