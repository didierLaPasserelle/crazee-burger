import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable UI/ToggleButton"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

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
      <ToastAdmin />
    </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px; // en plus des 20px à gauche et à droite de la navbar, on fait un padding de 50px ici pour avoir les 70px demandés dans le figma

`;