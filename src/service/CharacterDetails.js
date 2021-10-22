import { useState, useEffect } from "react";
import axios from "axios";

export const CharacterDetails = () => {
  const url = `https://akabab.github.io/superhero-api/api/all.json`;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios
        .get(url)
        .catch((err) => console.log("Error: ", err));

      if (res && res.data) {
        setCharacters(res.data);
      }
    };
    getCharacters();
  }, [url]);

  return characters;
};
