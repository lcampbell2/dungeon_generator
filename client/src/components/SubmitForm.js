import { Text } from "@chakra-ui/react";
import React from "react";
import { BossForm } from "./BossForm";
import { MonsterForm } from "./MonsterForm";
import { PuzzleForm } from "./PuzzleForm";
import { TrapForm } from "./TrapForm";
import { TreasureForm } from "./TreasureForm";

export function SubmitForm({ category }) {
  const switchForm = () => {
    switch (category) {
      case "monsters":
        return <MonsterForm />;
      case "traps":
        return <TrapForm />;
      case "puzzles":
        return <PuzzleForm />;
      case "bosses":
        return <BossForm />;
      case "treasures":
        return <TreasureForm />;
      default:
        return (
          <Text fontSize="xl" textAlign="center">
            View a list to submit something new!
          </Text>
        );
    }
  };

  return switchForm();
}
