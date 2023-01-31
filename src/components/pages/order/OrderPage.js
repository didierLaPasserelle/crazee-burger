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
          <div className= "navbar">
            <h1>Hello {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
          </div>
          <div className="main">Main</div>
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
  flex-direction: column;

  .container{
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar{
      background: blue;
      height: 10vh;
    }

    .main{
      background: green;
      flex: 1; // l'élément va prendre tout le reste de la page. or you can also use : height: calc(95vh - 10vh); 
    }
  }
`;
