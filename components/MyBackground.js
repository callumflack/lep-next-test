import { Box } from "@chakra-ui/react";

const MyBackground = ({ children }) => {
  return (
    <Box bg="cornsilk" py={1}>
      {children}
    </Box>
  );
};

export default MyBackground;
