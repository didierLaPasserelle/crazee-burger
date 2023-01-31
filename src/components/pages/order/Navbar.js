import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled className= "navbar">
            <h1>Hello {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: blue;
      height: 10vh;
`;