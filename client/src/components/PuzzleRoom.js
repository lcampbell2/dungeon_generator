import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPuzzleFill } from "@react-icons/all-files/bs/BsPuzzleFill";

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
        <Text fontWeight="bold" fontSize="3xl">
          Puzzle Room
        </Text>
        <BsPuzzleFill color="blue" size="2rem" />
      </Stack>
      <Stack>
        <HStack>
          <Text color="yellow.400" fontWeight="bold" as="u">
            {name}:
          </Text>
          <Text color="blue.400" fontWeight="bold">
            {description}!
          </Text>
        </HStack>

        <HStack>
          <Text>The Secret Solution:</Text>
          <Text color="green.400" fontWeight="bold">
            {solution}
          </Text>
        </HStack>
        <HStack>
          <Text>If they fail, they trigger a</Text>
          <Text color="gray.500" fontWeight="bold">
            {punishment}
          </Text>
          <Text>trap</Text>
        </HStack>
        <HStack>
          <Text>If the puzzle is solved, they are rewarded with</Text>
          <Text color="purple.300" fontWeight="bold">
            {reward}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
