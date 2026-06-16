import EstanteLivros from '../components/EstanteLivros';

function Home({ textoPesquisa }) {
  return (
    <div>
      <EstanteLivros textoPesquisa={textoPesquisa} />
    </div>
  );
}

export default Home;