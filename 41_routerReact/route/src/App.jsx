import "./App.css";

// 3 - componente base
import { Outlet } from "react-router-dom";

// 4 - link entre páginas
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
