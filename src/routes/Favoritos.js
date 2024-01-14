import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos } from "../services/favoritos";
import { Titulo } from "../components/Titulo";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardLivro = styled.div`
  width: 190px;
  height: 300px;
  background: white;
  padding: 0.4em;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 1em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const CardImagemLivro = styled.img`
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 190px;
  border-radius: 6px 6px 0 0;
  object-fit: cover;
`;

const AutorLivro = styled.p`
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 2px;
`;

const NomeDoLivro = styled.p`
  font-weight: 700;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Titulo>Meus Favoritos</Titulo>
      <ContainerFlex>
        {favoritos.length !== 0
          ? favoritos.map((favorito) => (
              <div key={favorito.id}>
                <ResultadoContainer>
                  <CardLivro>
                    <CardImagemLivro src={favorito.src} />
                    <NomeDoLivro>{favorito.nome}</NomeDoLivro>
                    <AutorLivro>{favorito.autor}</AutorLivro>
                  </CardLivro>
                </ResultadoContainer>
              </div>
            ))
          : null}
      </ContainerFlex>
    </AppContainer>
  );
}

export default Favoritos;
