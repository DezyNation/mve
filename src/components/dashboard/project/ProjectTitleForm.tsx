import { colors } from "@/lib/constants";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProjectTitleForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <Box
        w={["full", "80%"]}
        p={[4, 8]}
        border={"1px solid #333"}
        rounded={12}
        mx={"auto"}
      >
        <VStack
          w={"full"}
          h={"full"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontWeight={"semibold"} textAlign={["center", "left"]}>
            What is the name of your Project?
          </Text>
          <br />
          <br />
          <Input
            mb={4}
            w={["full", "xs"]}
            variant={"flushed"}
            placeholder="Project Title"
            borderBottom={"1px solid #000"}
          />
          <Button
            size={"lg"}
            rounded={"full"}
            colorScheme="orange"
            bgColor={colors.orange}
            boxShadow={"-4px 4px #000"}
            px={16}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ProjectTitleForm;
