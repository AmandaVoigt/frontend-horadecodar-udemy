import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia de componentes
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
    </div>
  );
}

export default App;
