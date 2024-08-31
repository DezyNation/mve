import Members from "@/components/dashboard/account/Members";
import ProfileDetails from "@/components/dashboard/account/ProfileDetails";
import Settings from "@/components/dashboard/account/Settings";
import Transactions from "@/components/dashboard/account/Transactions";
import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={6}
        p={[4, 8]}
        w={"full"}
      >
        <ProfileDetails />
        <Tabs variant="solid-rounded" colorScheme="gray" w={["full", "90%"]}>
          <TabList px={6} gap={6}>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Settings
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Activity
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Members
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Transactions
            </Tab>
          </TabList>
          <TabPanels
            p={2}
            mt={12}
            h={"md"}
            w={"full"}
            rounded={20}
            border={"2px solid #AAA"}
          >
            <TabPanel>
              <Settings />
            </TabPanel>
            <TabPanel>Activity</TabPanel>
            <TabPanel>
              <Members />
            </TabPanel>
            <TabPanel>
              <Transactions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};

export default page;
