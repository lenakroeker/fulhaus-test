import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../action";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import style from "../styleConstants";

export const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [quickLook, setquickLook] = useState(false);

  const { itemName, vendorName, MSRP, _id, vendorItemDescription } = item;

  const lookHandle = () => {
    setquickLook(!quickLook);
  };

  const handleAddToCart = () => {
    setquickLook(!quickLook);
    return dispatch(addItem({ ...item, _id, MSRP }));
  };

  return (
    <ProductDiv>
      <Overlay>
        <ItemName>{itemName}</ItemName>
        <Brand>{vendorName}</Brand>

        <Price>${MSRP.toFixed(2)}</Price>
        <Add onClick={handleAddToCart}>+ Add to Cart</Add>
      </Overlay>

      <img src={item.imageURLs[0]} width="300px" alt={item.itemName} />
      <Look onClick={() => lookHandle()}>Quick look</Look>
      {quickLook ? (
        <>
          <Blackout></Blackout>
          <Modal>
            <GrClose size={28} className="modal-x" />
            <ModalInfo>
              <img src={item.imageURLs[0]} width="100%" alt={item.itemName} />

              <ItemName>{itemName}</ItemName>
              <Brand>{vendorName}</Brand>
              <Modaldes>{vendorItemDescription}</Modaldes>
              <ModalPrice>${MSRP.toFixed(2)}</ModalPrice>
              <ModalBtn onClick={handleAddToCart}>+ Add to Cart</ModalBtn>
            </ModalInfo>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </ProductDiv>
  );
};

const Modal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  z-index: 50;
  margin: 6vh 0;
  padding-top: 50px;
  height: 88vh;
  width: 70vw;
  background-color: ${style.white};
  border-radius: 10px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const ProductDiv = styled.div`
  border-radius: 38.85px;
  overflow: hidden;
  height: 300px;
  margin: 30px;
  cursor: pointer;
  position: relative;
`;

const Overlay = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    opacity: 0;
    display: block;
    background-color: ${style.blacktransp};
    z-index: 4;
    position: absolute;
    border-radius: 38.85px;
    width: 300px;
    height: 300px;
    color: ${style.white};
    transition: ${style.ease};
    padding: 32px;
    &:hover {
      opacity: 1;
    }
  }
`;

const ItemName = styled.div`
  font-size: 25px;
  font-weight: 400;
`;

const Brand = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

const Price = styled.div`
  position: absolute;
  bottom: 28px;
  right: 30px;
  font-size: 25px;
`;

const Add = styled.div`
  position: absolute;
  bottom: 24px;
  left: 22px;
  font-size: 16px;
  padding: 6px 8px;
  &:hover {
    background-color: ${style.black};
  }
`;

const Look = styled.button`
  position: absolute;
  bottom: 20px;
  width: 150px;
  text-align: center;
  left: 75px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Blackout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.363);
  top: 0;
  left: 0;
`;

const ModalInfo = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
`;

const Modaldes = styled.div`
  margin-top: 20px;
`;

const ModalPrice = styled.div`
  margin: 20px 0;
  font-size: 20px;
`;

const ModalBtn = styled.button`
  position: absolute;
  width: 63vw;
  bottom: 20px;
`;

export default Product;
