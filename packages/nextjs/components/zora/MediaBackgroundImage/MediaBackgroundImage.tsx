import React from "react";
import { ImageWithFallback } from "../ImageWithFallback";
import * as styles from "./MediaBackgroundImage.css";
import { Box, BoxProps } from "@zoralabs/zord";

interface MediaBackgroundImageProps extends BoxProps {
  src?: string;
}

export function MediaBackgroundImage({ src }: MediaBackgroundImageProps) {
  return (
    <Box pos="absolute" inset="x0" overflow="hidden">
      <ImageWithFallback
        className={styles.backgroundImage}
        alt="Background image"
        src={src}
        fallbackSrc="/assets/fallbacks/audio.svg"
      />

      <Box className={styles.backgroundCover} pos="absolute" inset="x0" />
    </Box>
  );
}
