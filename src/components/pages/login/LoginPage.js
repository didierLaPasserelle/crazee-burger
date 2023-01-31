import { useState } from "react"
import styled from "styled-components";
import Logo from "../../reusable UI/Logo";
import LoginForm from "./LoginForm"

export default function LoginPage() {


  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm />
    </LoginPageStyled>
  )
}

/* 
Pour la collecte des données, on met en place un useState que l'on projette sur l'affichage via l'attribut value. C'est la synchro descendante.
Ensuite la synchro ascendante en gérant le changement
*/

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
`