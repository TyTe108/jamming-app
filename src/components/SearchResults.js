// Created by: Tyler Te

import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({searchResults, onAdd}){
    const containerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    };

    return (
        <div className='Track' style={containerStyle}>
            <h2>Track Name</h2>
            <Tracklist tracks={searchResults} onAdd={onAdd}></Tracklist>
        </div>
    );
}

export default SearchResults;