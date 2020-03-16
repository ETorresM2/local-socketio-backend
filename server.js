const knex = require("knex");
const express = require("express")
const port = 5000;

const config = require("./knexfile.js")

const server = express();

server.use(express.json())
const db = knex(config.development);
module.exports = db;

server.get("/", (req, res) => {
    res.send(":D")
})

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
});