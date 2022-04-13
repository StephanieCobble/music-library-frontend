import React, { useState } from "react";
import axios from "axios";
import MusicTable from "../MusicTable/MusicTable";

const AddSong = (props) => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [songs, setSongs] = useState([]);


  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: songTitle,
      artist: artist,
      album: albumName,
      genre: genre,
      release_date: releaseDate,
    };
   setSongTitle("")
   setArtist("")
   setAlbumName("")
   setGenre("")
   setReleaseDate("")
   AddNewSong(newSong)
  }

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  async function AddNewSong(newSong) {
        let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong);
        if(response.status === 201) {
            await getAllSongs();
            window.location.reload()
        }}


  return (
    <form onSubmit={handleSubmit} className='app'>
      <label className="add-song-font">Song Title</label>
      <input
      placeholder="Title"
        type="string"
        value={songTitle}
        onChange={(event) => setSongTitle(event.target.value)}
      />
      <label className="add-song-font" >Artist</label>
      <input
        placeholder="Artist"
        type="string"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <label className="add-song-font">Album Name</label>
      <input
        placeholder="Album"
        type="string"
        value={albumName}
        onChange={(event) => setAlbumName(event.target.value)}
      />
      <label className="add-song-font">Genre</label>
      <input
      placeholder="Genre"
        type="string"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />
      <label className="add-song-font">Release Date</label>
      <input
        type="date"
        value={releaseDate}
        onChange={(event) => setReleaseDate(event.target.value)}
      />
      <button className="add-song-button" color="white"  type="submit">Add Song</button>
    </form>
  );
};
export default AddSong;
