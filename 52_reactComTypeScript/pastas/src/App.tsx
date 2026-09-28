function App() {
  // 1 - variaveis
  const name: string = "Amanda";
  const age: number = 25;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
