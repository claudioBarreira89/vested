import { useCollectionMetadata } from "../../hooks/useCollectionMetadata";
import { useERC721DropContract } from "../../providers/ERC721DropProvider";
import { maxWidth, wrapWords } from "../../styles/styles.css";
import { CollectionMedia } from "./CollectionMedia";
import * as styles from "./CollectionMedia.css";
import { Box, Button, Flex, Paragraph, SpinnerOG, Stack, Text, Well, vars } from "@zoralabs/zord";
import ReactMarkdown from "react-markdown";
import { useDisconnect } from "wagmi";
import { MintAndPresaleComponent } from "~~/components/zora/MintAndPresaleComponent";
import { MintDetails } from "~~/components/zora/MintDetails";

export function CollectionInner({ username }: { username?: string }) {
  const collectionContext = useERC721DropContract();
  const { metadata } = useCollectionMetadata(collectionContext.contractConfig.metadataRenderer);
  const metadataDetails = metadata.metadataDetails;

  let description = "...";
  try {
    description = JSON.parse(`"${metadataDetails?.description || "..."}"`);
  } catch (e) {
    description = metadataDetails?.description || "...";
  }

  const { disconnect } = useDisconnect();

  return (
    <Flex
      mt="x3"
      align="center"
      direction={{ "@initial": "column", "@768": "row-reverse" }}
      gap="x3"
      p={{ "@initial": "x1", "@576": "x10" }}
      w="100%"
      style={{ maxWidth: 1360, margin: "auto", minHeight: "80vh" }}
    >
      <Flex flex={{ "@initial": "1", "@1024": "1" }} p="x2" justify="center">
        <Box position="relative" w="100%" className={styles.mediaContainer}>
          <CollectionMedia
            className={styles.mediaItem}
            h="100%"
            metadata={metadataDetails}
            borderRadius="curved"
            objectFit="cover"
            collection={collectionContext}
          />
        </Box>
      </Flex>
      <Box flex={{ "@initial": "1", "@1024": "none" }} className={maxWidth} p="x4">
        <Stack gap="x2" mb="x3">
          <Text variant="display-md" mb="x2">
            {collectionContext.name}
          </Text>
          <Paragraph className={wrapWords} mb="x2">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Paragraph>
        </Stack>

        <Box>
          {collectionContext != null ? (
            <>
              <MintAndPresaleComponent collection={collectionContext} />

              <Box>
                {username && (
                  <Well borderColor="accent" py="x1" mt="x4">
                    <Flex justify="space-between" align="center">
                      <Text fontSize={14}>Logged in as {username}</Text>
                      <Button
                        pill
                        variant="ghost"
                        onClick={() => disconnect()}
                        positive="relative"
                        style={{ left: vars.space.x5 }}
                      >
                        <Box as="span" fontSize={14}>
                          Disconnect
                        </Box>
                      </Button>
                    </Flex>
                  </Well>
                )}
              </Box>
              <Well borderColor="accent" fontSize={14} mt="x4">
                <MintDetails collection={collectionContext} hideToggle={true} />
              </Well>
            </>
          ) : (
            <Paragraph align="center" mt="x8">
              <SpinnerOG />
            </Paragraph>
          )}
        </Box>
      </Box>
    </Flex>
  );
}
