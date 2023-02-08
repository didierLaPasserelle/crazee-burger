import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable UI/ToggleButton"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../theme";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  const [isModeAdmin, setisModeAdmin] = useState(false)

  const displayToastNotification = () => {
    if (!isModeAdmin){
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    setisModeAdmin(!isModeAdmin)
   

  } 


  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification} // A l'évènement onToggle, cela déclenche le comportement notify
      />
      <Profile username={username}/>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px; // en plus des 20px à gauche et à droite de la navbar, on fait un padding de 50px ici pour avoir les 70px demandés dans le figma

  .toaster { // ces classes correspondent aux classes du toat, on peut vérifier avec l'inspecteur.
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;