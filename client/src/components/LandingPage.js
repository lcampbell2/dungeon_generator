import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Room } from "./Room";

export function LandingPage() {
  const [roomNumber, setRoomNumber] = useState(0);
  const [roomType, setRoomType] = useState("");
  const history = useHistory();

  const rooms = [
    "bosses",
    "monsters",
    "monsters",
    "monsters",
    "monsters",
    "puzzles",
    "puzzles",
    "traps",
    "traps",
    "traps",
  ];
  const handleClick = () => {
    const category = rooms[Math.floor(Math.random() * rooms.length)];
    setRoomNumber(roomNumber + 1);
    setRoomType(category);
  };
  return (
    <Box>
      <Stack align="center">
        <Button
          size="lg"
          colorScheme="purple"
          onClick={() => {
            history.push("/list");
          }}
        >
          View and Submit Dungeon Hazards
        </Button>
      </Stack>
      {roomType === "" ? (
        <Stack align="center" mt="50">
          <Text fontSize="xl">
            Generate as many rooms as you want, and get started with your brand
            new dungeon!
          </Text>
          <Divider borderColor="gray.800" />
          <Stack isInline justify="space-between">
            <Button
              colorScheme="orange"
              size="lg"
              onClick={() => {
                handleClick();
              }}
            >
              Gimme a Dungeon!
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack mt="50" mb="10" mx="30">
          <Text fontSize="xl" fontWeight="bold">
            Room #{roomNumber}
          </Text>
          <Room roomType={roomType} />
          <Divider borderColor="gray.800" />
          <Stack align="center">
            <Button
              colorScheme="orange"
              onClick={() => {
                handleClick();
              }}
              w="300px"
            >
              Next Room
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
