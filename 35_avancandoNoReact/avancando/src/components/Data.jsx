import { useState } from "react";

const Data = () => {
  const [someData, setSomeData] = useState(10);

  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => setSomeData(15)}>
          Mudar variável
        </button>
      </div>

      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>
          Mudar state
        </button>
      </div>
    </div>
  );
};

export default Data;