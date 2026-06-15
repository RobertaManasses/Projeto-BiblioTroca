import './estilo.css'

function DetalhesLivro({ livro }) {
    return (
        <div className="detalhes-container">

            <div className="detalhes-capa">
                <img 
                src={`/images/capas-livros/${livro.imagem}`} 
                alt={`Capa do livro ${livro.titulo}`}
                className="imagem-detalhada"
                />
            </div>

            <div className="detalhes-info">
                <h1 className='detalhe-titulo'>{livro.titulo}</h1>
                <h3 className='detalhe-autor'>Autor: {livro.autor}</h3>
                <p className="estado"><strong>Estado:</strong> {livro.estado_do_livro}</p>
                
                <div className="generos">
                    {livro.genero.map((gen, index) => (
                        <span key={index} className="tag-genero">{gen}</span>
                    ))}
                </div>

                <p className="sinopse">
                    <strong>Sinopse:</strong><br />
                    {livro.sinopse}
                </p>

                <div className="vendedor-box">
                    <h4 className='vendedor-titulo'>Informações de Troca</h4>
                    <p className='vendedor-info'><strong>Disponibilizado por:</strong> {livro.vendedor.nome}</p>
                    <p className='vendedor-info'><strong>Contato:</strong> {livro.vendedor.email}</p>
                </div>
            </div>
        </div>
    );
}

export default DetalhesLivro;