import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

const data = [
  {
    title: "Annual Cultural Festival Recap",
    text: "Relive the excitement of our recent cultural festival! From traditional dances to culinary delights.",
    src: "/news1.png",
  },
  {
    title: "Community Outreach Initiative",
    text: "Learn about the impact we've made and discover opportunities to get involved in upcoming projects aimed at making a positive difference.",
    src: "/news2.png",
  },
  {
    title: "Language and Cultural Workshops",
    text: "Join us for interactive workshops designed to explore the intricacies of the Itsekiri language.",
    src: "/news3.png",
  },
  {
    title: "Community Networking Mixer",
    text: "Connect with fellow Itsekiri community members in a casual and friendly environment.",
    src: "/news4.png",
  },
];

export default function NewsUpdates() {
  return (
    <Flex p="2.5rem" w="100%" align="start" direction="column" gap="2rem">
      <Heading fontSize={36} fontWeight={800} color="#E37619">
        News and Updates
      </Heading>
      <Text w="35%" fontWeight={400} fontSize={18} color="#4E4E4E">
        Stay updated with our latest endeavors, upcoming events, and impactful
        stories from our members. 
      </Text>
      <Heading fontSize={24} fontWeight={700} color="#2D2735">
        Latest News
      </Heading>
      <Flex w="100%" align="center" justify="space-between">
        {data.map((el, i) => (
          <Reusable key={i} title={el.title} text={el.text} src={el.src} />
        ))}
      </Flex>
    </Flex>
  );
}

function Reusable({ src, title, text }) {
  return (
    <Flex w="22%" align="center" direction="column" gap="1rem">
      <Box w="100%">
        <ImageComponent src={src} alt="bg" height="242px" />
      </Box>
      <Flex gap="0.5rem" w="100%" align="center" direction="column" h="150px">
        <Heading fontSize={18} fontWeight={700} color="#2D2735">
          {title}
        </Heading>
        <Text textAlign="center" fontWeight={400} fontSize={18} color="#4E4E4E">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
