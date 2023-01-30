import { Link, useParams } from "react-router-dom";


export default function OrderPage() {
  //state
       /* const parametres = useParams()         useParams me retourne un objet donc je veux extraire une propriété, inputValeu
        console.log(parametres); */
 const {username} = useParams()
  //comportements

  //affichage
  return (
    <div>
        <h1>Hello {username}</h1>
        <Link to="/">
            <button>Déconnexion</button>
        </Link>
        
    </div>
  )
}
