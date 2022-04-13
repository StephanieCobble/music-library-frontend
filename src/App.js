import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';
import AddSong from './Components/AddSong/AddSong'; 
import DeleteSong from './Components/DeleteSong/DeleteSong';

function App() {

  return (
    <div className='background-image' >
    <div className='content'> 
      
      <NavigationBar/>
      <AddSong />
      <MusicTable />
     
      <SearchBar />
      </div>
    </div>
    
  );
}

export default App;
