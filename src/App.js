import React from "react";
import SimpleNavbar from "./components/SimpleNavbar";
import Main from "./components/Main";
import MainAccordion from "./components/Accordion";
import Textbox from "./components/Textbox";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

// Use GlobalStyles later

function App() {
  return (
    <div>
      <GlobalStyle />
      <SimpleNavbar />
      <Main>
        <Gallery />
        <Textbox />
        <MainAccordion />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
