import { useState, useEffect } from "react";
import axios from "axios";

// interface character {
//     response: String;
//     id: number;
//     name: string;
//     powerstats: [
//         intelligence: Number,
//         strength: Number,
//         speed: Number,
//         durability: Number,
//         power: Number,
//         combat: Number
//     ];
//     biography: [
//         full_name: String,
//         alter_egos: Number,
//         speed: Number,
//         durability: Number,
//         power: Number,
//         combat: Number
//     ];
// }

export const CharacterDetails = () => {
  const accessToken = "5144655025549998";
  const url = `https://akabab.github.io/superhero-api/api/all.json`;
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await axios
      .get(url)
      .catch((err) => console.log("Error: ", err));

    if (res && res.data) {
      setCharacters(res.data);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return characters;
};
