import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function Hero() {
  return (
    <Flex w="100%" align="center" bg="#2D2735" pb="2.5rem">
      <Flex
        position="absolute"
        w="50%"
        align="start"
        direction="column"
        gap="1rem"
        zIndex={50}
        pl="2.5rem"
      >
        <Heading w="80%" fontSize={48} fontWeight={800} color="#fff">
          Embrace Your{" "}
          <span style={{ backgroundColor: "#E37619" }}>Heritage,</span> Enrich
          Your Connections
        </Heading>
        <Text w="50%" fontWeight={500} fontSize={18} color="#fff">
          Journey through Time, Tradition, and Triumphs in the Heart of Itsekiri
          Culture.
        </Text>
        <Flex w="100%" align="center" gap="1rem">
          <Button
            size="lg"
            variant="outline"
            border="1px solid #fff"
            color="#fff"
          >
            Discover Your Roots
          </Button>
          <Button size="lg" bg="#E37619" color="#fff">
            Join Us Today
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" position="relative" align="end" justify="end">
        <Box w="75%">
          <ImageComponent height="620px" src="/hero.png" alt="hero" />
        </Box>
      </Flex>
    </Flex>
  );
}
