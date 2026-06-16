import { useLocation } from 'react-router-dom'; /* Para mudar o texto dependendo da rota */
import './estilo.css';
import pesquisa from "../../images/pesquisa.png";


function Cabecalho(){
    const location = useLocation(); /* Pega a rota */

    // Função para definir o título com base no caminho da URL
    const obterTitulo = () => {
        if (location.pathname.startsWith('/detalhes-do-livro')) {
            return 'Detalhes do Livro';
        }

        switch (location.pathname) {
        case '/':
            return 'Página Inicial';
        case '/meusLivros':
            return 'Meus Livros Cadastrados';
        case '/cadastroLivros':
            return 'Cadastro de Livros';
        case '/perfil':
            return 'Meu Perfil';
        default:
            return 'BiblioTroca'; // Um título padrão caso a rota não seja encontrada
        }
    };

  return (
    <header className="app-header">
      {/* Aqui ele renderiza o resultado da função */}
      <h2>{obterTitulo()}</h2>


    {location.pathname === '/' && (
    <div className="barra-pesquisa">
        <img src={pesquisa} alt="Pesquisar" />
        <input
        type="text"
        placeholder="Pesquisar livros"
        />
    </div>
    )}
    </header>
  );

}

export default Cabecalho