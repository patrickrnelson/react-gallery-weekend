function GalleryForm() {

  return (
    <>
      <h3>Add an Image</h3>
      <form>
        <input type="text" placeholder="Image URL"></input>
        <input type="text" placeholder="Image Description"></input>
        <input type="submit" value="Add Image"></input>
      </form>
    </>  
  )
}

export default GalleryForm;