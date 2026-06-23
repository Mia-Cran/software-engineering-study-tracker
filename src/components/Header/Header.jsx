import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Welcome
        </Link>
        <Link className="header__link" to="/home">
          Home
        </Link>
        <Link className="header__link" to="/saved">
          Saved Topics
        </Link>
        <Link className="header__link" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
