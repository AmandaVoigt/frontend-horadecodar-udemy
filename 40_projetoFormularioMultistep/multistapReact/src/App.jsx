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

// Importa estilos CSS
import "./App.css";

// Componente principal da aplicação
function App() {
  // Array com os componentes de cada etapa (ordem importa)
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  // Desestruturação dos dados retornados pelo hook useForm
  const { 
    currentStep,        // índice da etapa atual
    currentComponent,   // componente correspondente à etapa atual
    changeStep,         // função para mudar de etapa
    isLastStep,         // boolean: é a última etapa?
    isFirstStep         // boolean: é a primeira etapa?
  } = useForm(formComponents);

  return (
    <div className="app">
      {/* Cabeçalho do formulário */}
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>

      {/* Container do formulário */}
      <div className="form-container">
        <Steps currentStep={currentStep}/>

        {/* Formulário principal */}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          {/* Renderiza o componente da etapa atual */}
          <div className="inputs-container">{currentComponent}</div>

          {/* Área de botões */}
          <div className="actions">

            {/* Botão "Voltar" só aparece se NÃO for a primeira etapa */}
            {!isFirstStep && (
              <button 
                type="button" 
                onClick={() => changeStep(currentStep - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {/* Se NÃO for a última etapa, mostra botão "Avançar" */}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              // Se for a última etapa, mostra botão "Enviar"
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

// Exporta o componente para uso em outros arquivos
export default App;