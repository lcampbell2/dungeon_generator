import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { GiTrapMask } from "@react-icons/all-files/gi/GiTrapMask";
import React, { useEffect, useState } from "react";

export function BossRoom({ id }) {
  const [roomDetails, setRoomDetails] = useState([]);

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4111/bosses/${id}`);
      const jsonData = await response.json();
      setRoomDetails(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [id]);

  const { name, description, strength, weakness, minion, loot } = roomDetails;
  const amount = Math.floor(Math.random() * 8) + 4;
  return (
    <Box>
      <Stack isInline align="center" mb="10">
        <Text fontWeight="bold" fontSize="3xl">
          Boss Room
        </Text>
        <GiTrapMask color="green" size="2rem" />
      </Stack>
      <Stack>
        <HStack>
          <Text>Upon entering the room, you encounter</Text>

          <Text color="green.500" fontWeight="bold">
            {name}: {description}!
          </Text>
        </HStack>

        <HStack>
          <Text>They are armed with</Text>
          <Text color="blue.400" fontWeight="bold">
            {strength}
          </Text>
          <Text>And they have </Text>
          <Text color="yellow.400" fontWeight="bold">
            {amount}
          </Text>
          <Text color="red.500" fontWeight="bold">
            {minion}
          </Text>
          <Text>minions!</Text>
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
