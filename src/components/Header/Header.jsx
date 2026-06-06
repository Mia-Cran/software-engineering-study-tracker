import { Link } from "react-router";

function Header() {
    return (
        <nav>
           <Link to="/home">Home</Link>
           <Link to="/Welcome">Welcome</Link>
           <Link to="/saved">Saved Topics</Link>
           <Link to="/about">About</Link>
        </nav>
    )
}

export default Header;