import React, { useState } from 'react';
import { SearchBarProps } from './SearchBar.types';
import './SearchBar.css'; // Import your styles

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, disabled }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      setLoading(true);
      await onSearch(query);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        disabled={loading || disabled}
      />
      <button type="submit" disabled={!query || disabled || loading}>Search</button>
      {loading && <div className="spinner"></div>}
    </form>
  );
};

export default SearchBar;
