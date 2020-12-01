import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function MonsterRoom({ id }) {
  const [roomDetails, setRoomDetails] = useState([]);

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4111/monsters/${id}`);
      const jsonData = await response.json();
      setRoomDetails(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [id]);

  const { name, description, strength, weakness, loot } = roomDetails;

  return (
    <Box>
      <Stack isInline align="center" mb="10">
        {/* monster icon */}
        <Text fontWeight="bold" fontSize="3xl">
          Monster Room
        </Text>
      </Stack>
      <Text>Name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Strength: {strength}</Text>
      <Text>Weakness: {weakness}</Text>
      <Text>Loot: {loot}</Text>
    </Box>
  );
}
