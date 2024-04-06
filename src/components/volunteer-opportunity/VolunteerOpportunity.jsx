import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function VolunteerOpportunity() {
  return (
    <Flex my="10rem" w="100%" align="center" position="relative">
      <Box
        position="absolute"
        right="330px"
        top="-40px"
        w="450px"
        h="90px"
        bg="#E37619"
        // zIndex={90}
      ></Box>
      <ImageComponent src="/bg.png" alt="bg" height="419px" />
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        position="absolute"
        top="0"
        left="0"
        height="419px"
        zIndex={50}
        pr="2.5rem"
        pl="10rem"
      >
        <Flex w="50%" align="start" direction="column" gap="1rem">
          <Heading fontSize={24} fontWeight={800} color="#E37619">
            Volunteer Opportunities
          </Heading>

          <Text w="80%" fontWeight={400} fontSize={18} color="#FFFFFF">
            Join us in organizing the much-anticipated Ugbajo Convention this
            year, an event that celebrates our heritage and reinforces the bonds
            of our community. We focus on creating a memorable experience that
            honors our traditions, strengthens our connections, and underscores
            our commitment to Itsekiri unity and welfare. Come, lend your hands
            and hearts, and be part of this incredible journey. 
          </Text>
          <Button size="lg" bg="#E37619" color="#fff">
            Get Involved
          </Button>
        </Flex>
        <Box w="50%" mb="9.3rem">
          <ImageComponent
            fit="contain"
            src="/volunteer.png"
            alt="bg"
            height="575px"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
