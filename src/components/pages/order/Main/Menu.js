import { useState } from "react"
import styled from "styled-components"
import { fakeMenu1, fakeMenu2 } from "../../../fakedata/fakeMenu";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)      

  return (
    <MenuStyled className="menu">
        {menu.map((produit) => {
            return <div className="produit">{produit.title}</div>
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: green;
    display: grid;
    grid-template-columns: repeat(4, 1fr); // je veux 4 éléments par ligne et je veux qu'ils aient tous la même taille.
    grid-row-gap: 60px; // pour laisser de l'espace entre les cards au niveau du bas
    padding: 50px 50px 150px;
    justify-items: center; // pour centrer la grid
    
    .produit{
        background: red;
        width: 240px;
        height: 330px;
    }
`;