import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import ImageComponent from "../Image";

export default function UpcomingEvents() {
  return (
    <Flex
      mb="3rem"
      w="100%"
      align="center"
      direction="column"
      gap="1rem"
      p="2.5rem"
    >
      <Heading fontSize={36} fontWeight={800} color="#E37619">
        Upcoming Events
      </Heading>
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Heading fontSize={24} fontWeight={800} color="#2D2735">
          Browsing Events
        </Heading>
        <Tabs w="100%">
          <TabList>
            <Tab
              _selected={{
                color: "#E37619",
                fontWeight: "bold",
                borderBottom: "2px solid #E37619",
              }}
            >
              All
            </Tab>
            <Tab
              _selected={{
                color: "#E37619",
                fontWeight: "bold",
                borderBottom: "2px solid #E37619",
              }}
            >
              Today
            </Tab>
            <Tab
              _selected={{
                color: "#E37619",
                fontWeight: "bold",
                borderBottom: "2px solid #E37619",
              }}
            >
              This week
            </Tab>
            <Tab
              _selected={{
                color: "#E37619",
                fontWeight: "bold",
                borderBottom: "2px solid #E37619",
              }}
            >
              Next month
            </Tab>
            <Tab
              _selected={{
                color: "#E37619",
                fontWeight: "bold",
                borderBottom: "2px solid #E37619",
              }}
            >
              Project Education
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0rem" mt="2rem">
              <Flex w="100%" align="center" justify="space-between">
                {[1, 1, 1].map((el, i) => (
                  <Event key={i} src={`/event${i + 1}.png`} />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}

function Event({ src }) {
  return (
    <Flex w="30%" align="start" direction="column" gap="1rem">
      <Box w="100%">
        <ImageComponent src={src} alt="about" height="332px" />
      </Box>
      <Flex align="start" direction="column" gap="0.5rem">
        <Text fontWeight={600} fontSize={20} color="#2D2735">
          Itsekiri Cultural Day
        </Text>
        <Text w="95%" fontWeight={400} fontSize={18} color="#4E4E4E">
          Come and experience our amazing cultural day.
        </Text>
        <Text fontWeight={600} fontSize={18} color="#2D2735">
          Sat, May 19 9:00 AM
        </Text>
      </Flex>
    </Flex>
  );
}
