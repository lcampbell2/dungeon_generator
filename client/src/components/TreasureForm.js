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
  RadioGroup,
  Radio,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";

export function TreasureForm() {
  return (
    <Box mx="10" w="50%">
      <Text fontSize="3xl" fontWeight="bold">
        Submit a New Treasure:
      </Text>
      <Formik
        initialValues={{ name: "", description: "", value: 0, magic: "false" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
            <FormControl id="value" isRequired>
              <FormLabel>Value:</FormLabel>
              <Input
                type="number"
                bgColor="gray.200"
                color="gray.800"
                mb="4"
                placeholder="How many gold pieces is it worth?"
                name="value"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="magic" onChange={handleChange} isRequired>
              <FormLabel>Is the treasure magical?</FormLabel>
              <RadioGroup defaultValue="false" name="magic">
                <HStack spacing="24px">
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </HStack>
              </RadioGroup>
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
