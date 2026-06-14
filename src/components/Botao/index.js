import './estilo.css'

function Botao({ texto }) {
  return (
    <button className="btn-salvar">
      {texto}
    </button>
  );
}

export default Botao;