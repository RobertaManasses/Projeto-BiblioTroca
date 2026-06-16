import './estilo.css'

import CardsLivros from '../CardsLivros'
import { livros } from '../../banco-de-dados/livros'


function EstanteLivros({ textoPesquisa }){

    const livrosFiltrados = livros.filter((livro) =>
        livro.titulo
        .toLowerCase()
        .includes(textoPesquisa.toLowerCase())
    )
    return(
        <div className='estante-livros'>
            { livrosFiltrados.map( livro => (
                <CardsLivros 
                    id={livro.id}
                    titulo={livro.titulo}
                    imagem={livro.imagem}
                    vendedor={livro.vendedor.nome}
                    estado={livro.estado_do_livro}
                    tags={livro.genero}
                    >
                </CardsLivros>
            ))}
            
        </div>
    )
}

export default EstanteLivros