import './App.css';
import Cabecalho from './components/Cabeçalho';
import MenuLateral from './components/MenuLateral';
import EstanteLivros from './components/EstanteLivros';
import Rodape from './components/Rodape';

function App() {
	return (
		<div className="app">
			<MenuLateral></MenuLateral>

			<div className='container-app'>
				<Cabecalho></Cabecalho>
				
				<div className='conteudo'>
					<EstanteLivros></EstanteLivros>
				</div>

				<Rodape></Rodape>
			</div>
		</div>
	);
}

export default App;
