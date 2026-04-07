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
      {/* 3 - inline style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "2px dotted blue" }}
      >
        Este elemento tem estilos inline
      </p>
    </div>
  );
}

export default App;
