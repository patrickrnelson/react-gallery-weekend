function GalleryItem({imageArray, updateLikeCount}) {

  return (
    <>
    <h3>Gallery List</h3>
      {imageArray.map(image => 
        (<div class="imageContainer" key={image.id}>
          <img src={image.path} alt={image.description} width="400px"/>
          <p>Likes: {image.likes}</p>
          <button onClick={() => updateLikeCount(image.id)}>LIKE</button>
        </div>)
        )}
    </>
  )
}

export default GalleryItem;