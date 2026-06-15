import { useState } from "react";
import LivroCard from "../LivroCard";
import './estilo.css'

function MeusLivros() {

  const [livros, setLivros] = useState([
    {
      id: 1,
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      genero: "Romance",
      estado: "Usado"
    },
    {
      id: 2,
      nome: "A Hora da Estrela",
      autor: "Clarice Lispector",
      genero: "Drama",
      estado: "Novo"
    }
  ]);

  function excluirLivro(id) {
    const novaLista = livros.filter(
      livro => livro.id !== id
    );

    setLivros(novaLista);
  }

  function editarLivro(id) {
    alert(`Editar livro ${id}`);
  }

  return (
    <div>

      <h1>Meus Livros</h1>

      {livros.map(livro => (
        <LivroCard
          key={livro.id}
          livro={livro}
          onEditar={editarLivro}
          onExcluir={excluirLivro}
        />
      ))}

    </div>
  );
}

export default MeusLivros;