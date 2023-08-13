import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import cors from 'cors';
import express from 'express';
import { ethers } from "ethers";
import { Server } from 'socket.io';
import vestingAbi from './abi/vestingAbi.js';
import { Alchemy, Network, AlchemySubscription } from 'alchemy-sdk';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 5002;
const pk = process.env.DEPLOYER_PRIVATE_KEY;
const VestingAddress = "0x616334733c4543e714DcEf015e6300f254A6b1a1"
const rpcUrl = process.env.OPGOERLI_RPC_URL || "";
app.use(cors()); // Enable CORS for all routes

const settings = {
  apiKey: process.env.ALCHEMY,
  network: Network.OPT_GOERLI,
};
const alchemy = new Alchemy(settings);
const Events = [
  {
    name: "Voted",
    address: "0x2C597aBB1F05Ff1475808f4bec993be9AcdEe99D", // Congress Contract
  },
  {
    name: "UserEndTimeReduced",
    address: VestingAddress, // Vesting Contract
  }
]

io.on("connection", (socket) => {
  console.log("A user connected");
  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const onEventFire = async (tx, event) => {
  console.log(`the event ${event} has been executed`);
  if (event == "Voted") {
    const vesteeAddress = tx.transaction.from;
    if (!pk || !rpcUrl) return console.log("No private key or RPC url");;
    if (!vesteeAddress) return console.log(tx.transaction);

    try {
      const provider = new ethers.JsonRpcProvider(rpcUrl);
      const signer = new ethers.Wallet(pk, provider);
      const vesting = new ethers.Contract(VestingAddress, vestingAbi, signer);
      console.log("Reducing the cliff...");

      const res = await vesting.reduceVesteeCliffTime(vesteeAddress);

      console.log(res);

      console.log("cliff reduced");
    } catch (err) {
      console.error(err);
      return;
    }

  } else if (event == "UserEndTimeReduced") {
    console.log("sending the recude event to frontend");
    io.emit(event, tx.transaction.input);
  }
};

server.listen(PORT, () => {
  alchemy.ws.removeAllListeners();
  console.log(`Server listening on port ${PORT}`);
  try {
    for (const event of Events) {
      alchemy.ws.on(
        {
          method: AlchemySubscription.MINED_TRANSACTIONS,
          addresses: [
            {
              to: event.address,
            },
          ],
          includeRemoved: false,
          hashesOnly: false,
        },
        (tx) => onEventFire(tx, event.name)
      );
    }
  } catch (err) {
    console.log(err);
  }
});