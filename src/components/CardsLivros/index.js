import { Link } from 'react-router-dom';
import './estilo.css'
import Botao from '../Botao';
const CAMINHO_IMAGENS = '/images/capas-livros'; /* imagens da capa esta no public para poder importar aqui */ 

function CardsLivros({id, titulo, imagem, vendedor, estado, tags}){
    return(
        <div className="card card-{id}">
            <h3 className="titulo">{titulo}</h3>
            
            <div className="imagem-container">
                <img src={`${CAMINHO_IMAGENS}/${imagem}`} alt={`Capa do livro ${titulo}`} className="imagem-capa"></img>
            </div>
            
            <div className="card-rodape">
                <p className="vendedor">Anunciado por: <span className="vendedor-nome">{vendedor}</span></p>
                
                <div className="tags-container">
                    <span className="tag estado">{estado}</span>
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <Link to={`/detalhes-livro/${id}`}>
                    <Botao texto="Ver mais detalhes"></Botao>
                </Link>
            </div>
        </div>
    )
}

export default CardsLivros
