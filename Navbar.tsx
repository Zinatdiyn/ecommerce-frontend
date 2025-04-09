import { Link } from "react-router-dom";
import "../assets/styles/Navbar.scss";
import Header from "./Header";
import { SassColor } from 'sass'

const Navbar: React.FC = () => {
  return (
    <div>
    <Header />
    <nav className="navbar">
      <h1>MyShop</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;