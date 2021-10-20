import React from "react";

import CharactersMainInfo from "./CharactersMainInfo";
import CharactersNavbar from "./CharactersNavbar";
import CharactersPower from "./CharactersPower";
import "./Characters.css";
import CharactersBio from "./CharactersBio";

const ShowCharacters = (props) => {
  const character = props.location.state.state.character;
  console.log(character);
  return (
    <div>
      <CharactersMainInfo c={character} />
    </div>
  );
};

export default ShowCharacters;
