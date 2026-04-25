import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link><br />
      <Link to="/contact">Contatos</Link>
    </div>
  );
};

export default Navbar;
