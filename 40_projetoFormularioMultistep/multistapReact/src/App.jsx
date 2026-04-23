// Importa ícones de navegação (botões)
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Importa ícone de envio
import { FiSend } from "react-icons/fi";

// Importa os componentes de cada etapa do formulário
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Importa o hook customizado que controla os passos do formulário
import { useForm } from "./hooks/useForm";

// Importa hook de estado do React
import { useState } from "react";

// Importa estilos CSS
import "./App.css";

// Estrutura inicial do formulário (estado global)
const formTemplate = {
  name: "",     // nome do usuário
  email: "",    // email
  review: "",   // avaliação (radio)
  comment: "",  // comentário
};

// Componente principal da aplicação
function App() {

  // Estado que guarda todos os dados do formulário
  const [data, setData] = useState(formTemplate);

  // Função para atualizar qualquer campo do formulário
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      // copia o estado anterior e atualiza só o campo específico
      return { ...prev, [key]: value };
    });
  };

  // Array com os componentes de cada etapa (ordem importa)
  const formComponents = [
    // passa os dados e função para os componentes filhos
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,

    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,

    // último step só exibe os dados
    <Thanks data={data} />,
  ];

  // Hook que controla navegação entre etapas
  const {
    currentStep,        // índice da etapa atual
    currentComponent,   // componente da etapa atual
    changeStep,         // função para mudar etapa
    isLastStep,         // é última etapa?
    isFirstStep,        // é primeira etapa?
  } = useForm(formComponents);

  return (
    <div className="app">

      {/* Cabeçalho */}
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>

      {/* Container do formulário */}
      <div className="form-container">

        {/* Componente visual dos passos */}
        <Steps currentStep={currentStep} />

        {/* Formulário */}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          {/* Renderiza o step atual dinamicamente */}
          <div className="inputs-container">
            {currentComponent}
          </div>

          {/* Botões */}
          <div className="actions">

            {/* Botão voltar */}
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changeStep(currentStep - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {/* Botão avançar ou enviar */}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// Exporta o componente
export default App;