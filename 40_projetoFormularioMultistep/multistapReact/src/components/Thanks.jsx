// Importa ícones de emojis
import {
  BsFillEmojiHeartEyesFill, // muito satisfeito
  BsFillEmojiSmileFill,     // satisfeito
  BsFillEmojiNeutralFill,   // neutro
  BsFillEmojiFrownFill,     // insatisfeito
} from "react-icons/bs";

// Importa estilos
import "./Thanks.css";

// Mapeamento: valor da avaliação → ícone correspondente
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

// Componente final (resumo)
const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">

      {/* Título */}
      <h2>Falta pouco...</h2>

      {/* Mensagem informativa */}
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>

      {/* Instrução final */}
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>

      {/* Mostra nome do usuário dinamicamente */}
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>

      {/* Mostra avaliação + ícone */}
      <p className="review-data">
        <span>Satisfação com o produto:</span>

        {/* Busca o ícone com base no valor salvo no estado */}
        {emojiData[data.review]}
      </p>

      {/* Mostra comentário */}
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
      </p>

    </div>
  );
};

// Exporta componente
export default Thanks;