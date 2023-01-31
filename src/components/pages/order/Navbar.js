import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled className= "navbar">
        <div className="left-side">left</div>
    <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;


      .left-side{
        background: pink;
      }

      .right-side{
        background: purple;
      }
`
;