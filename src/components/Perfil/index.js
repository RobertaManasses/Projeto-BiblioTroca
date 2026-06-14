import "./estilo.css";
import FormularioPerfil from "../FormularioPerfil";
import TrocaReputacao from "../TrocaReputacao";

function Perfil() {
  return (
    <div className="perfil-container">

      <div className="perfil-card">

        <div className="perfil-topo">

          <div className="foto-perfil">
          </div>

          <h2>Complete seu Perfil</h2>
        </div>

        <FormularioPerfil />
        <TrocaReputacao />
      </div>

    </div>
  );
}

export default Perfil;