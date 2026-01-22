const express = require('express')
const route = express.Router()
const fetchCharacters = require("../utils/fetchCharacters.js")

route.get('/', async (req, res) => {
  const data = await fetchCharacters()
  console.log(data)
  res.json(data)
})

route.get("/:name", async (req, res) => {
  const name = req.params.name
  const data = await fetchCharacters(name)
  res.send(data)
})

module.exports = route