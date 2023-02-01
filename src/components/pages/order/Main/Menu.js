import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../fakedata/fakeMenu";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)      

  return (
    <MenuStyled className="menu">
        {menu.map((produit) => {
            return (
                <div className="produit">
                    <div className="image">
                        <img src={produit.imageSource} alt={produit.title} />
                    </div>
                    <div className="info-text">
                        <div className="title">{produit.title}</div>
                        <div className="description">
                            <div className="price">{produit.price}</div>
                            <button className="add-button">Ajouter</button>
                        </div>
                    </div>
                </div>
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

    
    .produit{
        background: red;
        width: 240px;
        height: 330px;
    }

    .image{
        width: 100px;
        height: auto
    }

    img{
        width: 100%;
        height: 100%
    }
`;