import './estilo.css'

function LivroCard({ livro, onEditar, onExcluir }) {
  return (
    <div className="card-livro">

      <h3>{livro.nome}</h3>

      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>

      <p>
        <strong>Gênero:</strong> {livro.genero}
      </p>

      <p>
        <strong>Estado:</strong> {livro.estado}
      </p>

      <div className="acoes">

        <button onClick={() => onEditar(livro.id)}>
          Editar
        </button>

        <button onClick={() => onExcluir(livro.id)}>
          Excluir
        </button>

      </div>

    </div>
  );
}

export default LivroCard;