import "./App.css";
import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import SavedTopicsPage from "./pages/SavedTopicsPage/SavedTopicsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [savedTopics, setSavedTopics] = useState([]);

  function handleSaveTopic(topic) {
    setSavedTopics((prevTopics) => [...prevTopics, topic]);
  }
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<HomePage onSaveTopic={handleSaveTopic} />}/>
        <Route path="/saved" element={<SavedTopicsPage savedTopics={savedTopics} />}/>
        <Route path="/about" element={<AboutPage />}/>  
       </Routes>
    </main>
  );
}



export default App;