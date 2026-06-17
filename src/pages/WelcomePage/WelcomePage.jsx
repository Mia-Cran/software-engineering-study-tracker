import "./WelcomePage.css";
import welcomeImage from "../../assets/welcome-study.png";

function WelcomePage() {
  return (
    <section className="app__intro">
      <img
        className="app__image"
        src={welcomeImage}
        alt="Open book with coding screen"
      />
      <h1 className="app__title">Welcome to <br />
        Your Software Engineering Study Tracker</h1>
      <p className="app__description">
        Search, save, and review software engineering concepts as study cards.
      </p>
    </section>
  );
}

export default WelcomePage;