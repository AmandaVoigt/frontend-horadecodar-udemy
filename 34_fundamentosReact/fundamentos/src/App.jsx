import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <div className="App">
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
    </div>
  );
}

export default App;
