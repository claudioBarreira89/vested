import { onEventExecuted } from "../_app";
import { Alchemy, Network } from "alchemy-sdk";
import { AlchemySubscription } from "alchemy-sdk";
import type { NextApiRequest, NextApiResponse } from "next";

const settings = {
  apiKey: process.env.ALCHEMY,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

type ResData = {
  error?: string;
  message?: string;
};

type Event = Array<string>;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  if (req.method !== "POST") return res.status(404).json({ error: "request method not found" });
  const { events, address, action }: { events: Event; address: string; action: "open" | "close" } = req.body;

  alchemy.ws.removeAllListeners(); // Remove any loose events to avoid duplicates.
  if (action == "close") return res.status(200).json({ message: "Successfully closed all event listeners." });

  if (!events.length || !address) return res.status(400).json({ error: "invalid arguements passed" });

  for (const event of events) {
    if (!event) return res.status(400).json({ error: "invalid event parameters given" });

    const onSubscribeEventFire = (tx: any, event: string) => {
      if (!event) throw new Error("No event name found in event call.");
      onEventExecuted(event);
    };

    console.log("sub", event);
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
  }
  return res.status(200).json({ message: "Successfully edited an event listeners." });
}
