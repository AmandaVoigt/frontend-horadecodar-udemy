import React from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1 - variaveis
  const name: string = "Amanda";
  const age: number = 25;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
