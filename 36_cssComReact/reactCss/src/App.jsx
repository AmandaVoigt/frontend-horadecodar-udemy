import "./App.css";

// 2 - css de componente
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
    </div>
  );
}

export default App;
