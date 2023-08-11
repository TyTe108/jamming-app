# Jamming: Spotify Playlist Creator

**Created by**: Tyler Te

## Purpose

Jamming is a web application designed to enhance the music experience for Spotify users. It allows users to search for their favorite songs, albums, or artists, create custom playlists, and save them directly to their Spotify account.


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The primary programming language for the project.
- **Spotify API**: Used to search for songs and manage playlists.

## Features

1. **Search Bar**: Allows users to search for songs, albums, or artists on Spotify.
2. **Search Results**: Displays the results of the search query.
3. **Playlist**: Users can create a custom playlist by adding tracks from the search results. They can also remove tracks from the playlist, change the playlist name, and save the playlist to their Spotify account.
4. **Track**: Represents an individual song. Users can add or remove tracks from the playlist.

## Components

- **App**: The main component that renders the SearchBar, SearchResults, and Playlist components.
- **SearchBar**: Allows users to input a search term and initiate a search on Spotify.
- **SearchResults**: Displays the tracks returned from the Spotify search.
- **Playlist**: Displays the tracks added by the user, allows for renaming the playlist, and provides an option to save the playlist to Spotify.
- **Track**: Represents an individual track, showing the track name, artist, and album. Also provides options to add or remove the track from the playlist.
- **Tracklist**: A list of Track components.
- **Spotify**: Contains methods for interacting with the Spotify API, such as searching for tracks, getting user details, creating a playlist, and adding tracks to a playlist.

## Future Work

- **User Authentication**: Implement a more secure user authentication system.
- **Playlist Sharing**: Allow users to share their playlists with friends or on social media.
- **Enhanced UI/UX**: Improve the user interface and experience for a more intuitive interaction.

## Setup

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and navigate to `http://localhost:3000/`.
5. You'll be prompted to log in to your Spotify account. Once logged in, you can start using the app.
