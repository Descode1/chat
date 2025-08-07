import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log("A user is connected");
});
app.get("/",(req,res)=>{
    res.send("Hello World")
})
server.listen("3000",()=>{
    console.log("listening on port 3000")
})