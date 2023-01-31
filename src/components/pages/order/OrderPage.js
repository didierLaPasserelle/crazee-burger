import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


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
          <h1>Hello {username}</h1>
          <Link to="/">
              <button>Déconnexion</button>
          </Link>
        </div>
        
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    background: red;
    height: 95vh;
    width: 1400px;
  }
`;
