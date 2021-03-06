import { Box, Image } from "@chakra-ui/react";
import type { ResponsiveImage } from "@/types";

// use https://github.com/datocms/react-datocms#progressiveresponsive-image?
// no, want fallbackSrc from Chakra

export default function AsideImage({ data }: AsideImageProps) {
  const { alt, src, base64 } = data.responsiveImage;

  return (
    <Box>
      <Image src={src} fallbackSrc={base64} alt={alt} />
    </Box>
  );
}

export interface AsideImageProps {
  data: {
    responsiveImage: ResponsiveImage;
  };
}
