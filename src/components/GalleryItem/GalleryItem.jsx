import React, { useEffect, useState } from 'react';

function GalleryItem({imageArray, updateLikeCount}) {

  const [descriptionBox, setDescriptionBox] = useState('')
  
  // const showDescription = (desc) => {
  //   console.log('description', desc);
  //   setDescriptionBox(<div className="imageOverlay" ><p>{desc}</p></div>);
  
  // }

  const [showDescription, setShowDescription] = useState(false)
  const [thisImageDesc, setThisImageDesc] = useState('')

  {/* onClick will.. 
      setImageDesc to the image desc that's being clicked 
      & setShowDescription to the opposite of what it is*/}
  function handleOnClick(desc) {
    setThisImageDesc(desc);
    setShowDescription(prevCheck => !prevCheck);
  }

  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => 
        (<div className="imageContainer" key={image.id}>
          <img onClick={() => handleOnClick(image.description)} src={image.path} alt={image.description} width="65%"/>
          
          {/* IF thisImageDesc == the image desc of the pic being clicked
          AND IF showDescription is true
          then show the description of the picture.
          This is so all desc's don't show on a click*/}
          <h4>{ image.description == thisImageDesc 
                ? showDescription ? image.description : ""
                : ""}</h4>
          <p>Likes: {image.likes}</p>
          <button onClick={() => updateLikeCount(image.id)}>LIKE</button>
        </div>)
        )}
    </>
  )
}

export default GalleryItem;