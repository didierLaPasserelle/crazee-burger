import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
        {/*<div className="admin-button">Admin button</div>*/}
    <Profile username={username}/>
      <div className="picture"></div>
    </NavbarRightSideStyled>  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px; // en plus des 20px à gauche et à droite de la navbar, on fait un padding de 50px ici pour avoir les 70px demandés dans le figma
  
        
  /* .admin-button{
    background: lightblue;
        } */
  
  .profile{
    background: yellow;
  }
  
`;