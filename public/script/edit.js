document
  .querySelector(".edit-save-btn")
  .addEventListener("click", handleEditSubmit);

function handleEditSubmit(e) {
  e.preventDefault();
  const blogId = e.target.id;

  console.log(blogId);
  // const response =  await fetch(`/view/edit/${blogId}`,{method:"PUT"})
}
