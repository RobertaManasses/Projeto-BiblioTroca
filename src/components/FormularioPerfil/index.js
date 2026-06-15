import Input from "../Input";
import Botao from "../Botao";
import './estilo.css';

function FormularioPerfil() {
  return (
    <form className="formulario">

      <div className="linha">

        <Input
          label="Nome Completo"
          placeholder="Digite seu nome"
          required
        />

        <Input
          label="Idade"
          type="number"
          placeholder="18"
          required
        />

      </div>

      <Input
        label="Email"
        type="email"
        placeholder="seuemail@gmail.com"
        required
      />

      <div className="linha">

        <Input
          label="Cidade"
          placeholder="Sua cidade"
          required
        />

        <Input
          label="Telefone"
          placeholder="(44) 99999-9999"
          required
        />

      </div>

      <Botao texto="Salvar Perfil" />

    </form>
  );
}

export default FormularioPerfil;