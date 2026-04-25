import "./App.css";

// 3 - componente base
import { Outlet } from "react-router-dom";

// 4 - link entre páginas
import Navbar from "./components/Navbar";

// 8 - search params
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
