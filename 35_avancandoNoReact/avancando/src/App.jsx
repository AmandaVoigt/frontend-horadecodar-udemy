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

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 3200 },
];

// 12 - frangments
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - função em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - função em prop
  function ShowMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      <CarDetails brand="BMW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails km={1100} brand="Audi" color="Preto" />
      <CarDetails brand="Mercedes" color="Branco" km={5214} />
      {/* 11 - renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <h2>Teste</h2>
        <p>Meu container</p>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={ShowMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
