import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Ágata";
  const [name, setName] = useState("Amanda");

  const changeNames = () => {
    userName = "Ágata Martins";

    setName("Amanda Voigt");
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
    </div>
  );
};

export default HookUseState;
