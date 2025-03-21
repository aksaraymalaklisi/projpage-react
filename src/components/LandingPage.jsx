import SimpleNavbar from "./SimpleNavbar";
import Main from "./Main";
import MainAccordion from "./MainAccordion";
import Textbox from "./Textbox";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Map from "./Map";

const LandingPage = ()=>{
    return(
        <>
        <SimpleNavbar />
        <Main>
          <Gallery />
          <Textbox />
          <MainAccordion />
          <Map />
        </Main>
        <Footer />
        </>
    )
}

export default LandingPage