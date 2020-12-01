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

export function TreasureForm() {
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
      <FormControl id="value" isRequired>
        <FormLabel>Value:</FormLabel>
        <Input
          type="number"
          bgColor="gray.200"
          color="gray.800"
          mb="4"
          placeholder="How many gold pieces is it worth?"
        />
      </FormControl>
      <FormControl id="magic" isRequired>
        <FormLabel>Is the treasure magical?</FormLabel>
        <RadioGroup defaultValue="false">
          <HStack spacing="24px">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Button
        colorScheme="purple"
        size="lg"
        onClick={() => {
          window.alert("new treasure");
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
