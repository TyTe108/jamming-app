// Created by: Tyler Te

import React from 'react';
import Tracklist from './Tracklist';
//import { useState } from 'react';

function Playlist({playlistName, tracks, onRemove, onNameChange, onSave}){
    const containerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    };

    return(
        <div className='Playlist' style={containerStyle}>
            <input value={playlistName} onChange ={e => onNameChange(e.target.value)}></input>
            <Tracklist tracks = {tracks} onRemove={onRemove}></Tracklist>
            <button className='Playlist-save' onClick = {onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;