import React, { useState } from 'react';
import { Link } from "react-router";
import styled from 'styled-components';
import imgLogo from '/imgs/logotemp.jpg'

// Contêiner da navbar
const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    // Fixar navbar
    // Note que houve uma simplificação: não há um componente header.
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

// Logo
const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 72px;
`

const LogoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
`

// Nav
const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        display: none; 
  }
`

const NavLinks = styled.div`
    display: flex;
    font-size: 1.1rem;
    gap: 20px;
`

const NavLink = styled.a`
    color: black;
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.5s;
    &:hover{
        border-bottom-color: black;
    }
`

const CoolerLink = styled(Link)`
    color: black;
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.5s;
    &:hover{
        border-bottom-color: black;
    }
`

// Hamburger
const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    font-size: 2rem;

    @media (max-width: 768px) {
        display: block;
    }
`

// Sidebar Container
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    align-items: center;
    gap: 20px;
    padding: ${({ $SidebarBool }) => ($SidebarBool ? '20px' : '0px')}; // Gambiarra?
    background-color: white;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    // Fixar sidebar e definir tamanho
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $SidebarBool }) => ($SidebarBool ? '250px' : '0px')};
    z-index: 1002;
    overflow: hidden;

    // Assegurar que a sidebar seja eliminada se a tela subitamente voltar ao normal.
    @media (min-width: 768px) {
        display: none;
    }
`;

// Sidebar Links
const SidebarLink = styled.a`
    text-decoration: none;
    color: black;
    padding: 10px;
    font-size: 1.2rem;
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.5s;
    &:hover{
        border-bottom-color: black;
    }
`;

const SimpleNavbar = () => { 
    const [SidebarBool, setSidebarBool] = useState(false);

    const toggleSidebar = () => {
        setSidebarBool(!SidebarBool);
        console.log(SidebarBool)
    };
    return (
    <>
        <Sidebar $SidebarBool={SidebarBool}>
              <SidebarLink href="#home" onClick={toggleSidebar}>Sobre o Projeto</SidebarLink>
              <SidebarLink href="#about" onClick={toggleSidebar}>Informações</SidebarLink>
              <SidebarLink href="#services" onClick={toggleSidebar}>Contato</SidebarLink>
              <SidebarLink href="./login" onClick={toggleSidebar}>Login</SidebarLink>
        </Sidebar>
        <NavbarContainer>
            <LogoDiv>
                <a href='./'><Logo src={imgLogo} alt='Green Trail logo' /></a>
            </LogoDiv>
            <NavDiv>
                <NavLinks>
                    <NavLink href='#about'>Sobre o Projeto</NavLink>
                    <NavLink href='#info'>Informações</NavLink>
                    <NavLink href='#contact'>Contato</NavLink>
                    <CoolerLink to='/login'>Login</CoolerLink>
                </NavLinks>
            </NavDiv>
            <Hamburger onClick={toggleSidebar}>
                ☰
            </Hamburger>
        </NavbarContainer>
        </> // IMPORTANTE: Isso é apenas para "segurar" o conteúdo que será retornado. Por quê não colocar um div? Porque sticky irá terminar na própria div.
    );
  };

export default SimpleNavbar
