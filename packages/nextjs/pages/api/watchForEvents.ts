// import { onEventExecuted, onEventSubscribe } from "../_app";
// import { Alchemy, Network } from "alchemy-sdk";
// import { AlchemySubscription } from "alchemy-sdk";
// import type { NextApiRequest, NextApiResponse } from "next";
// const settings = {
//   apiKey: process.env.ALCHEMY,
//   network: Network.OPT_GOERLI,
// };
// const alchemy = new Alchemy(settings);
// type ResData = {
//   error?: string;
//   message?: string;
// };
// type Event = string;
// export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
//   if (req.method !== "POST") return res.status(404).json({ error: "request method not found" });
//   const { events, address, action }: { events: Event[]; address: string; action: "open" | "close" } = req.body;
//   alchemy.ws.removeAllListeners(); // Remove any loose events to avoid duplicates.
//   if (action == "close") return res.status(200).json({ message: "Successfully closed all event listeners." });
//   if (!events.length || !address) return res.status(400).json({ error: "invalid arguements passed" });
//   for (const event of events) {
//     if (!event) return res.status(400).json({ error: "invalid event parameters given" });
//     const onSubscribeEventFire = (tx: any, event: string) => {
//       console.log(`the event ${event} has been executed`);
//       if (!event) throw new Error("No event name found in event call.");
//       onEventExecuted(event);
//     };
//     try {
//       alchemy.ws.once(
//         {
//           method: AlchemySubscription.MINED_TRANSACTIONS,
//           addresses: [
//             {
//               to: address,
//             },
//           ],
//           includeRemoved: true,
//           hashesOnly: false,
//         },
//         tx => onSubscribeEventFire(tx, event),
//       );
//       onEventSubscribe(event);
//     } catch (err: any) {
//       console.log(err);
//       return res.status(500).json({ message: err.message });
//     }
//     console.log("sub", event);
//     console.log("address", address);
//   }
//   return res.status(200).json({ message: "Successfully edited an event listeners." });
// }
import { onEventExecuted, onEventSubscribe } from "../_app";
import { Alchemy, Network } from "alchemy-sdk";
import { AlchemySubscription } from "alchemy-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "ws";

// Import WebSocket module

const settings = {
  apiKey: process.env.ALCHEMY,
  network: Network.OPT_GOERLI,
};

const alchemy = new Alchemy(settings);

type ResData = {
  error?: string;
  message?: string;
};

type Event = string;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  if (req.method !== "POST") return res.status(404).json({ error: "request method not found" });
  const { events, address, action }: { events: Event[]; address: string; action: "open" | "close" } = req.body;

  alchemy.ws.removeAllListeners(); // Remove any loose events to avoid duplicates.
  if (action == "close") return res.status(200).json({ message: "Successfully closed all event listeners." });

  if (!events.length || !address) return res.status(400).json({ error: "invalid arguments passed" });

  // Create a WebSocket server
  const wss = new WebSocket.Server({ noServer: true });

  wss.on("connection", socket => {
    console.log("WebSocket connection established");

    for (const event of events) {
      if (!event) return res.status(400).json({ error: "invalid event parameters given" });

      const onSubscribeEventFire = (tx: any, event: string) => {
        console.log(`the event ${event} has been executed`);
        if (!event) throw new Error("No event name found in event call.");
        onEventExecuted(event);

        // Emit the event to the WebSocket client
        socket.send(`Event ${event} executed`);
      };

      try {
        alchemy.ws.once(
          {
            method: AlchemySubscription.MINED_TRANSACTIONS,
            addresses: [
              {
                to: address,
              },
            ],
            includeRemoved: true,
            hashesOnly: false,
          },
          tx => onSubscribeEventFire(tx, event),
        );

        onEventSubscribe(event);
      } catch (err: any) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }

      console.log("sub", event);
      console.log("address", address);
    }
  });

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), socket => {
    wss.emit("connection", socket, req);
  });

  return res.status(200).json({ message: "Successfully edited an event listeners." });
}
