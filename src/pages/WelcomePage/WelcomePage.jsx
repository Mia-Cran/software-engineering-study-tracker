import "./WelcomePage.css";
import welcomeImage from "../../assets/welcome-study.png";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function WelcomePage({ onSignin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    onSignin(email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSignup(event) {
    event.preventDefault();

    onSignup(name, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="app__intro">
      <img
        className="app__image"
        src={welcomeImage}
        alt="Open book with coding screen"
      />

      <div className="app__text">
        <h1 className="app__title">
          Welcome to <br />
          Your Software Engineering Study Tracker
        </h1>

        <p className="app__description">
          Search, save, and review software engineering concepts as study cards.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <Link className="app__start-button" to="/home">
          Start Studying
        </Link>
      </div>
    </section>
  );
}

export default WelcomePage;