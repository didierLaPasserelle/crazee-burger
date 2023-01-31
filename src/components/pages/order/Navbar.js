import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled className= "navbar">
        <div className="left-side">left</div>
        <div className="right-side">
                right
            <h1>Hello {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
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