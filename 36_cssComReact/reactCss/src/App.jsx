import "./App.css";

// 2 - css de componente
import MyComponent from "./components/MyComponent";

function App() {
  // 4 - inline style dinamico
  const n = 15;

  // 5 - classes dinâmicas
  const redTitle = true;

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
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 1
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe
      </h2>
    </div>
  );
}

export default App;
