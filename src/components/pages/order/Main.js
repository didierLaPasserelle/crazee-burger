import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled>
        main
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: green;
    flex: 1; // l'élément va prendre tout le reste de la page. or you can also use : height: calc(95vh - 10vh); 
`;



