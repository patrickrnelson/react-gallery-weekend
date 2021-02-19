function GalleryList({imageArray, getImageData}) {
  console.log('imageArray', imageArray)
  
  const likeHandler = (likeAmt) => {
    console.log('likeAmt', likeAmt);
    likeAmt++;
    getImageData();
  }
  
  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => 
        (<div id="imageContainer" key={image.id}>
          <img src={image.path} alt={image.description} width="400px"/>
          <p>Likes: {image.likes}</p>
          <button onClick={() => likeHandler(image.likes)}>LIKE</button>
        </div>)
        )}
    </>
  )
}

export default GalleryList;