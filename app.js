const express = require("express")
const app = express()
const PORT = 3000;
const route = require("./routes/usersRoutes.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.redirect("/usuarios"))
app.use('/usuarios', route)
app.use((req, res) => res.status(404).json({mensaje: "404 - Page not found"}))

app.listen(PORT, () => console.log(`express está escuchando en http://localhost:${PORT}`))
