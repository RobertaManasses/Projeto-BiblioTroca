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
        />

        <Input
          label="Idade"
          type="number"
          placeholder="18"
        />

      </div>

      <Input
        label="Email Acadêmico"
        type="email"
        placeholder="seuemail@gmail.com"
      />

      <div className="linha">

        <Input
          label="Cidade"
          placeholder="Sua cidade"
        />

        <Input
          label="Telefone"
          placeholder="(44) 99999-9999"
        />

      </div>

      <Botao texto="Salvar Perfil" />

    </form>
  );
}

export default FormularioPerfil;