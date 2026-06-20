import mariaPhoto from "../../assets/maria-photo.png";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about">
      <h1 className="about__title">About This Project</h1>

      <p className="about__description">
        I created this Study Tracker to make software engineering concepts easier to learn.
        <br />
        It uses Wikipedia, simple explanations, saved cards, and localStorage.
      </p>

      <div className="about__image-circle">
        <img className="about__image" 
         src={mariaPhoto} 
         alt="Maria smiling" />
      </div>
    </section>
  );
}

export default AboutPage;