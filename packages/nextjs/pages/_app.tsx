import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import "@zoralabs/zord/index.css";
import NextNProgress from "nextjs-progressbar";
import io, { Socket } from "socket.io-client";
import { SWRConfig } from "swr";
// import toast, { Toaster } from 'react-hot-toast';
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";
import "~~/styles/theme.css";

// const events = ["Voted"];

export const onEventExecuted = (eventName: string) => {
  // toast.success(`Event: ${eventName} has executed.`);
  console.log(`Event: ${eventName} has executed.`);
};

export const onEventSubscribe = (eventName: string) => {
  // toast.success(`Event: ${eventName} has been subscribed to.`);
  console.log(`Event: ${eventName} has been subscribed to.`);
};

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    console.log("Connecting to WebSocket server...");
    const newSocket = io("http://localhost:5002/", {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    newSocket.on("event", event => {
      console.log("Received event:");
      console.log(event);
    });

    newSocket.on("starting", message => {
      console.log("Starting the server");
      console.log(message);
    });

    setSocket(newSocket);
    console.log(socket);

    // Clean up the socket connection on unmount
    return () => {
      console.log("Disconnecting from WebSocket server...");
      newSocket.disconnect();
    };
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={isDarkTheme ? darkTheme() : lightTheme()}
      >
        <SWRConfig
          value={{
            fetcher: (resource: any, init: any) => fetch(resource, init).then(res => res.json()),
          }}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
            {/* <Toaster /> */}
            <Footer />
          </div>
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
