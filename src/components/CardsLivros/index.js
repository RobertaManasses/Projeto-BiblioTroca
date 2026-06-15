import './estilo.css'
const CAMINHO_IMAGENS = '/images/capas-livros'; /* imagens da capa esta no public para poder importar aqui */ 

function CardsLivros({id, titulo, imagem, vendedor, tags}){
    return(
        <div className="card card-{id}">
            <h3 className="titulo">{titulo}</h3>
            
            <div className="imagem-container">
                <img src={`${CAMINHO_IMAGENS}/${imagem}`} alt={`Capa do livro ${titulo}`} className="imagem-capa"></img>
            </div>
            
            <div className="card-rodape">
                <p className="vendedor">Anunciado por: <span className="vendedor-nome">{vendedor}</span></p>
                
                <div className="tags-container">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <a href="/detalhes-do-livro/id-do-livro" className="btn-details">Ver mais detalhes</a>
            </div>
        </div>
    )
}

export default CardsLivros
