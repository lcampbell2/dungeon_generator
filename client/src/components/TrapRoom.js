import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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
        {/* trap icon */}
        <Text fontWeight="bold" fontSize="3xl">
          Trap Room
        </Text>
      </Stack>
      <Text>Name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Reward: {reward}</Text>
    </Box>
  );
}
