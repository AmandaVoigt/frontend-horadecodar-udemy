import React, { createContext } from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - destructuring
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 -  useState
import State from "./components/State";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Amanda";
  const age: number = 25;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui!";
  const mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Outro conteúdo"
          commentsQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
