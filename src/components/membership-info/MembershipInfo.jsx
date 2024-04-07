import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../Image";

const data = [
  {
    title: "Access the Form",
    text: "Navigate to our online Membership Form directly on our website. ",
    num: "01",
  },
  {
    title: "Fill in Details",
    text: "Provide your personal details, Itsekiri heritage information, and express your interests and potential contributions. ",
    num: "02",
  },
  {
    title: "Submit Application",
    text: "Review your information and submit the form with a single click. ",
    num: "03",
  },
  {
    title: "Await Confirmation",
    text: "Receive an immediate email confirmation of your application receipt. ",
    num: "04",
  },
  {
    title: "Approval & Welcome",
    text: "Our team will review your application and send a welcome packet with full membership details, benefits, and upcoming events within one week. ",
    num: "05",
  },
  {
    title: "Get Involved",
    text: "With confirmation, you’ll gain immediate access to member-exclusive resources and a calendar of events so you can start participating right away. ",
    num: "05",
  },
];

export default function MembershipInfo() {
  return (
    <Flex p="2.5rem" w="100%" align="center" direction="column" gap="2rem">
      <Heading fontSize={36} fontWeight={800} color="#E37619">
        Membership Information
      </Heading>
      <Flex w="100%" align="center" justify="space-between" gap="3rem">
        <Flex w="45%" align="start" direction="column" gap="1rem">
          <Box w="537px">
            <ImageComponent
              fit="contain"
              src="/member.png"
              alt="bg"
              height="369px"
            />
          </Box>
          <Heading fontSize={24} fontWeight={700} color="#2D2735">
            Membership and Benefits
          </Heading>
          <Text w="80%" fontWeight={400} fontSize={18} color="#4E4E4E">
            Embrace your Itsekiri heritage by joining our General Membership—a
            community that welcomes every Itsekiri and friend of Itsekiri
            culture. As a member, you'll engage in preserving and celebrating
            our rich traditions through a variety of cultural events, have
            access to valuable networking opportunities, and play a pivotal role
            in our collective efforts to uplift and support our people both in
            Chicago and back home. Discover the joys of staying connected to
            your roots and the rewards of contributing to the vibrancy of
            Itsekiri culture. Join us and enrich not just your own life but the
            fabric of our entire community. 
          </Text>
          <Button size="lg" bg="#E37619" color="#fff">
            Become a Member
          </Button>
        </Flex>
        <Flex
          w="55%"
          align="start"
          justify="start"
          direction="column"
          gap="1rem"
        >
          <Heading fontSize={24} fontWeight={700} color="#2D2735">
            Joining Process
          </Heading>
          <Text fontWeight={400} fontSize={18} color="#4E4E4E">
            Becoming a member is easy. Follow our step-by-step guide or click
            here to start your journey with us today. 
          </Text>
          <Flex w="100%" align="start" direction="column" gap="1rem">
            {data.map((el, i) => (
              <Reusable num={el.num} title={el.title} text={el.text} key={i} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Reusable({ num, title, text }) {
  return (
    <Flex align="start" gap="1rem" w="100%">
      <Text fontWeight={700} fontSize={18} color="#2D2735">
        {num}
      </Text>
      <Flex align="start" direction="column" gap="0.5rem">
        <Text fontWeight={700} fontSize={18} color="#2D2735">
          {title}
        </Text>
        <Text w="85%" fontWeight={400} fontSize={18} color="#4E4E4E">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
