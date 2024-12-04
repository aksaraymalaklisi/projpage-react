import SimpleNavbar from "./SimpleNavbar";
import Main from "./Main";
import MainAccordion from "./Accordion";
import Textbox from "./Textbox";
import Gallery from "./Gallery";
import Footer from "./Footer";

const LandingPage = ()=>{
    return(
        <>
        <SimpleNavbar />
        <Main>
          <Gallery />
          <Textbox />
          <MainAccordion />
        </Main>
        <Footer />
        </>
    )
}

export default LandingPage