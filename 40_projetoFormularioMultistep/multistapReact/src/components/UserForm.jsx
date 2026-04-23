// Importa o React (necessário em alguns setups, especialmente mais antigos)
import React from "react";

// Define um componente funcional chamado UserForm
const UserForm = () => {
  return (
    // Container principal do formulário dessa etapa
    <div>

      {/* Campo de Nome */}
      <div className="form-control">
        {/* Label associada ao input via htmlFor */}
        <label htmlFor="name">Nome:</label>

        {/* Input de texto para nome */}
        <input
          type="text"           // tipo do campo (texto)
          name="name"           // nome do campo (usado em formulários)
          id="name"             // id usado para conectar com o label
          placeholder="Digite o seu nome" // texto de ajuda dentro do input
          required              // campo obrigatório (HTML valida automaticamente)
        />
      </div>

      {/* Campo de E-mail */}
      <div className="form-control">
        {/* Label associada ao input de email */}
        <label htmlFor="email">E-mail:</label>

        {/* Input específico para email */}
        <input
          type="email"          // valida formato de email automaticamente
          name="email"          // nome do campo
          id="email"            // id para ligação com o label
          placeholder="Digite o seu e-mail"
          required              // campo obrigatório
        />
      </div>

    </div>
  );
};

// Exporta o componente para ser usado no App.jsx
export default UserForm;