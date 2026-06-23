import "./StudyCard.css";

function StudyCard({ topic, onSaveTopic }) {
  return (
    <article className="study-card">
      <h2 className="study-card__title">{topic.title}</h2>
      {topic.studyInfo && (
        <div className="study-card__simple-info">
          <h3 className="study-card__subtitle">Simple Definition</h3>
          <p className="study-card__simple-definition">
            {topic.studyInfo.simpleDefinition}
          </p>

          <h3 className="study-card__subtitle">Example</h3>
          <p className="study-card__example">{topic.studyInfo.example}</p>
        </div>
      )}
      <p className="study-card__description">{topic.description}</p>
      <p className="study-card__extract">{topic.extract}</p>
      {onSaveTopic && (
        <button
          className="study-card__save-button"
          type="button"
          onClick={() => onSaveTopic(topic)}
        >
          Save Topic
        </button>
      )}
    </article>
  );
}

export default StudyCard;
