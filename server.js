// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require("express")
const fs = require("fs")
const app = express()

const PORT = 3000
const jsonData = { count: 12, message: "hey" }

app.get("/", (req, res) => {
  console.log("success")
})

app.listen(PORT)
