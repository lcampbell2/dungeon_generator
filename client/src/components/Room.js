import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BossRoom } from "./BossRoom";
import { MonsterRoom } from "./MonsterRoom";
import { PuzzleRoom } from "./PuzzleRoom";
import { TrapRoom } from "./TrapRoom";

export function Room({ roomType }) {
  const [tableSize, setTableSize] = useState(0);

  const getTableSize = async () => {
    try {
      const response = await fetch(`http://localhost:4111/${roomType}.size`);
      const jsonData = await response.json();
      setTableSize(jsonData[0].size);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTableSize();
  }, [roomType]);

  const randID = Math.floor(Math.random() * tableSize) + 1;

  const switchRooms = () => {
    switch (roomType) {
      case "monsters":
        return <MonsterRoom id={randID} />;
      case "traps":
        return <TrapRoom id={randID} />;
      case "puzzles":
        return <PuzzleRoom id={randID} />;
      case "bosses":
        return <BossRoom id={randID} />;
      default:
        break;
    }
  };

  return <Stack>{switchRooms()}</Stack>;
}
