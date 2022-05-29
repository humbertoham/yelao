import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css/bundle";

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
