import express from 'express'
import { Server } from "socket.io";
import { createServer } from "node:http"
import path from "path";


const app = express()
const server = createServer(app)
const io = new Server(server)

//serve the static index.html file
const __dirname = path.resolve();
const frontendPath = path.join(__dirname, '..','frontend')

app.use(express.static(frontendPath));


io.on("connection", socket => {
    console.log("User connected ", socket.id)
    
    socket.on('chat message', (msg) => {
        // console.log("message: ", msg)
        io.emit('chat message', msg) //send this message to all the users
    })
    socket.on("disconnect", () => {
        console.log("user disconnected: ", socket.id)
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'))
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  
})