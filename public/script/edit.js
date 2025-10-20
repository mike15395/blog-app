document
  .querySelector(".edit-save-btn")
  .addEventListener("click", handleEditSubmit);

async function handleEditSubmit(e) {
  e.preventDefault();
  const blogId = e.target.id;
  const title = document.getElementById("edit-input-title").value;
  const description = document.getElementById("edit-input-description").value;

  const response = await fetch(`/view/edit/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (response.ok) {
    alert("Blog Edited Successfully");
    window.location.href = "/view";
    return;
  } else {
    alert("Something Went Wrong!");
    return;
  }
}
