// Created by: Tyler Te

import React from 'react'

function SearchBar({ onSearch }) {
    const [term, setTerm] = React.useState('');
  
    const handleSearch = (event) => {
      event.preventDefault();
      onSearch(term);
    };

    const searchBarStyle = {
        marginBottom: '20px'
    };
    
    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        width: '70%',
        marginRight: '10px'
    };
    
    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#1DB954', // Spotify green
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer'
    };
  
    return (
      <div className="SearchBar" style={searchBarStyle}>
        <input 
          placeholder='Enter A Song, Album, or Artist'
          value={term}
          onChange={e => setTerm(e.target.value)}
          style={inputStyle}
        />
        <button className='SearchButton' onClick={handleSearch} style={buttonStyle}> SEARCH</button>
      </div>
    );
  }

export default SearchBar;