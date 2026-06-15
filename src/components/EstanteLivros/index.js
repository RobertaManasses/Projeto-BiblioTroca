import './estilo.css'

import CardsLivros from '../CardsLivros'
import { livros } from '../../banco-de-dados/livros'


function EstanteLivros(){
    return(
        <div className='estante-livros'>
            { livros.map( livro => (
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