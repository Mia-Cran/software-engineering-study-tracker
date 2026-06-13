import { Link } from "react-router";
import "../Header.css";

function Header() {
    return (
        <header className="header">
        <nav className="header__nav">
           <Link className="header__link" to="/">
            Welcome           
            </Link>
           <Link className="header__link" to="/">
            Home
            </Link>
           <Link className="header__link" to="/">
           Saved Topics
            </Link>
           <Link className="header__link" to="/">
           About
           </Link>
        </nav>
        </header>
    )
}

export default Header;