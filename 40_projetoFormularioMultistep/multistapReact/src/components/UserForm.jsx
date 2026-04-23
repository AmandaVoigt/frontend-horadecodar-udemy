// Importa o React (nem sempre necessário em versões modernas)
import React from "react";

// Componente recebe:
// data → estado com os valores
// updateFieldHandler → função para atualizar o estado
const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div> {/* container principal */}

      {/* Campo de Nome */}
      <div className="form-control">

        {/* Label ligada ao input */}
        <label htmlFor="name">Nome:</label>

        <input
          type="text" // tipo texto
          name="name" // nome do campo (chave do objeto)
          id="name"   // conecta com o label
          placeholder="Digite o seu nome"
          required    // obrigatório

          // valor controlado pelo estado
          value={data.name || ""}

          // atualiza o estado ao digitar
          onChange={(e) =>
            updateFieldHandler("name", e.target.value)
          }
        />
      </div>

      {/* Campo de Email */}
      <div className="form-control">

        <label htmlFor="email">E-mail:</label>

        <input
          type="email" // valida formato automaticamente
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required

          // valor controlado
          value={data.email || ""}

          // atualização do estado
          onChange={(e) =>
            updateFieldHandler("email", e.target.value)
          }
        />
      </div>

    </div>
  );
};

// Exporta componente
export default UserForm;