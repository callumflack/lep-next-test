import Link from "next/link";
import { HStack, Box, Text, Divider } from "@chakra-ui/react";
import GridArticle from "@/components/GridArticle";
import LogoMark from "@/components/LogoMark";

export default function Navbar() {
  const menu = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <Box as="nav">
      <Box py="w2">
        <GridArticle
          as="div"
          aside={
            <HStack h="full" align="center" spacing="w3">
              {menu.map((item) => (
                <Link href={item.link} key={item.link}>
                  <Text textStyle="article" fontFamily="sans" cursor="pointer">
                    {item.label}
                  </Text>
                </Link>
              ))}
            </HStack>
          }
        >
          {/* functional components as child of <Link/> causes ref warnings: https://github.com/vercel/next.js/issues/7915#issuecomment-591277902
          …so the Logo is wrapped by a span intentionally */}
          <Link href="/">
            <Box as="span" cursor="pointer" textStyle="article" mt={-1}>
              <LogoMark size="3em" />
            </Box>
          </Link>
        </GridArticle>
      </Box>
      <Divider colorScheme="pewter"></Divider>
    </Box>
  );
}
