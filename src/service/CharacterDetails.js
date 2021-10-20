import { useState, useEffect } from "react";
import axios from "axios";

export const CharacterDetails = () => {
  const accessToken = "5144655025549998";
  const url = `https://akabab.github.io/superhero-api/api/all.json`;
  const [characters, setCharacters] = useState([]);

  //   const powerstats = {
  //     intelligence: "100",
  //     strength: "26",
  //     speed: "27",
  //     durability: "50",
  //     power: "47",
  //     combat: "100",
  //   };

  //   const calcOverall = (powerstats) => {
  //     let total = Object.values(powerstats).reduce((a, b) => a + b);
  //     total = total / 6;

  //     console.log(total);
  //     return 0;
  //   };

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
  }, [url]);

  console.log(characters);
  return characters;
};

// export const CharacterDetails = async () => {
//   const accessToken = "5144655025549998";
//   const url = `https://akabab.github.io/superhero-api/api/all.json`;

//   const res = await axios.get(url).catch((err) => console.log("Error: ", err));

//   if (res && res.data) {
//     return res.data;
//   }
// };
