import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(searchQuery);
  }

  return (
   <section className="home">
   <h1 className="home__title">Search Topics</h1>
      <p className="home__description">
         Search for software engineering concepts and turn them into study cards.
      </p>
      <form className="home__form" onSubmit={handleSearchSubmit}>
        <input 
          className="home__input" 
          type="text" 
          placeholder='Try "JavaScript", "React", or "API"'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button className="home__button" type="submit">
          Search</button> 
      </form>
    </section>
  );
}

export default HomePage;