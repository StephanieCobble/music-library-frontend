import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    filterSongs();
  }, []);

  async function filterSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput == " ") {
      const filteredMusic = songs.filter((music) => {
        music.includes(searchInput);
      });
      setFilteredSongs(filteredMusic);
    } else {
      setFilteredSongs(songs);
    }
  };


  // const DisplayFilterResults = () => {
  return (
    <div>
      <form onSubmit={setFilteredSongs} type="search">
        <div className="input-group">
          <div className="form-outline">
            <button
              onSubmit={setFilteredSongs}
              type="submit"
              className="input-group-text"
            >
              Search
            </button>
          </div>
          <input
            className="form-control"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <table>
          <thead>
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
      </form>
    </div>
  );
};
// return (
// <div>
//   <DisplayFilterResults/>
// </div>
// );
// };

export default SearchBar;
