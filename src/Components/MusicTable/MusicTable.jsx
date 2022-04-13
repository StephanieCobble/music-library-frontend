import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteSong from "../DeleteSong/DeleteSong";
import EditSong from "../EditSong/EditSong";

//updated to reflect correct naming in user stories

const MusicTable = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
   
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  

  const DisplayMusicTable = () => {
    return (
      <table className="table">
        <thead className="font">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
            <th scope="col">❤️</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody className="font">
          {songs.map((music, id) => {
            return (
              <tr>
                <td>{music.id}</td>
                <td>{music.title}</td>
                <td>{music.artist}</td>
                <td>{music.album}</td>
                <td>{music.release_date}</td>
                <td>{music.genre}</td>
                <td>{music.like}</td>
                <td><DeleteSong music={music.id} /></td>
                <td><EditSong music={music.id}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
 
  return (
<div>
    <DisplayMusicTable/> 
</div>
  ) 
};

export default MusicTable;
