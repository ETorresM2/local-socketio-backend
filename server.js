const knex = require("knex");
const express = require("express")
const http = require("http")
const port = 5000;

const config = require("./knexfile.js")
const socketIo = require("socket.io")
const app = express()
const server = http.createServer(app);

app.use(express.json())
const db = knex(config.development);
const io = socketIo(server)
module.exports = db;

app.get("/", (req, res) => {
    res.send(":D")
})

app.get("/names", (req, res) => {
    db("names")
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

app.post("/names", (req, res) => {
    let creds = req.body;
    db("names")
      .insert(creds)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => res.status(500).json(err))
      .then(()=> {
          io.emit("updateFlag", true)
      });
  });

io.on('connection', function(socket){
    console.log('a user connected');
  });

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
});