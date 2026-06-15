import "./estilo.css";
import FormularioLivro from "../FormularioLivro";
import camera from '../../images/camera.png'

function CadastroLivro() {
  return (
    <div className="cadastro-container">

      <div className="cadastro-card">

        <div className="cadastro-topo">

          <div className="foto-livro">
            <img src={camera} alt="Câmera" />
          </div>

          <h2>Cadastre seu Livro</h2>

        </div>

        <FormularioLivro />

      </div>

    </div>
  );
}

export default CadastroLivro;