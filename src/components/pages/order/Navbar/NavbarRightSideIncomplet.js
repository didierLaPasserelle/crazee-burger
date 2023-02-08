import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../../theme"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"

export default function NavbarRightSideIncomplet() {
  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideIncompletStyled>
  )
}

const NavbarRightSideIncompletStyled = styled.div`
  
`
