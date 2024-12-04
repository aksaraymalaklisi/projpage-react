import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f5f5f5;
`;

const Signupbox = styled.div`
width: 350px;
padding: 40px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
border-radius: 10px;
text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 90%;
    padding: 10px 20px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    margin: 10px 0;
`;

const Button = styled.button`
    padding: 10px 15px;
    margin-top: 10px;
    width: 90%;
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

const StyledLink = styled(Link)`
display: block;
margin-top: 15px;
color: #000000;
text-decoration: none;
font-size: 12px;
&:hover {
    text-decoration: underline;
}
`

function Signup() {
    return(
        <Container>
            <Signupbox>
            <Title>Cadastro - Green Trail</Title>
                    <form>
                        <Input type="name" placeholder="Nome" required></Input>
                        <Input type="email" placeholder="E-mail" required></Input>
                        <Input type="password" placeholder="Senha" required></Input>
                        <Input type="password" placeholder="Confimar Senha" required></Input>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <StyledLink to="/login">Conta já existe? Entre na sua conta.</StyledLink>
                    <StyledLink to="/">Retornar a página inicial</StyledLink>
            </Signupbox>
        </Container>
    )
}

export default Signup;