import { useState } from "react";

function GalleryForm() {

  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageDesc, setNewImageDesc] = useState('');


  return (
    <>
      <h3>Add an Image</h3>
      <form>
        <input type="text" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} placeholder="Image URL"></input>
        <input type="text" value={newImageDesc} onChange={(e) => setNewImageDesc(e.target.value)} placeholder="Image Description"></input>
        <input type="submit" value="Add Image"></input>
      </form>
    </>  
  )
}

export default GalleryForm;