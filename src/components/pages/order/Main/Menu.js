import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../fakedata/fakeMenu";
import Product from "./Product";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)      

  return (
    <MenuStyled className="menu">
        {menu.map((produit) => {
            return (
                <Product {...produit} />
                    // title={produit.title}
                    // imageSource={produit.imageSource}
                    // price={produit.price}
                
            )
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: ${theme.colors.white};
    display: grid;
    grid-template-columns: repeat(4, 1fr); // je veux 4 éléments par ligne et je veux qu'ils aient tous la même taille.
    grid-row-gap: 60px; // pour laisser de l'espace entre les cards au niveau du bas
    padding: 50px 50px 150px;
    justify-items: center; // pour centrer la grid
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;

    
    
`;