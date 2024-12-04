import styled from "styled-components";
import backgroundImage from '../imgs/background-image-test.jpg';

// Main define o fundo do site.

const Main = styled.div`
    padding: 20px;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export default Main;