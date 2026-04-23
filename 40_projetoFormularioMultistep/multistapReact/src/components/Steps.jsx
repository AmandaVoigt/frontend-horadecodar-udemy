import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        {/* className define as "classes CSS" do elemento

         `step` → sempre vai estar presente (classe base)

        ${ ... } → permite colocar lógica dentro da string (template string)

        currentStep >= 1 → verifica se o passo atual é maior ou igual a 1

        ? "active" : "" → operador ternário:
        se for verdadeiro → adiciona "active"
        se for falso → não adiciona nada

        Resultado final:
        currentStep = 0 → "step"
        currentStep = 1 → "step active"
        currentStep = 2 → "step active" */}
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
