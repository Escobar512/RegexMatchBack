require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

      

app.use(cors())
app.use(express.json())
app.use(express.static("Posters_storage"))
app.use(express.static("Profile_storage"))
app.use(express.static("cast_storage"))

const port = 8080

/**
 * Aqui estan las rutas
 */
 app.use("/api",require("./endpoints"))


 
io.on('connection', (socket) => {

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
});

server.listen(port, () => {
    console.log('listening on *:8080');
});




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

dbConnect()