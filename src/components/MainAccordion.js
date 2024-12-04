import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionDiv = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  font-size: large;
`;

const AccordionTitleDiv = styled.div`
  padding: 20px;
  text-align: start;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #f0f0f0;
  }
  &:hover{
    background-color: #f0f0f0;
  }
  &::after {
    content: '+';
    font-size: x-large;
    color: #000000;
    float: right;
  }
  &.active::after {
    content: '-';
  }
`;
const AccordionContentDiv = styled.div`
  padding: 20px;
  margin-top: 4px;
  text-align: start;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 8px;
  max-width: 100%;
  overflow:hidden;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: all 0.5s ease-in-out;
`;

const AccordionBox = styled.div`
  justify-self: center;
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
`

const AccordionBoxTitle = styled.h1`
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
`

// Isso é um mistério. O parâmetro title é apenas para definir o título.
// children, por outro lado, é definido pelo que está dentro do componente.
// Ela não é definida como um parâmetro normal. O conteúdo que ela receberia no parâmetro é o conteúdo do componente.
const Accordion = ({ title, children }) => { 
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionDiv>
      <AccordionTitleDiv className={isOpen ? 'active' : ''} onClick={toggleAccordion}>
        {title}
      </AccordionTitleDiv>
      <AccordionContentDiv isOpen={isOpen ? 'active':''}>
        {children}
      </AccordionContentDiv>
    </AccordionDiv>
  );
};

const MainAccordion = () => {
    return (
      <AccordionBox>
        <AccordionBoxTitle>Sobre o projeto</AccordionBoxTitle>
        <Accordion title='Informações Gerais'>
        <p>Website voltado para a área de Turismo, que permita aos usuários verificação personalizada, de acessos a trilhas ecológicas na Cidade de Maricá (RJ).</p>
        <p>Servir a ferramenta Web Site, a divulgação e informação à SECTUR (Secretaria de Turismo de Maricá-RJ), com a finalidade de fomentar ainda mais a conscientização de preservação ambiental e sustentabilidade, trazendo assim maior valorização do Município, podendo gerar também melhoria econômica aos negócios locais, promoção dos projetos culturais e locais, permitindo dessa forma, que toda a população seja beneficiada.</p>
        </Accordion>
        <Accordion title='Detalhes do Projeto'>
        <p>O ecoturismo é uma forma de turismo que se baseia na exploração sustentável e responsável de áreas naturais, envolvendo a conservação do ambiente e o bem-estar das comunidades locais. Essa modalidade de turismo busca proporcionar experiências em ambientes naturais preservados, onde os visitantes têm a oportunidade de conhecer e apreciar a biodiversidade, os ecossistemas e as culturas locais, ao mesmo tempo em que são importantes para a conservação desses recursos. O ecoturismo valoriza a educação ambiental, a preservação dos recursos naturais e contribui também para a geração de benefícios econômicos para as comunidades envolvidas.</p>
        </Accordion>
        <Accordion title='Equipe'>
        <p>Deyvison Fonseca</p>
        <p>Rafael Dias</p>
        <p>Richarle Fagundes do A. Oliveira</p>
        <p>Jeferson Rosa</p>
        <p>Vitor Amparo</p>
        </Accordion>
      </AccordionBox>
    );
}

export default MainAccordion;