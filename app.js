const express = require('express')
const app = express()
const cors = require("cors")
const PORT = 3000;
const router = require('./routes/rickandmortyRoutes.js')

app.use(cors())
app.use("/characters", router)

// https://rickandmortyapi.com/api/character
// https://rickandmortyapi.com/api/character/?name=rick

app.listen(3000, () => {
  console.log(`Express está escuchando en http://localhost:${PORT}`)
})