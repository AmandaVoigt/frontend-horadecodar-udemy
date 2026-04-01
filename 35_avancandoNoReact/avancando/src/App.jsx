import "./App.css";

// 2 - imagem em assets
import city from "./assets/city.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderização de listas
import ListRender from "./components/ListRender";

// 7 - render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando no React</h1>
      {/* 1 - imagem em public */}
      <img src="public/img1.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="Cidade" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de listas */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Amanda" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="BMW" km={999} color="Vermelho"/>
    </div>
  );
}

export default App;
