import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiMonsterGrasp } from "@react-icons/all-files/gi/GiMonsterGrasp";

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
  const amount = Math.floor(Math.random() * 15) + 4;

  return (
    <Box>
      <Stack isInline align="center" mb="10">
        <Text fontWeight="bold" fontSize="3xl">
          Monster Room
        </Text>
        <GiMonsterGrasp color="red" size="2rem" />
      </Stack>
      <Stack>
        <HStack>
          <Text>Upon entering the room, you encounter</Text>
          <Text color="yellow.400" fontWeight="bold">
            {amount}
          </Text>
          <Text color="red.500" fontWeight="bold">
            {name}s: {description}!
          </Text>
        </HStack>

        <HStack>
          <Text>They are armed with</Text>
          <Text color="blue.400" fontWeight="bold">
            {strength}
          </Text>
        </HStack>
        <HStack>
          <Text>Their hidden weakness is</Text>
          <Text color="orange.400" fontWeight="bold">
            {weakness}
          </Text>
        </HStack>
        <HStack>
          <Text>If they are defeated, they drop</Text>
          <Text color="purple.300" fontWeight="bold">
            {loot}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
