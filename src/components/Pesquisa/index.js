import React, { useEffect } from "react";
import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { getLivros } from "../../services/livros";

const PesquisaContainer = styled.section`
  text-align: center;
  padding: 30px 0;
  height: 100px;
  width: 100%;
  margin-bottom: 64px;
`;

const Titulo = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Resultado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
  width: 250px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  img {
    height: 150px;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Pesquisar"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map((livro) => (
        <ResultadoContainer>
          <Resultado>
            <img src={livro.src} alt="Capa do Livro" />
            <p>{livro.nome}</p>
          </Resultado>
        </ResultadoContainer>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
