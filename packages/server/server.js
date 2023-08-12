const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { Alchemy, Network } = require("alchemy-sdk");
const { AlchemySubscription } = require("alchemy-sdk");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const settings = {
  apiKey: process.env.ALCHEMY,
  network: Network.OPT_GOERLI,
};

const alchemy = new Alchemy(settings);

app.use(cors()); // Enable CORS for all routes

io.on("connection", (socket) => {
  console.log("A user connected");

  io.emit("starting", "message");

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const onSubscribeEventFire = (tx, event) => {
  console.log(`the event ${event} has been executed`);
  console.log(tx);
  io.emit("event", tx);
};

const PORT = process.env.PORT || 5002;
server.listen(PORT, () => {
  alchemy.ws.removeAllListeners();
  console.log(`Server listening on port ${PORT}`);

  try {
    alchemy.ws.once(
      {
        method: AlchemySubscription.MINED_TRANSACTIONS,
        addresses: [
          {
            to: "0xaA26eAfAbE1Ce1fB2Fa205e48B20C56a88e56b86",
          },
        ],
        includeRemoved: true,
        hashesOnly: false,
      },
      (tx) => onSubscribeEventFire(tx, "Voted")
    );
  } catch (err) {
    console.log(err);
  }
});