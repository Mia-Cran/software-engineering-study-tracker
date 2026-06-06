import "./App.css";
import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import SavedTopicsPage from "./pages/SavedTopicsPage/SavedTopicsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/saved" element={<SavedTopicsPage />}/>
        <Route path="/about" element={<AboutPage />}/>  
       </Routes>
    </main>
  );
}

export default App;