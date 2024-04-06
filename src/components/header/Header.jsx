import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function Header() {
  return (
    <Flex
      py="1.5rem"
      px="2.5rem"
      w="100%"
      align="center"
      bg="#2D2735"
      justify="space-between"
    >
      <Box w="150px">
        <ImageComponent height="66px" src="/logo.png" alt="" />
      </Box>
      <Flex align="center" gap="1rem">
        <Text fontSize={18} fontWeight={500} color="#FFFFFF">
          About Us
        </Text>
        <Text fontSize={18} fontWeight={500} color="#FFFFFF">
          Culture
        </Text>
        <Text fontSize={18} fontWeight={500} color="#FFFFFF">
          Gallery
        </Text>
        <Text fontSize={18} fontWeight={500} color="#FFFFFF">
          Volunteer
        </Text>
        <Text fontSize={18} fontWeight={500} color="#FFFFFF">
          Contact
        </Text>
        <Button size="lg" bg="#E37619" color="#fff">
          Join Us Today
        </Button>
      </Flex>
    </Flex>
  );
}
