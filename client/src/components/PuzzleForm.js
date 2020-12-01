import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

export function PuzzleForm() {
  const [treaures, setTreasures] = useState([]);
  const [traps, setTraps] = useState([]);

  const getTreasures = async () => {
    try {
      const response = await fetch(`http://localhost:4111/treasures`);
      const jsonData = await response.json();
      setTreasures(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTraps = async () => {
    try {
      const response = await fetch(`http://localhost:4111/traps`);
      const jsonData = await response.json();
      setTraps(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTreasures();
    getTraps();
  }, []);
  return (
    <Box mx="10" w="50%">
      <Text fontSize="3xl" fontWeight="bold">
        Submit a New Boss:
      </Text>
      <FormControl id="name" isRequired>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          bgColor="gray.200"
          color="gray.800"
          mb="4"
          placeholder="Insert wicked name here"
        />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>Description:</FormLabel>
        <Input
          type="text"
          bgColor="gray.200"
          color="gray.800"
          mb="4"
          placeholder="Insert epic description here"
        />
      </FormControl>
      <FormControl id="solution" isRequired>
        <FormLabel>Solution:</FormLabel>
        <Input
          type="text"
          bgColor="gray.200"
          color="gray.800"
          mb="4"
          placeholder="Insert clever solution here"
        />
      </FormControl>
      <FormControl id="reward" isRequired>
        <FormLabel>Reward:</FormLabel>
        <Select bgColor="gray.200" color="gray.800" mb="4">
          <option hidden>--Select a treasure--</option>
          {treaures.map((treasure) => {
            return <option value={treasure.id}>{treasure.name}</option>;
          })}
        </Select>
      </FormControl>
      <FormControl id="punishment" isRequired>
        <FormLabel>Punishment:</FormLabel>
        <Select bgColor="gray.200" color="gray.800" mb="4">
          <option hidden>--Select a trap--</option>
          {traps.map((trap) => {
            return <option value={trap.id}>{trap.name}</option>;
          })}
        </Select>
      </FormControl>
      <Button
        colorScheme="purple"
        size="lg"
        onClick={() => {
          window.alert("new puzzle");
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
