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

const events = ["minted", "transfer", "burned"];
type Event = typeof events;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  if (req.method !== "POST") return res.status(404).json({ error: "request method not found" });
  const { address }: { events: Event; address: string } = req.body;

  if (!events.length || !address) return res.status(400).json({ error: "invalid arguements passed" });
  alchemy.ws.removeAllListeners(); // Remove any loose events to avoid duplicates.

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
