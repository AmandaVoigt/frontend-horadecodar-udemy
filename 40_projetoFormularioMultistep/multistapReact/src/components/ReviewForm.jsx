// Importa ícones de emojis para avaliação
import {
  BsFillEmojiHeartEyesFill, // muito satisfeito
  BsFillEmojiSmileFill,     // satisfeito
  BsFillEmojiNeutralFill,   // neutro
  BsFillEmojiFrownFill,     // insatisfeito
} from "react-icons/bs";

// Importa estilos
import "./ReviewForm.css";

// Componente recebe:
// data → estado global do formulário
// updateFieldHandler → função para atualizar os dados
const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      {/* container principal */}

      {/* Grupo de seleção (radio) */}
      <div className="form-control score-container">

        {/* Opção 1 */}
        <label className="radio-container">
          <input
            type="radio"              // tipo radio (seleção única)
            value="unsatisfied"       // valor salvo no estado
            name="review"             // grupo (todos com mesmo name)
            required

            // controla qual está selecionado
            checked={data.review === "unsatisfied"}

            // atualiza estado ao selecionar
            onChange={(e) =>
              updateFieldHandler("review", e.target.value)
            }
          />
          <BsFillEmojiFrownFill /> {/* ícone */}
          <p>Insatisfeito</p>
        </label>

        {/* Opção 2 */}
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) =>
              updateFieldHandler("review", e.target.value)
            }
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        {/* Opção 3 */}
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) =>
              updateFieldHandler("review", e.target.value)
            }
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        {/* Opção 4 */}
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied" // ✔ agora consistente com o Thanks.jsx
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onChange={(e) =>
              updateFieldHandler("review", e.target.value)
            }
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      {/* Campo de comentário */}
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>

        <textarea
          name="comment" // chave no objeto
          id="comment"
          placeholder="Conte como foi a sua experiência..."
          required

          // valor controlado pelo estado
          value={data.comment || ""}

          // atualização do estado
          onChange={(e) =>
            updateFieldHandler("comment", e.target.value)
          }
        ></textarea>
      </div>
    </div>
  );
};

// Exporta
export default ReviewForm;