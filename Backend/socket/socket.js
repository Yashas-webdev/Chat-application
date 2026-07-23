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

    export const getReceiverSocketId = (receiverId) => {
        return userSocketMap[receiverId]
    }

    const userSocketMap = {}; // Store online users


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