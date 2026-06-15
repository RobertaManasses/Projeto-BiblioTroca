import './App.css';
import Cabecalho from './components/Cabeçalho';
import MenuLateral from './components/MenuLateral';
import EstanteLivros from './components/EstanteLivros';
import Rodape from './components/Rodape';
import Perfil from './components/Perfil';
import Botao from './components/Botao';
import FormularioPerfil from './components/FormularioPerfil';
import Input from './components/Input';
import CadastroLivro from './components/CadastroLivro';
import FormularioLivro from './components/FormularioLivro';
import MeusLivros from './components/MeusLivros';
import LivroCard from './components/LivroCard';

function App() {
	return (
		<div className="app">
			<MenuLateral></MenuLateral>

			<div className='container-app'>
				<Cabecalho></Cabecalho>
				
				<div className='conteudo'>
					<EstanteLivros></EstanteLivros>
					<Botao></Botao>
					<CadastroLivro></CadastroLivro>
					<MeusLivros></MeusLivros>
				</div>

				<Rodape></Rodape>
			</div>
		</div>
	);
}

export default App;
