import React from "react";

import CharactersMainInfo from "./CharactersMainInfo";
import CharactersNavbar from "./CharactersNavbar";
import CharactersPower from "./CharactersPower";
import "./Characters.css";
import CharactersBio from "./CharactersBio";

const ShowCharacters = (props) => {
  return (
    <div>
      <CharactersMainInfo />
      <CharactersNavbar />
    </div>
  );
};

export default ShowCharacters;
