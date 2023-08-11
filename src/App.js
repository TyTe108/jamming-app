// Created by: Tyler Te
//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import React from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './components/Spotify';


function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (!playlistTracks.some(existingTrack => existingTrack.id === track.id)){
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(existingTrack => existingTrack.id != track.id));
  };

  const updatePlaylistName = (newName)=>{
    setPlaylistName(newName);
  };

  const savePlaylist = () =>{
    const trackURIs = playlistTracks.map(track => track.uri);
    if (!playlistName || !trackURIs.length) {
        return;
    }

    Spotify.getUserId()
    .then(userId => Spotify.createPlaylist(userId, playlistName))
    .then(playlistId => Spotify.addTracksToPlaylist(playlistId, trackURIs))
    .then(() => {
        alert('Playlist saved!');
        setPlaylistName('My Playlist');
        setPlaylistTracks([]);
    });
  };

  const searchSpotify = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  };

  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center'
};


  return (
    <div className="App" style={appStyle}>
      <SearchBar onSearch={searchSpotify}></SearchBar>
      <div className='App-playlist'>
        <SearchResults searchResults={searchResults} onAdd={addTrack}></SearchResults>
        <Playlist playlistName ={playlistName} tracks ={playlistTracks} onRemove={removeTrack} onNameChange ={updatePlaylistName} onSave = {savePlaylist}></Playlist>
      </div>
    </div>
  );
}

export default App;
