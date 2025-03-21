import styled from "styled-components";
import logo from "/imgs/dinosaur.png"
import social1logo from "/imgs/icons8-instagram.svg"
import social2logo from "/imgs/icons8-twitter.svg"
import social3logo from "/imgs/icons8-facebook.svg"
import social4logo from "/imgs/icons8-whatsapp.svg"

// Form section
const FooterForm = styled.div`
    padding: 20px;
`

const FormContainer = styled.div`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const Input = styled.input`
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    margin: 10px 0;
`

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    margin: 10px 0;
    resize: vertical;
`

const Title = styled.h2`
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 10px 15px;
    background-color: rgb(110, 200, 90);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
    background-color: rgb(123, 221, 98);
    }
`;

const FooterEnd = styled.div`
    margin: auto 10px;
    padding: 10px;
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr;
`

const FooterEndSection1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const FooterEndSection2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const FooterEndSection3 = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

const SocialLink = styled.a`
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.5s;
    &:hover{
        border-bottom-color: black;
        cursor: pointer;
    }
`

const Separate = styled.hr`
    margin: auto 20px 5px;
    margin-top: 5px;
`

const Footer = ()=>{
    return(
        <>
        <FooterForm>
            <FormContainer>
            <Title>Entre em contato conosco!</Title>
                <form>
                      <div>
                        <Label for="name">Nome:</Label>
                        <Input type="text" id="name" />
                      </div>
                      <div>
                        <Label for="mail">E-mail:</Label>
                        <Input type="email" id="mail" />
                      </div>
                      <div>
                        <Label for="number">Telefone: </Label>
                        <Input type="number" id="number" />
                      </div>
                      <div>
                        <Label for="msg">Mensagem:</Label>
                        <TextArea id="msg"></TextArea>
                      </div>
                  <div>
                    <Button type="submit">Enviar</Button>
                  </div>
                  </form>
            </FormContainer>
        </FooterForm>
        <Separate />
        <FooterEnd>
            <FooterEndSection1>
                <div>
                    <img src={logo} alt="A walking dinosaur" />
                </div>
                <div >
                    <h5>Green Trail</h5>
                    <h6>Projeto em andamento.</h6>
                </div>
            </FooterEndSection1>
            <FooterEndSection2>
                <div>
                    <h5>Contato</h5>
                    <h6>E-mail: example@example.com</h6>
                    <h6>Telefone: (21) 91234-5678</h6>
                    <h6>Endereço: Av. Roberto Silveira, N: 179 Mumbuca - Maricá, RJ</h6>
                </div>
            </FooterEndSection2>
            <FooterEndSection3>
                <SocialLinks>
                    <SocialLink href="https://www.instagram.com/" rel="noreferrer" target="_blank"><img src={social1logo} alt="Instagram" /></SocialLink>
                    <SocialLink href="https://twitter.com/" rel="noreferrer" target="_blank"><img src={social2logo} alt="Twitter" /></SocialLink>
                    <SocialLink href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src={social3logo} alt="Facebook" /></SocialLink>
                    <SocialLink href="https://www.whatsapp.com/" rel="noreferrer" target="_blank"><img src={social4logo} alt="WhatsApp" /></SocialLink>
                </SocialLinks>
            </FooterEndSection3>
        </FooterEnd>
        </>
    )
}

export default Footer