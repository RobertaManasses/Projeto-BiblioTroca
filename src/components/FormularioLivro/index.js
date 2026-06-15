import Input from "../Input";
import Botao from "../Botao";
import './estilo.css'

function FormularioLivro() {
  return (
    <form className="formulario">

      <Input
        label="Nome do Livro"
        placeholder="Digite o título"
        required
      />

      <Input
        label="Autor"
        placeholder="Nome do autor"
        required
      />

      <div className="campo">
        <label>Sinopse</label>

        <textarea
          rows="4"
          placeholder="Descreva o livro"
          required
        />
      </div>

      <div className="campo">
        <label>Estado do Livro</label>

        <div className="checkbox">

          <label>
            <input type="radio" name="estado" />
            Novo
          </label>

          <label>
            <input type="radio" name="estado" />
            Seminovo
          </label>

          <label>
            <input type="radio" name="estado" />
            Usado
          </label>

        </div>
      </div>

      <Input
        label="Gênero Literário"
        placeholder="Ex.: Romance, ficção, suspense, entre outros."
        required
      />
      
      <Botao texto="Cadastrar Livro" />

    </form>
  );
}

export default FormularioLivro;