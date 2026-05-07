import express from "express"
const app = express()
const port = 7777

app.use(express.static('public'));

app.get("/", (req, res) => {
  const file = path.join(process.cwd(), "public", "index.html")
  res.sendFile(file)
})


export default app;
