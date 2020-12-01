import { Text } from "@chakra-ui/react";
import React from "react";
import { RiMagicFill } from "@react-icons/all-files/ri/RiMagicFill";

export function Table({ data }) {
  const getKeys = () => {
    const keys = Object.keys(data[0]);
    return keys.slice(1, keys.length + 1);
  };

  const getHeaders = () => {
    const keys = getKeys();

    return keys.map((key, index) => {
      return <th key={`${key}:${index}`}>{key.toUpperCase()}</th>;
    });
  };

  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return (
        <td key={props.data[key]} style={{ maxWidth: "500px" }}>
          {key === "is_magic"
            ? props.data[key] && <RiMagicFill />
            : props.data[key]}
        </td>
      );
    });
  };

  const getRowsData = () => {
    const items = data;
    const keys = getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  if (data.length !== 0)
    return (
      <table className="table" style={{ color: "white" }}>
        <thead>
          <tr>{getHeaders(data)}</tr>
        </thead>
        <tbody>{getRowsData()}</tbody>
      </table>
    );
  else return <Text>No data :(</Text>;
}
