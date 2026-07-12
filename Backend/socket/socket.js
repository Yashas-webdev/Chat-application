import { Server } from "socket.io";
import http from "http";

let io;
const userSocketMap = {}; // Store online users

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

        const userId = socket.handshake.query.userId;

        if (userId) {
            userSocketMap[userId] = socket.id;
        }

        // Send updated online users
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);

            if (userId) {
                delete userSocketMap[userId];
            }

            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        });
    });

    return server;
};

export { initializeSocket, io, userSocketMap };