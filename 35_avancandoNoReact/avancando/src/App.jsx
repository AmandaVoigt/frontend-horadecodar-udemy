import "./App.css";

// 2 - imagem em assets
import city from "./assets/city.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* 1 - imagem em public */}
      <img src="public/img1.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="Cidade" />
    </div>
  );
}

export default App;
