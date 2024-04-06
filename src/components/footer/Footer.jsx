import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import ImageComponent from "../Image";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <Flex w="100%" align="center" bg="#2D2735" p="2.5rem">
      <Logo />
      <Links />
      <Support />
      <Subscribe />
    </Flex>
  );
}

function Support() {
  return (
    <Flex
      w="15%"
      h="300px"
      p="1rem"
      align="start"
      direction="column"
      gap="1rem"
    >
      <Heading fontSize={20} color="#fefefe" fontWeight={600}>
        Support
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        Contact
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        FAQ
      </Heading>
    </Flex>
  );
}

function Links() {
  return (
    <Flex
      w="15%"
      h="300px"
      p="1rem"
      align="start"
      direction="column"
      gap="1rem"
    >
      <Heading fontSize={20} color="#fefefe" fontWeight={600}>
        Links
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        About Us
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        Culture
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        Gallery
      </Heading>
      <Heading fontSize={18} color="#FFFFFF" fontWeight={500}>
        Volunteer
      </Heading>
    </Flex>
  );
}

function Logo() {
  return (
    <Flex
      align="start"
      direction="column"
      gap="1rem"
      w="30%"
      h="300px"
      p="1rem"
      justify="space-between"
    >
      <Flex gap="1rem" w="100%" align="start" direction="column">
        <Box w="150px">
          <ImageComponent height="66px" src="/logo.png" alt="" />
        </Box>
        <Flex align="center" gap="1rem">
          <Circle w="40px" bg="#fff" h="40px">
            <FaFacebookF />
          </Circle>
          <Circle w="40px" bg="#fff" h="40px">
            <ImInstagram />
          </Circle>
          <Circle w="40px" bg="#fff" h="40px">
            <FaLinkedinIn />
          </Circle>
          <Circle w="40px" bg="#fff" h="40px">
            <RiTwitterXLine />
          </Circle>
        </Flex>
      </Flex>
      <Text color="#fff" fontSize={14} fontWeight={400}>
        Terms and Conditions{" "}
        <span style={{ marginLeft: "0.5rem" }}>Privacy Policy</span>
      </Text>
    </Flex>
  );
}

function Subscribe() {
  return (
    <Flex
      w="40%"
      h="300px"
      p="1rem"
      align="start"
      direction="column"
      gap="1rem"
      justify="space-between"
    >
      <Flex w="100%" gap="1rem" align="start" direction="column">
        <Heading fontSize={20} color="#fefefe" fontWeight={600}>
          Subscribe
        </Heading>
        <Heading fontSize={18} color="#FFFFFF" fontWeight={400}>
          Subscribe to our newsletter for monthly insights, stories,
          opportunities to engage with the Itsekiri community.
        </Heading>
        <Flex w="100%" align="center" gap="1rem">
          <Input
            placeholder="Enter your email"
            bg="#fff"
            borderRadius={12}
            flex="1"
            focusBorderColor="#E37619"
          />
          <Button borderRadius={12} size="md" bg="#E37619" color="#fff">
            Subscribe
          </Button>
        </Flex>
        <Heading fontSize={14} color="#FFFFFF" fontWeight={400}>
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </Heading>
      </Flex>
      <Text color="#fff" fontSize={14} fontWeight={400}>
        © 2024 Itsekiri Association of Chicago . All rights reserved.
      </Text>
    </Flex>
  );
}
