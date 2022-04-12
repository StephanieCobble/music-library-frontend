import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';
import AddSong from './Components/AddSong/AddSong'; 

function App() {

  return (
    <div >
      <NavigationBar/>
      <AddSong />
      <MusicTable />
      <SearchBar />
    </div>
  );
}

export default App;
