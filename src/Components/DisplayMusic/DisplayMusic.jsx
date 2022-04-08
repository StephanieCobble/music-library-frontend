import React, { useState, useEffect } from "react";
import App from "../../App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DisplayMusic = (props) => {
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
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
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
  //   return props.parentMusic.map((music, index) => (
  // //   props.parentMusic.map((music, index) => (
  // //     <div key={index}>
  // //       <App music={music} />
  // //     </div>
  // //   ));

  // <table class="table">
  //   <caption>Music Library</caption>
  //   <thead>
  //     <tr>
  //       <th scope="col">#</th>
  //       <th scope="col">Title</th>
  //       <th scope="col">Artist</th>
  //       <th scope="col">Album</th>
  //       <th scope="col">Release Date</th>
  //       <th scope="col">Genre</th>
  //       <th scope="col">Likes</th>
  //     </tr>
  //   </thead>
  //   <tbody>

  //     <div key={index}>
  //       <App music={music} />
  //     </div>
  //   </tbody>
  // </table>
  //   ))
  return (
<div>
    <DisplayMusicTable/>
</div>
  ) 
};

export default DisplayMusic;
