// Importa o hook de estado do React
import { useState } from "react";

// Cria um hook customizado chamado useForm
// "steps" é o array de componentes (as etapas)
export function useForm(steps) {

  // Estado que guarda o índice da etapa atual
  const [currentStep, setCurrentStep] = useState(0);

  // Função para trocar de etapa
  function changeStep(i, e) {
    // Se existir evento (submit), previne reload da página
    if (e) e.preventDefault();

    // Impede navegar para índices inválidos
    if (i < 0 || i >= steps.length) return;

    // Atualiza o estado com a nova etapa
    setCurrentStep(i);
  }

  // Retorna tudo que o componente App precisa usar
  return {
    currentStep, // índice atual
    currentComponent: steps[currentStep], // Componente atual baseado no índice
    changeStep, // função para mudar etapa
    isLastStep: currentStep + 1 === steps.length ? true : false, // Verifica se é a última etapa    
    isFirstStep: currentStep === 0 ? true : false, // Verifica se é a primeira etapa
  };
}