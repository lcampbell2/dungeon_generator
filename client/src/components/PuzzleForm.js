import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";

export function PuzzleForm() {
  const [treaures, setTreasures] = useState([]);
  const [traps, setTraps] = useState([]);
  const toast = useToast();

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

  const postPuzzle = async (body) => {
    try {
      const response = await fetch("http://localhost:4111/puzzles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        title: "Puzzle Submitted!",
        description:
          "You have successfully submitted the puzzle to the database",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission Error",
        description: error.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getTreasures();
    getTraps();
  }, []);
  return (
    <Box mx="10" w="50%">
      <Text fontSize="3xl" fontWeight="bold">
        Submit a New Puzzle:
      </Text>
      <Formik
        initialValues={{
          name: "",
          description: "",
          solution: "",
          treasure: 1,
          punishment: 1,
        }}
        onSubmit={(values, actions) => {
          postPuzzle(values);
          actions.setSubmitting(false);
          window.location = "/list";
        }}
      >
        {({ values, handleSubmit, handleChange, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                placeholder="Insert wicked name here"
                name="name"
                value={values.name}
                onChange={handleChange}
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
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="solution" isRequired>
              <FormLabel>Solution:</FormLabel>
              <Textarea
                type="text"
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                placeholder="Insert clever solution here"
                name="solution"
                value={values.solution}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="reward" isRequired>
              <FormLabel>Reward:</FormLabel>
              <Select
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                name="treasure"
                value={values.treasure}
                onChange={handleChange}
              >
                {treaures.map((treasure) => {
                  return <option value={treasure.id}>{treasure.name}</option>;
                })}
              </Select>
            </FormControl>
            <FormControl id="punishment" isRequired>
              <FormLabel>Punishment:</FormLabel>
              <Select
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                name="punishment"
                value={values.punishment}
                onChange={handleChange}
              >
                {traps.map((trap) => {
                  return <option value={trap.id}>{trap.name}</option>;
                })}
              </Select>
            </FormControl>
            <Button
              colorScheme="purple"
              size="lg"
              type="submit"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}
