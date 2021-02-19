import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    // get user names on load
    getImageData();
  }, []);
  
  const getImageData = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('response', response);
        setImageArray(response.data)
      }).catch((err) => {
        console.log('Error in GET', err);
      })
  }; // end getImageData  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Patrick's Gallery</p>
        <GalleryList 
          imageArray={imageArray}
        />

    </div>
  );
} // end App

export default App;
