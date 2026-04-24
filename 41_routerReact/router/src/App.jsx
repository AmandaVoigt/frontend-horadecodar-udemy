import "./App.css";

// 3 - componente base
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Navbar</p>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
