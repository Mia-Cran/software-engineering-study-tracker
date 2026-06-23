import "./WelcomePage.css";
import welcomeImage from "../../assets/welcome-study.png";
import { Link } from "react-router";

function WelcomePage() {
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
      <Link className="app__start-button" to="/home">
        Start Studying
      </Link>
      </div>
    </section>
  );
}

export default WelcomePage;
