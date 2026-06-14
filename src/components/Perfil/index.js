import React, { useState } from "react"; // Importa React e useState
import "./estilo.css"; // Importa o CSS

function Perfil() { // Componente Perfil

  const [perfil, setPerfil] = useState(null); // Guarda os dados do usuário
  const [mostrarPerfil, setMostrarPerfil] = useState(false); // Controla a exibição do perfil

  function salvarPerfil(evento) { // Função para salvar os dados
    evento.preventDefault();// Impede o recarregamento da página

    const dados = {// Cria um objeto contendo os dados digitados
      nome: document.getElementById("nome").value,
      idade: document.getElementById("idade").value,
      email: document.getElementById("email").value,
      cidade: document.getElementById("cidade").value,
      telefone: document.getElementById("telefone").value,
      cpf: document.getElementById("cpf").value,
      rg: document.getElementById("rg").value,
      endereco: document.getElementById("endereco").value,
      profissao: document.getElementById("profissao").value,
      escolaridade: document.getElementById("escolaridade").value
    };

    setPerfil(dados);// Salva os dados no estado perfil
    setMostrarPerfil(true);// Exibe a área do perfil
  }

  function editarPerfil() { // Volta para o formulário
    setMostrarPerfil(false);// Esconde o perfil e mostra novamente o formulário
  }

  return (
    <div className="container">

      <h1>Site de Troca de Livros</h1>

      {!mostrarPerfil && (/* Mostra o formulário apenas quando mostrarPerfil for falso */

        <form className="formulario" onSubmit={salvarPerfil}>

          <input id="nome" type="text" placeholder="Nome" required />

          <input id="idade" type="number" placeholder="Idade" required />

          <input id="email" type="email" placeholder="E-mail" required />

          <input id="cidade" type="text" placeholder="Cidade" required />

          <input id="telefone" type="text" placeholder="Telefone" required />

          <input id="cpf" type="text" placeholder="CPF" required />

          <input id="rg" type="text" placeholder="RG" required />

          <input id="endereco" type="text" placeholder="Endereço" required />

          <input id="profissao" type="text" placeholder="Profissão" required />

          <input id="escolaridade" type="text" placeholder="Escolaridade" required />

          <button type="submit">
            Salvar Perfil
          </button>

        </form>

      )}

      {mostrarPerfil && (/* Mostra o perfil apenas quando mostrarPerfil for verdadeiro */

        <div className="perfil">

          <h2>Meu Perfil</h2>

          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>Idade:</strong> {perfil.idade}</p>
          <p><strong>E-mail:</strong> {perfil.email}</p>
          <p><strong>Cidade:</strong> {perfil.cidade}</p>
          <p><strong>Telefone:</strong> {perfil.telefone}</p>
          <p><strong>CPF:</strong> {perfil.cpf}</p>
          <p><strong>RG:</strong> {perfil.rg}</p>
          <p><strong>Endereço:</strong> {perfil.endereco}</p>
          <p><strong>Profissão:</strong> {perfil.profissao}</p>
          <p><strong>Escolaridade:</strong> {perfil.escolaridade}</p>

          <button onClick={editarPerfil}>
            Alterar Informações
          </button>

        </div>

      )}

    </div>
  );
}

export default Perfil; // Exporta o componente Perfil