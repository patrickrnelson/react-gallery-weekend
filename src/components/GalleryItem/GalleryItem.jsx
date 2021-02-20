import React, { useEffect, useState } from 'react';
import './GalleryItem.css';

function GalleryItem({
  imageArray, 
  updateLikeCount, 
  handleImageClick, 
  showDescription, 
  thisImageDesc}) {
  
  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => // {/* See App.js for handleImageClick info */}
        (<div className="imageContainer" key={image.id}>
          {/* IF thisImageDesc == the image desc of the pic being clicked
          AND IF showDescription is true
          then show the description of the picture.
          This is so all desc's don't show on a click*/}
          { image.description == thisImageDesc 
                ? showDescription 
                ? <div onClick={() => handleImageClick(image.description)} className="descDiv"><h5 className="imageDescription">{image.description}</h5></div> 
                : <img onClick={() => handleImageClick(image.description)} className="image"  src={image.path} alt={image.description} />
                : <img onClick={() => handleImageClick(image.description)} className="image"  src={image.path} alt={image.description} />}
          <button onClick={() => updateLikeCount(image.id)}>LIKE</button>
          <p className="likes">Likes: {image.likes}</p>
        </div>)
        )}
    </>
  )
}

export default GalleryItem;