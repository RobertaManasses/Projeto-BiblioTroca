import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cabeçalho from './components/Cabeçalho';
import MenuLateral from './components/MenuLateral';
import Rodape from './components/Rodape';

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import CadastroLivros from './pages/CadastroLivros'
import DetalhesLivros from './pages/DetalhesLivros';
import MeusLivros from './components/MeusLivros';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				
				<MenuLateral />

				<div className="container-app">
					<Cabeçalho></Cabeçalho>
					
					<div className="conteudo">
						{/* O <Routes> escolhe qual componente renderizar com base na URL */}
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cadastroLivros" element={<CadastroLivros />} />
							<Route path="/meusLivros" element={<MeusLivros />} />
							<Route path="/perfil" element={<Perfil />} />
							<Route path="/detalhes-livro/:id" element={<DetalhesLivros />} />
						</Routes>
					</div>

					<Rodape></Rodape>
				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;
