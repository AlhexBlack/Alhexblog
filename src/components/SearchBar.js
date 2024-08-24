import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import searchBlogs from '../utils/searchHandler';

function SearchBar({ onSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const result = searchBlogs(query);
        onSearchResults(result);
    };

    return (
        <form onSubmit={handleSearch} className='search-bar'>
            <input
            type='text'
            placeholder='Search blogs...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='search-input'
            />
            <button type='submit' className='search-button'>Search</button>    
        </form>  
    );
}

export default SearchBar