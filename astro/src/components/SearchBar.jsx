import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      try {
        const res = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
            search: query,
            page_size: 5,
          },
        });
        setResults(res.data.results);
        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      }
    };

    const delayDebounce = setTimeout(fetchData, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query.trim()}`);
      setShowDropdown(false);
    }
  };

  return (
    <div className="search-container" ref={dropdownRef}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSubmit}
        onFocus={() => results.length > 0 && setShowDropdown(true)}
      />
      {showDropdown && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((game) => (
            <div
              key={game.id}
              className="search-result"
              onClick={() => {
                navigate(`/game/${game.slug}`);
                setShowDropdown(false);
              }}>
              {game.name}
            </div>
          ))}
          <div
            className="search-all"
            onClick={() => {
              navigate(`/search?q=${query.trim()}`);
              setShowDropdown(false);
            }}>
            Search all results for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
