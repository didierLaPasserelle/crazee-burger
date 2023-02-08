import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable UI/ToggleButton"

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
      />
      <Profile username={username}/>
    </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px; // en plus des 20px à gauche et à droite de la navbar, on fait un padding de 50px ici pour avoir les 70px demandés dans le figma

`;