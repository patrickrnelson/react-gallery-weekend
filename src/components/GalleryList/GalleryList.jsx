function GalleryList({imageArray}) {
  console.log('imageArray', imageArray)
  return (
    <>
    <h3>Gallery List</h3>
    <div id="imageContainer">
      {imageArray.map(image => 
        (<img src={image.path} alt={image.description} width="200px"/>)
        )}
    </div>
    </>
  )
}

export default GalleryList;