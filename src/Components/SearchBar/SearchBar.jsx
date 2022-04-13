import MusicTable from "../MusicTable/MusicTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './../../App.css'

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    // createSong();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }
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

    <tbody className="font" >
      <input
        placeholder="Enter Search"
        className="search-bar"
        onChange={(event) => setQuery(event.target.value)}
      />
      {songs.filter((music) => {
        if (query === "") {
          return music;
        } else if (music.artist.toLowerCase().includes(query.toLowerCase())) {
          return music;
        }
        else if (music.title.toLowerCase().includes(query.toLowerCase())) {
          return music;
        }
        else if (music.album.toLowerCase().includes(query.toLowerCase())) {
          return music;
        }
        else if (music.release_date.toLowerCase().includes(query.toLowerCase())) {
          return music;
        }
        else if (music.genre.toLowerCase().includes(query.toLowerCase())) {
          return music;
        }
      }).map((music, index) => (
        <tr key={index}>
          <td>{music.title}</td>
          <td>{music.artist}</td>
          <td>{music.album}</td>
          <td>{music.release_date}</td>
          <td>{music.genre}</td>
        </tr>
      ))}
    </tbody>

</table>


  );
}

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   MusicTable.filter((music) => {
//     if (query === "") {
//       return music;
//     } else if (music.title.toLowerCase().includes(query.toLowerCase())) {
//       return music;
//     }
//   });
//   MusicTable.map((music, index) => (
//     <div className="box" key={index}>
//       <p>{music.title}</p>
//       <p>{music.artist}</p>
//     </div>
//   ));

//   return (
//     <div>
//       <input
//         placeholder="Search here"
//         onChange={(event) => setQuery(event.target.value)}
//       />
//     </div>
//   );
// };
// export default SearchBar;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SearchBar = (props) => {
//   const [songs, setSongs] = useState([]);
//   const [filteredSongs, setFilteredSongs] = useState([]);
//   const [searchInput, setSearchInput] = useState([]);

//   useEffect(() => {
//     filterSongs();
//   }, []);

//   async function filterSongs() {
//     let response = await axios.get("http://127.0.0.1:8000/api/music/");
//     setSongs(response.data);
//   }

//   const handleChange = (e) => {
//     e.preventDefault();
//     // setSearchInput(event.target.value);

//     if (searchInput.length > 0) {
//       const filteredMusic = songs.filter((music) => {
//         music.includes(searchInput);
//       });
//       setFilteredSongs(filteredMusic);
//     } else {
//       setFilteredSongs(songs);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={setFilteredSongs} type="search">
//         <div className="input-group">
//           <div className="form-outline">
//             <button
//               onSubmit={setFilteredSongs}
//               type="submit"
//               className="input-group-text"
//             >
//               Search
//             </button>
//           </div>
//           <input
//             className="form-control"

//             onChange={(e) => handleChange(e.target.value)}
//           />
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Title</th>
//               <th scope="col">Artist</th>
//               <th scope="col">Album</th>
//               <th scope="col">Release Date</th>
//               <th scope="col">Genre</th>
//               <th scope="col">❤️</th>
//             </tr>
//           </thead>
//           <tbody>
//             {songs.map((music, index) => {
//               return (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{music.title}</td>
//                   <td>{music.artist}</td>
//                   <td>{music.album}</td>
//                   <td>{music.release_date}</td>
//                   <td>{music.genre}</td>
//                   <td>{music.like}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
