import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function BossForm() {
  const [treaures, setTreasures] = useState([]);
  const [stats, setStats] = useState([]);
  const [monsters, setMonsters] = useState([]);

  const getTreasures = async () => {
    try {
      const response = await fetch(`http://localhost:4111/treasures`);
      const jsonData = await response.json();
      setTreasures(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getStats = async () => {
    try {
      const response = await fetch(`http://localhost:4111/strengths`);
      const jsonData = await response.json();
      setStats(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMonsters = async () => {
    try {
      const response = await fetch(`http://localhost:4111/monsters`);
      const jsonData = await response.json();
      setMonsters(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTreasures();
    getStats();
    getMonsters();
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
        <Textarea
          type="text"
          bgColor="gray.200"
          color="gray.800"
          mb="4"
          placeholder="Insert epic description here"
        />
      </FormControl>
      <FormControl id="stats" isRequired>
        <FormLabel>Stats:</FormLabel>
        <Select bgColor="gray.200" color="gray.800" mb="4">
          <option hidden>--Select a strength/weakness</option>
          {stats.map((stat) => {
            return (
              <option value={stat.id}>
                Strength: {stat.strength} | Weakness: {stat.weakness}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl id="minion" isRequired>
        <FormLabel>Minion:</FormLabel>
        <Select bgColor="gray.200" color="gray.800" mb="4">
          <option hidden>--Select a monster--</option>
          {monsters.map((monster) => {
            return <option value={monster.id}>{monster.name}</option>;
          })}
        </Select>
      </FormControl>
      <FormControl id="loot" isRequired>
        <FormLabel>Loot:</FormLabel>
        <Select bgColor="gray.200" color="gray.800" mb="4">
          <option hidden>--Select a treasure--</option>
          {treaures.map((treasure) => {
            return <option value={treasure.id}>{treasure.name}</option>;
          })}
        </Select>
      </FormControl>
      <Button
        colorScheme="purple"
        size="lg"
        onClick={() => {
          window.alert("new boss");
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
