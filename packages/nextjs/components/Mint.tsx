import { useEffect, useState } from "react";
import { GET_COLLECTIONS_QUERY, SUBGRAPH_URL } from "../constants/queries";
import LoadingPage from "./LoadingPage";
import { Paragraph } from "@zoralabs/zord";
import request from "graphql-request";
// import { useAccount } from "wagmi";
// import { Collection } from "~~/components/zora/Collection";
import { collectionAddresses } from "~~/utils/constants";

// import { shortenAddress } from "~~/utils/helpers";

const iframe = `
<div style="border-radius:4px;overflow:hidden;max-width:600px;margin:0 auto;background-color:black"><iframe id="embed" height="414px" width="100%" style="width:1px;min-width:100%;" frameBorder="0" src="https://testnet.zora.co/editions/gor:0x43559450baeec2ff16242d9a692c04d1be9de81f/frame?padding=20px&mediaPadding=20px&showDetails=true&theme=%7B%22foreground%22%3A%22%23ffffff%22%2C%22background%22%3A%22%232a3755%22%2C%22accent%22%3A%22%239338ea%22%2C%22onAccent%22%3A%22%23ffffff%22%2C%22border%22%3A%22%23ffffff%22%2C%22background2%22%3A%22%232a3755%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23eb2540%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=false&showCollectors=false&showMintingUI=true"></iframe></div><script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js" integrity="sha512-dnvR4Aebv5bAtJxDunq3eE8puKAJrY9GBJYl9GC6lTOEC76s1dbDfJFcL9GyzpaDW4vlI/UjR8sKbc1j6Ynx6w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script>iFrameResize({ log: false, heightCalculationMethod: 'taggedElement' }, '#embed')</script>
`;

const Mint = () => {
  // const { address } = useAccount();
  const [collections, setCollections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // const username = useMemo(() => shortenAddress(address || ""), [address]);

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
            <div className="h-[500px]" dangerouslySetInnerHTML={{ __html: iframe }}></div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Mint;

// <Stack align="center" minH="100vh">
//   {collections.map(collection => (
//     <Collection key={collection.address} username={username} collection={collection} />
//   ))}
// </Stack>
