const [...allBlogs] = document.querySelectorAll(".blog-card");
allBlogs?.forEach((element) => {
  element.querySelector(".delete-btn").addEventListener("click", async (e) => {
    const deleteId = e.target.id;
    const response = await fetch(`/view/${deleteId}`, { method: "DELETE" });
    if (response.ok) {
      const blogElement = document.getElementById(`blog-${deleteId}`);
      blogElement.remove();
      alert("Blog deleted successfully");
    } else {
      const data = await response.json();
      alert(`Error: ${data.message}`);
    }
  });

  element.querySelector(".edit-btn").addEventListener("click", async (e) => {
    const blogId = e.target.id;

    window.location.href = `/view/edit/${blogId}`;
  });
});
