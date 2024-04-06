import { Box, Button, Circle, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const data = [
  {
    title: "Celebrating Itsekiri Culture: Traditions, Festivals, and Heritage",
    text: "Dive into the rich cultural tapestry of the Itsekiri people. Explore traditional ceremonies and festivals that are integral to the community.",
    src: "/blog1.png",
  },
  {
    title: "Itsekiri Legends and Folktales: Stories That Define Us",
    text: "Showcase the oral traditions of the Itsekiri community by exploring and retelling age-old legends and folktales.",
    src: "/blog2.png",
  },
  {
    title: "Faces of Itsekiri: Spotlight on Remarkable Individuals",
    text: "Introduce the vibrant personalities within the Itsekiri community who have made significant contributions in various fields.",
    src: "/blog2.png",
  },
];

export default function Blog() {
  return (
    <Flex p="2.5rem" w="100%" align="center" direction="column" gap="2.5rem">
      <Heading fontSize={48} fontWeight={800} color="#E37619">
        Our Blogs
      </Heading>
      <Flex gap="1rem" w="100%" align="center" justify="space-between">
        <Swiper slidesPerView={2.6} spaceBetween={40} className="mySwiper">
          {data.map((el, i) => (
            <SwiperSlide key={i}>
              <Reusable title={el.title} text={el.text} src={el.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex w="100%" align="center" justify="space-between">
        <Flex w="57%" align="end" justify="end">
          <Button size="lg" color="#fff" bg="#E37619">
            View More Blogs
          </Button>
        </Flex>
        <Flex w="40%" gap="1rem" align="end" justify="end">
          <Circle cursor="pointer" w="50px" h="50px" color="#fff" bg="#FFBE87">
            <FaLessThan />
          </Circle>
          <Circle cursor="pointer" w="50px" h="50px" color="#fff" bg="#FFBE87">
            <FaGreaterThan />
          </Circle>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Reusable({ src, title, text }) {
  return (
    <Flex position="relative" w="100%" align="center" direction="column">
      <Box w="100%">
        <ImageComponent src={src} alt="bg" height="405px" />
      </Box>
      <Flex
        w="100%"
        align="center"
        justify="center"
        mt="-5rem"
        zIndex={50}
        position="relative"
      >
        <Flex
          w="80%"
          mx="auto"
          bg="#fff"
          p="1rem"
          align="start"
          direction="column"
          gap="1rem"
          borderRadius={12}
          border="1px solid #E5EFFF"
          h="300px"
          justify="center"
        >
          <Heading fontWeight={600} fontSize={20} color="#2D2735">
            {title}
          </Heading>
          <Text fontWeight={400} fontSize={18} color="#4E4E4E">
            {text}
          </Text>
          <Button size="lg" color="#E37619" variant="ghost">
            Open Blog
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
