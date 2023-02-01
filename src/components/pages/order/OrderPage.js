import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";
import Navbar from "./Navbar";


export default function OrderPage() {
  //state
       /* const parametres = useParams()         useParams me retourne un objet donc je veux extraire une propriété, inputValeu
        console.log(parametres); */
 const {username} = useParams()
  //comportements

  //affichage
  return (
    <OrderPageStyled>
        <div className = "container">
          <Navbar username={username} />
          <Main />
        </div>  
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container{
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
