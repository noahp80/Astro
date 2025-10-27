import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import GamePage from "./pages/GamePage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GameDetail from "./pages/GameDetail";
import SearchResultsPage from "./pages/SearchResultsPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:slug" element={<GameDetail />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
