import { Server } from "socket.io";
import http from "http";


let io;

const initializeSocket = (app) => {
  const server = http.createServer(app);

  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  const userId = socket.handshake.query.userId
  if(userId !== undefined){
    userSocketMap[userId] = socket.id;
  }
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    delete userSocketMap[userId];
    io.emit('getOnlineUser',Object.keys(userSocketMap));
  });
});
  return server;
};

export { initializeSocket, io };