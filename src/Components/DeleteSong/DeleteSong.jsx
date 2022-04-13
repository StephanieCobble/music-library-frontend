
import axios from "axios";

const DeleteSong = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    let number = props.music;
    deleteSong(number);
  }

  // async function getAllSongs() {
  //     let response = await axios.get("http://127.0.0.1:8000/api/music/");
  //     setSongs(response.data);
  //   }

  async function deleteSong(number) {
    await axios.delete(`http://127.0.0.1:8000/api/music/${number}/`);
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="add-song-button" color="white" type="submit">Delete</button>
    </form>
  );
};

export default DeleteSong;


