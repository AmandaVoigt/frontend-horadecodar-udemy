import React from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - destructuring
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// 6 -  useState
import State from "./components/State";

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
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "js"]}
      />
      <State />
    </div>
  );
}

export default App;
