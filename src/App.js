import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Grid from "./components/grid";

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
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
        <Grid data={data} />
      </header>
    </div>
  );
}

export default App;
