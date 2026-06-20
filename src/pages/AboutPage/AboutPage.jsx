import mariaPhoto from "../../assets/maria-photo.png";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="app">
      <h1 className="app__title">About This Project</h1>
      <p className="about__description">
        I created this Software Engineering Study Tracker to help myself and
        others learn and review important software engineering concepts.
      </p>

      <p className="about__description">
        It uses Wikipedia summaries, beginner-friendly explanations, saved study
        cards, and localStorage to make studying less overwhelming.
      </p>
      <div className="about__image-circle">
        <img className="about__image" src={mariaPhoto} alt="Maria smiling" />
      </div>
    </section>
  );
}

export default AboutPage;
