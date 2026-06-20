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
            <article  className="home__card" key={topic.title}>
              <h2 className="home__card-title">{topic.title}</h2>
              <p className="home__card-description">{topic.description}</p>
              <p className="home__card-extract">{topic.extract}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedTopicsPage;
