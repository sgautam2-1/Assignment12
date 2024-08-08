import React, { useState } from 'react';
import { SearchBarProps } from './SearchBar.types';
import './SearchBar.css'; // Import styles

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, disabled }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSearch(query);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSearch} className={`search-bar ${focused ? 'focused' : ''}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={loading || disabled}
      />
      {loading ? <div className="spinner"></div> : <button type="submit" disabled={!query || disabled}>Search</button>}
    </form>
  );
};

export default SearchBar;
