// Created by: Tyler Te


const clientId = '5a9bc2fe84e049f8b6a6b5b2f5f4f670';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
          return accessToken;
        }
    
        // Check for access token match in URL
        const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    
        if (tokenMatch && expiresInMatch) {
          accessToken = tokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
    
          // Clear the parameters from the URL, so the token doesn't get grabbed after it has expired
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
          window.location = accessUrl;
        }
      },
    
      search(term) {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        });
      },
      getUserId() {
        const accessToken = this.getAccessToken();
        return fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.id);
    },

    createPlaylist(userId, playlistName) {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playlistName
            })
        })
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.id);
    },

    addTracksToPlaylist(playlistId, trackUris) {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: trackUris
            })
        });
    }       

};

export default Spotify;