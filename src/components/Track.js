// Created by: Tyler Te

import React from 'react';

function Track({track, onAdd, onRemove, isRemovable}) {
  const trackStyle = {
    borderBottom: '1px solid #e1e1e1',
    paddingBottom: '10px',
    marginBottom: '10px'
};

  const trackButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#1DB954',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer'
};

  return (
    <div className="Track" style={trackStyle}>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      {isRemovable ? (<button onClick={()=>onRemove(track)}>-</button>
      ):(
        <button onClick={()=> onAdd(track)} style={trackButtonStyle}>+</button>
      )}
    </div>
  );
}

export default Track;