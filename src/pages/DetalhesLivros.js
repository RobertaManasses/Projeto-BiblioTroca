import { useParams, Link } from 'react-router-dom';
import { livros } from '../banco-de-dados/livros';
import DetalhesLivroContainer from '../components/DetalhesLivro'; 
import Botao from '../components/Botao';

function DetalhesLivros() {
    const { id } = useParams();

    // Busca o livro pelo ID vindo da URL
    const livro = livros.find((liv) => liv.id === Number(id));

    if (!livro) {
        return (
        <div style={{ padding: '20px' }}>
            <h2>Livro não encontrado!</h2>
            <Link to="/">Voltar para a Página Inicial</Link>
        </div>
        );
    }

    return (
        <div style={{ padding: '30px' }}>
            <DetalhesLivroContainer livro={livro} />
            
            <Link to="/" className="btn-voltar">
                <Botao texto="Voltar para a Página Inicial"></Botao>
            </Link>
        </div>
    );
}

export default DetalhesLivros;