import { useEffect, useMemo, useState } from "react";
import { GET_COLLECTIONS_QUERY, SUBGRAPH_URL } from "../constants/queries";
import LoadingPage from "./LoadingPage";
import { Paragraph, Stack } from "@zoralabs/zord";
import request from "graphql-request";
import { useAccount } from "wagmi";
import { Collection } from "~~/components/zora/Collection";
import { collectionAddresses } from "~~/utils/constants";
import { shortenAddress } from "~~/utils/helpers";

const Mint = () => {
  const { address } = useAccount();
  const [collections, setCollections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const username = useMemo(() => shortenAddress(address || ""), [address]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { erc721Drops }: any = await request(SUBGRAPH_URL, GET_COLLECTIONS_QUERY, {
        collectionAddresses: collectionAddresses,
      });

      setIsLoading(false);
      setCollections(erc721Drops);
    })();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
      <main className="p-6 w-full">
        <h2 className="text-center">
          <span className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
            Mint
          </span>
        </h2>
        <div className="mt-10">
          {!collections.length ? (
            <Paragraph py="x5" align="center">
              404, contract not found.
            </Paragraph>
          ) : (
            <Stack align="center" minH="100vh">
              {collections.map(collection => (
                <Collection key={collection.address} username={username} collection={collection} />
              ))}
            </Stack>
          )}
        </div>
      </main>
    </div>
  );
};

export default Mint;
