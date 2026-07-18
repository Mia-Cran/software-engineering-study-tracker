import { Link, useNavigate } from "react-router";
import "./Header.css";

function Header({ isLoggedIn, onSignout }) {
  const navigate = useNavigate();

  function handleSignoutClick() {
    onSignout();
    navigate("/");
  }

  return (
  <header className="header">
    <nav className="header__nav">
      <Link className="header__link" to="/">
        Welcome
      </Link>

      {isLoggedIn && (
        <>
          <Link className="header__link" to="/home">
            Home
          </Link>

          <Link className="header__link" to="/saved">
            Saved Topics
          </Link>

          <Link className="header__link" to="/about">
            About
          </Link>

          <button type="button" onClick={handleSignoutClick}>
            Sign Out
          </button>
        </>
      )}
    </nav>
  </header>
);
}
 

export default Header;
