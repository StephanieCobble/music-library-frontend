import React, { useState, useEffect } from 'react';

const AddSong = (props) => {

    const [songTitle, setSongTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            songTitle: songTitle,
            artist: artist,
            albumName: albumName,
            genre: genre,
            releaseDate: releaseDate
        };
        console.log(newSong);
        props.addNewSongProperty(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song Title</label>
            <input type='string' value={songTitle} onChange={(event) => setSongTitle(event.target.value)} />
            <label>Artist</label>
            <input type='string' value={artist} onChange={(event) => setArtist(event.target.value)} />
            <label>Album Name</label>
            <input type='string' value={albumName} onChange={(event) => setAlbumName(event.target.value)} />
            <label>Genre</label>
            <input type='string' value={genre} onChange={(event) => setGenre(event.target.value)} />
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
            <button type='submit'>Add Song</button>
        </form>

     );
}
export default AddSong;