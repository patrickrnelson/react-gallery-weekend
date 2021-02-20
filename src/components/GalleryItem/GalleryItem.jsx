import React, { useEffect, useState } from 'react';

function GalleryItem({imageArray, updateLikeCount}) {

  const [descriptionBox, setDescriptionBox] = useState('')
  
  // const showDescription = (desc) => {
  //   console.log('description', desc);
  //   setDescriptionBox(<div className="imageOverlay" ><p>{desc}</p></div>);
  
  // }

  const [showDescription, setShowDescription] = useState(false)

  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => 
        (<div className="imageContainer" key={image.id}>
          {/* {descriptionBox} */}
          <img onClick={() => setShowDescription(prevCheck => !prevCheck)} src={image.path} alt={image.description} width="65%"/>
          <h4>{showDescription ? image.description : ""}</h4>
          <p>Likes: {image.likes}</p>
          <button onClick={() => updateLikeCount(image.id)}>LIKE</button>
        </div>)
        )}
    </>
  )
}

export default GalleryItem;