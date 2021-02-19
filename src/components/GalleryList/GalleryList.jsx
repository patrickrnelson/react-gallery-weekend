import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({imageArray, updateLikeCount}) {
  
  return (
    <GalleryItem 
      imageArray={imageArray}
      updateLikeCount={updateLikeCount}
    />
  )
}

export default GalleryList;