import express from "express"
import path from "path"
const app = express()

app.use(express.static('public'));

app.get("/", (req, res) => {
  const file = path.join(process.cwd(), "public", "index.html")
  res.sendFile(file)
})


export default app;
