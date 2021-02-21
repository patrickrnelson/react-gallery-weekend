import './GalleryForm.css';

function GalleryForm({
  newImageUrl, 
  setNewImageUrl, 
  newImageDesc, 
  setNewImageDesc, 
  handleSubmit}) {

  

  return (
    <>
      <h3 id="addImageTitle">Add an Image</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} placeholder="Image URL"></input>
        <input type="text" value={newImageDesc} onChange={(e) => setNewImageDesc(e.target.value)} placeholder="Image Description"></input>
        <input type="submit" value="Add Image"></input>
      </form>
    </>  
  )
}

export default GalleryForm;