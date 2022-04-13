import React, { useState, useEffect } from "react";
import App from "../../App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../NavigationBar/NavigationBar";
//updated to reflect correct naming in user stories

const MusicTable = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    // createSong();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  // async function createSong(newSong) {
  //   // let newSong = {
  //     // "title": "...but home is nowhere",
  //     // "artist": "AFI",
  //     // "album": "Sing the Sorrow",
  //     // "release_date": "2003-03-11",
  //     // "genre": "post-hardcore, emo"
  //   // }
  //   let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong);
  //   if(response.status === 201){
  //     await getAllSongs();
  //   }
  //   setSongs(response.data);
  // }

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
          </tr>
        </thead>
        <tbody className="font">
          {songs.map((music, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{music.title}</td>
                <td>{music.artist}</td>
                <td>{music.album}</td>
                <td>{music.release_date}</td>
                <td>{music.genre}</td>
                <td>{music.like}</td>
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
