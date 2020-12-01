import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiMantrap } from "@react-icons/all-files/gi/GiMantrap";

export function TrapRoom({ id }) {
  const [roomDetails, setRoomDetails] = useState([]);

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4111/traps/${id}`);
      const jsonData = await response.json();
      setRoomDetails(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [id]);

  const { name, description, reward } = roomDetails;
  return (
    <Box>
      <Stack isInline align="center" mb="10">
        <Text fontWeight="bold" fontSize="3xl">
          Trap Room
        </Text>
        <GiMantrap color="gray" size="2rem" />
      </Stack>
      <Stack>
        <HStack>
          <Text>The door shuts behind them, and they are faced with</Text>
          <Text color="gray.500" fontWeight="bold">
            {name}:
          </Text>
          <Text color="gray.500" fontWeight="bold">
            {description}!
          </Text>
        </HStack>
        <HStack>
          <Text>If the trap is avoided, they are rewarded with</Text>
          <Text color="purple.300" fontWeight="bold">
            {reward}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
