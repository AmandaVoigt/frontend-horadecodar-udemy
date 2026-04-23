// Importa ícones de emojis para avaliação
import {
  BsFillEmojiHeartEyesFill, // muito satisfeito
  BsFillEmojiSmileFill,     // satisfeito
  BsFillEmojiNeutralFill,   // neutro
  BsFillEmojiFrownFill,     // insatisfeito
} from "react-icons/bs";

// Importa estilos do componente
import "./ReviewForm.css";

// Componente de avaliação
const ReviewForm = () => {
  return (
    <div className="review-form"> {/* container principal */}

      {/* Grupo de seleção de nota */}
      <div className="form-control score-container">

        {/* Opção 1 */}
        <label className="radio-container">
          {/* input radio (seleção única) */}
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill /> {/* ícone */}
          <p>Insatisfeito</p> {/* texto */}
        </label>

        {/* Opção 2 */}
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        {/* Opção 3 */}
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        {/* Opção 4 */}
        <label className="radio-container">
          <input type="radio" value="very_satisfies" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      {/* Campo de comentário */}
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>

        {/* textarea para texto livre */}
        <textarea
          name="comment" // nome da chave do dado quando o formulário é enviado
          id="comment"   // conecta com o label
          placeholder="Conte como foi a sua experiência com o produto..."
          required       // campo obrigatório
        ></textarea>
      </div>
    </div>
  );
};

// Exporta o componente
export default ReviewForm;