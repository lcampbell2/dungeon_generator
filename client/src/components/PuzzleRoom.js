import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function PuzzleRoom({ id }) {
  const [roomDetails, setRoomDetails] = useState([]);

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4111/puzzles/${id}`);
      const jsonData = await response.json();
      setRoomDetails(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [id]);

  const { name, description, solution, reward, punishment } = roomDetails;
  return (
    <Box>
      <Stack isInline align="center" mb="10">
        {/* puzzle icon */}
        <Text fontWeight="bold" fontSize="3xl">
          Puzzle Room
        </Text>
      </Stack>
      <Text>Name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Solution: {solution}</Text>
      <Text>Reward: {reward}</Text>
      <Text>Punishment: {punishment}</Text>
    </Box>
  );
}
