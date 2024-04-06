import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function CommunityEngagement() {
  return (
    <Flex p="2.5rem" w="100%" align="end" justify="end" position="relative">
      <Flex
        w="70%"
        bg="#2D2735"
        h="450px"
        align="start"
        direction="column"
        gap="1rem"
        justify="center"
        pr="3rem"
        pl="8rem"
      >
        <Heading fontSize={36} fontWeight={800} color="#E37619">
          Community Engagement
        </Heading>
        <Text fontWeight={700} fontSize={24} color="#FFFFFF">
          Member Spotlight
        </Text>
        <Text fontWeight={400} fontSize={18} color="#FFFFFF">
          We honor Tsolaye, whose remarkable dedication to education led our
          successful 'Back to School Drive'. Tsolaye's efforts ensured that
          dozens of children in Warri community were equipped with the necessary
          school supplies and resources to start their academic year on the
          right foot. This initiative reflects the heart of our Itsekiri values
          — supporting each other in educational pursuits and community
          well-being..  
        </Text>
      </Flex>
      <Flex
        w="542px"
        position="absolute"
        left="10"
        top="10px"
        align="start"
        direction="column"
        gap="1rem"
      >
        <ImageComponent src="/community.png" height="416px" alt="about" />
        <Text fontSize={18} fontWeight={600} color="#2D2735">
          Tsolaye Dorsu - Secretary
        </Text>
      </Flex>
    </Flex>
  );
}
