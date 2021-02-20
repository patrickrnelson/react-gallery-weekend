import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
  imageArray, 
  updateLikeCount, 
  handleImageClick, 
  showDescription, 
  thisImageDesc}) {
  
  return (
    <GalleryItem 
      imageArray={imageArray}
      updateLikeCount={updateLikeCount}
      handleImageClick={handleImageClick}
      showDescription={showDescription}
      thisImageDesc={thisImageDesc}
    />
  )
}

export default GalleryList;