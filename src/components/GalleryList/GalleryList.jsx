import GalleryItem from '../GalleryList/GalleryList'

function GalleryList({imageArray, updateLikeCount}) {
  
  return (
    <GalleryItem 
      imageArray={imageArray}
      updateLikeCount={updateLikeCount}
    />
  )
}

export default GalleryList;