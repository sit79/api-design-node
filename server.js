const express = require("express")
const chalk = require("chalk")

const app = express()

const PORT = 3000
const jsonData = { count: 12, message: "hey" }

app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html")
  } catch (error) {
    res.status(500).send(error)
  }
})

app.get("/data", (req, res) => {
  res.json(jsonData)
})

app.listen(PORT, () => {
  console.log(chalk.green(`listening on http://localhost:${PORT}`))
})
