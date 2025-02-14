const { WebSocketServer } = require("ws");

const PORT = process.env.PORT || 8080; 
const wss = new WebSocketServer({ port: PORT });

console.log("✅ WebSocket Server running on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("🔗 New client connected");

  ws.on("message", (message) => {
    console.log(`📩 Received: ${message}`);

    ws.send(message);
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
});
