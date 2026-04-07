import "./App.css";

// 1 - criação de form
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Amanda" userEmail="amanda@horadecodar.com.br"/>
    </div>
  );
}

export default App;
