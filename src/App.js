import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Grid from "./components/grid";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://main-api.fulhaus.com/fulhaus-tech-test/get-products`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBody>
      <GlobalStyle />
      <Header />
      <Hero />
      <Grid data={data} />
    </AppBody>
  );
}

const AppBody = styled.div`
  overflow-x: hidden;
  position: relative;
`;

export default App;
