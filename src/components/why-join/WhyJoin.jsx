import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function WhyJoin() {
  return (
    <Flex p="2.5rem" w="100%" align="center" justify="space-between">
      <Box p="3rem" w="50%">
        <ImageComponent src="/why.png" height="670px" alt="about" />
      </Box>
      <Flex
        height="670px"
        w="50%"
        align="start"
        justify="start"
        direction="column"
        gap="1.5rem"
      >
        <Heading fontSize={36} fontWeight={800} color="#E37619">
          Why Join Our Community?
        </Heading>
        <Reusable
          title=" Networking Opportunities"
          text="Connect with Itsekiris in Chicago and surrounding areas and build
        personal and professional networks. "
          num="01"
        />
        <Reusable
          title="Professional Development"
          text="Attend our monthly gatherings that contribute to your personal and professional growth."
          num="02"
        />
        <Reusable
          title="Community Service"
          text="Participate in initiatives that give back to our community in Nigeria, making a tangible difference.  "
          num="03"
        />
        <Reusable
          title="Member Testimonials"
          text="Being part of the Itsekiri Association of Chicago has given me a sense of belonging and an opportunity to contribute to our homeland's development. It's a powerful connection to our roots. - A satisfied member "
          num="04"
        />
        <Button ml="2.7rem" size="lg" bg="#E37619" color="#fff">
          Join Our Community Today
        </Button>
      </Flex>
    </Flex>
  );
}

function Reusable({ num, title, text }) {
  return (
    <Flex align="start" gap="1rem" w="100%">
      <Text fontWeight={700} fontSize={24} color="#2D2735">
        {num}
      </Text>
      <Flex align="start" direction="column" gap="0.5rem">
        <Text fontWeight={700} fontSize={24} color="#2D2735">
          {title}
        </Text>
        <Text fontWeight={400} fontSize={18} color="#4E4E4E">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
