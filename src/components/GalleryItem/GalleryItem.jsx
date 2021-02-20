import React, { useEffect, useState } from 'react';

function GalleryItem({imageArray, updateLikeCount}) {

  const [descriptionBox, setDescriptionBox] = useState('')
  
  const showDescription = (desc) => {
    console.log('description', desc);
    setDescriptionBox(<div className="imageOverlay" ><p>{desc}</p></div>);
  
  }

  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => 
        (<div className="imageContainer" key={image.id}>
          {/* {descriptionBox} */}
          <img onClick={() => showDescription(image.description)} src={image.path} alt={image.description} width="90%"/>
          <p>Likes: {image.likes}</p>
          <button onClick={() => updateLikeCount(image.id)}>LIKE</button>
        </div>)
        )}
    </>
  )
}

export default GalleryItem;