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
import React, { useEffect, useState } from "react";
import { Formik } from "formik";

export function MonsterForm() {
  const [treaures, setTreasures] = useState([]);
  const [stats, setStats] = useState([]);
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

  const getStats = async () => {
    try {
      const response = await fetch(`http://localhost:4111/strengths`);
      const jsonData = await response.json();
      setStats(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const postMonster = async (body) => {
    try {
      const response = await fetch("http://localhost:4111/monsters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        title: "Monster Submitted!",
        description:
          "You have successfully submitted the monster to the database",
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
    }
  };

  useEffect(() => {
    getTreasures();
    getStats();
  }, []);

  return (
    <Box mx="10" w="50%">
      <Text fontSize="3xl" fontWeight="bold">
        Submit a New Monster:
      </Text>
      <Formik
        initialValues={{ name: "", description: "", strength: 1, treasure: 1 }}
        onSubmit={(values, actions) => {
          postMonster(values);
          actions.setSubmitting(false);
          window.location = "/list";
        }}
      >
        {({ values, handleSubmit, handleChange, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name:</FormLabel>
              <Input
                name="name"
                type="text"
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                placeholder="Insert wicked name here"
                value={values.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description:</FormLabel>
              <Textarea
                name="description"
                type="text"
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                placeholder="Insert epic description here"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="stats" isRequired>
              <FormLabel>Stats:</FormLabel>
              <Select
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                name="strength"
                value={values.strength}
                onChange={handleChange}
              >
                {stats.map((stat) => {
                  return (
                    <option value={stat.id}>
                      Strength: {stat.strength} | Weakness: {stat.weakness}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl id="loot" isRequired>
              <FormLabel>Loot:</FormLabel>
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
