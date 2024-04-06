import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function About() {
  return (
    <Flex w="100%" align="center" py="3.5rem" px="2.5rem">
      <Flex w="50%" align="start" direction="column" gap="1rem">
        <Heading fontSize={36} fontWeight={800} color="#E37619">
          About The Association
        </Heading>
        <Text w="80%" fontWeight={500} fontSize={18} color="#4F4F4F">
          At the heart of Chicago, the Itsekiri Association is dedicated to
          preserving and promoting the rich Itsekiri culture and traditions. As
          Itsekiris in the USA, we unite to celebrate our heritage, connect with
          our roots, and contribute positively to our community in Nigeria and
          beyond.
        </Text>
        <Text w="80%" fontWeight={500} fontSize={18} color="#4F4F4F">
          Dive into our story with a video showcasing our vibrant community
          events, cultural workshops, and contributions to our homeland,
          encapsulating our journey and impact.
        </Text>
      </Flex>
      <Box w="50%">
        <ImageComponent src="/about.png" alt="about" height="430px" />
      </Box>
    </Flex>
  );
}
