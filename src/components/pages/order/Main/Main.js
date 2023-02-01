import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled className="main">
{/*<div className="basket">basket</div>*/}        
    <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // l'élément va prendre tout le reste de la page. or you can also use : height: calc(95vh - 10vh); 

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;

  display: grid; // de base le grid met les éléments les uns sur les autres
    grid-template-columns: 100%; // ou 1fr (ça prend tout le reste de la place)

  /* .basket{
    background: pink;
  } */

`;



