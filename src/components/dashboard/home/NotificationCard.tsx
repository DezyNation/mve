import { colors } from "@/lib/constants";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
interface NotificationCardProps {
  isSystemNotification?: boolean;
  avatarUrl?: string;
  title: string;
  description?: string;
  actionBtnLabel?: string;
  actionBtnUrl?: string;
}

const NotificationCard = ({
  isSystemNotification,
  avatarUrl,
  title,
  description,
  actionBtnLabel,
  actionBtnUrl,
}: NotificationCardProps) => {
  return (
    <>
      <Box
        p={4}
        w={"full"}
        rounded={6}
        bgColor={"#FFF"}
        border={"1px solid #DADADA"}
      >
        <HStack alignItems={"flex-start"} justifyContent={"flex-start"} gap={4}>
          <Image
            src={avatarUrl || "/temp/logo.svg"}
            pos={"relative"}
            w={8}
            h={8}
            objectFit={isSystemNotification ? "contain" : "cover"}
            rounded={"full"}
            top={1}
          />
          <Box>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              {title}
            </Text>
            <Text fontSize={"xs"}>{description}</Text>
          </Box>
        </HStack>
        {actionBtnUrl ? (
          <HStack w={"full"} justifyContent={"flex-end"} mt={2}>
            <Button
              size={"xs"}
              rounded={"full"}
              colorScheme="orange"
              bgColor={colors.orange}
              rightIcon={<FaArrowRight />}
            >
              {actionBtnLabel || "Learn More"}
            </Button>
          </HStack>
        ) : null}
      </Box>
    </>
  );
};

export default NotificationCard;
