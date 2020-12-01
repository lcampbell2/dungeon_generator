import "./App.css";
import React, { Suspense } from "react";
import { LandingPage } from "./components/LandingPage";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ListPage } from "./components/ListPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg="gray.800"
      color="gray.200"
      alignItems="center"
    >
      <Stack mt="100" align="center" mb="50">
        <Heading as="h1" size="3xl">
          Dungeon Generator
        </Heading>
        <Text fontSize="xl">
          A small PERN web application to inspire dungeon masters with writer's
          block
        </Text>
      </Stack>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/list">
            <ListPage />
          </Route>
        </Switch>
      </Suspense>
    </Flex>
  );
}

export default App;
