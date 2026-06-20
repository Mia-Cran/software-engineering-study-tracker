import StudyCard from "../../components/StudyCard/StudyCard";

function SavedTopicsPage({ savedTopics}) {
  return (
    <section className="app__intro">
      <h1 className="app__title">Saved Topics</h1>
      <p className="app__description">
        View and review your saved software engineering concepts.
      </p>
      {savedTopics.length === 0 ? (
        <p className="saved__empty">No saved topics yet.</p>
      ) : (
        <div className="saved__topics">
          {savedTopics.map((topic) => (
           <StudyCard topic={topic} key={topic.title} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedTopicsPage;
