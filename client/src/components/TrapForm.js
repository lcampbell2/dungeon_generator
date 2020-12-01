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

export function TrapForm() {
  const [treaures, setTreasures] = useState([]);
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

  const postTrap = async (body) => {
    try {
      const response = await fetch("http://localhost:4111/traps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        title: "Trap Submitted!",
        description: "You have successfully submitted the trap to the database",
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
  }, []);
  return (
    <Box mx="10" w="50%">
      <Text fontSize="3xl" fontWeight="bold">
        Submit a New Trap:
      </Text>
      <Formik
        initialValues={{ name: "", description: "", treasure: 1 }}
        onSubmit={(values, actions) => {
          postTrap(values);
          actions.setSubmitting(false);
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
