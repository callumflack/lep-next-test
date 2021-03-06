// import PropTypes from "prop-types";
import Link from "next/link";
import { Center, Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import LogoMark from "@/components/LogoMark";
import NavbarDrawer from "@/components/NavbarDrawer";

const NavListPrimary = (props) => {
  const renderDrawers = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box {...props}>
      <NavbarDrawer index={0} label="Shop" />
      {renderDrawers ? (
        <>
          <NavbarDrawer index={1} label="Learn" />
          <NavbarDrawer index={2} label="Consult" />
        </>
      ) : null}
    </Box>
  );
};

export default function Navbar() {
  return (
    <Flex
      as="nav"
      px={{ base: 4, lg: 6, xl: 12 }}
      w="full"
      justify="space-between"
      align="center"
      borderBottom="1px"
      borderColor="blackAlpha.100"
      layerStyle="navHeight"
    >
      {/* LOGO */}
      <Center w={1 / 3}>
        {/* functional components as child of <Link/> causes ref warnings: https://github.com/vercel/next.js/issues/7915#issuecomment-591277902
        …so the Logo is wrapped by a span intentionally */}
        <Link href="/" textStyle="article">
          <span>
            <LogoMark size="3em" cursor="pointer" mt={-1} />
          </span>
        </Link>
      </Center>

      {/* PRIMARY NAV LIST */}
      <NavListPrimary w={1 / 3} />
    </Flex>
  );
}
