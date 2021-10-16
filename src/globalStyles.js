import { createGlobalStyle } from "styled-components";
import style from "./styleConstants";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

  body {
    background-color: ${style.canvas};
  font-family: "Crimson Text", serif;
  overflow-x: hidden;
  position: relative; }

button {
  background: ${style.black};
  color: ${style.white};
  font-family: "Montserrat", sans-serif;
  width: 120px;
  height: 43px;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  transition: ${style.ease};
  @media only screen and (min-width: 600px) {
    width: 155px;
    height: 55px;
    font-size: 24px;
  }
}

button:hover {
  color: ${style.canvas};
  background: ${style.green};
  transition: ${style.ease};
}

.cart {
  width: 90vw;
  height: calc(100vh - 70px);
  background-color: ${style.white};
  position: absolute;
  right: 0;
  padding: 30px;
  transition: ${style.ease};
  z-index: 20;
  margin-top: 70px;
  position: fixed;
  @media only screen and (min-width: 600px) {
    width: 45vw;
    min-height: calc(100vh - 80px);
    margin-top: 0px;
    position: relative;
  }
}

.cart2 {
  width: 90vw;
  height: calc(100vh - 70px);
  background-color: ${style.white};
  position: absolute;
  right: -90vw;
  padding: 30px;
  transition: ${style.ease};
  z-index: 20;
  margin-top: 70px;
  position: fixed;
  @media only screen and (min-width: 600px) {
    width: 45vw;
    min-height: calc(100vh - 80px);
    margin-top: 0px;
    position: relative;
  }
}

.modal-x {
  position: absolute;
  top: 10px;
  right: 10px;
}


/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${style.white};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${style.blacktransp};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${style.green};
}

`;

export default GlobalStyle;
