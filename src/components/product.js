import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../action";
import { GrClose } from "react-icons/gr";

export const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [quickLook, setquickLook] = useState(false);

  const { itemName, vendorName, MSRP, _id, vendorItemDescription } = item;

  const lookHandle = () => {
    setquickLook(!quickLook);
  };

  const handleAddToCart = () => {
    return dispatch(addItem({ ...item, _id, MSRP }));
  };

  return (
    <div className="product">
      <div className="overlay">
        <div className="item-name">{itemName}</div>
        <div className="brand">{vendorName}</div>

        <div className="price">${MSRP.toFixed(2)}</div>
        <div className="add" onClick={handleAddToCart}>
          + Add to Cart
        </div>
      </div>

      <img src={item.imageURLs[0]} width="300px" alt={item.itemName} />
      <button className="look" onClick={() => lookHandle()}>
        Quick look
      </button>
      {quickLook ? (
        <>
          <div className="blackout"></div>
          <div className="modal">
            <GrClose
              onClick={() => lookHandle()}
              size={28}
              className="modal-x"
            />
            <div className="modal-info">
              <img src={item.imageURLs[0]} width="100%" alt={item.itemName} />

              <div className="item-name">{itemName}</div>
              <div className="brand">{vendorName}</div>
              <div className="modal-desc">{vendorItemDescription}</div>
              <div className="modal-price">${MSRP.toFixed(2)}</div>
              <button className="modal-btn" onClick={handleAddToCart}>
                + Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
