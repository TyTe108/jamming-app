// Created by: Tyler Te

import React from 'react';
import Track from './Track'

function Tracklist({tracks, onAdd, onRemove}){

    if (!tracks) {
        return <div>Loading...</div>;  // Or some other placeholder content
      }

    return(
        <div className='Tracklist'>
            {tracks.map(track => <Track key ={track.id} track={track} onAdd={onAdd}
            onRemove={onRemove} isRemovable={!!onRemove}></Track>)}
        </div>
    );
}

export default Tracklist;