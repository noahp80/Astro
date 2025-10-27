import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) return;
      try {
        const res = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
            search: query,
            page_size: 12,
          },
        });
        setResults(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="search-results-page">
      <h2>Search Results for "{query}"</h2>
      <div className="results-grid">
        {results.map((game) => (
          <Link
            to={`/game/${game.slug}`}
            key={game.id}
            className="search-result-wrapper">
            <div className="search-result-card">
              <img src={game.background_image} alt={game.name} />
            </div>
            <p className="result-title">{game.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
