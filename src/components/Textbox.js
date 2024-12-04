import styled from "styled-components";

const TextContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    background-size: contain;
    padding: 20px;
    margin-bottom: 20px;
`

const TextSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
`

const TextTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`

const Textbox = ()=>{
    return(
        <TextContainer>
            <TextSection>
                <div>
                <TextTitle>Nossa Missão</TextTitle>
                <p>Nosso objetivo não é apenas fazer com que as pessoas se tornem mais apegadas à natureza e os seres que vivem lá por meio do Ecoturismo, como também ajudá-las a descobrir a geografia e a cultura da cidade em que estão com o nosso app.</p>
                </div>
                <div>
                <TextTitle>Nossa Visão</TextTitle>
                <p>A nossa visão é criar um novo costume no local onde estamos atuando, e nos desenvolver a ponto de nos tornar em referência de confiabilidade, qualidade e excelência no cenário do Ecoturismo.</p>
                </div>
                <div>
                <TextTitle>Nosso Impacto</TextTitle>
                    <p>
                        Desejamos impactar não apenas no cenário socioeconômico de nossa cidade, como também queremos fazer a diferença no cenário ambiental, 
                        conscientizando as pessoas que estão em Maricá sobre como nossas ações impactam nas belezas naturais que existem em nosso município. 
                        Apresentando a todos como nossa cidade tem uma natureza incrível por meio do ecoturismo, poderemos ajudá-la tanto economicamente 
                        com o potencial de turismo que tem, quanto socialmente com o potencial de interação que nosso app terá, e também ambientalmente 
                        pelos motivos anteriormente citados.
                    </p>
                </div>
            </TextSection>
        </TextContainer>
    )
}

export default Textbox