import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  const [imageArray, setImageArray] = useState([]);
  // For the GalleryItem component for image clicks
  const [showDescription, setShowDescription] = useState(false)
  const [thisImageDesc, setThisImageDesc] = useState('')

  // on load
  useEffect(() => {
    getImages();
  }, []);
  
  // PUT
  const updateLikeCount = (imageId) => {
    console.log('imageId', imageId);
    axios.put(`/gallery/like/${imageId}`)
      .then((response) => {
        console.log('PUT Success', response);
        getImages();
      }) // end PUT
  } // end updateLikeCount

  // GET
  const getImages = () => {
    axios.get('/gallery')
      .then((response) => {
        // console.log('response', response);
        setImageArray(response.data)
      }).catch((err) => {
        console.log('Error in GET', err);
      })
  }; // end getImageData  
  
  
  /* 
  handleImageClick will.. 
  setImageDesc to the image desc that's being clicked 
  & setShowDescription to the opposite of what it is
  */ // Show descriptions on image click
  function handleImageClick(desc) {
    setThisImageDesc(desc);
    setShowDescription(prevCheck => !prevCheck);
  } // end handleImageClick

  // DOM
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Patrick's Gallery</p>
        <GalleryList 
          imageArray={imageArray}
          getImageData={getImages}
          updateLikeCount={updateLikeCount}
          handleImageClick={handleImageClick}
          showDescription={showDescription}
          thisImageDesc={thisImageDesc}
          
        />

    </div>
  );
} // end App

export default App;
