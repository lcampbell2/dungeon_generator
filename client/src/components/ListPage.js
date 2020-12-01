import { Box, Button, Divider, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SubmitForm } from "./SubmitForm";
import { Table } from "./Table";

export function ListPage() {
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  const history = useHistory();

  return (
    <Box mb="50">
      <Stack align="center" mb="5">
        <Button
          colorScheme="orange"
          size="lg"
          onClick={() => {
            history.push("/");
          }}
        >
          Generate New Dungeon
        </Button>
        <Stack mt="50" align="center">
          <Text fontSize="xl">Lists of all dungeon hazards and rewards</Text>
          <Select
            w="300px"
            bgColor="gray.200"
            color="gray.800"
            onChange={async (e) => {
              setCategory(e.target.value);
              try {
                const response = await fetch(
                  `http://localhost:4111/${e.target.value}`
                );
                const jsonData = await response.json();
                setList(jsonData);
              } catch (err) {
                console.error(err.message);
              }
            }}
          >
            <option hidden>--Select category to view list--</option>
            <option value="bosses">Bosses</option>
            <option value="monsters">Monsters</option>
            <option value="puzzles">Puzzles</option>
            <option value="traps">Traps</option>
            <option value="treasures">Treasures</option>
            <option value="strengths">Strengths/Weaknesses</option>
          </Select>
          <Divider borderColor="gray.800" />
        </Stack>
      </Stack>

      {category !== "" && (
        <Box mb="10">
          <Table data={list} />
        </Box>
      )}

      <SubmitForm category={category} />
    </Box>
  );
}
