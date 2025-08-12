import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: ["http://localhost:5173","https://chat-davys-projects-47bf6d41.vercel.app"],
        methods: ["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log("A user is connected");
    socket.on("chat message",(msg)=>{
        console.log('message: ' + msg );
        io.emit("chat message", msg);
    })
});
const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})