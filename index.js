import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.listen(port, (req, res) => {
  console.log("Server started at port", port);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", (req, res) => {
  const { title, description } = req.body;
  const newBlog = {
    id: blogs.length + 1,
    title: title,
    description: description,
  };
  blogs.push(newBlog);
  res.status(201);
  res.redirect("/view");
});

app.get("/view", (req, res) => {
  res.render("view.ejs", { allBlogs: blogs });
});

app.get("/view/edit/:id", (req, res) => {
  const editedBlog = blogs.find((b) => b.id === parseInt(req.params.id));

  if (!editedBlog) return res.status(404).json({ message: "Blog not found" });
  console.log(editedBlog);
  res.render("edit.ejs", { blog: editedBlog });
});

app.put("/view/edit/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  blog.title = req.body.title;
  blog.description = req.body.description;
  res.json({ message: "blog updated", blog });
});

app.delete("/view/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }
  blogs.splice(index, 1);
  res.json({ message: "post deleted successfully" });
});
